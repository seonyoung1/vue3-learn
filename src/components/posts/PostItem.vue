<template>
	<AppCard>
		<h5 class="card-title">{{ title }}</h5>
		<p class="card-text">{{ content }}</p>
		<template v-slot:header>{{ createdAt }}</template>
	</AppCard>
	<!--	<div class="card">-->
	<!--		<div class="card-header">{{ createdAt }}</div>-->
	<!--		<div class="card-body">-->

	<!--		</div>-->
	<!--	</div>-->
</template>
<script setup>
import AppCard from '@/components/AppCard.vue';
defineProps({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
	},
	createdAt: {
		type: [String, Date, Number],
	},
});
</script>
