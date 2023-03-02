<template>
	<transition>
		<div v-if="modelValue">
			<div class="modal-backdrop fade show"></div>
			<div class="modal fade show d-block" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<slot name="header">
								<h5 class="modal-title fs-5" id="exampleModalLabel">{{ title }}</h5>
								<button
									type="button"
									class="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
									@click="$emit('update:modelValue', false)"
								></button>
							</slot>
						</div>
						<div class="modal-body">
							<slot>내용</slot>
						</div>
						<div class="modal-footer">
							<slot name="actions"></slot>
						</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>
<script setup>
defineProps({
	modelValue: Boolean,
	// isShow: Boolean,
	// title: String,
});
defineEmits(['close', 'update:modelValue']);
</script>
<style scoped>
.v-enter-from {
	opacity: 0;
}
.v-enter-active {
	transition: opacity 0.5s ease;
}
.v-enter-to {
	opacity: 1;
	transform: translateY(0);
}
.v-leave-from {
	opacity: 1;
}
.v-leave-active {
	transition: opacity 0.5s ease;
}
.v-leave-to {
	opacity: 0;
}
</style>
