<template>
  <MainScreen
    v-if="displayScreen === 'main'"
    @startGame="handleBeforeStartGame($event)"
  />
  <BodyScreen
    v-if="displayScreen === 'body'"
    :itemContents="settings.itemContents"
    @onFinish="handleAfterFinish()"
  />
  <ResultGame
    v-if="displayScreen === 'result'"
    :resultTime="resultTime"
    @restartGame="handleRestartGame()"
  />
  <CopyRight />
</template>

<script>
import MainScreen from "./components/MainScreen.vue";
import BodyScreen from "./components/BodyScreen.vue";
import { random } from "./hellpers/random.js";
import ResultGame from "./components/ResultGame.vue";
import CopyRight from "./components/CopyRight.vue";
export default {
  name: "App",
  components: {
    MainScreen,
    BodyScreen,
    ResultGame,
    CopyRight,
  },
  data() {
    return {
      displayScreen: "main",
      settings: {
        totalItems: 0,
        itemContents: [],
        timeStart: 0,
      },
      resultTime: 0,
    };
  },
  methods: {
    handleBeforeStartGame(config) {
      this.settings.totalItems = config.totalItems;
      const items = Array.from(
        { length: this.settings.totalItems / 2 },
        (_, i) => i + 1
      );
      const itemsClone = [...items];
      const itemsFinal = [...items, ...itemsClone];
      this.settings.itemContents = random(itemsFinal);
      this.settings.timeStart = new Date().getTime();
      this.displayScreen = "body";
    },
    handleAfterFinish() {
      this.resultTime = new Date().getTime() - this.settings.timeStart;
      this.displayScreen = "result";
    },
    handleRestartGame() {
      this.displayScreen = "main";
    },
  },
};
</script>

<style></style>
