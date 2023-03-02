<template>
	<h2>게시글 생성</h2>
	<hr class="my-4" />
	<AppError v-if="error" :message="error.message" />
	<PostForm @submit.prevent="savePost" v-model:title="form.title" v-model:content="form.content">
		<template #actions>
			<button type="button" class="btn btn-outline-secondary" @click="goListPage">목록</button>
			<button class="btn btn-primary" :disabled="loading">
				<template v-if="loading">
					<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
					Loading...
				</template>
				<template v-else>저장</template>
			</button>
		</template>
	</PostForm>
</template>
<script setup>
import AppError from '@/components/app/AppError.vue';
import PostForm from '@/components/posts/PostForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// import { createPost } from '@/api/posts';
import { useAlert } from '@/hooks/alert';
import { useAxios } from '@/hooks/useAxios';

// const error = ref(null);
// const loading = ref(false);
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
const { error, loading, execute } = useAxios(
	'/posts',
	{ method: 'post' },
	{
		immediate: false,
		onSuccess: () => {
			goListPage();
			vSuccess('등록완료!');
		},
		onError: err => {
			vAlert(err.message);
		},
	},
);
const savePost = () => {
	execute({ ...form.value, createdAt: Date.now() });
};
// const savePost = async () => {
// 	try {
// 		loading.value = true;
// 		const data = {
// 			...form.value,
// 			createdAt: Date.now(),
// 		};
// 		await createPost(data);
// 		goListPage();
// 		vSuccess('등록완료!');
// 	} catch (err) {
// 		error.value = err;
// 		vAlert(err.message);
// 	} finally {
// 		loading.value = false;
// 	}
// };
</script>
