<template>
  <div class="card" :class="{ disabled: isDisabled }" :style="styleItem">
    <div
      class="card__inner"
      :class="{ 'is-rote': isRote }"
      @click="onToggleItem"
    >
      <div class="card__face card__face--front">
        <div class="card__content" :style="styleFaceImg"></div>
      </div>
      <div class="card__face card__face--back">
        <div
          class="card__content"
          :style="{
            backgroundImage: `url(${require('@/assets/' + imgBackFaceUrl)})`,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ItemN",
  data() {
    return {
      isRote: false,
      isDisabled: false,
    };
  },
  props: {
    imgBackFaceUrl: {
      type: String,
      required: true,
    },
    item: {
      type: [String, Number, Object, Array],
      required: true,
    },
    itemContents: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onToggleItem() {
      if (this.isDisabled) return;
      this.isRote = !this.isRote;
      if (this.isRote) {
        this.$emit("onRote", this.item);
      }
    },
    onCloseItem() {
      this.isRote = false;
    },
    handleDisableItem() {
      this.isDisabled = true;
    },
  },
  computed: {
    styleItem() {
      const height =
        (window.innerHeight - 16 - 16 * 4) /
          Math.sqrt(this.itemContents.length) -
        16;
      const ratio = 3 / 4;
      return {
        height: `${height}px`,
        width: `${height * ratio}px`,
      };
    },
    styleFaceImg() {
      const height =
        ((window.innerHeight - 16 - 16 * 4) /
          Math.sqrt(this.itemContents.length) -
          16) /
        3;
      return {
        backgroundSize: `${height}px ${height}px`,
      };
    },
  },
};
</script>
<style lang="css" scoped>
.card {
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1rem;
}
.card__inner {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}
.card__inner.is-rote {
  transform: rotateY(-180deg);
}
.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}
.card__face--back {
  background-color: var(--light);
  transform: rotateY(-180deg);
}
.card__face--front .card__content {
  background: url("../assets/images/icon_back.png") no-repeat center center;
  height: 100%;
  width: 100%;
}
.card__face--back .card__content {
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
}

.card.disabled .card__inner {
  cursor: default;
}
</style>
