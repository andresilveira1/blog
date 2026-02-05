import { useRouter } from "next/router";

import { Search } from "@/components/search";
import { PostCard } from "./components/post-card";

export function BlogList() {
	const router = useRouter();
	const query = router.query.q as string;

	const pageTitle = query
		? `Resultados de busca para "${query}"`
		: "Dicas e estratégias para impulsionar seu negócio";

	return (
		<div className="flex flex-col py-24 flex-grow h-full">
			<header>
				<div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
					<div className="flex flex-col gap-3">
						<span className="uppercase text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">
							Blog
						</span>

						<h1 className="text-heading-lg md:text-heading-xl text-gray-100 text-balance text-start md:text-left max-w-2xl">
							{pageTitle}
						</h1>
					</div>
					<Search />
				</div>
			</header>

			<div className="container flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				<PostCard
					title="Transformando seu negócio em uma loja virtual"
					description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site.set é a solução perfeita para você."
					date="20/12/24"
					image="/assets/first-post.png"
					slug="/transformando"
					author={{ name: "Aspen Dokidis", avatar: "/anne-avatar.png" }}
				/>
			</div>
		</div>
	);
}
