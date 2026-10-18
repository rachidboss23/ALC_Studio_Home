import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    number: "01",
    title: "Diseño personalizado",
    description: "Cada proyecto, a la medida de tu espacio.",
    icon: <path d="M5 8V5h3m8 0h3v3m0 8v3h-3m-8 0H5v-3M8 12h8m-4-4v8" />,
  },
  {
    number: "02",
    title: "Todo en uno",
    description: "Diseño, fabricación e instalación.",
    icon: <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm0 9 8-4.5M12 12v9m0-9L4 7.5" />,
  },
  {
    number: "03",
    title: "Terminaciones de calidad",
    description: "Cuidamos cada detalle.",
    icon: <path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Zm6 12 .8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15Z" />,
  },
  {
    number: "04",
    title: "Acompañamiento completo",
    description: "De la idea a la entrega.",
    icon: <path d="M4 11.5 12 5l8 6.5V20h-6v-5h-4v5H4v-8.5ZM8 9V5h3" />,
  },
];

export function Hero() {
  return (
    <>
      <section aria-labelledby="hero-title" className="relative isolate flex h-[min(70vh,44.5rem)] min-h-[34rem] items-center overflow-hidden bg-[#292b29]">
        <Image
          src="/pexels-artbovich-6527057.jpg"
          alt="Cocina moderna con muebles blancos y taupe, cubierta clara y electrodomésticos integrados"
          fill
          loading="eager"
          unoptimized
          sizes="100vw"
          className="object-cover object-[center_48%] max-sm:object-[center_42%]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent max-sm:via-black/45 max-sm:to-black/20" />
        <div className="relative z-10 mx-auto w-full max-w-none px-6 py-16 sm:px-10 lg:px-[6vw]">
          <div className="max-w-[42rem]">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.24em] text-[#f5f1e9] sm:text-xs">
              Diseño · Fabricación · Instalación
            </p>
            <h1 id="hero-title" className="font-serif text-[clamp(2.75rem,6.2vw,5.8rem)] leading-[0.94] tracking-[-0.035em] text-[#f5f1e9]">
              <span className="sm:block">Espacios que </span>
              <span className="sm:block">se viven, se sienten </span>
              <span className="sm:block">y perduran.</span>
            </h1>
            <p className="mt-6 max-w-[29rem] text-sm leading-relaxed text-[#f5f1e9]/90 sm:mt-7 sm:text-base">
              Creamos muebles a medida y soluciones de diseño para tu hogar, combinando estética, funcionalidad y una ejecución de calidad.
            </p>
            <Link href="/#contacto" className="mt-8 inline-flex min-h-12 items-center gap-4 rounded-sm bg-[#f5f1e9] px-7 font-serif text-base text-[#292b29] transition-colors hover:bg-white focus-visible:outline-offset-4 sm:mt-9">
              Solicita una cotización
              <svg aria-hidden="true" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <section aria-label="Beneficios de trabajar con ALC Studio Home" className="bg-[#f5f1e9]">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 px-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto] lg:px-10">
          {benefits.map((benefit) => (
            <article key={benefit.number} className="border-b border-[#292b29]/15 py-5 sm:pr-6 lg:border-b-0 lg:border-l lg:px-5 lg:py-7 first:lg:border-l-0 first:lg:pl-0">
              <div className="mb-3 flex items-center justify-between text-[#292b29]/65">
                <span className="font-serif text-sm">{benefit.number}</span>
                <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2">
                  {benefit.icon}
                </svg>
              </div>
              <h2 className="font-serif text-lg leading-tight text-[#292b29]">{benefit.title}</h2>
              <p className="mt-2 max-w-[15rem] text-[13px] leading-relaxed text-[#292b29]/70 sm:text-sm">{benefit.description}</p>
            </article>
          ))}
          <div className="flex items-center py-5 sm:col-span-2 sm:justify-end lg:col-span-1 lg:pl-6 lg:py-7">
            <Link href="/servicios" className="inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#292b29] transition-colors hover:text-[#8a6f4d] focus-visible:outline-offset-4">
              Servicios
              <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
