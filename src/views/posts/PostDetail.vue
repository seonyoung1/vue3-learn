<template>
	<h2>{{ form.title }}</h2>
	<p>{{ form.content }}</p>
	<p class="text-muted">{{ form.createdAt }}</p>
	<hr class="my-4" />
	<div class="row g-2">
		<div class="col-auto">
			<button class="btn btn-outline-dark">이전글</button>
		</div>
		<div class="col-auto">
			<button class="btn btn-outline-dark">다음글</button>
		</div>
		<div class="col-auto me-auto"></div>
		<div class="col-auto">
			<button class="btn btn-outline-dark" @click="goListPage">목록</button>
		</div>
		<div class="col-auto">
			<button class="btn btn-outline-primary" @click="goEditPage">수정</button>
		</div>
		<div class="col-auto">
			<button class="btn btn-outline-danger" @click="goDeletePage">삭제</button>
		</div>
	</div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { getPostById } from '@/api/posts';
import { ref } from 'vue';

// vue router(index.js) 에서 props: true 로 설정하면 param 값을 프랍으로 받을 수 있음
const props = defineProps({
	id: Number,
});

const router = useRouter();
const form = ref({});
const goListPage = () => {
	router.push({ name: 'Posts' });
};
const goEditPage = () => {
	router.push({ name: 'PostEdit', params: { id: props.id } });
};
const goDeletePage = () => {
	console.log('삭제!');
};
const fetchPost = () => {
	const data = getPostById(props.id);
	form.value = { ...data };
};
fetchPost();
</script>
