<template>
	<AppError v-if="editError" :message="editError.message" />
	<AppLoading v-if="loading" />
	<AppError v-else-if="error" :message="error.message" />
	<template v-else>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<PostForm @submit.prevent="editPost" v-model:title="form.title" v-model:content="form.content">
			<template #actions>
				<button type="button" class="btn btn-outline-danger" @click="goDetailPage()">취소</button>
				<button class="btn btn-primary" :disabled="editLoading">
					<template v-if="editLoading">
						<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
						Loading...
					</template>
					<template v-else>수정</template>
				</button>
			</template>
		</PostForm>
	</template>
</template>
<script setup>
import AppError from '@/components/app/AppError.vue';
import AppLoading from '@/components/app/AppLoading.vue';
import PostForm from '@/components/posts/PostForm.vue';
// import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// import { getPostById, updatePost } from '@/api/posts';
import { useAlert } from '@/hooks/alert';
import { useAxios } from '@/hooks/useAxios';

const { vAlert, vSuccess } = useAlert();
// const error = ref(null);
// const loading = ref(false);
// const editError = ref(null);
// const editLoading = ref(false);

const route = useRoute();
const router = useRouter();
const id = route.params.id;
// const form = ref({
// 	title: null,
// 	content: null,
// });
const { data: form, error, loading } = useAxios(`/posts/${id}`);
// const fetchPost = async () => {
// 	try {
// 		loading.value = true;
// 		const { data } = await getPostById(id);
// 		setEdit(data);
// 	} catch (err) {
// 		error.value = err;
// 	} finally {
// 		loading.value = false;
// 	}
// };
// const setEdit = ({ title, content, createdAt }) => {
// 	form.value.title = title;
// 	form.value.content = content;
// 	form.value.createdAt = createdAt;
// };
// fetchPost();
const goDetailPage = () => {
	router.push({ name: 'PostDetail', params: { id } });
};
const {
	error: editError,
	loading: editLoading,
	execute,
} = useAxios(
	`/posts/${id}`,
	{ method: 'patch' },
	{
		immediate: false,
		onSuccess: () => {
			goDetailPage();
			vSuccess('수정완료~');
		},
		onError: err => {
			vAlert(err.message);
		},
	},
);
const editPost = () => {
	execute({ ...form.value });
	// try {
	// 	editLoading.value = true;
	// 	await updatePost(id, { ...form.value });
	// 	vSuccess('수정완료~');
	// 	goDetailPage();
	// } catch (err) {
	// 	editError.value = err;
	// 	vAlert(err.message);
	// } finally {
	// 	editLoading.value = false;
	// }
};

// alert
// const alertShow = ref(false);
// const alertMessage = ref('');
// const alertType = ref('');
// const eventAlert = (message, type = 'error') => {
// 	alertShow.value = true;
// 	alertMessage.value = message;
// 	alertType.value = type;
// 	setTimeout(() => {
// 		alertShow.value = false;
// 	}, 2000);
// };
</script>
