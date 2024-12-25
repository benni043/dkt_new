import type {Color, Game, InGameProperty, Player, Property, PropertyType} from "~/util/types";
import {useCompanyCardStore} from "~/stores/companyCardStore";
import {useLineCardStore} from "~/stores/lineCardStore";
import {usePropertyCardStore} from "~/stores/propertyCardStore";

interface GameStoreState {
    game: Game;
}

const companyCardStore = useCompanyCardStore();
const lineCardStore = useLineCardStore();
const propertyCardStore = usePropertyCardStore();

let player1 = {
    cards: {companies: [], lines: [], properties: []},
    color: "blue",
    hasEscapePrisonCard: false,
    lockCount: 0,
    money: 1500
} as Player;

let player2 = {
    cards: {companies: [], lines: [], properties: []},
    color: "red",
    hasEscapePrisonCard: false,
    lockCount: 0,
    money: 1500
} as Player;

let game: Game = {
    availableHotels: 8,
    availableHouses: 32,
    cards: {
        companies: companyCardStore.cards,
        lines: lineCardStore.cards,
        properties: propertyCardStore.cards
    },
    players: new Map<Color, Player>([["blue", player1], ["red", player2]]),
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
                    this.game.players.get(color)!.cards.properties.push({
                        property: property!,
                        houseCount: 0,
                        hotelCount: 0
                    } as InGameProperty);
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
        },
        getPropertyFromPlayerById(color: Color, id: number): InGameProperty {
            for (let property of this.game.players.get(color)!.cards.properties) {
                if (property.property.id === id) {
                    return property
                }
            }

            throw new Error();
        },
        payRent(property: any, propertyType: PropertyType, payingColor: Color, toBePayedColor: Color) {
            let money = 0;

            switch (propertyType) {
                case "property":
                    let inGameProperty = this.getPropertyFromPlayerById(toBePayedColor, property.id);

                    let houseCount: number = inGameProperty.houseCount;
                    let hotelCount: number = inGameProperty.hotelCount;

                    if (hotelCount === 0) {
                        switch (houseCount) {
                            case 1:
                                money = inGameProperty.property.rent1House;
                                break;
                            case 2:
                                money = inGameProperty.property.rent2Houses;
                                break;
                            case 3:
                                money = inGameProperty.property.rent3Houses;
                                break;
                            case 4:
                                money = inGameProperty.property.rent4Houses;
                                break;
                            default:
                                money = inGameProperty.property.rent;
                                break;
                        }
                    } else {
                        money = inGameProperty.property.rent1Hotel;
                    }

                    this.game.players.get(toBePayedColor)!.money += money;
                    this.game.players.get(payingColor)!.money -= money;

                    break;
                case "line":
                    let lineCount = this.game.players.get(toBePayedColor)!.cards.lines.length;

                    switch (lineCount) {
                        case 1:
                            money = 20;
                            break;
                        case 2:
                            money = 40;
                            break;
                        case 3:
                            money = 80;
                            break;
                        default:
                            money = 160;
                            break;
                    }

                    this.game.players.get(toBePayedColor)!.money += money;
                    this.game.players.get(payingColor)!.money -= money;

                    break;
                case "company":
                    //todo dice
                    let dice = 5;

                    let companyCount = this.game.players.get(toBePayedColor)!.cards.companies.length;

                    switch (companyCount) {
                        case 1:
                            money = dice * 5;
                            break;
                        case 2:
                            money = dice * 10;
                            break;
                        default:
                            money = dice * 20;
                            break;
                    }

                    this.game.players.get(toBePayedColor)!.money += money;
                    this.game.players.get(payingColor)!.money -= money;

                    break;
            }
        }
    }
})