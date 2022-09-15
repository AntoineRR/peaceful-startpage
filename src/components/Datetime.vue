<template>
    <div class="frame">
        <span class="weekday">{{ weekday }}</span>
        <span class="date">{{ date }}</span>
        <span class="time">{{ time }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            weekday: '',
            date: '',
            time: ''
        }
    },
    mounted() {
        this.setDate();
        this.setTime();
        setInterval(this.setTime, 1000);
    },
    methods: {
        setDate() {
            let today = new Date();
            let weekday = today.toLocaleDateString(undefined, {weekday: 'long'});
            let month = today.toLocaleDateString(undefined, {month: 'long'});
            let day = today.getDate();
            let year = today.getFullYear();
            this.weekday = weekday;
            this.date = day + ' ' + month + ' ' + year;
        },
        setTime() {
            let now = new Date();
            let hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
            let minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
            this.time = hours + ':' + minutes;
        }
    }
})
</script>

<style scoped>
    .frame {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding: 20px;
        border-radius: 20px;
        background-color: var(--color-frame-background);
        backdrop-filter: blur(4px);
        color: var(--color-text);
    }

    .weekday {
        font-size: 2em;
    }

    .date {
        font-size: 1.2em;
    }

    .time {
        font-size: 3em;
    }
</style>