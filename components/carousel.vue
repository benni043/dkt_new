<script setup lang="ts">
import type {CarouselEventData, Extra, Property, PropertyType} from "~/util/types";

let props = defineProps<{
  companyList: Extra[],
  lineList: Extra[],
  propertyList: Property[],
}>()

let emit = defineEmits(["send"])

defineExpose({sendEventData})

let currentListIndex: Ref<number> = ref(0);
let currentIndex: Ref<number> = ref(0);

function sendEventData() {
  if (currentListIndex.value === 2) {
    emit("send", {
      currentIndex: currentIndex.value,
      value: props.companyList[currentIndex.value],
      type: "company" as PropertyType
    } as CarouselEventData);
    return;
  }
  if (currentListIndex.value === 1) {
    emit("send", {
      currentIndex: currentIndex.value,
      value: props.lineList[currentIndex.value],
      type: "line" as PropertyType
    } as CarouselEventData);
    return;
  }
  if (currentListIndex.value === 0) {
    emit("send", {
      currentIndex: currentIndex.value,
      value: props.propertyList[currentIndex.value],
      type: "property" as PropertyType
    } as CarouselEventData);
    return;
  }
}

function prev() {
  if (currentIndex.value === 0) {
    if (currentListIndex.value === 0) {
      currentListIndex.value = 2;
      currentIndex.value = props.companyList.length - 1;
      return;
    }
    if (currentListIndex.value === 2) {
      currentListIndex.value = 1;
      currentIndex.value = props.lineList.length - 1;
      return;
    }
    if (currentListIndex.value === 1) {
      currentListIndex.value = 0;
      currentIndex.value = props.propertyList.length - 1;
      return;
    }
  }

  currentIndex.value--;
}

function next() {
  if ((currentIndex.value + 1) == props.propertyList.length) {
    currentIndex.value = 0;
    currentListIndex.value = 1;
    return
  }

  if (currentListIndex.value == 1 && ((currentIndex.value + 1) == props.lineList.length)) {
    currentIndex.value = 0;
    currentListIndex.value = 2;
    return
  }

  if (currentListIndex.value == 2 && ((currentIndex.value + 1) == props.companyList.length)) {
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
      <CardsProperty v-if="currentListIndex == 0" :card="propertyList[currentIndex]"></CardsProperty>
      <CardsCompany v-if="currentListIndex == 1" :card="lineList[currentIndex]"></CardsCompany>
      <CardsLine v-if="currentListIndex == 2" :card="companyList[currentIndex]"></CardsLine>
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