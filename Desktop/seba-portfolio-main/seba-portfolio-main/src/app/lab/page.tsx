"use client";

import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

type Status = {
  uptime?: string;
  load1?: number;
  load5?: number;
  load15?: number;
  memoryUsedGb?: number;
  memoryTotalGb?: number;
  memoryPercent?: number;
  cpuUsagePercent?: number;
  diskUsedGb?: number;
  diskTotalGb?: number;
  diskPercent?: number;
  lastUpdate?: string;
};

const logs = [
  {
  date: "2025-12-03",
  title: "Error al compilar por framer-motion",
  type: "bugfix",
  details:
    "Next.js marcaba un error en npm al instalar framer-motion. Se resolvió eliminando esa dependencia y migrando las animaciones a CSS nativo.",
},

  {
    date: "2025-11-30",
    title: "Docker + Portainer + Dashy",
    type: "infra",
    details:
      "Se levantó el stack de contenedores para administrar servicios del homelab y tener un dashboard centralizado.",
  },
  {
    date: "2025-11-28",
    title: "Servidor Minecraft + Playit",
    type: "lab",
    details:
      "PaperMC con mundos separados (supervivencia / shop) y túnel Playit para exponer el servidor sin IP pública.",
  },
];

const experiments = [
  {
    label: "Infraestructura",
    items: [
      "Homelab con Ubuntu Server y Docker",
      "Paneles: Portainer + Dashy",
      "Pruebas de monitoreo simple vía API interna",
    ],
  },
  {
    label: "Dev / Web",
    items: [
      "Portfolio desplegado en Vercel",
      "Página de laboratorio integrada al sitio",
      "Pruebas de animaciones suaves y scroll",
    ],
  },
  {
    label: "Data / Call Center",
    items: [
      "Cálculo de TMO real incluyendo hold",
      "Comparación entre reportes internos y del cliente",
      "Automatización ligera con hojas de cálculo",
    ],
  },
];

type MetricCardProps = {
  title: string;
  description: string;
  value: string;
  footer?: string;
};

function MetricCard({ title, description, value, footer }: MetricCardProps) {
  return (
    <article className="lab-metric-card">
      <header>
        <h3>{title}</h3>
        <p>{description}</p>
      </header>
      <div className="lab-metric-value">{value}</div>
      {footer && <footer>{footer}</footer>}
      <div className="lab-metric-glow" />
    </article>
  );
}

export default function LabPage() {
  const [status, setStatus] = useState<Status>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const fetchStatus = async () => {
      try {
        const res = await fetch("/api/status");
        if (!res.ok) throw new Error("Error al cargar el estado");
        const data = await res.json();
        if (!cancelled) {
          setStatus(data);
          setIsLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    fetchStatus();
    const id = setInterval(fetchStatus, 15000);

    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  return (
    <Layout>
      <div className="lab-page">
        {/* HEADER */}
        <section className="lab-hero">
          <div className="lab-badge">
            <span className="lab-badge-dot" />
            Entorno de laboratorio
          </div>

          <h1>Lab / Dashboard</h1>
          <p>
            Esta sección funciona como bitácora de mi laboratorio personal:
            mezcla de homelab, servidores, pruebas de infraestructura y
            pequeños experimentos que se rompen y se arreglan todo el tiempo.
          </p>

          <p className="lab-subtext">
            Los datos de estado se obtienen desde una API interna y el resto
            son registros manuales de cosas que voy probando semana a semana.
          </p>
        </section>

        {/* MÉTRICAS */}
        <section className="lab-metrics-grid">
          <MetricCard
            title="Uptime"
            description="Tiempo desde el último reinicio del servidor donde vive este portfolio."
            value={
              isLoading
                ? "Cargando..."
                : status.uptime || "Sin datos (API offline)"
            }
            footer={status.lastUpdate && `Actualizado: ${status.lastUpdate}`}
          />

          <MetricCard
            title="Carga promedio"
            description="Load average del sistema (1m / 5m / 15m)."
            value={
              isLoading
                ? "Cargando..."
                : `${status.load1?.toFixed(2) ?? "0.00"} · ${
                    status.load5?.toFixed(2) ?? "0.00"
                  } · ${status.load15?.toFixed(2) ?? "0.00"}`
            }
            footer="Valores bajos indican que al servidor todavía le queda aire."
          />

          <MetricCard
            title="Memoria en uso"
            description="Uso de RAM actual del servidor."
            value={
              isLoading
                ? "Cargando..."
                : status.memoryUsedGb !== undefined &&
                  status.memoryTotalGb !== undefined
                ? `${status.memoryUsedGb.toFixed(
                    2
                  )} / ${status.memoryTotalGb.toFixed(2)} GB`
                : "Sin datos (API offline)"
            }
            footer={
              status.memoryPercent !== undefined
                ? `${status.memoryPercent.toFixed(1)}% utilizada`
                : undefined
            }
          />

          <MetricCard
            title="CPU / Disco"
            description="Resumen rápido de uso de CPU y disco."
            value={
              isLoading
                ? "Cargando..."
                : `${
                    status.cpuUsagePercent !== undefined
                      ? `${status.cpuUsagePercent.toFixed(1)}% CPU`
                      : "CPU: N/D"
                  } · ${
                    status.diskUsedGb !== undefined &&
                    status.diskTotalGb !== undefined
                      ? `${status.diskUsedGb.toFixed(
                          1
                        )}/${status.diskTotalGb.toFixed(1)} GB`
                      : "Disco: N/D"
                  }`
            }
            footer={
              status.diskPercent !== undefined
                ? `${status.diskPercent.toFixed(1)}% del disco ocupado`
                : undefined
            }
          />
        </section>

        {/* GRID PRINCIPAL */}
        <section className="lab-main-grid">
          {/* TERMINAL */}
          <div className="lab-terminal-card">
            <div className="lab-terminal-header">
              <div className="lab-terminal-buttons">
                <span className="btn red" />
                <span className="btn yellow" />
                <span className="btn green" />
              </div>
              <span className="lab-terminal-title">
                seba@lab:~ /bitacora.log
              </span>
            </div>

            <div className="lab-terminal-body">
              <p className="lab-terminal-line prefix">
                $ tail -f bitacora.log
              </p>

              {logs.map((log, index) => (
                <p key={index} className="lab-terminal-line">
                  <span className="log-date">[{log.date}]</span>
                  <span className={`log-tag log-${log.type}`}>
                    {log.type.toUpperCase()}
                  </span>
                  <span className="log-title">{log.title}</span>
                  <span className="log-details"> — {log.details}</span>
                </p>
              ))}

              <p className="lab-terminal-line blink">
                ▋ Siempre que algo se rompa y lo arregle, aparece acá.
              </p>
            </div>
          </div>

          {/* EXPERIMENTOS / ROADMAP */}
          <div className="lab-experiments-card">
            <h2>Mapa del laboratorio</h2>
            <p className="lab-experiments-subtitle">
              Un resumen rápido de qué estoy tocando, aprendiendo o rompiendo
              últimamente.
            </p>

            <div className="lab-experiments-timeline">
              {experiments.map((group, idx) => (
                <div key={idx} className="lab-experiments-block">
                  <div className="lab-experiments-dot" />
                  <div className="lab-experiments-content">
                    <h3>{group.label}</h3>
                    <ul>
                      {group.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="lab-experiments-footer">
              <span className="lab-status-pill lab-status-active">
                En curso
              </span>
              <span className="lab-status-pill lab-status-idea">
                Ideas futuras
              </span>
              <span className="lab-status-pill lab-status-done">
                Completado
              </span>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
