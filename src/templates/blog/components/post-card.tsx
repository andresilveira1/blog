import Image from "next/image";
import Link from "next/link";

export const PostCard = () => {
  return (
    <Link
      href={"/blog"}
      className="w-full max-w-2xl rounded-3xl border border-gray-400 bg-gray-600 overflow-hidden transition-all duration-300 hover:border-blue-300"
    >
      <div className="p-2 rounded-md overflow-hidden">
        <div className="relative mb-2">
          <div className="absolute top-0 right-0 bg-gray-600 w-fit px-[10px] py-[6px] rounded-bl-lg ">
            <span className="text-body-xs text-gray-300">20/12/24</span>
          </div>

          <Image
            src="/assets/first-post.png"
            alt=""
            width={288}
            height={144}
            className="object-cover object-center bg-no-repeat overflow-hidden w-full rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-2 p-2">
          <h2 className="text-heading-sm text-gray-100 line-clamp-3">
            Transformando seu negócio em uma loja virtual
          </h2>

          <p className="truncate text-body-sm text-gray-300 line-clamp-3">
            Se você está buscando uma maneira simples e eficaz de vender seus
            produtos online, o Site.Set é a solução perfeita para você. Criar
            uma loja virtual de sucesso nunca foi tão fácil. Com nossa
            plataforma intuitiva, você pode criar um site profissional para sua
            loja em minutos, sem precisar de conhecimentos técnicos.
          </p>

          <div className="flex items-center gap-2 border-t border-gray-400 py-4">
            <div className="relative h-5 w-5 md:h-6 md:w-6 overflow-hidden rounded-full border border-blue-200x">
              <Image
                src="/anne-avatar.png"
                alt=""
                fill
                className="object-cover rounded-mb"
              />
            </div>

            <span className="text-body-sm text-gray-300">Annette Bone</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
