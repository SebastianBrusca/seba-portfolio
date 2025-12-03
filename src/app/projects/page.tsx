"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";

type ProjectStatus = "En curso" | "Completado";

interface Project {
  title: string;
  summary: string;
  description: string;
  status: ProjectStatus;
  tech: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Personal",
    summary: "Sitio web moderno para mostrar mis proyectos.",
    description:
      "Portfolio desarrollado con Next.js, SCSS modular, animaciones suaves, optimización de imágenes y diseño responsive.",
    status: "En curso",
    tech: ["Next.js", "React", "Framer Motion", "SCSS", "TypeScript"],
    link: "#",
  },
  {
    title: "Infraestructura & Servidores",
    summary: "Mini PC con Ubuntu dedicada a proyectos DevOps.",
    description:
      "Instalación de Ubuntu Server, SSH, Docker, Portainer, balanceo de puertos, firewall, screen, y despliegue de apps.",
    status: "En curso",
    tech: ["Ubuntu", "Docker", "Portainer", "Nginx", "SSH"],
  },
  {
    title: "Servidor Minecraft Avanzado",
    summary: "Servidor PaperMC con múltiples mundos y plugins.",
    description:
      "Creación de mundos planos, warps personalizados, plugins de economía, tiendas con cofres, permisos y AuthMe.",
    status: "En curso",
    tech: ["PaperMC", "WorldEdit", "LuckPerms", "Vault", "QuickShop"],
  },
  {
    title: "Dashboard con Dashy",
    summary: "Tablero para centralizar accesos a servicios.",
    description:
      "Dashy en Docker, totalmente configurado, estilos personalizados, accesos rápidos y monitoreo.",
    status: "Completado",
    tech: ["Dashy", "Docker", "YAML"],
  },
  {
    title: "ESP32 Minecraft Server",
    summary: "Servidor estilo Minecraft corriendo en un microcontrolador.",
    description:
      "Compilación con PlatformIO, conexión WiFi, debugging y pruebas sin cable USB usando alimentación externa.",
    status: "En curso",
    tech: ["ESP32", "PlatformIO", "C++", "Serial Monitor"],
  },
  {
    title: "Sistemas de Datos / TMO",
    summary: "Automatización del análisis de reportes de call center.",
    description:
      "Cálculo de TMO real incluyendo hold, comparación entre Hermes y reportes del cliente, y correcciones en hojas de cálculo.",
    status: "Completado",
    tech: ["Excel", "Google Sheets", "Análisis", "Lógica de Negocio"],
  },
  {
    title: "UI / Motion Experiments",
    summary: "Pruebas de animaciones avanzadas estilo Samsung.",
    description:
      "Scroll animations, parallax, fade sequences, componentes interactivos y microinteracciones visuales.",
    status: "En curso",
    tech: ["Framer Motion", "Intersection Observer", "SCSS"],
  },
  {
    title: "Branding & Diseño",
    summary: "Diseños visuales para panadería y redes.",
    description:
      "Ilustraciones de empaques, retoques de imágenes, creación de personajes, tipografía y estética minimalista.",
    status: "Completado",
    tech: ["Illustrator", "Photoshop", "Digital Art"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.13, duration: 0.55 },
  }),
};

const ProjectsPage = () => {
  return (
    <Layout>
      <main className="min-h-screen w-full flex flex-col items-center px-4 md:px-10 lg:px-24 pt-36 pb-20 bg-[#020617]">

        {/* Título */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-sky-400 mb-3">
            Mis proyectos
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-50 mb-6 drop-shadow-[0_0_20px_rgba(56,189,248,0.25)]">
            PROYECTOS
          </h1>

          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Acá podés ver todo lo que estuve construyendo: infraestructura,
            desarrollo web, experimentación con hardware, diseño y proyectos
            personales que voy actualizando constantemente.
          </p>
        </motion.section>

        {/* Grid de tarjetas */}
        <section className="w-full max-w-6xl grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/60 backdrop-blur-xl p-6 flex flex-col gap-4 shadow-lg shadow-black/40"
            >
              {/* Efecto glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_65%)]" />

              {/* Header */}
              <div className="relative flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-slate-50">
                    {project.title}
                  </h2>
                  <p className="text-xs text-slate-400">{project.summary}</p>
                </div>

                <span
                  className={`text-[0.65rem] px-3 py-1 rounded-full font-medium border
                  ${
                    project.status === "Completado"
                      ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/40"
                      : "bg-amber-500/10 text-amber-300 border-amber-500/40"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Descripción */}
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                {project.description}
              </p>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-[0.65rem] px-3 py-1 rounded-full bg-slate-800/80 text-slate-200 border border-slate-700/70 group-hover:border-sky-400/60 group-hover:text-sky-200 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-xs mt-1 text-sky-300 hover:text-sky-200 underline underline-offset-4"
                >
                  Ver proyecto ↗
                </Link>
              )}
            </motion.article>
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default ProjectsPage;
