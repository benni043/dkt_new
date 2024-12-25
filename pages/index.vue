<script setup lang="ts">

import {navigateToPlayer} from "~/util/routing";
</script>

<template>
  <game-menu @clicked="args => navigateToPlayer(args)"></game-menu>
</template>

<style scoped>

</style>