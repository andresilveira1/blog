import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className="antialiased min-h-screen bg-black items-center justify-center flex">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
