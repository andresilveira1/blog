"use client";

import { Inbox } from "lucide-react";
import type { Post } from "contentlayer/generated";

import { Search } from "@/components/search";
import { PostCard } from "./components/post-card";
import { useSearchParams } from "next/navigation";

export interface BlogListProps {
	posts: Post[];
}

export function BlogList({ posts }: BlogListProps) {
	const searchParams = useSearchParams();
	const query = searchParams?.get("q") ?? "";

	const pageTitle = query
		? `Resultados de busca para "${query}"`
		: "Dicas e estratégias para impulsionar seu negócio";

	const postsList = query
		? posts.filter((post) =>
				post.title.toLowerCase()?.includes(query.toLowerCase()),
			)
		: posts;

	const hasPosts = postsList.length > 0;

	return (
		<div className="flex flex-col py-24 flex-grow h-full">
			<header className="pb-6 md:pb-14">
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

			{hasPosts && (
				<div className="container flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{postsList.map((post) => {
						return (
							<PostCard
								key={post._id}
								title={post.title}
								description={post.description}
								date={new Date(post.date).toLocaleDateString("pt-BR")}
								image={post.image}
								slug={post.slug}
								author={{ name: post.author.name, avatar: post.author.avatar }}
							/>
						);
					})}
				</div>
			)}

			{!hasPosts && (
				<div className="container px-8">
					<div className="flex flex-col items-center justify-center gap-8 border-dashed border-2 border-gray-300 p-8 md:p-12 rounded-lg">
						<Inbox className="h-12 w-12 text-cyan-100" />
						<p className="text-gray-100 text-center">Nenhum post encontrado.</p>
					</div>
				</div>
			)}
		</div>
	);
}
