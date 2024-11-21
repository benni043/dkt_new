<script setup lang="ts">
defineProps<{
  number: number;
  header: string;
  subheader: string;
  color: string | "default"
}>();
</script>

<template>
  <div class="card" :class="color">
    <div class="card-header">
      <span class="card-number">{{ number }})</span>
      <h3>{{ header }}</h3>
      <hr/>
      <p><b>{{ subheader }}</b></p>
    </div>

    <div class="gap"></div>

    <div class="card-body">
      <slot name="top"></slot>
      <div class="gap"></div>
      <slot name="bottom"></slot>
    </div>

    <div class="card-footer">
      <p>Österreich</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  &.default {
    background-color: #bab0b0;
  }

  &.light_blue {
    background-color: #41d2ef !important;
  }

  &.dark_blue {
    background-color: #174cd1 !important;
  }

  &.dark_yellow {
    background-color: #a57e00 !important;
  }

  &.pink {
    background-color: #fa7ac7 !important;
  }

  &.dark_green {
    background-color: #0b8318 !important;
  }

  &.red {
    background-color: #ba190a !important;
  }

  &.light_yellow {
    background-color: #f8d018 !important;
  }

  &.orange {
    background-color: #dd661a !important;
  }

  position: relative;
  border-radius: 10px;
  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.2);
  font-family: 'Arial', sans-serif;
  border: 12px solid whitesmoke;

  width: 240px;
  height: 53vh;
  padding: 20px;

  .card-header {
    text-align: center;
    margin-bottom: 10px;

    .card-number {
      position: absolute;
      top: 10px;
      left: 10px;
      font-weight: bold;
      font-size: 1rem;
    }

    h3 {
      margin: 0;
      font-size: 1.5rem;
    }

    hr {
      margin: 5px 0;
      border: 0;
      height: 1px;
      background: #000;
    }

    p {
      margin: 0;
      font-size: 1rem;
    }
  }

  .card-body {
    li {
      font-size: 0.9rem;
      margin: 5px 0;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
  }

  .card-footer {
    text-align: center;
    margin-top: 30px;
    font-size: 0.8rem;

    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }

  .gap {
    height: 1rem;
  }
}
</style>