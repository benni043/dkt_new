<script setup lang="ts">
defineProps<{
  text: string
}>();
</script>

<template>
  <div class="prices">
    <p><span>{{ text }}</span></p>
  </div>
</template>

<style scoped>
.prices {
  font-family: 'Arial', sans-serif;
  padding: 0 10px;
  font-size: 0.9rem;
  text-align: justify;
}

.prices p {
  margin: 0;
}

</style>