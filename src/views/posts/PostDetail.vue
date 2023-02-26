<template>
	<h2>{{ post.title }}</h2>
	<p>{{ post.content }}</p>
	<p class="text-muted">{{ post.createdAt }}</p>
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getPostById, deletePost } from '@/api/posts';

// vue router(index.js) 에서 props: true 로 설정하면 param 값을 프랍으로 받을 수 있음
const props = defineProps({
	id: [String, Number],
});

const router = useRouter();
const post = ref({});
const goListPage = () => {
	router.push({ name: 'Posts' });
};
const goEditPage = () => {
	router.push({ name: 'PostEdit', params: { id: props.id } });
};
const goDeletePage = async () => {
	try {
		if (confirm('삭제하시겠습니까?')) {
			await deletePost(props.id);
			goListPage();
		}
	} catch (err) {
		console.error(err);
	}
};
const fetchPost = async () => {
	try {
		const { data } = await getPostById(props.id);
		// post.value = { ...data };
		setPost(data);
	} catch (err) {
		console.error(err);
	}
};
const setPost = ({ title, content, createdAt }) => {
	post.value.title = title;
	post.value.content = content;
	post.value.createdAt = createdAt;
};
fetchPost();
</script>
