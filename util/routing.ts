import type {Color} from "~/util/types";

export function navigateToMainMenu() {
    const router = useRouter();

    router.push({
        path: `/`,
    })
}

export function navigateToPlayerMenu(color: Color) {
    const router = useRouter();

    router.push({
        path: `/player/${color}`,
    })
}