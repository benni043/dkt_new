<script setup lang="ts">
import type {Extra} from "~/util/types";

const props = defineProps<{
  card: Extra
}>();
</script>

<template>
  <div class="card">
    <CardHeader :id="card.id" :h1="card.type" :h2="card.name"></CardHeader>

    <div class="gap"></div>

    <div class="card-body">
      <CardBodyText :text="'Wer auf diesem Feld zu stehen kommt, hat dir die 5-fache,\n'+
'          besitzt du auch das Feld 14 (Seilbahn) oder das Feld 34 (Fluglinie\n'+
'          Wien-Venedig), die 10-fache, hast du beide Felder 14 und 34, die\n'+
'          20-fache gewürfelte Punktezahl zu bezahlen'"></CardBodyText>

      <div class="gap"></div>

      <CardBodyPart :text="'Preis des Kraftwerks'" :value="160"></CardBodyPart>
    </div>

    <CardFooter></CardFooter>
  </div>

</template>

<style scoped>
@import url("/components/cards/style.css");

.card {
  background-color: #bab0b0;
}
</style>