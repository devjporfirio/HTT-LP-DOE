"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <section id="404" className="relative flex items-center w-full h-dvh">
        <div className="relative z-20 flex flex-col justify-center section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-2xl leading-9 text-coral font-black font-rubik uppercase lg:text-4xl lg:leading-14">
              404
            </h1>
            <p className="max-w-2xl mx-auto mb-8 text-base leading-6 text-coral font-black font-rubik uppercase lg:text-xl lg:leading-8">
              Desculpe, a página que você procura não está disponível. Verifique
              o endereço ou volte à página inicial.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                id="back-to-home-button"
                aria-label="Voltar para a página inicial"
                rel="noopener noreferrer"
                href="/"
                className={
                  "text-xs text-white font-black font-lato uppercase w-64 h-10 px-4 py-2 bg-peach rounded-[3px] inline-flex justify-center items-center"
                }
              >
                Voltar para a Página Inicial
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
