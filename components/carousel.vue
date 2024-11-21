<script setup lang="ts">

import {useCardStore} from "~/stores/cards";

let currentListIndex: Ref<number> = ref(0);
let currentIndex: Ref<number> = ref(0);

const store = useCardStore();

function prev() {
  if (currentIndex.value === 0) {
    if (currentListIndex.value === 0) {
      currentListIndex.value = 2;
      currentIndex.value = store.lines.length - 1;
      return;
    }
    if (currentListIndex.value === 2) {
      currentListIndex.value = 1;
      currentIndex.value = store.companies.length - 1;
      return;
    }
    if (currentListIndex.value === 1) {
      currentListIndex.value = 0;
      currentIndex.value = store.properties.length - 1;
      return;
    }
  }

  currentIndex.value--;
}

function next() {
  if ((currentIndex.value + 1) == store.properties.length) {
    currentIndex.value = 0;
    currentListIndex.value = 1;
    return
  }

  if (currentListIndex.value == 1 && ((currentIndex.value + 1) == store.companies.length)) {
    currentIndex.value = 0;
    currentListIndex.value = 2;
    return
  }

  if (currentListIndex.value == 2 && ((currentIndex.value + 1) == store.lines.length)) {
    currentIndex.value = 0;
    currentListIndex.value = 0;
    return
  }

  currentIndex.value++;
}
</script>

<template>
  <div class="carousel-container">
    <button @click="prev()" class="arrow left">&lt;</button>

    <div class="carousel-wrapper">
      <CardsProperty v-if="currentListIndex == 0" :card="store.properties[currentIndex]"></CardsProperty>
      <CardsCompany v-if="currentListIndex == 1" :card="store.companies[currentIndex]"></CardsCompany>
      <CardsLine v-if="currentListIndex == 2" :card="store.lines[currentIndex]"></CardsLine>
    </div>

    <button @click="next()" class="arrow right">&gt;</button>
  </div>

</template>

<style scoped>
.carousel-container {
  display: flex;
  align-items: center;
}

.arrow {
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  padding: 10px 15px;
  margin: 15px;
  cursor: pointer;
  font-size: 24px;
  border-radius: 50%;
}

.arrow:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

</style>