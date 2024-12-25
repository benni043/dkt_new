<script setup lang="ts">

import type {Color, Player} from "~/util/types";
import {useGameStore} from "~/stores/gameStore";
import {navigateToChoosePlayerMenu, navigateToMainMenu} from "~/util/routing";

let props = defineProps<{
  color: Color
}>();

const gameStore = useGameStore();

let player: Player = gameStore.game.players.get(props.color)!;

function navigateToGetProperty() {
  const router = useRouter();

  router.push({
    path: `/player/${player?.color}/get-property`,
  })
}

function completedRound() {
  gameStore.updatePlayerMoney(props.color, 200);
}

</script>

<template>
  <div>
    <div class="color-circle" :style="{'background-color': color}"></div>

    <h2>{{ player?.money }} $</h2>

    <div id="menu">
      <button @click="navigateToMainMenu()" class="gray-button">Zurück</button>
      <div></div>

      <button @click="navigateToGetProperty()">Grundstück kaufen</button>
      <button @click="navigateToChoosePlayerMenu(color)">Miete bezahlen</button>
      <button>Haus bauen</button>
      <button>Hotel bauen</button>

      <div></div>
      <div></div>

      <button @click="completedRound()" class="green-button">Über Los ziehen</button>
      <button class="green-button">Aus dem Gefängnis</button>
      <button class="green-button">Vermögensabgabe</button>
      <button class="green-button">Gehe ins Gefängnis</button>

      <div></div>
      <div></div>

      <button class="yellow-button">BANK</button>
      <button class="red-button">RISIKO</button>
    </div>
  </div>

</template>

<style scoped>
div {
  text-align: center;
  margin-top: 20px;
  font-family: Arial, sans-serif;
}

.color-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: inline-block;
  margin-bottom: 10px;
  border: 2px solid #000;
}

#menu {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin: 20px auto;
  max-width: 400px;
}

button {
  background-color: #3498db;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button:hover {
  background-color: #2980b9;
  transform: scale(1.05);
}

button:active {
  background-color: #1d6fa5;
}

#menu button {
  width: 100%;
}

button:focus {
  outline: none;
}

.gray-button {
  background-color: gray;
}

.gray-button:hover {
  background-color: #6f6f6f;
}

.gray-button:active {
  background-color: #5a5a5a;
}

.yellow-button {
  background-color: #dada02;
}

.yellow-button:hover {
  background-color: #f1c40f;
}

.yellow-button:active {
  background-color: #d4ac0d;
}

.green-button {
  background-color: #2ecc71;
}

.green-button:hover {
  background-color: #27ae60;
}

.green-button:active {
  background-color: #229954;
}

.red-button {
  background-color: #e74c3c;
}

.red-button:hover {
  background-color: #c0392b;
}

.red-button:active {
  background-color: #962d22;
}

</style>