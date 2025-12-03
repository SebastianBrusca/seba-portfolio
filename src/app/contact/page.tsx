import Layout from "@/components/Layout";
import Link from "next/link";

export default function ContactPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold mb-4">Contacto</h1>

      <p className="text-neutral-300 mb-4 text-sm max-w-xl">
        Si te interesa lo que hago o querés hablar sobre servidores, Docker, proyectos o
        posibles colaboraciones, podés contactarme por alguno de estos medios:
      </p>

      <div className="space-y-3 text-sm text-neutral-200">
        <p>
          <span className="font-semibold text-neutral-400">Email: </span>
          <a
            href="mailto:tu-correo@example.com"
            className="text-emerald-400 hover:underline"
          >
            Sebastian_brusca@hotmail.com
          </a>
        </p>

        <p>
          <span className="font-semibold text-neutral-400">LinkedIn: </span>
          <Link
            href="https://www.linkedin.com/in/sebastian-brusca/"
            className="text-emerald-400 hover:underline"
          >
            perfil de LinkedIn (editar)
          </Link>
        </p>

        <p>
          <span className="font-semibold text-neutral-400">GitHub: </span>
          <Link
            href="https://github.com/SebastianBrusca"
            className="text-emerald-400 hover:underline"
          >
            perfil de GitHub (editar)
          </Link>
        </p>
      </div>

      <p className="text-xs text-neutral-500 mt-6">
        *Los enlaces y correos se pueden actualizar en cualquier momento desde el código
        del proyecto.
      </p>
    </Layout>
  );
}
