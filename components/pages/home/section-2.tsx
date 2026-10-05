import { docsConfig } from "@/config/docs"

export function Section2() {
  const { about } = docsConfig

  return (
    <section id="sobre" tabIndex={-1} className="relative w-full outline-none">
      <div className="container flex flex-col items-center gap-10 pt-15 pb-7.5 px-2.5 lg:pt-30 lg:pb-5 lg:px-23.35">
        <p className="font-lato max-w-247.75 text-center text-base text-body lg:text-xl">
          {about.intro.map((part, index) => (
            <span key={index} className={part.bold ? "font-bold" : undefined}>
              {part.text}
            </span>
          ))}
        </p>
        <div id="como-funciona" tabIndex={-1} className="grid w-full gap-5 lg:gap-10 lg:grid-cols-2 outline-none">
          {about.cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-2.5 overflow-hidden rounded-[10px] bg-cream p-5 lg:p-10 shadow-[0px_4px_4px_0px_color-mix(in_srgb,var(--color-coral)_25%,transparent)] outline-1 -outline-offset-1 outline-coral/25"
            >
              <h2 className="font-rubik text-xl lg:text-2xl font-bold uppercase leading-[150%] text-coral">
                {card.title}
              </h2>
              <p className="font-lato text-sm lg:text-base text-body">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
