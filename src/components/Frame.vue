<script setup lang="ts">
import SearchBar from './SearchBar.vue'; './SearchBar.vue';
</script>

<template>
    <div class="frame">
        <SearchBar />
    </div>
</template>

<style scoped>
    .frame {
        padding: 20px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(4px);
    }
</style>