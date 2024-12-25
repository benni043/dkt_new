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

export function navigateToPlayer(color: Color) {
    const router = useRouter();

    router.push({
        path: `/player/${color}`,
    })
}

export function navigateToChoosePlayerMenu(color: Color) {
    const router = useRouter();

    router.push({
        path: `/player/${color}/pay-rent`,
    })
}

export function navigateToPayRent(color: Color, other_color: Color) {
    const router = useRouter();

    router.push({
        path: `/player/${color}/pay-rent/${other_color}`,
    })
}