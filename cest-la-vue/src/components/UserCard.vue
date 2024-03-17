<script setup>
import { defineProps } from 'vue';

defineProps({
    user: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <router-link :to="`/user/${user.name}`">
        <li>{{ user.name }}: {{ user.website }}</li>
    </router-link>

</template>