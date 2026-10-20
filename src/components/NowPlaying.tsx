"use client";

import { useEffect, useState } from "react";
import { useIdioma } from "@/i18n/I18nProvider";

type AhoraSuena = {
  isPlaying: boolean;
  isTrack: boolean;
  title: string | null;
  artist: string | null;
  album: string | null;
  albumImageUrl: string | null;
  songUrl: string | null;
};

const VACIO: AhoraSuena = {
  isPlaying: false,
  isTrack: false,
  title: null,
  artist: null,
  album: null,
  albumImageUrl: null,
  songUrl: null,
};

/**
 * Widget "NOW.PLAYING" — sincronizado con Spotify.
 * Requiere en Vercel las variables que ya usa navyri-site:
 * SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN
 * (y SPOTIFY_REDIRECT_URI + /api/spotify/login para volver a conectar).
 */
export default function NowPlaying() {
  const { t } = useIdioma();
  const [pista, setPista] = useState<AhoraSuena>(VACIO);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let activo = true;

    async function cargar() {
      try {
        const r = await fetch("/api/spotify/now-playing", {
          cache: "no-store",
          headers: { Accept: "application/json" },
        });
        if (!r.ok) throw new Error(String(r.status));
        const d = (await r.json()) as AhoraSuena;
        if (activo) {
          setPista(d);
          setError(false);
        }
      } catch {
        if (activo) {
          setPista(VACIO);
          setError(true);
        }
      } finally {
        if (activo) setCargando(false);
      }
    }

    void cargar();
    const id = window.setInterval(() => void cargar(), 20_000);
    return () => {
      activo = false;
      window.clearInterval(id);
    };
  }, []);

  const hayTema = pista.isTrack && !error;
  const sonando = hayTema && pista.isPlaying;

  const estado = cargando
    ? t("spConectando")
    : error
      ? t("spError")
      : sonando
        ? t("spEscuchando")
        : hayTema
          ? t("spPausa")
          : t("spSinSenal");

  const titulo = cargando
    ? t("spCargando")
    : error
      ? t("spTituloError")
      : hayTema
        ? (pista.title ?? "—")
        : "DUVET — bôa";

  const artista = cargando
    ? "..."
    : error
      ? "open.spotify.com"
      : hayTema
        ? `${pista.artist ?? ""}${pista.album ? ` — ${pista.album}` : ""}`
        : t("spDefault");

  const contenido = (
    <div className="flex items-center gap-3 p-3">
      {/* Texto */}
      <div className="min-w-0 flex-1">
        <p className="etiqueta flex items-center gap-1.5">
          <span
            className={`text-xs ${sonando ? "cursor texto-verde" : "text-tenue"}`}
            aria-hidden
          >
            ●
          </span>
          {estado}
        </p>
        <p className="truncate texto-crt text-xl leading-tight text-tinta">{titulo}</p>
        <p className="truncate text-xs text-tenue">{artista}</p>
      </div>

      {/* Ecualizador */}
      <span className={`eq shrink-0 ${sonando ? "" : "eq-pausado"}`} aria-hidden>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span key={i} style={{ animationDelay: `${i * 0.13}s` }} />
        ))}
      </span>
    </div>
  );

  if (!pista.songUrl || error) return contenido;

  return (
    <a
      href={pista.songUrl}
      target="_blank"
      rel="noreferrer"
      className="block hover:bg-vino/25"
      aria-label={`Abrir ${pista.title ?? "esta canción"} en Spotify`}
    >
      {contenido}
    </a>
  );
}
