<script setup lang="ts">
function dingDong(): void {
  console.log('DingDong!');
}
</script>

<template>
  <button class="wrapper" @click="dingDong" type="button">
    Ding-Dong!
  </button>
</template>

<style scoped lang="scss">
.wrapper {
  border-radius: 10px;
  padding: 1rem 2rem;
}
</style>
