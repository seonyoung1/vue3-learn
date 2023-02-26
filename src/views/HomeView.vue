<template>
	<h2>Home</h2>
	<p>{{ $route.path }}</p>
	<button type="button" class="btn btn-primary" @click="$router.push('/about')">Primary</button>
</template>
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.path);
</script>
