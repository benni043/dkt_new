<script setup lang="ts">

import {navigateToPlayerMenu} from "~/util/routing";
import type {Color} from "~/util/types";
import {useGameStore} from "~/stores/gameStore";

const route = useRoute()

const color = route.params.id as Color

const gameStore = useGameStore();

</script>

<template>
  <button @click="navigateToPlayerMenu(color)" class="gray-button">Zurück</button>

  <carousel :property-list="gameStore.game.cards.properties"
            :company-list="gameStore.game.cards.companies"
            :line-list="gameStore.game.cards.lines">
  </carousel>

  <button>Kaufen</button>
</template>

<style scoped>

</style>