"use client";
import Layout from "@/components/Layout";

const EMAIL = "sebastian.brusca@hotmail.com";
const LINKEDIN = "https://www.linkedin.com/";
const GITHUB = "https://github.com/SebastianBrusca";

export default function ContactPage() {
  return (
   <Layout>
    <section className="min-h-screen px-6 py-16 text-white">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight">Contacto</h1>
          <p className="mt-3 max-w-3xl text-gray-300 leading-relaxed">
            ¿Querés hablar sobre infraestructura, servidores Linux, Docker,
            automatización o algún proyecto en particular? Podés contactarme por
            estos medios o dejar un mensaje rápido.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left column */}
          <div className="space-y-6">
            {/* Contact buttons */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h2 className="text-lg font-semibold mb-4">Canales directos</h2>

              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${EMAIL}`}
                  className="rounded-xl border border-emerald-400/30 bg-black/20 px-5 py-4
                             hover:border-emerald-400 hover:bg-emerald-400/10 transition"
                >
                  <div className="font-semibold">📧 Email</div>
                  <div className="text-sm text-gray-300 mt-1">{EMAIL}</div>
                  <div className="text-xs text-gray-500 mt-2">
                    Respondo lo antes posible.
                  </div>
                </a>

                <a
                  href={LINKEDIN}
                  target="_blank"
                  className="rounded-xl border border-sky-400/30 bg-black/20 px-5 py-4
                             hover:border-sky-400 hover:bg-sky-400/10 transition"
                >
                  <div className="font-semibold">💼 LinkedIn</div>
                  <div className="text-sm text-gray-300 mt-1">
                    Ver perfil profesional
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Conectemos y charlamos.
                  </div>
                </a>

                <a
                  href={GITHUB}
                  target="_blank"
                  className="rounded-xl border border-violet-400/30 bg-black/20 px-5 py-4
                             hover:border-violet-400 hover:bg-violet-400/10 transition"
                >
                  <div className="font-semibold">💻 GitHub</div>
                  <div className="text-sm text-gray-300 mt-1">
                    Repositorios y proyectos
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Código, infra, labs y automatizaciones.
                  </div>
                </a>
              </div>
            </div>

            {/* Availability / info */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h2 className="text-lg font-semibold mb-4">Info rápida</h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="text-sm text-gray-400">Disponibilidad</div>
                  <div className="mt-1 font-semibold">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Abierto a proyectos
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Infra, Linux, Docker, automatización.
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="text-sm text-gray-400">Zona horaria</div>
                  <div className="mt-1 font-semibold">Argentina (UTC-3)</div>
                  <div className="text-xs text-gray-500 mt-2">
                    Ideal para coordinar por la tarde.
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm text-gray-400">Temas que suelo tomar</div>
                <ul className="mt-2 text-sm text-gray-300 space-y-1">
                  <li>• Servers Linux, hardening básico, monitoreo simple</li>
                  <li>• Docker / Portainer / despliegues y mantenimiento</li>
                  <li>• Sitios/Apps (Next.js) y automatizaciones</li>
                  <li>• Diagnóstico de infraestructura y documentación</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Quick message (front-end only) */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h2 className="text-lg font-semibold mb-2">Mensaje rápido</h2>
              <p className="text-sm text-gray-400 mb-4">
                Esto no envía nada todavía (sin backend). Pero pronto lo voy a configurar, gracias.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-3"
              >
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3
                             outline-none focus:border-emerald-400/60"
                />
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3
                             outline-none focus:border-emerald-400/60"
                />
                <textarea
                  placeholder="Contame qué necesitás (2–3 líneas)..."
                  rows={5}
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3
                             outline-none focus:border-emerald-400/60"
                />
                <button
                  type="submit"
                  className="w-full rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-3
                             hover:border-emerald-400 hover:bg-emerald-400/15 transition font-semibold"
                >
                  Enviar (próximamente)
                </button>
              </form>
            </div>

            {/* What I can do */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h2 className="text-lg font-semibold mb-4">¿En qué te puedo ayudar?</h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="font-semibold">⚙️ Infra & Servers</div>
                  <p className="mt-2 text-sm text-gray-300">
                    Setup, mantenimiento, hardening básico, backups, migraciones.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="font-semibold">🐳 Docker</div>
                  <p className="mt-2 text-sm text-gray-300">
                    Contenedores, Portainer, despliegues simples y ordenados.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="font-semibold">🧩 Web / Next.js</div>
                  <p className="mt-2 text-sm text-gray-300">
                    Sitios, dashboards, performance, componentes y UI.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="font-semibold">🛠️ Automatización</div>
                  <p className="mt-2 text-sm text-gray-300">
                    Scripts, tareas repetibles, documentación y buenas prácticas.
                  </p>
                </div>
              </div>
            </div>

            {/* Note */}
            <p className="text-sm text-gray-500">
              * Enlaces y datos se actualizan desde el código del proyecto.
            </p>
          </div>
        </div>
      </div>
    </section>
   </Layout>
  );
}
