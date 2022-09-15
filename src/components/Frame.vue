<script setup lang="ts">
import SearchBar from './SearchBar.vue';
import IconLink from './IconLink.vue';
import Datetime from './Datetime.vue';
import Quote from './Quote.vue';
</script>

<template>
    <div class="wrapper">
        <Quote class="quote" />
        <Datetime class="datetime" />
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
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 20px;
    }

    .quote {
        grid-row: 1 / 2;
        grid-column: 1 / 7;
    }

    .datetime {
        grid-row: 2 / 4;
        grid-column: 1 / 3;
    }

    .searchBar {
        grid-row: 2 / 3;
        grid-column: 3 / 7;
    }

    .iconLinks {
        grid-row: 3 / 4;
        grid-column: 3 / 7;
        display: flex;
        justify-content: space-between;
    }
</style>