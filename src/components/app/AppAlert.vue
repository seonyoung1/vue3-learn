<template>
	<Transition name="slide">
		<div v-if="show" class="alert app-alert col-2 text-center" :class="typeStyle" role="alert">{{ message }}</div>
	</Transition>
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
const typeStyle = computed(() => {
	return props.type === 'error' ? 'alert-danger' : 'alert-success';
});
</script>
<style scoped>
.app-alert {
	position: fixed;
	top: 70px;
	right: 10px;
}
.slide-enter-from {
	opacity: 0;
	transform: translateY(-30px);
}
.slide-enter-active {
	transition: opacity, transform 0.5s ease;
}
.slide-enter-to {
	opacity: 1;
	transform: translateY(0);
}
.slide-leave-from {
	opacity: 1;
}
.slide-leave-active {
	transition: opacity 0.5s ease;
}
.slide-leave-to {
	opacity: 0;
}
</style>
