"use client"

import { useEffect, useState } from "react"

import { buttonVariants } from "@/components/utils/button"
import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { Icons } from "./icons"

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 flex w-full items-center justify-center bg-charcoal"
    >
      <div className="container flex w-full flex-wrap items-center justify-between gap-0 px-2.5 py-5 lg:gap-10 lg:px-15">
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
            className="text-white lg:hidden"
          >
            <Icons.menu />
          </button>
          <Icons.logo className="h-7.25 w-26.75 shrink-0" />
          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-5 lg:flex ml-10"
          >
            {docsConfig.header.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-rubik text-xs tracking-[0.48px] text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-wrap items-center gap-2.5 lg:gap-5">
          {docsConfig.header.ctas.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={buttonVariants("outline")}
            >
              <span className={item.mobileLabel ? "lg:hidden" : undefined}>
                {item.mobileLabel ?? item.label}
              </span>
              {item.mobileLabel && (
                <span className="hidden lg:inline">{item.label}</span>
              )}
            </a>
          ))}
        </div>
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className={cn(
            "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden",
            open ? "opacity-100" : "pointer-events-none opacity-0"
          )}
        />
        <nav
          id="mobile-nav"
          aria-label="Navegação mobile"
          className={cn(
            "fixed inset-y-0 left-0 z-50 flex w-72 max-w-[80%] flex-col gap-6 bg-charcoal p-6 pt-8 shadow-xl transition-transform duration-300 ease-out lg:hidden",
            open ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
            className="self-end text-white"
          >
            <Icons.close />
          </button>

          {docsConfig.header.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-rubik text-sm tracking-[0.48px] text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
