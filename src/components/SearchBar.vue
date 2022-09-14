<template>
    <div class="frame">
        <button @click="changeSearchEngine">
            <font-awesome-icon :icon="searchEngines[currentSearchEngine].icon" size="lg" />
        </button>
        <input type="text" v-model="searchString" @keyup.enter="search" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            searchString: '',
            searchEngines: [
                {icon: 'fa-brands fa-duckduckgo', url: 'https://www.duckduckgo.com/?q='},
                {icon: 'fa-brands fa-google', url: 'https://www.google.com/search?q='},
            ],
            currentSearchEngine: 0
        }
    },
    methods: {
        search() {
            let url = this.searchEngines[this.currentSearchEngine].url + this.searchString;
            window.open(url);
            this.searchString = '';
        },
        changeSearchEngine() {
            this.currentSearchEngine = (this.currentSearchEngine + 1) % this.searchEngines.length;
        }
    }
})
</script>

<style scoped>
    .frame {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        padding: 20px;
        border-radius: 20px;
        background-color: var(--color-frame-background);
        backdrop-filter: blur(4px);
    }

    button {
        justify-content: center;
        align-items: center;
        height: max-content;
        max-height: 100%;
        color: var(--color-button);
        border: solid 1px;
        border-radius: 50%;
        border-color: var(--color-button);
        padding: 5px;
        background-color: rgba(0, 0, 0, 0);
        font-size: 2em;
        transition: all 0.5s;
    }

    button:hover {
        color: var(--color-button-hover);
        border-color: var(--color-button-hover);
    }

    input {
        flex: 1;
        background-color: rgba(0, 0, 0, 0);
        border: none;
        border-bottom: 1px solid;
        border-bottom-color: #606060;
        font-family: inherit;
        font-size: 1.5em;
        transition: all 0.5s;
    }

    input:focus {
        outline: none;
        border-bottom-color: #181818;
    }
</style>