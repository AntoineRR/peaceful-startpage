<template>
    <input type="text" v-model="searchString" @keydown.enter="search" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            searchString: ''
        }
    },
    methods: {
        search() {
            const google_address = 'https://www.google.com/search';
            let url = google_address + '?q=' + this.searchString;
            window.open(url);
            this.searchString = '';
        }
    }
})
</script>

<style scoped>
    input {
        width: 100%;
        background-color: rgba(0, 0, 0, 0);
        border: none;
        border-bottom: 1px solid;
        border-bottom-color: #606060;
        font-size: 2em;
        transition: all 0.5s;
    }

    input:focus {
        outline: none;
        border-bottom-color: #181818;
    }
</style>