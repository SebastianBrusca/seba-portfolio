"use client";

import Link from "next/link";
import Layout from "@/components/Layout";
import RevealOnScroll from "@/components/RevealOnScroll";
import {
  Code2,
  Server,
  GitBranch,
  MonitorSmartphone,
  Layers,
  Network,
  ShieldCheck,
} from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Portfolio con animaciones avanzadas (Next.js + Tailwind)",
      icon: <MonitorSmartphone className="w-10 h-10 text-emerald-400" />,
      description:
        "Página personal con fondo Aurora dinámico, animaciones tipo Samsung, cambios de rol automático, carrusel de tecnologías y scroll reveal.",
      details: [
        "Fondos generativos animados y suaves",
        "RevealOnScroll con IntersectionObserver",
        "Carrusel infinito de tecnologías principales",
        "Microinteracciones en botones, cards y badges",
      ],
      link: "https://seba-portfolio-nine.vercel.app/",
    },
    {
      title: "Sistema de Deploy 24/7 en Linux + Next.js",
      icon: <Server className="w-10 h-10 text-cyan-400" />,
      description:
        "Despliegue profesional usando Linux, pnpm y systemd para mantener el portfolio siempre disponible en el puerto 3000.",
      details: [
        "pnpm build + start en modo producción",
        "Servicio systemd con restart automático",
        "Documentación interna del despliegue local",
        "Integración con el servidor físico que ya tenés montado",
      ],
    },
    {
      title: "Integración SSH + GitHub (Workflow DevOps Base)",
      icon: <GitBranch className="w-10 h-10 text-purple-400" />,
      description:
        "Configuración de claves SSH, push sin contraseñas, ramas de desarrollo y flujo seguro dev → preview → producción.",
      details: [
        "SSH Key configurada en el servidor y en GitHub",
        "Rama dev para hacer pruebas sin romper producción",
        "Preview automático en Vercel por cada push a dev",
        "Merge controlado hacia main cuando el cambio está validado",
      ],
    },
    {
      title: "Laboratorio de Infraestructura 24/7",
      icon: <Layers className="w-10 h-10 text-amber-400" />,
      description:
        "Entorno personal para practicar despliegue de servicios, paneles de administración, túneles y acceso remoto.",
      details: [
        "Contenedores Docker para servicios aislados",
        "Panel Portainer para administración visual",
        "Servicios siempre online para practicar monitoreo",
        "Túneles Playit para exponer servicios hacia Internet",
      ],
    },
    {
      title: "Automatizaciones y fondos dinámicos",
      icon: <Code2 className="w-10 h-10 text-pink-400" />,
      description:
        "Implementación de animaciones suaves, gradientes tipo Aurora y detalles visuales que mejoran la experiencia del usuario.",
      details: [
        "Cursor typing animado en el inicio",
        "Textos con cambio de rol automático",
        "Blobs animados que se mueven muy lento de fondo",
        "Hover glow en tarjetas y componentes interactivos",
      ],
    },
    {
      title: "Redes y Servicios en entorno real",
      icon: <Network className="w-10 h-10 text-sky-400" />,
      description:
        "Configuración de red para exponer servicios internos, pruebas con puertos, túneles y acceso remoto seguro.",
      details: [
        "Gestión de puertos para Next.js, Minecraft y otros servicios",
        "Pruebas con diferentes puertos (3000, 3001, etc.)",
        "Separación de entornos: pruebas vs producción",
        "Documentación del comportamiento de los servicios",
      ],
    },
    {
      title: "Seguridad básica en servidores personales",
      icon: <ShieldCheck className="w-10 h-10 text-lime-400" />,
      description:
        "Buenas prácticas iniciales para proteger accesos, tokens y despliegues en un entorno personal en crecimiento.",
      details: [
        "Uso de SSH en lugar de contraseñas planas",
        "Revocación de tokens expuestos",
        "Separación de cuentas y permisos",
        "Primeros pasos hacia un entorno más seguro",
      ],
    },
  ];

  const roadmap = [
    "Agregar monitoreo básico (logs, alertas simples, health checks).",
    "Integrar pipeline de CI/CD para automatizar test + deploy.",
    "Añadir más servicios en contenedores (bases de datos, paneles, bots).",
    "Publicar proyectos adicionales de scripting en Python para automatizar tareas.",
    "Documentar todo el laboratorio como si fuera un entorno de trabajo real.",
  ];

  return (
    <Layout>
      <div className="flex flex-col gap-10 py-8">
        {/* Encabezado */}
        <RevealOnScroll>
          <div className="flex items-center justify-between mb-2">
            <Link
              href="/"
              className="text-sm text-emerald-300 hover:text-emerald-200 transition underline underline-offset-4"
            >
              ← Volver al inicio
            </Link>
            <span className="text-xs md:text-sm text-neutral-400">
              Entorno en constante evolución · DevOps / Infra / Laboratorio personal
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
            Proyectos Destacados
          </h1>
          <p className="text-center text-neutral-300 max-w-3xl mx-auto mt-2">
            Una colección de trabajo real en infraestructura, desarrollo,
            automatización y despliegues modernos. Todo lo que aparece acá está
            construido y probado sobre tu entorno real de laboratorio.
          </p>
        </RevealOnScroll>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <RevealOnScroll key={i}>
              <div
                suppressHydrationWarning
                className="
                  group relative overflow-hidden
                  bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 
                  hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10 
                  transition-all duration-300 backdrop-blur-lg
                  hover:-translate-y-1 hover:scale-[1.01]
                "
              >
                {/* Barra de luz animada arriba */}
                <span
                  className="
                    pointer-events-none absolute inset-x-0 -top-px h-px 
                    bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  "
                />

                {/* Icono dentro de círculo animado */}
                <div
                  className="
                    mb-4 inline-flex items-center justify-center rounded-full 
                    border border-emerald-500/30 bg-emerald-500/10 p-3 
                    group-hover:bg-emerald-500/20 group-hover:scale-110
                    transition-all duration-300
                  "
                >
                  {p.icon}
                </div>

                <h2 className="text-xl font-bold mb-2 text-emerald-300">
                  {p.title}
                </h2>
                <p className="text-neutral-300 text-sm mb-4">{p.description}</p>

                <ul className="list-disc list-inside text-neutral-400 text-sm space-y-1">
                  {p.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex items-center gap-1 mt-4 text-emerald-300 
                      hover:text-emerald-200 underline underline-offset-4 
                      transition
                    "
                  >
                    Ver proyecto →
                  </a>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Roadmap / Próximos pasos */}
        <RevealOnScroll>
          <section className="max-w-4xl mx-auto mt-4 bg-neutral-900/60 border border-neutral-700 rounded-2xl p-6 md:p-8 backdrop-blur-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-300 mb-3">
              Próximos pasos y roadmap
            </h2>
            <p className="text-neutral-300 text-sm mb-4">
              Además de los proyectos que ya están funcionando, tengo una lista de
              cosas que quiero seguir construyendo sobre este mismo laboratorio:
            </p>
            <ul className="list-disc list-inside text-neutral-300 text-sm space-y-2">
              {roadmap.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        </RevealOnScroll>
      </div>
    </Layout>
  );
}
