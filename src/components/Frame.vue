<script setup lang="ts">
import SearchBar from './SearchBar.vue';
import IconLink from './IconLink.vue';
</script>

<template>
    <div class="wrapper">
        <SearchBar class="searchBar" />
        <div class="iconLinks">
            <div v-for="icon in icons">
                <IconLink :icon-name="icon.icon_name" :url="icon.url" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                icons: [
                    {icon_name: "fa-brands fa-reddit", url: "www.reddit.com"},
                    {icon_name: "fa-brands fa-youtube", url: "www.youtube.com"},
                    {icon_name: "fa-brands fa-twitch", url: "www.twitch.com"},
                    {icon_name: "fa-brands fa-github", url: "www.github.com"},
                ]
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 20px;
    }

    .searchBar {
        grid-row: 1 / 2;
        grid-column: 1 / 5;
    }

    .iconLinks {
        grid-row: 2 / 3;
        grid-column: 1 / 5;
        display: flex;
        justify-content: space-between;
    }
</style>