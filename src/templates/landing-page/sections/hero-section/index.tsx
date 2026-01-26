import { Clock, Store } from "lucide-react";
import Image from "next/image";
import { ButtonNewStore } from "../../../../components/button-new-store";

export const HeroSection = () => {
  return (
    <section className="container relative flex items-center justify-center mt-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[20rem] md:h-[36rem] items-center">
        <div className="flex flex-col items-center justify-center gap-4 md:items-start">
          <h1 className="font-sans text-gray-100 text-heading-lg md:text-heading-hg text-center md:text-start ">
            Venda seus produtos como afiliado em um único lugar
          </h1>

          <div className="flex flex-col justify-center gap-2">
            <p className="flex items-center gap-2">
              <Clock className="text-cyan-100 h-4 w-4" />
              <span className="text-gray-200 text-body-sm md:text-body-md">
                Crie o seu site em menos de 5 minutos
              </span>
            </p>

            <p className="flex items-center gap-2">
              <Store className="text-cyan-100 h-4 w-4" />
              <span className="text-gray-200 text-body-sm md:text-body-md">
                Acompanhe e otimize seu negócio online
              </span>
            </p>
          </div>

          <div className="text-white flex flex-col gap-4 mt-5 items-center mb:items-start lg:items-start">
            <ButtonNewStore />

            <span className="text-gray-300 text-body-xs">
              Não precisa de cartão de crédito
            </span>
          </div>
        </div>

        <div className="relative h-[20rem] hidden md:h-full order-first md:order-last items-center justify-center md:flex">
          <Image
            src="/background-hero.svg"
            alt="Ilustração com ícones de store, tag e sacola."
            width={200}
            height={400}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};
