"use client";

import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

type StatusResponse = {
  uptimeSeconds: number;
  loadAverage: number[];
  memory: {
    total: number;
    free: number;
    used: number;
    usedPercent: number;
  };
  timestamp: number;
};

function formatSeconds(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${h}h ${m}m ${s}s`;
}

export default function LabPage() {
  const [status, setStatus] = useState<StatusResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStatus() {
      try {
        const res = await fetch("/api/status");
        if (!res.ok) throw new Error("Error al obtener el estado");
        const data = await res.json();
        setStatus(data);
        setError(null);
      } catch (e) {
        setError("No se pudo obtener el estado del servidor.");
      }
    }

    fetchStatus();
    const id = setInterval(fetchStatus, 5000); // cada 5s
    return () => clearInterval(id);
  }, []);

  return (
    <Layout>
      <h1 className="text-3xl font-semibold mb-4">Lab / Dashboard</h1>

      <p className="text-neutral-300 mb-6 max-w-2xl text-sm">
        Esta sección muestra información en tiempo (casi) real del servidor donde está
        desplegado este portfolio. Los datos se obtienen desde una API interna.
      </p>

      {error && (
        <div className="mb-4 rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">
          {error}
        </div>
      )}

      {!status && !error && (
        <p className="text-sm text-neutral-400">Cargando estado del servidor…</p>
      )}

      {status && (
        <div className="grid gap-4 md:grid-cols-3 text-sm">
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/60 p-4">
            <h2 className="text-xs font-semibold uppercase text-neutral-400 mb-1">
              Uptime
            </h2>
            <p className="text-lg text-emerald-400">
              {formatSeconds(status.uptimeSeconds)}
            </p>
          </div>

          <div className="rounded-lg border border-neutral-800 bg-neutral-900/60 p-4">
            <h2 className="text-xs font-semibold uppercase text-neutral-400 mb-1">
              Carga promedio (1m / 5m / 15m)
            </h2>
            <p className="text-neutral-200">
              {status.loadAverage.map((n) => n.toFixed(2)).join(" · ")}
            </p>
          </div>

          <div className="rounded-lg border border-neutral-800 bg-neutral-900/60 p-4">
            <h2 className="text-xs font-semibold uppercase text-neutral-400 mb-1">
              Memoria usada
            </h2>
            <p className="text-neutral-200">
              {((status.memory.used / 1024 / 1024 / 1024) || 0).toFixed(2)} GB{" "}
              <span className="text-neutral-500 text-xs">
                ({status.memory.usedPercent.toFixed(1)}%)
              </span>
            </p>
          </div>
        </div>
      )}
    </Layout>
  );
}
