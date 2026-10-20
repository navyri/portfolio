/**
 * Línea de tiempo de proyectos — EDITA ESTE ARCHIVO para agregar los tuyos.
 *
 * - `tipo: "web"`       → se puede visitar: se embebe en una ventana y tiene demo.
 * - `tipo: "escritorio"`→ app de escritorio: se muestra con capturas + repo.
 * - `capturas`          → rutas en /public/capturas (ej: "/capturas/mi-proyecto.jpg").
 * - `porConfirmar: true`→ oculta los botones hasta que agregues enlaces.
 */

export type Enlace = {
  etiquetaEs: string;
  etiquetaEn: string;
  url: string;
  tipo: "demo" | "repo";
};

export type Proyecto = {
  slug: string;
  nombre: string;
  resumenEs: string;
  resumenEn: string;
  tecnologias: string[];
  enlaces: Enlace[];
  tipo: "web" | "escritorio";
  demoUrl?: string;
  capturas: string[];
  destacado?: boolean;
  porConfirmar?: boolean;
};

export type Grupo = {
  anio: number;
  semestre: number;
  descripcionEs: string;
  descripcionEn: string;
  proyectos: Proyecto[];
};

const GH = "https://github.com/navyri";

export const grupos: Grupo[] = [
  {
    anio: 2026,
    semestre: 2,
    descripcionEs: "Agentes de IA, APIs con seguridad y despliegue en la nube.",
    descripcionEn: "AI agents, secure APIs and cloud deployment.",
    proyectos: [
      {
        slug: "ponyarchive",
        nombre: "PonyArchive",
        resumenEs:
          "Biblioteca inteligente con agente RAG (LangChain + LangGraph): responde preguntas solo con documentos indexados, cita sus fuentes y dice «no lo sé» cuando no hay evidencia en vez de inventar. FastAPI + React, base vectorial ChromaDB y modelo de lenguaje corriendo en local con Ollama.",
        resumenEn:
          "Smart library with a RAG agent (LangChain + LangGraph): answers questions using only indexed documents, cites its sources and says “I don't know” when there is no evidence instead of making things up. FastAPI + React, ChromaDB vector store and a language model running locally on Ollama.",
        tecnologias: ["Python", "FastAPI", "React", "LangGraph", "Ollama", "ChromaDB", "Docker"],
        enlaces: [
          {
            etiquetaEs: "Probar en vivo",
            etiquetaEn: "Try live",
            url: "https://pony-archive.vercel.app",
            tipo: "demo",
          },
          { etiquetaEs: "Código", etiquetaEn: "Code", url: `${GH}/PonyArchive`, tipo: "repo" },
        ],
        tipo: "web",
        demoUrl: "https://pony-archive.vercel.app",
        capturas: ["/capturas/ponyarchive-chat.jpg", "/capturas/ponyarchive-login.jpg"],
        destacado: true,
      },
      {
        slug: "camel-racing",
        nombre: "Camel vs Dwarf Racing System",
        resumenEs:
          "API REST de carreras con autenticación y autorización, base de datos PostgreSQL, despliegue con Docker y frontend propio. Proyecto de Implementación e Integración de Software.",
        resumenEn:
          "Racing REST API with authentication and authorization, PostgreSQL database, Docker deployment and its own frontend. Software Implementation & Integration course project.",
        tecnologias: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Keycloak", "TypeScript"],
        enlaces: [
          { etiquetaEs: "Código", etiquetaEn: "Code", url: `${GH}/camel-racing-system`, tipo: "repo" },
        ],
        tipo: "web",
        capturas: [],
        destacado: true,
      },
      {
        slug: "navyri-space",
        nombre: "navyri.space",
        resumenEs:
          "Mi sitio personal de arte y VTuber (navyri.space): portafolio, comisiones y tienda, con tema claro/oscuro e interfaz bilingüe.",
        resumenEn:
          "My personal art & VTuber site (navyri.space): portfolio, commissions and shop, with light/dark theme and a bilingual interface.",
        tecnologias: ["TypeScript", "Web"],
        enlaces: [
          {
            etiquetaEs: "Visitar",
            etiquetaEn: "Visit",
            url: "http://navyri.space/",
            tipo: "demo",
          },
          { etiquetaEs: "Código", etiquetaEn: "Code", url: `${GH}/navyri-site`, tipo: "repo" },
        ],
        tipo: "web",
        demoUrl: "http://navyri.space/",
        capturas: ["/capturas/navyri-space.jpg"],
      },
      {
        slug: "portfolio-ingweb-v2",
        nombre: "Portfolio IngWeb v2",
        resumenEs: "Segunda versión del portafolio del curso de Ingeniería Web.",
        resumenEn: "Second version of the Web Engineering course portfolio.",
        tecnologias: ["TypeScript", "React"],
        enlaces: [],
        tipo: "web",
        capturas: [],
        porConfirmar: true,
      },
      {
        slug: "horario-ayane",
        nombre: "Horario-Ayane",
        resumenEs: "Proyecto personal de gestión de horarios.",
        resumenEn: "Personal schedule management project.",
        tecnologias: ["Por definir"],
        enlaces: [],
        tipo: "web",
        capturas: [],
        porConfirmar: true,
      },
      {
        slug: "birthdaycard",
        nombre: "BirthdayCard",
        resumenEs: "Tarjeta de cumpleaños animada hecha a mano con HTML y CSS.",
        resumenEn: "Animated birthday card handmade with HTML and CSS.",
        tecnologias: ["HTML", "CSS"],
        enlaces: [],
        tipo: "web",
        capturas: [],
        porConfirmar: true,
      },
    ],
  },
  {
    anio: 2025,
    semestre: 2,
    descripcionEs: "POO a fondo: sistemas de gestión completos en Java.",
    descripcionEn: "Object-oriented programming: complete management systems in Java.",
    proyectos: [
      {
        slug: "poo-semestre",
        nombre: "Proyecto de semestre POO",
        resumenEs:
          "Proyecto final de Programación Orientada a Objetos en Java: entrega completa con arquitectura por capas, de la lógica de negocio a la persistencia.",
        resumenEn:
          "Final Object-Oriented Programming project in Java: full deliverable with a layered architecture, from business logic to persistence.",
        tecnologias: ["Java", "POO"],
        enlaces: [
          {
            etiquetaEs: "Código",
            etiquetaEn: "Code",
            url: `${GH}/ProyectoSemestrePOO-EntregaFinal`,
            tipo: "repo",
          },
        ],
        tipo: "escritorio",
        capturas: [],
      },
      {
        slug: "citas-veterinarias",
        nombre: "Gestión de citas veterinarias",
        resumenEs:
          "Sistema para administrar citas de una veterinaria, construido con los principios de POO en Java.",
        resumenEn:
          "System to manage veterinary appointments, built with OOP principles in Java.",
        tecnologias: ["Java", "POO"],
        enlaces: [
          {
            etiquetaEs: "Código",
            etiquetaEn: "Code",
            url: `${GH}/GestionCitaVeterinarias`,
            tipo: "repo",
          },
        ],
        tipo: "escritorio",
        capturas: [],
      },
      {
        slug: "gestion-empleados",
        nombre: "Sistema de gestión de empleados",
        resumenEs:
          "Gestión de empleados en Java: estructuras de datos, operaciones CRUD y reportes.",
        resumenEn:
          "Employee management in Java: data structures, CRUD operations and reports.",
        tecnologias: ["Java", "POO"],
        enlaces: [
          {
            etiquetaEs: "Código",
            etiquetaEn: "Code",
            url: `${GH}/SistemaGestionEmpleados-JavaPOO`,
            tipo: "repo",
          },
        ],
        tipo: "escritorio",
        capturas: [],
      },
    ],
  },
  {
    anio: 2025,
    semestre: 1,
    descripcionEs: "Ingeniería Web: primeras aplicaciones full-stack y juegos con datos en vivo.",
    descripcionEn: "Web Engineering: first full-stack apps and games with live data.",
    proyectos: [
      {
        slug: "ingweb-final",
        nombre: "Proyecto final Ingeniería Web",
        resumenEs:
          "Aplicación full-stack completa desarrollada en TypeScript. El frontend y el backend viven en repos separados (aún no tenía claro que iban en uno solo).",
        resumenEn:
          "Complete full-stack application built in TypeScript. Frontend and backend live in separate repos (I didn't yet know they were meant to go in a single one).",
        tecnologias: ["TypeScript", "Frontend", "Backend"],
        enlaces: [
          {
            etiquetaEs: "Código (frontend)",
            etiquetaEn: "Code (frontend)",
            url: `${GH}/Frontend_Final_IngWeb`,
            tipo: "repo",
          },
          {
            etiquetaEs: "Código (backend)",
            etiquetaEn: "Code (backend)",
            url: `${GH}/Backend_Final_IngWeb`,
            tipo: "repo",
          },
        ],
        tipo: "escritorio",
        capturas: [],
      },
      {
        slug: "whos-that-pokemon",
        nombre: "Who's That Pokémon",
        resumenEs:
          "Juego interactivo inspirado en el clásico «¿Quién es ese Pokémon?»: adivina al Pokémon de la primera generación a partir de su silueta.",
        resumenEn:
          "Interactive game inspired by the classic “Who's That Pokémon?”: guess the first-generation Pokémon from its silhouette.",
        tecnologias: ["TypeScript", "Juego", "API"],
        enlaces: [
          {
            etiquetaEs: "Jugar",
            etiquetaEn: "Play",
            url: "https://whosthatpokemon-ingweb.netlify.app",
            tipo: "demo",
          },
          {
            etiquetaEs: "Código",
            etiquetaEn: "Code",
            url: `${GH}/Whos_That_Pokemon`,
            tipo: "repo",
          },
        ],
        tipo: "web",
        demoUrl: "https://whosthatpokemon-ingweb.netlify.app",
        capturas: ["/capturas/pokemon.jpg"],
        destacado: true,
      },
      {
        slug: "yes-or-no",
        nombre: "Yes or No",
        resumenEs:
          "Pequeña aplicación de una sola página que responde «sí» o «no» de forma aleatoria a cualquier pregunta, con GIF de respuesta.",
        resumenEn:
          "Small single-page app that answers “yes” or “no” to any question at random, with a reaction GIF.",
        tecnologias: ["TypeScript", "Frontend"],
        enlaces: [
          {
            etiquetaEs: "Probar",
            etiquetaEn: "Try it",
            url: "https://yesno-ingweb.netlify.app",
            tipo: "demo",
          },
          { etiquetaEs: "Código", etiquetaEn: "Code", url: `${GH}/Yes_or_No`, tipo: "repo" },
        ],
        tipo: "web",
        demoUrl: "https://yesno-ingweb.netlify.app",
        capturas: ["/capturas/yesorno.jpg"],
      },
    ],
  },
];

/** Total de proyectos (para la portada). */
export const totalProyectos = grupos.reduce((n, g) => n + g.proyectos.length, 0);

/** Búsqueda por slug (para las páginas de proyecto). */
export const porSlug = (slug: string): Proyecto | undefined =>
  grupos.flatMap((g) => g.proyectos).find((p) => p.slug === slug);

export const slugs = grupos.flatMap((g) => g.proyectos.map((p) => p.slug));
