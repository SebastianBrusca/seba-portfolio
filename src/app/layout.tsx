import Navbar from "@/components/Navbar";
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

  {/* Navbar */}
  <div className="relative z-20">
    <Navbar />
  </div>

  {/* Contenido */}
  <main className="relative z-10 pt-20">
    {children}
  </main>
</body>
    </html>
  );
}
