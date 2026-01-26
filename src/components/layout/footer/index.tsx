import Link from "next/link";
import { Logo } from "../logo";

export const Footer = () => {
  return (
    <footer className="bg-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center md:justify-between gap-12 py-8">
          <Logo />

          <nav className="flex flex-col gap-3 items-start text-body-sm text-blue-100 md:flex-row md:gap-8">
            <Link href="/termos-de-uso" className="hover:text-blue-200">
              Termos de Uso
            </Link>
            <Link
              href="/politica-de-privacidade"
              className="hover:text-blue-200"
            >
              Politica de Privacidade
            </Link>
            <Link href="/enviar-feedback" className="hover:text-blue-200">
              Enviar feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
