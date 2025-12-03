import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "seba.dev",
  description:
    "Portfolio técnico de Sebastián: infraestructura, Docker, paneles y servicios.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="text-neutral-100 antialiased relative overflow-x-hidden">
        {/* Fondo animado */}
        <div className="ambient-bg" aria-hidden="true" />

        {/* Contenido */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
