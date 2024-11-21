<script setup lang="ts">
import type {Extra} from "~/util/types";

const props = defineProps<{
  card: Extra
}>();
</script>

<template>
  <CardsBase color="default" :number="card.id" :header="card.type" :subheader="card.name">
    <template #top>
      <CardBodyText :text="'Besitzt du von den Verkehrslinien 8, 13, 18, 24 nur eine, erhältst du'"></CardBodyText>

      <CardBodyPart :text="'an Fahrgeld'" :value="20"></CardBodyPart>
      <CardBodyPart :text="'2 in Deinem Besitz'" :value="40"></CardBodyPart>
      <CardBodyPart :text="'3 in Deinem Besitz'" :value="80"></CardBodyPart>
      <CardBodyPart :text="'4 in Deinem Besitz'" :value="160"></CardBodyPart>
    </template>
    <template #bottom>
      <CardBodyPart :text="'Preis dieser Linie'" :value="160"></CardBodyPart>
    </template>
  </CardsBase>
</template>

<style scoped>

</style>