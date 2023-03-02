<template>
	<AppModal v-model="isShow" :isShow="modelValue" title="게시글">
		<template v-slot:default>
			<div class="row g-3">
				<div class="col-3 text-muted">제목</div>
				<div class="col-9">{{ title }}</div>
				<div class="col-3 text-muted">내용</div>
				<div class="col-9">{{ content }}</div>
				<div class="col-3 text-muted">등록일</div>
				<div class="col-9">{{ $dayjs(createdAt).format('YYYY-MM-DD HH:mm:ss') }}</div>
			</div>
		</template>
		<template #actions>
			<button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal">Close</button>
		</template>
	</AppModal>
</template>
<script setup>
import { computed } from 'vue';
const props = defineProps({
	modelValue: Boolean,
	title: String,
	content: String,
	createdAt: [Number, String],
});
const emit = defineEmits(['update:modelValue']);
const isShow = computed({
	get() {
		return props.modelValue;
	},
	set(value) {
		emit('update:modelValue', value);
	},
});
const closeModal = () => {
	isShow.value = false;
};
</script>
