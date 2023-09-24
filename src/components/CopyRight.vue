<template>
  <p class="copy-right">
    This game owned by NhatTruongNguyen -
    <a href="https://www.facebook.com/diem.xuavanay.5">facebook</a>
  </p>
</template>
<script>
export default {
  name: "CopyRight",
};
</script>
<style scoped>
.copy-right {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1.5rem;
  color: var(--light);
  z-index: 3;
  font-size: 1.5rem;
}
</style>
