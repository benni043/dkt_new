import type {Extra} from "~/util/types";

interface LineCardStoreState {
    cards: Extra[];
}

export const useLineCardStore = defineStore("lineCard", {
    state: (): LineCardStoreState => ({
        cards: [
            {
                id: 18,
                type: "Linie",
                name: "Wien-Innsbruck",
            },
            {
                id: 8,
                type: "Linie",
                name: "Wien-Graz",
            },
            {
                id: 24,
                type: "Linie",
                name: "Glocknerstraße",
            },
            {
                id: 13,
                type: "Linie",
                name: "Wien-Budapest",
            },
        ]
    })
})