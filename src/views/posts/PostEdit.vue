<template>
	<h2>게시글 수정</h2>
	<hr class="my-4" />
	<PostForm @submit.prevent="editPost" v-model:title="form.title" v-model:content="form.content">
		<template #actions>
			<button type="button" class="btn btn-outline-danger" @click="goDetailPage()">취소</button>
			<button class="btn btn-primary">수정</button>
		</template>
	</PostForm>
	<AppAlert :show="alertShow" :message="alertMessage" :type="alertType"></AppAlert>
</template>
<script setup>
import PostForm from '@/components/posts/PostForm.vue';
import AppAlert from '@/components/AppAlert.vue';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';

const route = useRoute();
const router = useRouter();
const id = route.params.id;
const form = ref({
	title: null,
	content: null,
});
const fetchPost = async () => {
	try {
		const { data } = await getPostById(id);
		setEdit(data);
	} catch (err) {
		console.error(err);
	}
};
const setEdit = ({ title, content, createdAt }) => {
	form.value.title = title;
	form.value.content = content;
	form.value.createdAt = createdAt;
};
const goDetailPage = () => {
	router.push({ name: 'PostDetail', params: { id } });
};
fetchPost();
const editPost = async () => {
	try {
		await updatePost(id, { ...form.value });
		eventAlert('수정완료~', 'success');
		// goDetailPage();
	} catch (err) {
		console.log(err);
	}
};

// alert
const alertShow = ref(false);
const alertMessage = ref('');
const alertType = ref('');
const eventAlert = (message, type = 'error') => {
	alertShow.value = true;
	alertMessage.value = message;
	alertType.value = type;
	setTimeout(() => {
		alertShow.value = false;
	}, 2000);
};
</script>
