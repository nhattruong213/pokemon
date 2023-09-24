<template>
  <div class="screen">
    <h1>POKEMON</h1>
    <p>Vui lòng chọn chế độ chơi để bắt đầu</p>
    <div class="action">
      <button @click="startGame(16)">
        <span>Dễ</span>
        <span>4x4</span>
      </button>
      <button @click="startGame(36)">
        <span>Thường</span>
        <span>6x6</span>
      </button>
      <button @click="startGame(64)">
        <span>Khó</span>
        <span>8x8</span>
      </button>
      <button @click="startGame(100)">
        <span>Siêu khó</span>
        <span>10x10</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "MainScreen",
  methods: {
    startGame(totalItems) {
      this.$emit("startGame", { totalItems: totalItems });
    },
  },
};
</script>
<style lang="css" scoped>
.screen {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--light);
}

.screen h1 {
  font-size: 4.5rem;
  text-transform: uppercase;
}

.screen p {
  font-size: 2rem;
}

.action {
  display: flex;
  margin-top: 2rem;
}

.action button {
  font: var(--font);
  width: 150px;
  height: 150px;
  background: transparent;
  box-shadow: none;
  border: 1px solid var(--light);
  color: var(--light);
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  margin: 0 1rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

.action button:hover {
  background-color: var(--light);
  color: var(--dark);
}

.action button span:first-child {
  font-size: 2rem;
}

.action button span:last-child {
  display: block;
  font-size: 1.25rem;
  margin-top: 0.5rem;
}
</style>
