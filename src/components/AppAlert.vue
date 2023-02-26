<template>
	<div v-if="show" class="alert app-alert col-2 text-center" :class="typeClass" role="alert">{{ message }}</div>
</template>
<script setup>
import { computed } from 'vue';

const props = defineProps({
	show: {
		type: Boolean,
		default: false,
	},
	message: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		default: '',
		validator: value => ['success', 'error'].includes(value),
	},
});
const typeClass = computed(() => {
	return props.type === 'error' ? 'alert-danger' : 'alert-success';
});
</script>
<style scoped>
.app-alert {
	position: fixed;
	top: 70px;
	right: 10px;
}
</style>
