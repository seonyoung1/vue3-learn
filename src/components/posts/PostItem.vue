<template>
	<AppCard>
		<h5 class="card-title">{{ title }}</h5>
		<p class="card-text">{{ content }}</p>
		<template v-slot:header>{{ createdAt }}</template>
		<template v-slot:footer>
			<div class="d-flex flex-row-reverse">
				<button class="btn" @click.stop="$emit('modal')">Open</button>
			</div>
		</template>
	</AppCard>
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
defineEmits(['modal']);
</script>
