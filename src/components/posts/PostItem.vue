<template>
	<div class="card">
		<div class="card-header">{{ createdAt }}</div>
		<div class="card-body">
			<h5 class="card-title">{{ title }}</h5>
			<p class="card-text">{{ content }}</p>
		</div>
	</div>
</template>
<script setup>
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
