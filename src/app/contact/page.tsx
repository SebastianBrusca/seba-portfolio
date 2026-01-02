export default function ContactPage() {
  return (
    <section className="min-h-screen px-6 py-20 text-white">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Contacto 🔥🔥🔥</h1>

        <p className="text-gray-300 mb-10 leading-relaxed">
          ¿Querés hablar sobre infraestructura, servidores Linux, Docker,
          automatización o algún proyecto en particular?
          <br />
          Podés contactarme directamente por cualquiera de estos medios.
        </p>

        <div className="flex flex-col gap-4 max-w-sm">
          <a
            href="mailto:sebastian.brusca@hotmail.com"
            className="border border-emerald-400/40 hover:border-emerald-400
                       hover:bg-emerald-400/10 transition rounded-lg px-5 py-3"
          >
            📧 Email
            <span className="block text-sm text-gray-400">
              sebastian.brusca@hotmail.com
            </span>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="border border-sky-400/40 hover:border-sky-400
                       hover:bg-sky-400/10 transition rounded-lg px-5 py-3"
          >
            💼 LinkedIn
            <span className="block text-sm text-gray-400">
              Ver perfil profesional
            </span>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            className="border border-violet-400/40 hover:border-violet-400
                       hover:bg-violet-400/10 transition rounded-lg px-5 py-3"
          >
            💻 GitHub
            <span className="block text-sm text-gray-400">
              Repositorios y proyectos
            </span>
          </a>
        </div>

        <p className="mt-12 text-sm text-gray-500">
          * Esta sección se actualiza directamente desde el código del proyecto.
        </p>
      </div>
    </section>
  );
}
