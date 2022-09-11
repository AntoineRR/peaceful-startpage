<script setup lang="ts">
import SearchBar from './SearchBar.vue';
import IconLink from './IconLink.vue'; './SearchBar.vue';
</script>

<template>
    <div class="frame">
        <div class="search-bar-container">
            <SearchBar />
        </div>
        <IconLink icon-name="fa-brands fa-reddit" url="www.reddit.com" />
        <IconLink icon-name="fa-brands fa-youtube" url ="www.youtube.com" />
        <IconLink icon-name="fa-brands fa-twitch" url ="www.twitch.com" />
        <IconLink icon-name="fa-brands fa-github" url ="www.github.com" />
    </div>
</template>

<style scoped>
    .frame {
        padding: 20px;
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(4px);
    }

    .search-bar-container {
        width: 100%;
    }
</style>