import Layout from "@/components/Layout";

const items = [
  {
    title: "Linux & Administración de Servidores",
    description:
      "Administración completa mediante consola, gestión de servicios, procesos en segundo plano, automatizaciones y organización del entorno.",
    details: [
      "Conexión y gestión por SSH",
      "screen para procesos 24/7",
      "Estructura organizada de proyectos",
    ],
  },
  {
    title: "Docker & Portainer",
    description:
      "Uso de contenedores para desplegar aplicaciones, paneles, servicios web y entornos aislados. Portainer como panel gráfico.",
    details: [
      "docker-compose para orquestación",
      "Contenedores productivos y de pruebas",
      "Gestión de volúmenes e imágenes",
    ],
  },
  {
    title: "Dashy",
    description:
      "Panel de inicio centralizado con accesos rápidos a mis herramientas, paneles y servicios web personalizados.",
    details: [
      "Configuración avanzada en YAML",
      "Widgets y accesos personalizados",
      "Integración completa con Docker",
    ],
  },
  {
    title: "Despliegue de Servicios Personalizados",
    description:
      "Configuración de servicios como servidores de videojuegos, APIs internas, paneles web y aplicaciones full stack.",
    details: [
      "Manejo de permisos",
      "Túneles externos para acceso seguro",
      "Infraestructura modular ampliable",
    ],
  },
];

export default function StackPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold mb-4">Mi infraestructura</h1>

      <p className="text-neutral-300 mb-6 max-w-2xl">
        Esta sección resume las herramientas que uso, cómo organizo mis servicios y
        qué tecnologías manejo para administrar sistemas y entornos DevOps.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4"
          >
            <h2 className="text-lg font-semibold text-emerald-400 mb-1">
              {item.title}
            </h2>
            <p className="text-sm text-neutral-300 mb-2">{item.description}</p>
            <ul className="text-xs text-neutral-400 list-disc pl-4 space-y-1">
              {item.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Layout>
  );
}
