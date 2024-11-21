import type {Cards} from "~/util/types";

export const useCardStore = defineStore("cards", {
    state: (): Cards => ({cards: {}}),
    actions: {}
})