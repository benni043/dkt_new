<script setup lang="ts">

import type {Color} from "~/util/types";

function navigateToPlayer(color: Color) {
  const router = useRouter();

  router.push({
    path: `/player/${color}`,
  })
}

</script>

<template>
  <div class="circle-container">
    <div class="circle">
      <button @click="navigateToPlayer('blue')" class="btn top-btn"></button>
      <button @click="navigateToPlayer('yellow')" class="btn left-btn"></button>
      <button @click="navigateToPlayer('red')" class="btn right-btn"></button>
      <button @click="navigateToPlayer('green')" class="btn bottom-btn"></button>
    </div>
  </div>
</template>

<style scoped>
.circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  height: 50vw;
  background-image: url("/public/dkt(1).png");
  background-position: center;
  background-repeat: no-repeat;
}

.btn {
  position: absolute;
  width: 5vw;
  height: 5vw;
  border-radius: 50%;
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