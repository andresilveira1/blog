/** biome-ignore-all assist/source/organizeImports: <explanation> */
import { PT_Sans_Caption } from "next/font/google";
import { allPosts } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

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
import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks";

const ptSansCaption = PT_Sans_Caption({
	subsets: ["latin"],
	weight: "700",
});

export function PostPage() {
	const router = useRouter();
	const slug = router.query.slug as string;
	const post = allPosts.find(
		(post) => post.slug.toLowerCase() === slug.toLowerCase(),
	)!;

	const publishedDate = new Date(post?.date).toLocaleDateString("pt-BR");
	const postUrl = `https://site.set/blog/${slug}`;

	const { shareButtons } = useShare({
		url: postUrl,
		title: post.title,
		text: post.description,
	});

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

					<aside className="space-y-6">
						<div className="md:px-6">
							<h2
								className={`${ptSansCaption.className} hidden md:block text-heading-xs mb-5`}
							>
								Compartilhar
							</h2>

							<div className="flex justify-between md:flex-col gap-2">
								{shareButtons.map((provider) => (
									<Button
										variant="outline"
										onClick={() => provider.action()}
										key={provider.provider}
										className="w-fit md:w-full justify-start gap-2 [&_svg]:size-4"
									>
										{provider.icon}
										<span className="hidden md:block">{provider.name}</span>
									</Button>
								))}
							</div>
						</div>
					</aside>
				</div>
			</div>
		</main>
	);
}
