import { useRouter } from "next/router";

export default function Post() {
	const router = useRouter();
	const segments = router.query.slug as string[];

	return (
		<div>
			<h2 className="text-green-400">post: {segments?.join("/")}</h2>
		</div>
	);
}
