import Image from "next/image";
import { ButtonNewStore } from "../../../../components/button-new-store";
import { Card } from "../../../../components/card";
import { FeatureMessage } from "./feature-message";
import { Tag } from "./tag";

export const FeatureSection = () => {
  return (
    <section className="container bg-gray-700 flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-6 pb-[72px] pt-10 md:py-10">
      <div className="flex flex-col gap-3 md:flex-row md:gap-6 md:col-span-2">
        <Card className="bg-gray-500">
          <Tag>Simples</Tag>

          <FeatureMessage>
            Crie um catálogo de produtos online em poucos minutos
          </FeatureMessage>
        </Card>

        <Card className="bg-gray-500">
          <Tag>Prático</Tag>

          <FeatureMessage>
            Venda para seu público através de uma plataforma única
          </FeatureMessage>
        </Card>
      </div>

      <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 rounded-lg bg-gray-500 p-6 md:p-12">
        <div className="flex flex-col gap-4 md:gap-3 max-w-[342px]">
          <Tag>Personalizável</Tag>

          <FeatureMessage>
            Tenha uma loja online personalizada com a cara da sua marca
          </FeatureMessage>

          <ButtonNewStore className="hidden mt-4 w-fit md:mt-auto md:flex" />
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <div className="w-full max-w-md overflow-hidden">
            <Image
              src="/feature-section.svg"
              alt="Features"
              width={440}
              height={330}
              className="object-cover w-full"
            />
          </div>

          <ButtonNewStore className="w-full mt-4 md:hidden" />
        </div>
      </div>
    </section>
  );
};
