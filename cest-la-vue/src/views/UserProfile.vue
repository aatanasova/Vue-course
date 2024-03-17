<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()

</script>

<template>
    <h1>User profile</h1>
    <div>
        <p>{{ route.params.name }}</p>
    </div>
</template>