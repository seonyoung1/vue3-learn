<template>
	<TheHeader />
	<main>
		<div class="container py-4">
			<RouterView />
		</div>
	</main>
	<AppAlert :items="alerts" />
</template>

<script setup>
// import { ref } from 'vue';
import TheHeader from '@/layouts/TheHeader.vue';
import { useAlert } from '@/hooks/alert';

const { alerts } = useAlert();
</script>

<style scoped></style>
