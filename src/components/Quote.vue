<template>
    <div class="frame">
        <div class="quote" v-if="quote && author">
            <span>"{{ quote }}"</span>
            <span class="author">{{ author }}</span>
        </div>
        <div class="loading" v-else>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const RANDOM_QUOTE_API_PATH = '/random/';

export default defineComponent({
    data() {
        return {
            quote: '',
            author: ''
        }
    },
    mounted() {
        this.fetchQuote();
    },
    methods: {
        async fetchQuote() {
            let rawQuote = await (await fetch(import.meta.env.VITE_QUOTES_API + RANDOM_QUOTE_API_PATH)).json();
            this.quote = rawQuote.content;
            this.author = rawQuote.author;
        }
    }
})
</script>

<style scoped>
    .frame {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        max-width: 700px;
        gap: 20px;
        padding: 20px;
        border-radius: 20px;
        background-color: var(--color-frame-background);
        backdrop-filter: blur(4px);
        color: var(--color-text);
    }

    .quote {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        width: 100%;
        height: 100%;
    }

    .author {
        text-align: right;
        font-size: 1.5em;
        font-weight: bold;
    }

    .loading {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 5px;
        width: 100%;
        height: 100%;
    }

    .loading div {
        width: 10px;
        height: 10px;
        background-color: var(--color-button);
        border-radius: 50%;
        animation: pulse;
        animation-duration: 0.9s;
        animation-iteration-count: infinite;
    }

    .loading div:nth-child(2) {
        animation-delay: 0.3s;
    }

    .loading div:nth-child(3) {
        animation-delay: 0.6s;
    }

    @keyframes pulse {
        0% { background-color: var(--color-text); }
        50% { background-color:  var(--color-text-light); }
        100% { background-color: var(--color-text); }
    }
</style>