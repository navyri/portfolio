import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    const error = request.nextUrl.searchParams.get("error");

    if (error) {
        return NextResponse.json(
            { error: `Spotify authorization was not granted: ${error}` },
            { status: 400 },
        );
    }

    return NextResponse.json(
        {
            message:
                "Spotify is already connected. This callback no longer displays credentials.",
        },
        {
            headers: {
                "Cache-Control": "no-store, max-age=0",
            },
        },
    );
}