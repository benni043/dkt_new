<script setup lang="ts">

import {navigateToPlayerMenu} from "~/util/routing";
import type {CarouselEventData, Color} from "~/util/types";
import {useGameStore} from "~/stores/gameStore";

const route = useRoute()

const color = route.params.id as Color

const gameStore = useGameStore();

const carouselComponent: any = ref(null);

function receiveDataFromCarousel(data: CarouselEventData) {
  gameStore.addProperty(data.value, data.type, color);
}

function requestDataFromCarousel() {
  if (carouselComponent.value) {
    carouselComponent.value.sendEventData();
  }
}

</script>

<template>
  <button @click="navigateToPlayerMenu(color)" class="gray-button">Zurück</button>

  <carousel ref="carouselComponent"
            :property-list="gameStore.game.cards.properties"
            :company-list="gameStore.game.cards.companies"
            :line-list="gameStore.game.cards.lines"
            @send="receiveDataFromCarousel">
  </carousel>

  <button @click="requestDataFromCarousel()">Kaufen</button>
</template>

<style scoped>

</style>