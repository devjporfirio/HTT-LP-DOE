
"use client"

import { useEffect } from "react"

import { docsConfig } from "@/config/docs"

declare global {
  interface Window {
    RDStationForms: new (
      formId: string,
      token: string
    ) => {
      createForm: () => void
    }
  }
}

export function Section5() {
  const { donor } = docsConfig

  useEffect(() => {
    const formId =
      "como-se-tornar-uma-clinica-parceira-e757a0a2b00db95553d0"

    const scriptSrc =
      "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"

    const createForm = () => {
      if (typeof window.RDStationForms === "undefined") {
        return false
      }

      const formContainer = document.getElementById(formId)

      if (!formContainer) {
        return false
      }

      if (formContainer.children.length > 0) {
        return true
      }

      new window.RDStationForms(formId, "null").createForm()

      return true
    }

    if (createForm()) {
      return
    }

    const existingScript = document.querySelector(
      `script[src="${scriptSrc}"]`
    )

    if (existingScript) {
      const interval = window.setInterval(() => {
        if (createForm()) {
          window.clearInterval(interval)
        }
      }, 100)

      const timeout = window.setTimeout(() => {
        window.clearInterval(interval)
      }, 10000)

      return () => {
        window.clearInterval(interval)
        window.clearTimeout(timeout)
      }
    }

    const script = document.createElement("script")

    script.type = "text/javascript"
    script.src = scriptSrc
    script.async = true

    script.onload = () => {
      createForm()
    }

    document.body.appendChild(script)

    return () => {
      const formContainer = document.getElementById(formId)

      if (formContainer) {
        formContainer.innerHTML = ""
      }
    }
  }, [])

  return (
    <section
      id="form-doadora"
      tabIndex={-1}
      className="w-full bg-cream outline-none"
    >
      <div className="container px-2.5 py-15 lg:px-25 flex flex-col items-center gap-10 lg:gap-14 lg:flex-row lg:justify-center">
        <div className="flex flex-col gap-2.5 items-center lg:items-start text-center lg:text-start">
          <h2 className="font-rubik text-2xl md:text-[32px] font-bold uppercase leading-[150%]">
            <span className="block text-peach">
              {donor.heading[0]}
            </span>

            <span className="block text-coral">
              {donor.heading[1]}
            </span>
          </h2>

          <p className="max-w-129.5 text-base lg:text-xl text-body">
            {donor.paragraph}
          </p>

          <p className="max-w-129.5 text-base lg:text-xl text-body font-bold">
            {donor.highlight}
          </p>
        </div>

        <div className="flex w-full max-w-106.5 flex-col items-center overflow-hidden rounded-[10px] bg-peach p-5 lg:p-10 shadow-[0px_4px_8px_0px_color-mix(in_srgb,var(--color-coral)_25%,transparent)]">
          <div
            role="main"
            id="como-se-tornar-uma-clinica-parceira-e757a0a2b00db95553d0"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
