// biome-ignore assist/source/organizeImports: <explanation>
import Image from "next/image";
import Link from "next/link";
import type { Post } from "contentlayer/generated";

import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Avatar } from "@/components/avatar";
import { Markdown } from "@/components/markdown";
import { PostShare } from "./components/post-share";

export interface PostPageProps {
	post: Post;
}

export function PostPage({ post }: PostPageProps) {
	const publishedDate = new Date(post?.date).toLocaleDateString("pt-BR");
	const postUrl = `https://site.set/blog/${post.slug}`;

	return (
		<main className="py-28 md:py-[138px] text-gray-100">
			<div className="container space-y-12 px-4 md:px-8">
				<Breadcrumb>
					<BreadcrumbList className="text-action-sm">
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href="/blog">Blog</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>

						<BreadcrumbSeparator className="text-gray-300" />

						<BreadcrumbItem>
							<BreadcrumbPage className="text-blue-200">
								{post?.title}
							</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>

				<div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-0">
					<article className="bg-gray-600 rounded-lg overflow-hidden border border-gray-400">
						<figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
							<Image
								src={post?.image ?? ""}
								alt={post?.title ?? ""}
								fill
								className="object-cover"
							/>
						</figure>

						<header className="py-8 px-6 md:p-6 lg:py-12 lg:px-16">
							<h1 className="mb-6 md:mb-8 text-balance text-heading-lg md:text-heading-xl">
								{post?.title}
							</h1>

							<Avatar.Container>
								<Avatar.Image
									src={post?.author.avatar}
									alt={post?.title}
									size="sm"
								/>
								<Avatar.Content>
									<Avatar.Title>{post?.author.name}</Avatar.Title>

									<Avatar.Description>
										Publicado em{" "}
										<time dateTime={post.date}>{publishedDate}</time>
									</Avatar.Description>
								</Avatar.Content>
							</Avatar.Container>
						</header>

						<div className="prose prove-invert max-w-none px-6 md:px-6 lg:px-16 mb:pb-10">
							<Markdown content={post.body.raw} />
						</div>
					</article>

					<PostShare
						url={postUrl}
						title={post.title}
						description={post.description}
					/>
				</div>
			</div>
		</main>
	);
}
