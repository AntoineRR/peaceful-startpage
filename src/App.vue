<script setup lang="ts">
import Background from "./components/Background.vue";
import Frame from "./components/Frame.vue";
</script>

<template>
  <Background />
  <div class="frameWrapper">
    <Frame />
  </div>
</template>

<style scoped>
  .frameWrapper {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
</style>