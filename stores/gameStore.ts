import type {Color, Extra, Game, InGameProperty, Player, PropertyType} from "~/util/types";
import {useCompanyCardStore} from "~/stores/companyCardStore";
import {useLineCardStore} from "~/stores/lineCardStore";
import {usePropertyCardStore} from "~/stores/propertyCardStore";
import {sw} from "cronstrue/dist/i18n/locales/sw";

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
        },
        addProperty(property: any, propertyType: PropertyType, color: Color) {
            switch (color) {
                case "blue":
                    switch (propertyType) {
                        case "property":
                            this.game.playerBlue!.cards.properties.push(property!)
                            break;
                        case "line":
                            this.game.playerBlue!.cards.lines.push(property!)
                            break;
                        case "company":
                            this.game.playerBlue!.cards.companies.push(property!)
                            break;
                    }
                    break;
                case "yellow":
                    switch (propertyType) {
                        case "property":
                            this.game.playerBlue!.cards.properties.push(property!)
                            break;
                        case "line":
                            this.game.playerBlue!.cards.lines.push(property!)
                            break;
                        case "company":
                            this.game.playerBlue!.cards.companies.push(property!)
                            break;
                    }
                    break;
                case "red":
                    switch (propertyType) {
                        case "property":
                            this.game.playerBlue!.cards.properties.push(property!)
                            break;
                        case "line":
                            this.game.playerBlue!.cards.lines.push(property!)
                            break;
                        case "company":
                            this.game.playerBlue!.cards.companies.push(property!)
                            break;
                    }
                    break;
                case "green":
                    switch (propertyType) {
                        case "property":
                            this.game.playerBlue!.cards.properties.push(property!)
                            break;
                        case "line":
                            this.game.playerBlue!.cards.lines.push(property!)
                            break;
                        case "company":
                            this.game.playerBlue!.cards.companies.push(property!)
                            break;
                    }
                    break;
                default:
                    break;
            }
        }
    }
})