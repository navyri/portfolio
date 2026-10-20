"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { diccionario, type Clave, type Idioma } from "./diccionario";

type Ctx = {
  idioma: Idioma;
  setIdioma: (i: Idioma) => void;
  t: (clave: Clave) => string;
  tema: "dark" | "light";
  alternarTema: () => void;
};

const Contexto = createContext<Ctx | null>(null);

export function ProveedorIdioma({ children }: { children: ReactNode }) {
  const [idioma, setIdiomaState] = useState<Idioma>("es");
  const [tema, setTema] = useState<"dark" | "light">("dark");

  // Al montar: leer preferencias guardadas (sin romper el prerender)
  useEffect(() => {
    const guardado = localStorage.getItem("lang");
    const navEs = navigator.language.toLowerCase().startsWith("es");
    const inicial: Idioma = guardado === "en" || guardado === "es" ? guardado : navEs ? "es" : "en";
    setIdiomaState(inicial);
    document.documentElement.lang = inicial;

    const tGuardado = localStorage.getItem("tema");
    if (tGuardado === "light" || tGuardado === "dark") setTema(tGuardado);
  }, []);

  const setIdioma = useCallback((i: Idioma) => {
    setIdiomaState(i);
    localStorage.setItem("lang", i);
    document.documentElement.lang = i;
  }, []);

  const alternarTema = useCallback(() => {
    setTema((prev) => {
      const siguiente = prev === "dark" ? "light" : "dark";
      localStorage.setItem("tema", siguiente);
      document.documentElement.dataset.theme = siguiente;
      return siguiente;
    });
  }, []);

  const t = useCallback(
    (clave: Clave) => diccionario[idioma][clave] as string,
    [idioma],
  );

  return (
    <Contexto.Provider value={{ idioma, setIdioma, t, tema, alternarTema }}>
      {children}
    </Contexto.Provider>
  );
}

export function useIdioma() {
  const ctx = useContext(Contexto);
  if (!ctx) throw new Error("useIdioma debe usarse dentro de ProveedorIdioma");
  return ctx;
}
