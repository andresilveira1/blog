"use client";

import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks";

interface PostShareProps {
	url: string;
	title: string;
	description: string;
}

export const PostShare = ({ url, title, description }: PostShareProps) => {
	const { shareButtons } = useShare({
		url,
		title,
		description,
	});

	return (
		<aside className="space-y-6">
			<div className="md:px-6">
				<h2 className="font-sans hidden md:block text-heading-xs mb-5">
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
	);
};
