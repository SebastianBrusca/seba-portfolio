"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Sobre mí" },
  { href: "/stack", label: "Infraestructura" },
  { href: "/projects", label: "Proyectos" },
  { href: "/lab", label: "Lab / Dashboard" },
  { href: "/contact", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full border-b border-neutral-800 bg-neutral-950/90 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo + puntito */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="pulse-glow absolute inline-flex h-full w-full rounded-full bg-emerald-400/70 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-lg font-semibold text-emerald-400">
            seba<span className="text-neutral-100">.dev</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex gap-3 text-sm">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 py-1 rounded-md transition-all duration-200 wiggle-hover
                  ${
                    active
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                      : "text-neutral-300 border border-transparent hover:border-emerald-500/40 hover:bg-neutral-900 hover:text-emerald-200 hover:-translate-y-0.5"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
