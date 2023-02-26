<template>
	<form>
		<div class="mb-3">
			<label for="userTitle" class="form-label">제목</label>
			<input
				type="text"
				:value="title"
				@input="$emit('update:title', $event.target.value)"
				class="form-control"
				id="userTitle"
				placeholder="title"
			/>
		</div>
		<div class="mb-3">
			<label for="userContent" class="form-label">내용</label>
			<textarea
				:value="content"
				@input="$emit('update:content', $event.target.value)"
				class="form-control"
				id="userContent"
				placeholder="content"
			></textarea>
		</div>
		<hr class="my-4" />
		<div class="d-flex gap-2 justify-content-end">
			<slot name="actions"></slot>
		</div>
	</form>
</template>
<script setup>
defineProps({
	title: String,
	content: String,
});
defineEmits(['update:title', 'update:content']);
</script>
