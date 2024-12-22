<script setup lang="ts">
import type {Color} from "~/util/types";

const route = useRoute()

const color = route.params.id as Color
</script>

<template>
  <player-menu :color="color"></player-menu>
</template>

<style scoped>

</style>