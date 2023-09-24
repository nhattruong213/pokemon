<template>
  <div class="screen">
    <div class="screen__inner" :style="styleCreen">
      <ItemN
        v-for="(item, index) in itemContents"
        :key="index"
        :imgBackFaceUrl="`images/${item}.png`"
        :item="{ index, value: item }"
        :ref="`item-${index}`"
        @onRote="handleRule($event)"
        :itemContents="itemContents"
        :rules="rules"
      />
    </div>
  </div>
</template>
<script>
import ItemN from "./ItemN.vue";
export default {
  name: "BodyScreen",
  components: {
    ItemN,
  },
  props: {
    itemContents: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      rules: [],
    };
  },
  methods: {
    handleRule(item) {
      if (this.rules.length === 2) return;
      this.rules.push(item);
      if (
        this.rules.length === 2 &&
        this.rules[0].value === this.rules[1].value
      ) {
        // truong hop dung
        // dissble su kien click vao hai the dung
        // reset rules
        this.$refs[`item-${this.rules[0].index}`][0].handleDisableItem();
        this.$refs[`item-${this.rules[1].index}`][0].handleDisableItem();
        this.rules = [];
        const disabledEl = document.querySelectorAll(".screen .card.disabled");
        if (disabledEl && disabledEl.length === this.itemContents.length - 2) {
          setTimeout(() => {
            this.$emit("onFinish");
          }, 1000);
        }
      } else if (
        this.rules.length === 2 &&
        this.rules[0].value !== this.rules[1].value
      ) {
        // truong hop sai
        // bc 1: dong hai the lai
        // bc 2: reset lai mang rules
        setTimeout(() => {
          this.$refs[`item-${this.rules[0].index}`][0].onCloseItem();
          this.$refs[`item-${this.rules[1].index}`][0].onCloseItem();
          this.rules = [];
        }, 500);
      } else {
        return;
      }
    },
  },
  computed: {
    styleCreen() {
      const hItem =
        (window.innerHeight - 16 - 16 * 4) /
          Math.sqrt(this.itemContents.length) -
        16;
      const ratio = 3 / 4;
      const wItem = hItem * ratio;
      return {
        width: `${(wItem + 16) * Math.sqrt(this.itemContents.length)}px`,
      };
    },
  },
};
</script>
<style scoped>
.screen {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: var(--dark);
  color: var(--light);
}
.screen__inner {
  display: flex;
  flex-wrap: wrap;
  margin: 2rem auto;
}
</style>
