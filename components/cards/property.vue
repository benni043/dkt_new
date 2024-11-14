<script setup lang="ts">
import type {Extra, Property} from "~/util/types";

const props = defineProps<{
  card: Property
}>();
</script>

<template>
  <div class="card" :class="card.color">
    <CardHeader :id="card.id" :h1="card.state" :h2="card.street"></CardHeader>

    <div class="gap"></div>

    <div class="card-body">
      <div class="prices">
        <CardBodyPart :text="'Miete'" :value="card.rent"></CardBodyPart>
        <CardBodyPart  :text="'Miete mit 1 Haus'" :value="card.rent1House"></CardBodyPart >
        <CardBodyPart  :text="'Miete mit 2 Häusern'" :value="card.rent2Houses"></CardBodyPart >
        <CardBodyPart  :text="'Miete mit 3 Häusern'" :value="card.rent3Houses"></CardBodyPart >
        <CardBodyPart  :text="'Miete mit 4 Häusern'" :value="card.rent4Houses"></CardBodyPart >
        <CardBodyPart  :text="'Miete mit 1 Hotel'" :value="card.rent1Hotel"></CardBodyPart >
      </div>

      <div class="gap"></div>

      <div class="prices">
        <CardBodyPart  :text="'Preis des Grundstückes'" :value="card.purchasePrice"></CardBodyPart >
        <CardBodyPart  :text="'Preis des Hauses'" :value="card.housePrice"></CardBodyPart >
        <CardBodyPart  :text="'Preis des Hotels und'" :value="card.hotelPrice"></CardBodyPart >
        <CardBodyText
            :text="'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rückgabe von 4 Häusern'"></CardBodyText>
      </div>
    </div>

    <CardFooter></CardFooter>
  </div>

</template>

<style scoped>
@import url("/components/cards/style.css");

.light_blue {
  background-color: #41d2ef !important;
}

.dark_blue {
  background-color: #174cd1 !important;
}

.dark_yellow {
  background-color: #a57e00 !important;
}

.pink {
  background-color: #fa7ac7 !important;
}

.dark_green {
  background-color: #0b8318 !important;
}

.red {
  background-color: #ba190a !important;
}

.light_yellow {
  background-color: #f8d018 !important;
}

.orange {
  background-color: #dd661a !important;
}

</style>