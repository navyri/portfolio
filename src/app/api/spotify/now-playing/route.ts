import { NextResponse } from "next/server";


type SpotifyTokenResponse = {
    access_token?: string;
    error?: string;
    error_description?: string;
};

type SpotifyArtist = {
    name: string;
};

type SpotifyImage = {
    url: string;
    height: number | null;
    width: number | null;
};

type SpotifyTrack = {
    name: string;
    external_urls?: {
        spotify?: string;
    };
    artists: SpotifyArtist[];
    album?: {
        name: string;
        images?: SpotifyImage[];
    };
};

type SpotifyPlaybackResponse = {
    is_playing: boolean;
    item: SpotifyTrack | null;
};

function json(data: Record<string, unknown>, status = 200) {
    return NextResponse.json(data, {
        status,
        headers: {
            "Cache-Control": "no-store, max-age=0",
        },
    });
}

function noTrackResponse() {
    return json({
        isPlaying: false,
        isTrack: false,
        title: null,
        artist: null,
        album: null,
        albumImageUrl: null,
        songUrl: null,
    });
}

async function readJsonSafely<T>(response: Response): Promise<T | null> {
    try {
        return (await response.json()) as T;
    } catch {
        return null;
    }
}

export async function GET() {
    try {
        const clientId = process.env.SPOTIFY_CLIENT_ID;
        const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
        const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

        if (!clientId || !clientSecret || !refreshToken) {
            console.error("Spotify configuration is incomplete.");

            return json(
                {
                    error: "Spotify integration is not configured.",
                },
                500,
            );
        }

        const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString(
            "base64",
        );

        const refreshResponse = await fetch(
            "https://accounts.spotify.com/api/token",
            {
                method: "POST",
                headers: {
                    Authorization: `Basic ${credentials}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    grant_type: "refresh_token",
                    refresh_token: refreshToken,
                }),
                cache: "no-store",
            },
        );

        const refreshData =
            await readJsonSafely<SpotifyTokenResponse>(refreshResponse);

        if (!refreshResponse.ok || !refreshData?.access_token) {
            console.error("Spotify token refresh failed.", {
                status: refreshResponse.status,
                error: refreshData?.error,
                details: refreshData?.error_description,
            });

            return json(
                {
                    error: "Could not refresh Spotify access token.",
                },
                502,
            );
        }

        const playbackResponse = await fetch(
            "https://api.spotify.com/v1/me/player/currently-playing",
            {
                headers: {
                    Authorization: `Bearer ${refreshData.access_token}`,
                },
                cache: "no-store",
            },
        );

        if (playbackResponse.status === 204 || playbackResponse.status === 202) {
            return noTrackResponse();
        }

        if (!playbackResponse.ok) {
            console.error("Spotify playback request failed.", {
                status: playbackResponse.status,
            });

            /*
              A missing/inactive player is not useful to expose as a site failure.
              Show the normal standby UI instead.
            */
            if (playbackResponse.status === 404) {
                return noTrackResponse();
            }

            return json(
                {
                    error: "Could not read current Spotify playback.",
                },
                502,
            );
        }

        const playbackData =
            await readJsonSafely<SpotifyPlaybackResponse>(playbackResponse);

        const track = playbackData?.item;

        if (!track) {
            return noTrackResponse();
        }

        return json({
            isPlaying: playbackData?.is_playing ?? false,
            isTrack: true,
            title: track.name,
            artist: track.artists.map((artist) => artist.name).join(", "),
            album: track.album?.name ?? null,
            albumImageUrl: track.album?.images?.[0]?.url ?? null,
            songUrl: track.external_urls?.spotify ?? null,
        });
    } catch (error) {
        console.error("Unexpected Spotify now-playing route error:", error);

        return json(
            {
                error: "Spotify is temporarily unavailable.",
            },
            502,
        );
    }
}