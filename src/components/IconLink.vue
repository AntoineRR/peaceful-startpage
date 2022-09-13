<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        iconName: String,
        url: String
    },
    methods: {
        openUrl() {
            let completeUrl = 'https://' + this.url;
            window.open(completeUrl);
        }
    }
})
</script>

<template>
    <button @click="openUrl">
        <font-awesome-icon :icon="iconName" size="lg" />
    </button>
</template>

<style scoped>
    button {
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        border: none;
        border-radius: 20px;
        padding: 0px;
        background-color: var(--color-frame-background);
        backdrop-filter: blur(4px);
        color: var(--color-button);
        font-size: 2.5em;
        transition: all 0.5s;
    }

    button:hover {
        color: var(--color-button-hover);
    }

    font-awesome-icon {
        width: 100%;
        height: 100%;
    }
</style>