<script setup lang="ts">
import type {Property} from "~/util/types";

const props = defineProps<{
  card: Property
}>();
</script>

<template>
  <CardsBase :color="card.color" :number="card.id" :header="card.state" :subheader="card.street">
    <template #top>
      <div class="prices">
        <CardBodyPart :text="'Miete'" :value="card.rent"></CardBodyPart>
        <CardBodyPart :text="'Miete mit 1 Haus'" :value="card.rent1House"></CardBodyPart>
        <CardBodyPart :text="'Miete mit 2 Häusern'" :value="card.rent2Houses"></CardBodyPart>
        <CardBodyPart :text="'Miete mit 3 Häusern'" :value="card.rent3Houses"></CardBodyPart>
        <CardBodyPart :text="'Miete mit 4 Häusern'" :value="card.rent4Houses"></CardBodyPart>
        <CardBodyPart :text="'Miete mit 1 Hotel'" :value="card.rent1Hotel"></CardBodyPart>
      </div>
    </template>
    <template #bottom>
      <div class="prices">
        <CardBodyPart :text="'Preis des Grundstückes'" :value="card.purchasePrice"></CardBodyPart>
        <CardBodyPart :text="'Preis des Hauses'" :value="card.housePrice"></CardBodyPart>
        <CardBodyPart :text="'Preis des Hotels und'" :value="card.hotelPrice"></CardBodyPart>
        <CardBodyText
            :text="'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rückgabe von 4 Häusern'"></CardBodyText>
      </div>
    </template>
  </CardsBase>
</template>

<style scoped>

.prices {
  p {
    font-size: 0.9rem;
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  }

  span:first-child {
    text-align: left;
  }

  span:last-child {
    text-align: right;
  }
}
</style>