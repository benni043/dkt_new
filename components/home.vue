<script setup lang="ts">

</script>

<template>
  <div class="circle-container">
    <div class="circle">
      <button class="btn top-btn"></button>
      <button class="btn left-btn"></button>
      <button class="btn right-btn"></button>
      <button class="btn bottom-btn"></button>
    </div>
  </div>
</template>

<style scoped>
.circle-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.circle {
  position: relative;
  width: 50vw;
  height: 50vw;
  border-radius: 50%;
  background-image: url("/public/dkt(1).png");
  background-position: center;
  background-repeat: no-repeat;
}

.btn {
  position: absolute;
  width: 5vw;
  height: 5vw;
  border-radius: 50%;
  border: none;
  cursor: pointer;
}

.top-btn, .bottom-btn, .left-btn, .right-btn {
  border: black solid 0.2vw;
}

.top-btn {
  top: -2vw;
  left: 50%;
  transform: translateX(-50%);
  background-color: blue;
}

.bottom-btn {
  bottom: -2vw;
  left: 50%;
  transform: translateX(-50%);
  background-color: green;
}

.left-btn {
  left: -3vw;
  top: 50%;
  transform: translateY(-50%);
  background-color: yellow;
}

.right-btn {
  right: -3vw;
  top: 50%;
  transform: translateY(-50%);
  background-color: red;
}

</style>