<script setup lang="ts">
import Background from "./components/Background.vue";
import Frame from "./components/Frame.vue";
</script>

<template>
  <Background />
  <div class="wrapper">
    <Frame />
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    min-width: 100%;
    min-height: 100%;
    justify-content: center;
    align-items: center;
  }
</style>