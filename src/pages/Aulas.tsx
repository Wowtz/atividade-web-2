import type { Aula } from "../models/Aula";

const aulas: Aula[] = [
  {
    id: 1,
    numero: "01",
    titulo: "Fundamentos do React",
    descricao: "Esta aula apresenta os conceitos básicos do React."
  },
  {
    id: 2,
    numero: "02",
    titulo: "Components e JSX",
    descricao: "Aprenda a criar compoenents em React e usar JSX."
  },
  {
    id: 3,
    numero: "03",
    titulo: "Estados e props",
    descricao: "Aprenda a gerenciar estados e props no React."
  }
];

/**
 * PROPS DO COMPONENTE AulaItem
 */

type AulaItemProps = {
  aula: Aula;
}

/**
 * COMPONENTE AulaItem
 */

function AulaItem({ aula }: AulaItemProps) {
  return (
    <article
      className="
        flex
        items-center
        w-full
        p-4
        bg-white
        rounded-xl
        shadow-sm
        transition
        duration-200
        hover:-translate-y-0.5
        hover:shadow-md
      "
    >

      <div
        className="
          flex
          items-center
          justify-center
          w-12
          h-12
          min-w-12
          rounded-full
          bg-blue-600
          mr-4
        "
      >

        <span
          className="
            text-white
            text-sm
            font-bold
          "
        >
          {aula.numero}
        </span>

      </div>
      <div className="flex-1">

        <h2
          className="
            text-[17px]
            font-bold
            text-slate-800
            mb-1
          "
        >
          {aula.titulo}
        </h2>


        <p
          className="
            text-[13px]
            leading-[18px]
            text-slate-500
          "
        >
          {aula.descricao}
        </p>

      </div>

    </article>
  );
}

export default function Aulas() {
  return (
    <main
      className="
        min-h-screen
        bg-slate-100
      "
    >
      <section
        className="
          w-full
          max-w-4xl
          mx-auto
          px-5
          py-8
        "
      >

        <h2
          className="
            mb-4
            text-[21px]
            font-bold
            text-slate-800
          "
        >
          Lista de aulas
        </h2>

        <div
          className="
            flex
            flex-col
            gap-3
          "
        >

          {aulas.map((aula) => (

            <AulaItem
              key={aula.id}
              aula={aula}
            />

          ))}

        </div>

      </section>

    </main>
  );
}