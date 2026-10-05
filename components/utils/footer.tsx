import { docsConfig } from "@/config/docs";
import { Icons } from "./icons";

export function Footer() {
  const { footer } = docsConfig;

  return (
    <footer className="flex w-full flex-col items-center justify-center bg-charcoal">
      <div className="container flex w-full flex-col items-center px-5 py-10 lg:px-20">
        <div className="flex w-full flex-col items-start justify-between gap-10 lg:flex-row mb-5 pb-5 border-b border-white">
          <Icons.logo className="h-10 w-37 shrink-0" />
          <div className="flex flex-wrap justify-start gap-7 lg:gap-10 text-center lg:justify-start lg:text-left">
            <div className="flex flex-col items-start gap-2.5">
              <span className="font-rubik text-sm font-bold tracking-[0.48px] text-white">
                Endereço
              </span>
              <span className="font-rubik text-xs tracking-[0.48px] text-white text-start">
                {footer.address}
              </span>
            </div>
            <div className="flex flex-col items-start gap-2.5">
              <span className="font-rubik text-sm font-bold tracking-[0.48px] text-white">
                Email
              </span>
              <a
                href={`mailto:${footer.email}`}
                className="font-rubik text-xs tracking-[0.48px] text-white"
              >
                {footer.email}
              </a>
            </div>
            <div className="flex flex-col items-start gap-2.5">
              <span className="font-rubik text-sm font-bold tracking-[0.48px] text-white">
                Contato
              </span>
              <a
                href={footer.phone.href}
                className="font-rubik text-xs tracking-[0.48px] text-white"
              >
                {footer.phone.display}
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2.75 py-1.5 text-center">
          <span className="font-lato text-xs text-white">
            {footer.responsavelTecnico}
          </span>
          <span className="hidden h-5.5 w-px bg-white lg:inline-block" />
          <span className="font-lato text-xs text-white">
            {footer.crm}
          </span>
          <span className="hidden h-5.5 w-px bg-white lg:inline-block" />
          <span className="font-lato text-xs text-white">
            © {new Date().getFullYear()} {footer.companyName}
          </span>
        </div>
      </div>
    </footer>
  )
}
