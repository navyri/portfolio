/**
 * Línea de tiempo de proyectos — EDITA ESTE ARCHIVO para agregar los tuyos.
 * Cada proyecto necesita: nombre, resumen (vista previa) y enlaces
 * ("demo" para probarlo en vivo, "repo" para el código).
 * Agrega `porConfirmar: true` a los que aún no tengan enlaces públicos.
 */

export type Enlace = {
  etiqueta: string;
  url: string;
  tipo: "demo" | "repo";
};

export type Proyecto = {
  nombre: string;
  resumen: string;
  tecnologias: string[];
  enlaces: Enlace[];
  destacado?: boolean;
  porConfirmar?: boolean;
};

export type Grupo = {
  periodo: string;
  descripcion: string;
  proyectos: Proyecto[];
};

const GH = "https://github.com/navyri";

export const grupos: Grupo[] = [
  {
    periodo: "2026 · Semestre 2",
    descripcion: "Agentes de IA, APIs con seguridad y despliegue en la nube.",
    proyectos: [
      {
        nombre: "PonyArchive",
        resumen:
          "Biblioteca inteligente con agente RAG (LangChain + LangGraph): responde preguntas solo con documentos indexados, cita sus fuentes y dice «no lo sé» cuando no hay evidencia en vez de inventar. FastAPI + React, base vectorial ChromaDB y modelo de lenguaje corriendo en local con Ollama.",
        tecnologias: ["Python", "FastAPI", "React", "LangGraph", "Ollama", "ChromaDB", "Docker"],
        enlaces: [
          { etiqueta: "Probar en vivo", url: "https://pony-archive.vercel.app", tipo: "demo" },
          { etiqueta: "Código", url: `${GH}/PonyArchive`, tipo: "repo" },
        ],
        destacado: true,
      },
      {
        nombre: "Camel vs Dwarf Racing System",
        resumen:
          "API REST de carreras con autenticación y autorización, base de datos PostgreSQL, despliegue con Docker y frontend propio. Proyecto de Implementación e Integración de Software.",
        tecnologias: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Keycloak", "TypeScript"],
        enlaces: [{ etiqueta: "Código", url: `${GH}/camel-racing-system`, tipo: "repo" }],
        destacado: true,
      },
      {
        nombre: "navyri-space",
        resumen:
          "Primera versión de mi sitio personal, base sobre la que nace este portafolio.",
        tecnologias: ["TypeScript", "Web"],
        enlaces: [
          { etiqueta: "Visitar", url: "http://navyri.space/", tipo: "demo" },
          { etiqueta: "Código", url: `${GH}/navyri-site`, tipo: "repo" },
        ],
      },
      {
        nombre: "Portfolio IngWeb v2",
        resumen: "Segunda versión del portafolio del curso de Ingeniería Web.",
        tecnologias: ["TypeScript", "React"],
        enlaces: [],
        porConfirmar: true,
      },
      {
        nombre: "Horario-Ayane",
        resumen: "Proyecto personal de gestión de horarios.",
        tecnologias: ["Por definir"],
        enlaces: [],
        porConfirmar: true,
      },
      {
        nombre: "BirthdayCard",
        resumen: "Tarjeta de cumpleaños animada hecha a mano con HTML y CSS.",
        tecnologias: ["HTML", "CSS"],
        enlaces: [],
        porConfirmar: true,
      },
    ],
  },
  {
    periodo: "2025 · Semestre 2",
    descripcion: "POO a fondo: sistemas de gestión completos en Java.",
    proyectos: [
      {
        nombre: "Proyecto de semestre POO",
        resumen:
          "Proyecto final de Programación Orientada a Objetos en Java: entrega completa con arquitectura por capas, de la lógica de negocio a la persistencia.",
        tecnologias: ["Java", "POO"],
        enlaces: [
          { etiqueta: "Código", url: `${GH}/ProyectoSemestrePOO-EntregaFinal`, tipo: "repo" },
        ],
      },
      {
        nombre: "Gestión de citas veterinarias",
        resumen:
          "Sistema para administrar citas de una veterinaria, construido con los principios de POO en Java.",
        tecnologias: ["Java", "POO"],
        enlaces: [{ etiqueta: "Código", url: `${GH}/GestionCitaVeterinarias`, tipo: "repo" }],
      },
      {
        nombre: "Sistema de gestión de empleados",
        resumen:
          "Gestión de empleados en Java: estructuras de datos, operaciones CRUD y reportes.",
        tecnologias: ["Java", "POO"],
        enlaces: [
          { etiqueta: "Código", url: `${GH}/SistemaGestionEmpleados-JavaPOO`, tipo: "repo" },
        ],
      },
    ],
  },
  {
    periodo: "2025 · Semestre 1",
    descripcion: "Ingeniería Web: primeras aplicaciones full-stack y juegos con datos en vivo.",
    proyectos: [
      {
        nombre: "Proyecto final Ingeniería Web",
        resumen:
          "Aplicación full-stack completa desarrollada en TypeScript. El frontend y el backend viven en repos separados (aún no tenía claro que iban en uno solo).",
        tecnologias: ["TypeScript", "Frontend", "Backend"],
        enlaces: [
          { etiqueta: "Código (frontend)", url: `${GH}/Frontend_Final_IngWeb`, tipo: "repo" },
          { etiqueta: "Código (backend)", url: `${GH}/Backend_Final_IngWeb`, tipo: "repo" },
        ],
      },
      {
        nombre: "Who's That Pokémon",
        resumen:
          "Juego interactivo inspirado en el clásico «¿Quién es ese Pokémon?»: adivina al Pokémon de la primera generación a partir de su silueta.",
        tecnologias: ["TypeScript", "Juego", "API"],
        enlaces: [
          {
            etiqueta: "Jugar",
            url: "https://whosthatpokemon-ingweb.netlify.app",
            tipo: "demo",
          },
          { etiqueta: "Código", url: `${GH}/Whos_That_Pokemon`, tipo: "repo" },
        ],
        destacado: true,
      },
      {
        nombre: "Yes or No",
        resumen:
          "Pequeña aplicación de una sola página que responde «sí» o «no» de forma aleatoria a cualquier pregunta.",
        tecnologias: ["TypeScript", "Frontend"],
        enlaces: [
          { etiqueta: "Probar", url: "https://yesno-ingweb.netlify.app", tipo: "demo" },
          { etiqueta: "Código", url: `${GH}/Yes_or_No`, tipo: "repo" },
        ],
      },
    ],
  },
];

/** Total de proyectos (para el hero). */
export const totalProyectos = grupos.reduce((n, g) => n + g.proyectos.length, 0);
