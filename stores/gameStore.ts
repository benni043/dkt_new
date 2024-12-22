import type {Color, Game, Player} from "~/util/types";
import {useCompanyCardStore} from "~/stores/companyCardStore";
import {useLineCardStore} from "~/stores/lineCardStore";
import {usePropertyCardStore} from "~/stores/propertyCardStore";

interface GameStoreState {
    game: Game;
}

const companyCardStore = useCompanyCardStore();
const lineCardStore = useLineCardStore();
const propertyCardStore = usePropertyCardStore();

let player1: Player = {
    cards: {companies: [], lines: [], properties: []},
    color: "blue",
    hasEscapePrisonCard: false,
    lockCount: 0,
    money: 1500
};

let player2: Player = {
    cards: {companies: [], lines: [], properties: []},
    color: "red",
    hasEscapePrisonCard: false,
    lockCount: 0,
    money: 1500
};

let game: Game = {
    availableHotels: 8,
    availableHouses: 32,
    cards: {
        companies: companyCardStore.cards,
        lines: lineCardStore.cards,
        properties: propertyCardStore.cards
    },
    playerBlue: player1,
    playerYellow: player2,
    playerRed: undefined,
    playerGreen: undefined
};

export const useGameStore = defineStore("game", {
    state: (): GameStoreState => ({
        game: game
    }),
    actions: {
        updatePlayerMoney(color: Color, amount: number) {
            switch (color) {
                case "blue":
                    this.game.playerBlue!.money += amount;
                    break;
                case "yellow":
                    this.game.playerYellow!.money += amount;
                    break;
                case "red":
                    this.game.playerRed!.money += amount;
                    break;
                case "green":
                    this.game.playerGreen!.money += amount;
                    break;
                default:
                    break;
            }
        }
    }
})