"use client";

type Tech = {
  name: string;
  icon: string;
};

const TECHNOLOGIES: Tech[] = [
  { name: "Linux", icon: "🐧" },
  { name: "Docker", icon: "🐳" },
  { name: "Portainer", icon: "📊" },
  { name: "Dashy", icon: "📋" },
  { name: "Next.js", icon: "⚡" },
  { name: "Servicios web", icon: "🌐" },
  { name: "Laboratorio propio", icon: "🧪" },
];

export default function TechCarousel() {
  // duplicamos para que el loop sea suave
  const items = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <div className="relative overflow-hidden py-2">
      <div className="tech-marquee flex gap-3">
        {items.map((tech, index) => (
          <div
            key={tech.name + index}
            className="shrink-0 flex items-center gap-2 rounded-full border border-emerald-800/60 bg-neutral-900/80 px-4 py-2 shadow-sm shadow-emerald-900/40"
          >
            <span className="text-lg">{tech.icon}</span>
            <span className="text-sm font-medium text-neutral-100 whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
