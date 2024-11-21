<script setup lang="ts">
import type {Extra} from "~/util/types";

const props = defineProps<{
  card: Extra
}>();
</script>

<template>
  <CardsBase color="default" :number="card.id" :header="card.type" :subheader="card.name">
    <template #top>
      <CardBodyText :text="'Wer auf diesem Feld zu stehen kommt, hat dir die 5-fache,\n'+
'          besitzt du auch das Feld 14 (Seilbahn) oder das Feld 34 (Fluglinie\n'+
'          Wien-Venedig), die 10-fache, hast du beide Felder 14 und 34, die\n'+
'          20-fache gewürfelte Punktezahl zu bezahlen'">
      </CardBodyText>
    </template>
    <template #bottom>
      <CardBodyPart :text="'Preis des Kraftwerks'" :value="160"></CardBodyPart>
    </template>
  </CardsBase>
</template>

<style scoped>

</style>