<template>
	<AppCard>
		<h5 class="card-title text-truncate">{{ title }}</h5>
		<p class="card-text text-truncate">{{ content }}</p>
		<template v-slot:header>{{ date }}</template>
		<template v-slot:footer>
			<div class="d-flex flex-row-reverse">
				<button class="btn" @click.stop="$emit('modal')">Open</button>
				<button class="btn" @click.stop="$emit('preview')">Detail</button>
			</div>
		</template>
	</AppCard>
</template>
<script setup>
import { computed, inject } from 'vue';

const props = defineProps({
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
defineEmits(['modal', 'preview']);
const dayjs = inject('dayjs');
const date = computed(() => dayjs(props.createdAt).format('YYYY-MM-DD HH:mm:ss'));
</script>
