<script setup lang="ts">

import type {Game, Player} from "~/util/types";
import {useCompanyCardStore} from "~/stores/companyCardStore";
import {useLineCardStore} from "~/stores/lineCardStore";
import {usePropertyCardStore} from "~/stores/propertyCardStore";

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
  player1: player1,
  player2: player2,
  player3: undefined,
  player4: undefined
};

</script>

<template>
  <game-menu></game-menu>
</template>

<style scoped>

</style>