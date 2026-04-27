import Layout from "@/components/Layout";

const skills = [
  { name: "Linux / CLI", level: "Intermedio", detail: "Gestión básica de servicios, procesos y estructura de carpetas." },
  { name: "Docker", level: "Intermedio", detail: "Uso de contenedores y docker-compose para levantar servicios." },
  { name: "Portainer", level: "Básico–Intermedio", detail: "Panel gráfico para administrar contenedores, stacks y volúmenes." },
  { name: "Dashy", level: "Intermedio", detail: "Panel de inicio con configuración YAML y despliegue en Docker." },
  { name: "Servidores de juegos", level: "Intermedio", detail: "Configuración y gestión de servidores (como Minecraft) con plugins y mundos separados." },
  { name: "Desarrollo Web", level: "Básico–Intermedio", detail: "Next.js, TypeScript y Tailwind para crear sitios como este portfolio." },
];

const timeline = [
  {
    title: "Montaje de servidor Linux",
    description: "Instalación de un sistema Linux y configuración para acceso remoto por SSH.",
  },
  {
    title: "Primeros servicios y pruebas",
    description: "Organización del entorno, uso de screen y configuración inicial de servicios.",
  },
  {
    title: "Aprendizaje de Docker y Portainer",
    description: "Inicio del uso de contenedores para levantar servicios web y paneles de administración.",
  },
  {
    title: "Configuración de panel con Dashy",
    description: "Creación de un panel centralizado para acceder a todos los servicios desde un solo lugar.",
  },
  {
    title: "Servidor de Minecraft",
    description: "Configuración de PaperMC, plugins, mundos separados y acceso remoto mediante túneles.",
  },
  {
    title: "Portfolio técnico",
    description: "Desarrollo y despliegue de este portfolio para documentar todo el aprendizaje.",
  },
];

export default function AboutPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold mb-4">Sobre mí</h1>

      <div className="space-y-4 max-w-2xl text-neutral-300 text-sm mb-8">
        <p>
          Soy Sebastián. Me gusta entender cómo funcionan los sistemas detrás de escena:
          servidores, contenedores, servicios web y herramientas de administración.
        </p>

        <p>
          Empecé montando y configurando servicios para uso personal. A partir de eso fui
          aprendiendo administración de sistemas Linux, Docker, paneles y despliegue de
          aplicaciones como este portfolio.
        </p>

        <p>
          Esta página es parte del laboratorio donde pruebo cosas nuevas, organizo mis
          servicios y documento lo que voy aprendiendo.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-emerald-400 mb-3">Skills técnicas</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-lg border border-neutral-800 bg-neutral-900/60 p-3 text-sm"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-neutral-100">{skill.name}</span>
                <span className="text-[0.7rem] rounded-full border border-emerald-500/40 bg-emerald-500/15 px-2 py-0.5 text-emerald-200 uppercase tracking-wide">
                  {skill.level}
                </span>
              </div>
              <p className="text-xs text-neutral-400">{skill.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-emerald-400 mb-3">Resumen de mi camino</h2>
        <ol className="border-l border-neutral-700 space-y-3 pl-4 text-sm">
          {timeline.map((item, idx) => (
            <li key={idx} className="relative">
              <span className="absolute -left-[9px] top-[2px] h-3 w-3 rounded-full bg-emerald-500" />
              <h3 className="font-medium text-neutral-100">{item.title}</h3>
              <p className="text-xs text-neutral-400">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>
    </Layout>
  );
}
