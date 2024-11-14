<script setup lang="ts">
const props = defineProps<{
  text: string
  value: number
}>();
</script>

<template>
  <p>
    <span>{{ text }}</span> <span><b>{{ value }},-</b></span>
  </p>
</template>

<style scoped>
p {
  font-family: 'Arial', sans-serif;
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

</style>