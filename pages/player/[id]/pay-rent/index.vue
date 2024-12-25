<script setup lang="ts">

import type {Color} from "~/util/types";
import {navigateToPayRent} from "~/util/routing";

const route = useRoute()

const color = route.params.id as Color

</script>

<template>
  <game-menu @clicked="args => navigateToPayRent(color, args)"></game-menu>
</template>

<style scoped>

</style>