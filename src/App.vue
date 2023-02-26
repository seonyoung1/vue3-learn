<template>
	<TheHeader />
	<main>
		<div class="container py-4">
			<RouterView />
		</div>
	</main>
</template>

<script setup>
// import { ref } from 'vue';
import TheHeader from '@/layouts/TheHeader.vue';
</script>

<style scoped></style>
