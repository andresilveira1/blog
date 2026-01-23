import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";
import { PT_Sans_Caption } from "next/font/google";
import Image from "next/image";
const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
});

export const SupportSection = () => {
  return (
    <section className="relative py-12 md:py-10 bg-gradient-to-r from-gray-500 to-gray-700">
      <Image
        src="/background-support-section.svg"
        alt="Support section background"
        width={600}
        height={400}
        className="w-screen hidden md:flex"
      />
      <div className="container md:absolute top-0 right-0 left-0 bottom-0 flex flex-col items-center justify-center gap-12">
        <h2
          className={`${ptSansCaption.className}text-balance text-gray-100 text-heading-md md:text-heading-xl text-center`}
        >
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
            <div className="flex items-center justify-center rounded-lg bg-blue-300 mb-4 w-fit">
              <PaintbrushVertical className="h-5 w-5 text-white m-2" />
            </div>

            <strong
              className={`${ptSansCaption.className} text-gray-100 text-heading-sm`}
            >
              Personalize seu site
            </strong>

            <p className="text-gray-200 text-body-sm">
              Adicione sua logo, favicon, cores no seu catálogo e tenha tudo com
              a sua cara.
            </p>
          </div>

          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-cyan-300">
            <div className="flex items-center justify-center rounded-lg bg-cyan-200 mb-4 w-fit">
              <Store className="h-5 w-5 text-white m-2" />
            </div>

            <strong
              className={`${ptSansCaption.className} text-gray-100 text-heading-sm`}
            >
              Venda de qualquer loja
            </strong>

            <p className="text-gray-200 text-body-sm">
              Não importa a loja, o Site.Set permite que você insira qualquer
              link de afiliado.
            </p>
          </div>

          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
            <div className="flex items-center justify-center rounded-lg bg-blue-300 mb-4 w-fit">
              <HeartHandshake className="h-5 w-5 text-white m-2" />
            </div>

            <strong
              className={`${ptSansCaption.className} text-gray-100 text-heading-sm`}
            >
              Receba suporte amigável
            </strong>

            <p className="text-gray-200 text-body-sm">
              Nossa equipe estará sempre pronta para te atender e ajudar no que
              for preciso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
