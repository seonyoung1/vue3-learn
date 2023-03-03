<template>
	<Transition name="slide">
		<div v-if="show" class="alert app-alert col-2 text-center" :class="typeStyle(type)" role="alert">{{ message }}</div>
	</Transition>
	<p>{{ alerts }}</p>
</template>
<script setup>
import { useAlert } from '@/hooks/alert';
const { show, message, type } = useAlert();
const typeStyle = type => {
	return type === 'error' ? 'alert-danger' : 'alert-success';
};
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
