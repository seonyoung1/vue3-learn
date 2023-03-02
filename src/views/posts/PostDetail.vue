<template>
	<AppLoading v-if="loading" />
	<AppError v-else-if="error" :message="error.message" />
	<template v-else>
		<h2>{{ post.title }}</h2>
		<p>{{ post.content }}</p>
		<p class="text-muted">{{ $dayjs(post.createdAt).format('YYYY-MM-DD HH:mm:ss') }}</p>
		<hr class="my-4" />
		<AppError v-if="deleteError" :message="error.message" />
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
				<button class="btn btn-outline-danger" :disabled="deleteLoading" @click="goDeletePage">
					<template v-if="deleteLoading">
						<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
						Loading...
					</template>
					<template v-else>삭제</template>
				</button>
			</div>
		</div>
	</template>
</template>
<script setup>
import AppError from '@/components/app/AppError.vue';
import AppLoading from '@/components/app/AppLoading.vue';
// import { ref } from 'vue';
import { useRouter } from 'vue-router';
// import { getPostById, deletePost } from '@/api/posts';
import { useAxios } from '@/hooks/useAxios';
import { useAlert } from '@/hooks/alert';
const { vAlert } = useAlert();
// const error = ref(null);
// const loading = ref(false);
// const deleteError = ref(null);
// const deleteLoading = ref(false);

// vue router(index.js) 에서 props: true 로 설정하면 param 값을 프랍으로 받을 수 있음
const props = defineProps({
	id: [String, Number],
});

const router = useRouter();
// const post = ref({});
const { data: post, error, loading } = useAxios(`/posts/${props.id}`);
const goListPage = () => {
	router.push({ name: 'Posts' });
};
const goEditPage = () => {
	router.push({ name: 'PostEdit', params: { id: props.id } });
};
const {
	error: deleteError,
	loading: deleteLoading,
	execute,
} = useAxios(
	`/posts/${props.id}`,
	{ method: 'delete' },
	{
		immediate: false,
		onSuccess: () => {
			vAlert('삭제완료', 'success');
			goListPage();
		},
		onError: err => {
			vAlert(err.message);
		},
	},
);
const goDeletePage = async () => {
	if (confirm('삭제하시겠습니까?')) {
		execute(props.id);
	}
	// try {
	// 	if (confirm('삭제하시겠습니까?')) {
	// 		deleteLoading.value = true;
	// 		await deletePost(props.id);
	// 		goListPage();
	// 	}
	// } catch (err) {
	// 	// console.error(err);
	// 	deleteError.value = err;
	// } finally {
	// 	deleteLoading.value = false;
	// }
};
// const fetchPost = async () => {
// 	loading.value = true;
// 	try {
// 		const { data } = await getPostById(props.id);
// 		// post.value = { ...data };
// 		setPost(data);
// 	} catch (err) {
// 		error.value = err;
// 	} finally {
// 		loading.value = false;
// 	}
// };
// const setPost = ({ title, content, createdAt }) => {
// 	post.value.title = title;
// 	post.value.content = content;
// 	post.value.createdAt = createdAt;
// };
// fetchPost();
</script>
