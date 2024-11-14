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
      <CardBodyText :text="'Besitzt du von den Verkehrslinien 8, 13, 18, 24 nur eine, erhältst du'"></CardBodyText>

      <CardBodyPart :text="'an Fahrgeld'" :value="20"></CardBodyPart>
      <CardBodyPart :text="'2 in Deinem Besitz'" :value="40"></CardBodyPart>
      <CardBodyPart :text="'3 in Deinem Besitz'" :value="80"></CardBodyPart>
      <CardBodyPart :text="'4 in Deinem Besitz'" :value="160"></CardBodyPart>

      <div class="gap"></div>

      <CardBodyPart :text="'Preis dieser Linie'" :value="160"></CardBodyPart>
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