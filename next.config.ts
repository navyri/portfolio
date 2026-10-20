import type { NextConfig } from "next";

const slugs = [
  "ponyarchive",
  "camel-racing",
  "navyri-space",
  "portfolio-ingweb-v2",
  "horario-ayane",
  "birthdaycard",
  "poo-semestre",
  "citas-veterinarias",
  "gestion-empleados",
  "ingweb-final",
  "whos-that-pokemon",
  "yes-or-no",
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
    ],
  },
  // navyri.online/<slug> → página del proyecto
  async rewrites() {
    return {
      beforeFiles: slugs.map((slug) => ({
        source: `/${slug}`,
        destination: `/proyectos/${slug}`,
      })),
    };
  },
};

export default nextConfig;
