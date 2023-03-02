<template>
	<h2>게시글 생성</h2>
	<hr class="my-4" />
	<PostForm @submit.prevent="savePost" v-model:title="form.title" v-model:content="form.content">
		<template #actions>
			<button type="button" class="btn btn-outline-secondary" @click="goListPage">목록</button>
			<button class="btn btn-primary">저장</button>
		</template>
	</PostForm>
</template>
<script setup>
import PostForm from '@/components/posts/PostForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createPost } from '@/api/posts';
import { useAlert } from '@/hooks/alert';

// alert
const { vAlert, vSuccess } = useAlert();
const form = ref({
	title: null,
	content: null,
});
const router = useRouter();
const goListPage = () => {
	router.push({ name: 'Posts' });
};
const savePost = () => {
	try {
		const data = {
			...form.value,
			createdAt: Date.now(),
		};
		createPost(data);
		goListPage();
		vSuccess('등록완료!');
	} catch (err) {
		console.error(err);
		vAlert(err.message);
	}
};
</script>
