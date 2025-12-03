"use client";

import TechCarousel from "../components/TechCarousel";
import Layout from "@/components/Layout";
import RevealOnScroll from "../components/RevealOnScroll";
import Link from "next/link";
import { useEffect, useState } from "react";

const roles = [
  "Administrador de sistemas",
  "Entusiasta de DevOps",
  "Técnico en hardware y redes",
];

export default function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setRoleIndex((prev) => (prev + 1) % roles.length),
      2500
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className="relative z-10 flex flex-col gap-16">
        {/* HERO / INICIO */}
        <RevealOnScroll>
          <section
            id="inicio"
            className="flex flex-col gap-10 md:flex-row md:items-center"
          >
            {/* LADO IZQUIERDO: TEXTO PRINCIPAL */}
            <div className="flex-1 space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-900/40 px-4 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/40">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-glow" />
                Disponible para roles Jr. de infraestructura / DevOps
              </span>

              <div className="space-y-2">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  Sebastián <span className="text-emerald-400">Brusca</span>
                </h1>
                <p className="text-base text-neutral-300 sm:text-lg">
                  Técnico Electromecánico · Estudiante de DevOps
                </p>
                <p className="text-sm text-neutral-400">
                  Buenos Aires, Argentina
                </p>
              </div>

              <p className="text-sm text-neutral-300 sm:text-base">
                Actualmente:{" "}
                <span className="typing-text font-medium text-emerald-300">
                  {roles[roleIndex]}
                </span>
              </p>

              <p className="max-w-xl text-sm text-neutral-300 sm:text-base">
                Desarrollé experiencia en hardware, redes y Linux, y hoy estoy enfocando
                todo eso en el mundo de la infraestructura y DevOps, usando mi
                laboratorio personal para practicar despliegues reales.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://www.linkedin.com/in/sebastian-brusca/"
                  target="_blank"
                  className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-medium text-neutral-900 shadow hover:bg-emerald-400 transition"
                >
                  Ver LinkedIn
                </Link>
                <a
                  href="mailto:Sebastian_brusca@hotmail.com"
                  className="rounded-full border border-emerald-500/60 px-5 py-2 text-sm font-medium text-emerald-300 hover:bg-emerald-500/10 transition"
                >
                  Contactar por mail
                </a>
              </div>
            </div>

            {/* LADO DERECHO: GLOBO / LABORATORIO */}
            <div className="flex-1 md:flex md:justify-end">
              <div className="relative mx-auto flex h-64 w-64 items-center justify-center rounded-full border border-emerald-400/60 bg-gradient-to-br from-emerald-900/60 via-neutral-900 to-sky-900/60 shadow-[0_0_40px_rgba(16,185,129,0.35)] transition hover:scale-105 hover:rotate-2">
                <div className="absolute -inset-1 rounded-full bg-emerald-500/10 blur-xl" />
                <div className="relative z-10 flex h-52 w-52 flex-col items-center justify-center gap-3 rounded-full border border-emerald-500/40 bg-neutral-950/80 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                    Mi entorno
                  </p>
                  <ul className="space-y-1 text-xs text-neutral-200">
                    <li>Administración de sistemas</li>
                    <li>Contenedores y paneles</li>
                    <li>Servicios 24/7</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* SOBRE MÍ */}
        <RevealOnScroll>
          <section id="sobre-mi" className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-50">
              Sobre mí
            </h2>
            <p className="max-w-3xl text-sm text-neutral-300 sm:text-base">
              Soy Técnico Electromecánico y estudiante de la carrera DevOps con
              orientación a Microsoft Azure. Mi experiencia combina el trabajo
              en soporte técnico de TI y proyectos freelance en hardware y redes. 
	      Me siento cómodo tanto en el entorno físico (instalaciones y  
	      reparaciones de equipo) como en el digital (sistemas operativos,
	      redes y servidores).
            </p>
            <p className="max-w-3xl text-sm text-neutral-300 sm:text-base">
              Actualmente estoy enfocando mi desarrollo en Linux, redes,
              contenedores y servicios 24/7, usando un laboratorio personal para
              practicar despliegues, automatización, monitoreo y acceso remoto.
              Busco seguir creciendo en infraestructura y DevOps, sumando
              experiencia profesional en equipos de IT.
            </p>
          </section>
        </RevealOnScroll>

        {/* TECNOLOGÍAS PRINCIPALES */}
        <RevealOnScroll>
          <section id="tecnologias" className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-50">
              Tecnologías principales
            </h2>
            <p className="max-w-2xl text-sm text-neutral-300 sm:text-base">
              Mi foco está en Linux, redes y contenedores, usando herramientas
              que me permiten desplegar servicios estables y administrarlos de
              forma remota mediante paneles y túneles seguros.
            </p>
            <div className="overflow-hidden rounded-2xl border border-emerald-500/10 bg-neutral-900/40 p-4">
              <TechCarousel />
            </div>
          </section>
        </RevealOnScroll>

        {/* QUÉ HAGO EN ESTE ENTORNO */}
        <RevealOnScroll>
          <section id="que-hago" className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-50">
              Qué hago en este entorno
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <article className="rounded-2xl border border-emerald-500/10 bg-neutral-900/40 p-4 text-sm text-neutral-300">
                <h3 className="mb-1 text-base font-semibold text-neutral-50">
                  Servicios 24/7
                </h3>
                <p>
                  Levanto entornos que se mantienen en línea, como servidores,
                  paneles y aplicaciones web accesibles de forma remota.
                </p>
              </article>
              <article className="rounded-2xl border border-emerald-500/10 bg-neutral-900/40 p-4 text-sm text-neutral-300">
                <h3 className="mb-1 text-base font-semibold text-neutral-50">
                  Contenedores y paneles
                </h3>
                <p>
                  Uso contenedores y paneles de administración para desplegar y
                  supervisar servicios de manera controlada y reproducible.
                </p>
              </article>
              <article className="rounded-2xl border border-emerald-500/10 bg-neutral-900/40 p-4 text-sm text-neutral-300">
                <h3 className="mb-1 text-base font-semibold text-neutral-50">
                  Laboratorio constante
                </h3>
                <p>
                  Experimento con nuevas herramientas y configuraciones para
                  aprender de problemas reales y mejorar la infraestructura.
                </p>
              </article>
            </div>
          </section>
        </RevealOnScroll>

        {/* ACTIVIDAD RECIENTE */}
        <RevealOnScroll>
          <section id="actividad" className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-50">
              Actividad reciente
            </h2>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li className="slide-up">
                • Configuración de laboratorio personal con servicios 24/7.
              </li>
              <li className="slide-up">
                • Prácticas con redes, VPN y acceso remoto a servidores.
              </li>
              <li className="slide-up">
                • Despliegue de contenedores y paneles de administración.
              </li>
            </ul>
          </section>
        </RevealOnScroll>

        {/* MI STACK COMPLETO */}
        <RevealOnScroll>
          <section id="stack" className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-50">
              Mi stack completo
            </h2>
            <div className="grid gap-4 md:grid-cols-4">
              <article className="rounded-2xl border border-emerald-500/10 bg-neutral-900/40 p-4 text-sm text-neutral-300">
                <h3 className="mb-1 text-base font-semibold text-neutral-50">
                  Linux
                </h3>
                <p>Entorno principal para servidores y laboratorio.</p>
              </article>
              <article className="rounded-2xl border border-emerald-500/10 bg-neutral-900/40 p-4 text-sm text-neutral-300">
                <h3 className="mb-1 text-base font-semibold text-neutral-50">
                  Docker
                </h3>
                <p>Contenerización de servicios para pruebas y despliegues.</p>
              </article>
              <article className="rounded-2xl border border-emerald-500/10 bg-neutral-900/40 p-4 text-sm text-neutral-300">
                <h3 className="mb-1 text-base font-semibold text-neutral-50">
                  Paneles
                </h3>
                <p>Administración visual de contenedores y servicios.</p>
              </article>
              <article className="rounded-2xl border border-emerald-500/10 bg-neutral-900/40 p-4 text-sm text-neutral-300">
                <h3 className="mb-1 text-base font-semibold text-neutral-50">
                  Túneles / Acceso remoto
                </h3>
                <p>Acceso a servicios desde internet de forma controlada.</p>
              </article>
            </div>
          </section>
        </RevealOnScroll>

        {/* MI LABORATORIO PERSONAL */}
        <RevealOnScroll>
          <section id="laboratorio" className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-50">
              Mi laboratorio personal
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl border border-emerald-500/10 bg-neutral-900/40 p-4 text-sm text-neutral-300">
                <h3 className="mb-1 text-base font-semibold text-neutral-50">
                  Red y servicios
                </h3>
                <p>
                  Entorno de red con servicios accesibles por túneles y paneles,
                  simulando escenarios reales de producción.
                </p>
              </article>
              <article className="rounded-2xl border border-emerald-500/10 bg-neutral-900/40 p-4 text-sm text-neutral-300">
                <h3 className="mb-1 text-base font-semibold text-neutral-50">
                  Práctica constante
                </h3>
                <p>
                  Despliegue, automatización y supervisión de servicios para
                  aprender a mantenerlos estables en el tiempo.
                </p>
              </article>
            </div>
          </section>
        </RevealOnScroll>

        {/* SERVICIOS QUE ADMINISTRO */}
        <RevealOnScroll>
          <section id="servicios" className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-50">
              Servicios que administro
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <article className="rounded-2xl border border-emerald-500/10 bg-neutral-900/40 p-4 text-sm text-neutral-300">
                <h3 className="mb-1 text-base font-semibold text-neutral-50">
                  Aplicaciones web
                </h3>
                <p>Despliegue y mantenimiento de aplicaciones accesibles 24/7.</p>
              </article>
              <article className="rounded-2xl border border-emerald-500/10 bg-neutral-900/40 p-4 text-sm text-neutral-300">
                <h3 className="mb-1 text-base font-semibold text-neutral-50">
                  Paneles de administración
                </h3>
                <p>
                  Herramientas para controlar contenedores, servicios y
                  estadísticas.
                </p>
              </article>
              <article className="rounded-2xl border border-emerald-500/10 bg-neutral-900/40 p-4 text-sm text-neutral-300">
                <h3 className="mb-1 text-base font-semibold text-neutral-50">
                  Servicios 24/7
                </h3>
                <p>Entornos que requieren monitoreo y estabilidad continua.</p>
              </article>
            </div>
          </section>
        </RevealOnScroll>

        {/* METAS A CORTO Y MEDIANO PLAZO */}
        <RevealOnScroll>
          <section id="metas" className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-50">
              Metas a corto y mediano plazo
            </h2>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>• Mejorar el monitoreo de servicios y alertas.</li>
              <li>• Automatizar despliegues con pipelines.</li>
              <li>• Optimizar el rendimiento del servidor.</li>
              <li>
                • Profundizar en herramientas Cloud y certificaciones de Azure.
              </li>
            </ul>
          </section>
        </RevealOnScroll>

        {/* HABILIDADES TÉCNICAS (DEL CV) */}
        <RevealOnScroll>
          <section id="habilidades" className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-50">
              Habilidades técnicas
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Desarrollo y Diseño: AutoCAD 2D y 3D",
                "Sistemas Operativos: Administración y uso de Linux",
                "Programación: Desarrollo en Python",
                "Gestión de Datos: Excel Intermedio",
                "Impresión 3D: Software de laminado",
                "Ensamblaje y despiece de computadoras",
                "Diagnóstico y mantenimiento de hardware",
                "Instalación y configuración de componentes",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-emerald-500/30 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </RevealOnScroll>

        {/* FORMACIÓN Y CURSOS (DEL CV) */}
        <RevealOnScroll>
          <section id="formacion" className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-50">
              Formación y cursos
            </h2>

            <div className="space-y-4">
              <div className="rounded-2xl border border-emerald-500/10 bg-neutral-900/40 p-4">
                <h3 className="text-base font-semibold text-neutral-50">
                  Carrera DevOps · Microsoft Certified Azure Fundamentals
                </h3>
                <p className="text-xs text-neutral-400">
                  Educación IT · 2025 - Actualidad
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-500/10 bg-neutral-900/40 p-4">
                <h3 className="text-base font-semibold text-neutral-50">
                  Técnico Electromecánico
                </h3>
                <p className="text-xs text-neutral-400">
                  Instituto La Salle San Martín · 2018 - 2020
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-500/10 bg-neutral-900/40 p-4">
                <h3 className="text-base font-semibold text-neutral-50">
                  Cursos
                </h3>
                <ul className="mt-2 grid gap-1 text-sm text-neutral-300 sm:grid-cols-2">
                  <li>Educación IT, Sistema Operativo Linux, 2025 - Actualidad</li>
                  <li>Educación IT, Introducción a Redes, Finalizado</li>
                  <li>Educación IT, Curso de Python, Finalizado</li>
                  <li>Santander Open Academy, Curso de Python, Finalizado</li>
                  <li>Santander Open Academy, Curso de Power BI, En curso</li>
                  <li>Edutin Academy, Curso de Active Directory, En curso</li>
                </ul>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* EXPERIENCIA LABORAL (DEL CV) */}
        <RevealOnScroll>
          <section id="experiencia" className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-50">
              Experiencia
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
              {/* Técnico de soporte de TI */}
              <article className="rounded-2xl border border-emerald-500/10 bg-neutral-900/40 p-4 shadow-sm backdrop-blur">
                <h3 className="text-lg font-semibold text-neutral-50">
                  Técnico de soporte de TI
                </h3>
                <p className="text-xs text-neutral-400">
                  GEMEZ S.A. · Jornada completa · oct. 2025 - Actualidad
                </p>
                <ul className="mt-3 space-y-1 text-sm text-neutral-300">
                  <li>
                    Instalación, mantenimiento y reparación de equipos
                    informáticos.
                  </li>
                  <li>
                    Resolución de incidencias de hardware y software, brindando
                    soporte a usuarios.
                  </li>
                  <li>
                    Configuración de sistemas operativos Windows y Linux, gestión
                    de periféricos y software.
                  </li>
                  <li>
                    Soporte remoto y optimización del rendimiento de sistemas y
                    redes locales.
                  </li>
                </ul>
              </article>

              {/* Carpintero - Diseño en aluminio */}
              <article className="rounded-2xl border border-emerald-500/10 bg-neutral-900/40 p-4 shadow-sm backdrop-blur">
                <h3 className="text-lg font-semibold text-neutral-50">
                  Carpintero · Diseño en aluminio
                </h3>
                <p className="text-xs text-neutral-400">
                  ene. 2020 - oct. 2025 · Jornada completa · Presencial
                </p>
                <ul className="mt-3 space-y-1 text-sm text-neutral-300">
                  <li>
                    Gestión y planificación con datos en Excel, elaboración de
                    diagramas y planillas de armado.
                  </li>
                  <li>
                    Recepción, inspección y verificación de materiales de
                    aluminio.
                  </li>
                  <li>
                    Medición en obra y fabricación de aberturas según
                    especificaciones.
                  </li>
                  <li>
                    Instalación y montaje de aberturas en obra, cuidando
                    terminaciones y calidad.
                  </li>
                </ul>
              </article>

              {/* Técnico en Hardware y Redes - Freelance */}
              <article className="rounded-2xl border border-emerald-500/10 bg-neutral-900/40 p-4 shadow-sm backdrop-blur">
                <h3 className="text-lg font-semibold text-neutral-50">
                  Técnico en Hardware y Redes
                </h3>
                <p className="text-xs text-neutral-400">
                  Freelancer · ene. 2021 - Actualidad
                </p>
                <ul className="mt-3 space-y-1 text-sm text-neutral-300">
                  <li>
                    Ensamblaje de computadoras desde cero, selección de
                    componentes y montaje.
                  </li>
                  <li>
                    Instalación y configuración de sistemas operativos y
                    software especializado.
                  </li>
                  <li>
                    Diagnóstico y reparación de fallas en hardware y componentes
                    electrónicos.
                  </li>
                  <li>
                    Configuración y mantenimiento de redes LAN/WAN, incluyendo
                    switches L2, DHCP, VLAN, VPN, Subnetting y troubleshooting.
                  </li>
                  <li>
                    Asesoramiento a clientes para optimizar equipos y mejorar la
                    infraestructura tecnológica.
                  </li>
                </ul>
              </article>
            </div>
          </section>
        </RevealOnScroll>

        {/* CONTACTO (DATOS DEL CV) */}
        <RevealOnScroll>
          <section id="contacto" className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-50">
              Contacto
            </h2>

            <p className="text-sm text-neutral-300">
              Si querés hablar sobre roles Jr., prácticas, proyectos o
              colaborar en algo relacionado con infraestructura y DevOps, estos
              son mis datos:
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1 text-sm text-neutral-300">
                <p>
                  <span className="font-medium text-neutral-100">
                    Correo:&nbsp;
                  </span>
                  <a
                    href="mailto:Sebastian_brusca@hotmail.com"
                    className="text-emerald-300 underline-offset-2 hover:underline"
                  >
                    Sebastian_brusca@hotmail.com
                  </a>
                </p>
                <p>
                  <span className="font-medium text-neutral-100">
                    Teléfono:&nbsp;
                  </span>
                  +54 9 11 58 56 38 76
                </p>
                <p>
                  <span className="font-medium text-neutral-100">
                    Ubicación:&nbsp;
                  </span>
                  Buenos Aires, Argentina
                </p>
              </div>

              <div className="space-y-2 text-sm text-neutral-300">
                <p className="font-medium text-neutral-100">Redes</p>
                <a
                  href="https://www.linkedin.com/in/sebastian-brusca/"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-emerald-300 underline-offset-2 hover:underline"
                >
                  LinkedIn /sebastian-brusca
                </a>
              </div>
            </div>
          </section>
        </RevealOnScroll>
      </div>
    </Layout>
  );
}
