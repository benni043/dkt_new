<script setup lang="ts">
const props = defineProps<{
  id: number,
  h1: string,
  h2: string
}>();
</script>

<template>
  <div class="card-header">
    <span class="card-number">{{ id }})</span>
    <h3>{{ h1 }}</h3>
    <hr/>
    <p><b>{{ h2 }}</b></p>
  </div>
</template>

<style scoped>
.card-number {
  position: absolute;
  top: 10px;
  left: 10px;
  font-weight: bold;
  font-size: 1rem;
}

.card-header {
  text-align: center;
  margin-bottom: 10px;
}

.card-header h3 {
  margin: 0;
  font-size: 1.5rem;
}

.card-header hr {
  margin: 5px 0;
  border: 0;
  height: 1px;
  background: #000;
}

.card-header p {
  margin: 0;
  font-size: 1rem;
}

</style>