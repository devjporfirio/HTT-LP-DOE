"use client"

import { useEffect } from "react"

import { docsConfig } from "@/config/docs"

export function Section4() {
  const { clinic } = docsConfig

  useEffect(() => {
    const scriptId = "rdstation-forms-script"

    const createForm = () => {
      if (typeof window.RDStationForms === "undefined") {
        return
      }

      const formId =
        "quer-ser-uma-doadora-de-ovulos-62e345ee27dfe0e9f9cb"

      const formContainer = document.getElementById(formId)

      if (!formContainer || formContainer.children.length > 0) {
        return
      }

      new window.RDStationForms(formId, "null").createForm()
    }

    const existingScript = document.getElementById(scriptId)

    if (existingScript) {
      createForm()
      return
    }

    const script = document.createElement("script")

    script.id = scriptId
    script.src =
      "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"
    script.async = true
    script.onload = createForm

    document.body.appendChild(script)

    return () => {
      const formContainer = document.getElementById(
        "quer-ser-uma-doadora-de-ovulos-62e345ee27dfe0e9f9cb"
      )

      if (formContainer) {
        formContainer.innerHTML = ""
      }
    }
  }, [])

  return (
    <section
      id="form-clinica"
      tabIndex={-1}
      className="w-full bg-peach outline-none"
    >
      <div className="container px-2.5 py-15 lg:px-25 flex flex-col items-center gap-10 lg:gap-14 lg:flex-row lg:justify-center">
        <div className="flex flex-col justify-between gap-5 lg:gap-14">
          <div className="flex flex-col gap-2.5 items-center lg:items-start text-center lg:text-start">
            <h2 className="font-rubik text-2xl md:text-[32px] font-bold uppercase leading-[150%]">
              <span className="block text-coral">{clinic.heading[0]}</span>
              <span className="block text-white">{clinic.heading[1]}</span>
            </h2>

            <p className="font-lato max-w-142 text-base lg:text-xl text-body">
              {clinic.paragraph}
            </p>
          </div>

          <div className="grid max-w-127.5 grid-cols-1 gap-5 lg:gap-x-7.5 sm:grid-cols-2">
            {clinic.steps.map((step) => (
              <div
                key={step.number}
                className="max-w-60 mx-auto lg:m-0 flex flex-col gap-2.5 overflow-hidden rounded-[10px] bg-cream p-5 shadow-[-2px_4px_8px_0px_color-mix(in_srgb,var(--color-coral)_25%,transparent)] outline-1 -outline-offset-1 outline-coral/25"
              >
                <span className="font-rubik text-[40px] lg:text-5xl font-black uppercase leading-[150%] text-coral">
                  {step.number}
                </span>

                <p className="font-lato text-sm lg:text-base text-body leading-5">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex w-full max-w-106.5 flex-col items-center overflow-hidden rounded-[10px] bg-cream p-5 lg:p-10 shadow-[0px_4px_8px_0px_color-mix(in_srgb,var(--color-coral)_25%,transparent)]"
        >
          <div
            role="main"
            id="quer-ser-uma-doadora-de-ovulos-62e345ee27dfe0e9f9cb"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}