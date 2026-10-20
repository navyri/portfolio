import { NextResponse } from "next/server";

export function GET() {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

    if (!clientId || !redirectUri) {
        return NextResponse.json(
            { error: "Spotify environment variables are missing." },
            { status: 500 },
        );
    }

    const authorizationUrl = new URL(
        "https://accounts.spotify.com/authorize",
    );

    authorizationUrl.searchParams.set("client_id", clientId);
    authorizationUrl.searchParams.set("response_type", "code");
    authorizationUrl.searchParams.set("redirect_uri", redirectUri);
    authorizationUrl.searchParams.set("scope", "user-read-currently-playing");

    return NextResponse.redirect(authorizationUrl);
}