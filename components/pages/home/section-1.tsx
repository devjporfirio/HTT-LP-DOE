import { buttonVariants } from "@/components/utils/button"
import { Icons } from "@/components/utils/icons"
import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"

export function Section1() {
  const { hero } = docsConfig

  return (
    <section
      id="inicio"
      className="relative flex w-full h-full flex-col justify-between overflow-hidden"
    >
      <picture>
        <source media="(min-width: 768px)" srcSet={hero.image.desktop} />
        <img
          src={hero.image.mobile}
          alt=""
          fetchPriority="high"
          className="h-full w-full min-h-127 lg:min-h-102.5"
        />
      </picture>
      <div className="container left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute flex h-full flex-col justify-between px-[30.5px] py-10 lg:px-20 max-h-127 lg:max-h-102.5">
        <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-10">
          <Icons.logoPink className="h-13 lg:h-20 w-48 lg:w-73.75 shrink-0" />
          <div className="flex flex-col items-center lg:items-start gap-1">
            <h1 className="font-rubik text-2xl font-black uppercase leading-[150%] text-coral lg:text-4xl">
              {hero.heading}
            </h1>
            <p className="font-rubik text-base uppercase leading-[150%] text-coral lg:text-xl">
              {hero.subheading}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5">
          {hero.ctas.map((cta, index) => (
            <a
              key={cta.href}
              href={cta.href}
              className={cn(
                buttonVariants(index === 0 ? "primary" : "outline"),
                "min-w-65.75 lg:min-w-0"
              )}
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
