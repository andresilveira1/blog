import Image from "next/image";
import Link from "next/link";

type Author = {
	name: string;
	avatar: string;
};

type PostCardProps = {
	slug: string;
	title: string;
	description: string;
	image: string;
	date: string;
	author: Author;
};

export const PostCard = ({
	slug,
	title,
	description,
	image,
	date,
	author,
}: PostCardProps) => {
	return (
		<Link
			href={`/blog${slug}}`}
			className="w-full max-w-2xl rounded-xl border border-gray-400 bg-gray-600 overflow-hidden transition-all duration-300 hover:border-blue-300"
		>
			<div className="p-2 rounded-md overflow-hidden">
				<div className="relative mb-2">
					<div className="absolute top-0 right-0 bg-gray-600 w-fit px-[10px] py-[6px] rounded-bl-[10px] backdrop-blur-sm">
						<span className="text-body-xs text-gray-300">{date}</span>
					</div>

					<Image
						src={image}
						alt={title}
						width={288}
						height={144}
						className="object-cover object-center bg-no-repeat overflow-hidden w-full rounded-lg h-36"
					/>
				</div>

				<div className="flex flex-col gap-2 p-2">
					<h2 className="text-heading-sm text-gray-100 line-clamp-3">
						{title}
					</h2>

					<p className="text-body-sm text-gray-300 line-clamp-3">
						{description}
					</p>

					<div className="flex items-center gap-2 border-t border-gray-400 py-4">
						<div className="relative h-5 w-5 md:h-6 md:w-6 overflow-hidden rounded-full border border-blue-200x">
							<Image
								src={author.avatar}
								alt={`Imagem de ${author.name}`}
								fill
								className="object-cover rounded-mb"
							/>
						</div>

						<span className="text-body-sm text-gray-300">{author.name}</span>
					</div>
				</div>
			</div>
		</Link>
	);
};
