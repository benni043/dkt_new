<script setup lang="ts">

import {useGameStore} from "~/stores/gameStore";
import {navigateToPlayerMenu} from "~/util/routing";
import type {CarouselEventData, Color, Property} from "~/util/types";

const route = useRoute()

const myColor = route.params.id as Color;
const othersColor = route.params.other_id as Color;

const gameStore = useGameStore();

const carouselComponent: any = ref(null);

function receiveDataFromCarousel(data: CarouselEventData) {
  gameStore.payRent(data.value, data.type, myColor, othersColor);
}

function requestDataFromCarousel() {
  if (carouselComponent.value) {
    carouselComponent.value.sendEventData();
  }
}

function getProperties(): Property[] {
  return (gameStore.game.players.get(othersColor)!.cards.properties).map((inGameProperty) => inGameProperty.property)
}

</script>

<template>
  <button @click="navigateToPlayerMenu(myColor)" class="gray-button">Zurück</button>

  <carousel ref="carouselComponent"
            :property-list="getProperties()"
            :company-list="gameStore.game.players.get(othersColor)!.cards.companies"
            :line-list="gameStore.game.players.get(othersColor)!.cards.lines"
            @send="receiveDataFromCarousel">
  </carousel>

  <button @click="requestDataFromCarousel()">Miete bezahlen</button>
</template>

<style scoped>

</style>