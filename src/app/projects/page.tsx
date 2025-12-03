import Layout from "@/components/Layout";

type Project = {
  title: string;
  period?: string;
  summary: string;
  stack: string[];
  details: string[];
  status: "en curso" | "completado" | "pruebas";
};

const projects: Project[] = [
  {
    title: "Servidor Linux autoadministrado",
    period: "2025",
    summary:
      "Instalación, configuración y administración de un servidor Linux para uso personal y de laboratorio.",
    stack: ["Ubuntu Server", "SSH", "screen", "systemd"],
    details: [
      "Gestión remota total mediante SSH.",
      "Uso de screen para mantener procesos activos 24/7.",
      "Estructura organizada de carpetas para distintos servicios y proyectos.",
      "Configuración básica de servicios, permisos y usuarios.",
    ],
    status: "completado",
  },
  {
    title: "Entorno de contenedores con Docker + Portainer",
    period: "2025",
    summary:
      "Despliegue de un entorno basado en Docker para levantar servicios aislados y gestionarlos desde un panel web.",
    stack: ["Docker", "Docker Compose", "Portainer"],
    details: [
      "Instalación y configuración de Docker en Linux.",
      "Uso de docker-compose para levantar servicios con un solo comando.",
      "Instalación de Portainer como panel gráfico de administración.",
      "Gestión de contenedores, imágenes, volúmenes y stacks desde Portainer.",
    ],
    status: "en curso",
  },
  {
    title: "Panel de inicio con Dashy",
    period: "2025",
    summary:
      "Implementación de un panel web para centralizar accesos rápidos a servicios y herramientas.",
    stack: ["Dashy", "Docker", "YAML"],
    details: [
      "Despliegue de Dashy en un contenedor Docker.",
      "Configuración de la interfaz mediante archivos YAML.",
      "Creación de tarjetas para distintos servicios (Portainer, portfolio, etc.).",
      "Ajuste de estilos y organización de secciones según mis necesidades.",
    ],
    status: "en curso",
  },
  {
    title: "Servidor de Minecraft con plugins y mundos separados",
    period: "2025",
    summary:
      "Configuración de un servidor PaperMC con mundos separados, plugins y acceso externo.",
    stack: ["PaperMC", "Java", "Multiverse", "WorldEdit", "WorldGuard", "Playit"],
    details: [
      "Configuración de un servidor PaperMC con plugins esenciales.",
      "Creación de mundos separados (supervivencia y mundo plano para tienda).",
      "Uso de Multiverse para gestionar múltiples mundos.",
      "Protecciones de zonas con WorldGuard.",
      "Acceso externo al servidor mediante túnel con Playit.",
    ],
    status: "en curso",
  },
  {
    title: "Portfolio técnico hosteado en mi propio servidor",
    period: "2025",
    summary:
      "Desarrollo de un portfolio web moderno para mostrar mi experiencia técnica y proyectos.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Docker"],
    details: [
      "Uso de Next.js con App Router y TypeScript para el frontend.",
      "Diseño de una interfaz limpia, enfocada en lo técnico.",
      "Planificación para exponer el portfolio a través de Docker y reverse proxy.",
      "Sección especial de 'Lab' para mostrar métricas en vivo del servidor.",
    ],
    status: "en curso",
  },
];

const statusColor: Record<Project["status"], string> = {
  "en curso": "bg-amber-500/20 text-amber-300 border-amber-500/40",
  completado: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
  pruebas: "bg-sky-500/20 text-sky-300 border-sky-500/40",
};

export default function ProjectsPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold mb-4">Proyectos</h1>

      <p className="text-neutral-300 mb-6 max-w-2xl">
        Estos son algunos de los proyectos y configuraciones que estuve trabajando para
        aprender administración de sistemas, contenedores y despliegue de servicios.
      </p>

      <div className="space-y-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between mb-2">
              <div>
                <h2 className="text-lg font-semibold text-emerald-400">
                  {project.title}
                </h2>
                {project.period && (
                  <p className="text-xs text-neutral-500">{project.period}</p>
                )}
              </div>
              <span
                className={`inline-flex items-center rounded-full border px-3 py-1 text-[0.7rem] uppercase tracking-wide ${statusColor[project.status]}`}
              >
                {project.status}
              </span>
            </div>

            <p className="text-sm text-neutral-300 mb-2">{project.summary}</p>

            <div className="flex flex-wrap gap-2 mb-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-neutral-800 px-2 py-1 text-[0.7rem] text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="text-xs text-neutral-400 list-disc pl-4 space-y-1">
              {project.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Layout>
  );
}
