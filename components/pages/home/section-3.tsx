import { Fragment } from "react"
import Image from "next/image"

import { docsConfig } from "@/config/docs"

export function Section3() {
  const { rt } = docsConfig

  return (
    <section className="relative w-full">
      <div className="container flex flex-col items-center gap-10 lg:gap-25 lg:flex-row lg:items-start lg:justify-center px-2.5 py-7.5 lg:py-25">
        <div className="flex flex-col items-center gap-5">
          <div className="relative size-30 overflow-hidden rounded-full">
            <Image
              src={rt.photo}
              alt={rt.name}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="font-rubik text-xl lg:text-2xl font-bold uppercase text-coral">
              {rt.name}
            </h2>
            <p className="font-rubik text-xs lg:text-sm font-semibold uppercase text-body">
              {rt.credentials}
            </p>
            <p className="font-lato text-center text-sm font-bold text-body">
              {rt.role.map((line, index) => (
                <Fragment key={index}>
                  {index > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </p>
          </div>
        </div>
        <p className="max-w-146.25 font-lato text-sm lg:text-base font-bold text-body lg:py-3">
          {rt.bio.map((paragraph, pIndex) => (
            <Fragment key={pIndex}>
              {pIndex > 0 && (
                <>
                  <br />
                  <br />
                </>
              )}
              {paragraph.map((part, partIndex) => (
                <span
                  key={partIndex}
                  className={part.emphasis ? "font-black underline" : undefined}
                >
                  {part.text.split("\n").map((line, lineIndex, lines) => (
                    <Fragment key={lineIndex}>
                      {line}
                      {lineIndex < lines.length - 1 && <br />}
                    </Fragment>
                  ))}
                </span>
              ))}
            </Fragment>
          ))}
        </p>
      </div>
    </section>
  )
}
