import { Store } from "lucide-react";
import { ButtonNewStore } from "../../../../components/button-new-store";

export const CallToActionSection = () => {
  return (
    <section className="relative py-20 flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/background-call-to-action.svg')] bg-cover bg-center bg-no-repeat" />

      <div className="absolute -top-8 p-4 bg-cyan-300 rounded-full">
        <Store className="text-cyan-100 w-8 h-8" />
      </div>

      <div className="container relative">
        <div className="flex flex-col items-center gap-8 md:gap-10 text-center">
          <h2 className="font-sans text-center text-gray-100 text-balance text-heading-md md:text-heading-xl max-w-[450px]">
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>

          <ButtonNewStore />
        </div>
      </div>
    </section>
  );
};
