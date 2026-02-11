import { useCallback, useMemo } from "react";
import { Link } from "lucide-react";

import {
	socialProviders,
	type ShareConfig,
	type SocialProvider,
} from "./social-providers";
import { useClipboard } from "../clipboard";

interface UseShareProps extends ShareConfig {
	clipboardTimeOut?: number;
}

export const useShare = ({
	url,
	title,
	text,
	clipboardTimeOut = 2000,
}: UseShareProps) => {
	const { isCopied, handleCopy } = useClipboard({ timeout: clipboardTimeOut });

	const shareConfig = useMemo(
		() => ({
			url,
			...(title && { title }),
			...(text && { text }),
		}),
		[text, title, url],
	);

	const share = useCallback(
		async (provider: SocialProvider) => {
			try {
				if (provider === "clipboard") {
					return await handleCopy(url);
				}

				const providerConfig = socialProviders[provider];

				if (!provider) {
					throw new Error(`Provider não suportado: ${provider}}`);
				}

				const shareUrl = providerConfig.shareUrl(shareConfig);
				const shareWindow = window.open(
					shareUrl,
					"_blank",
					"width=600,height=600,location=yes,status=yes",
				);

				return !!shareWindow;
			} catch (error) {
				console.error(error);

				return false;
			}
		},
		[shareConfig, handleCopy, url],
	);

	const shareButtons = useMemo(
		() => [
			...Object.entries(socialProviders).map(([key, provider]) => ({
				provider: key,
				name: provider.name,
				icon: provider.icon,
				action: () => share(key as SocialProvider),
			})),
			{
				provider: "clipboard",
				name: isCopied ? "Link copiado!" : "Copiar link",
				icon: <Link />,
				action: () => share("clipboard"),
			},
		],
		[share, isCopied],
	);

	return {
		shareButtons,
	};
};
