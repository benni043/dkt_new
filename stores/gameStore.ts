import type {Color, Game, Player, PropertyType} from "~/util/types";
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
    players: new Map<Color, Player>([["blue", player1], ["red", player1]]),
};

export const useGameStore = defineStore("game", {
    state: (): GameStoreState => ({
        game: game
    }),
    actions: {
        updatePlayerMoney(color: Color, amount: number) {
            this.game.players.get(color)!.money += amount;
        },
        addProperty(property: any, propertyType: PropertyType, color: Color) {
            switch (propertyType) {
                case "property":
                    this.game.players.get(color)!.cards.properties.push(property!);
                    this.game.cards.properties.splice(this.game.cards.properties.indexOf(property), 1);
                    break;
                case "line":
                    this.game.players.get(color)!.cards.lines.push(property!);
                    this.game.cards.lines.splice(this.game.cards.lines.indexOf(property), 1);
                    break;
                case "company":
                    this.game.players.get(color)!.cards.companies.push(property!);
                    this.game.cards.companies.splice(this.game.cards.companies.indexOf(property), 1);
                    break;
            }
        }
    }
})