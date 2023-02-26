<template>
	<h2>목록</h2>
	<hr class="my-4" />
	<div class="row g-3">
		<div v-for="post in posts" class="col-4">
			<PostItem :title="post.title" :content="post.content" :created-at="post.createdAt" @click="goPage(post.id)" />
		</div>
	</div>
	<hr class="my-4" />
	<AppCard>
		<PostDetail :id="1"></PostDetail>
	</AppCard>
</template>
<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetail from '@/views/posts/PostDetail.vue';
import AppCard from '@/components/AppCard.vue';
import { useRouter } from 'vue-router';
import { getPosts } from '@/api/posts';
import { ref } from 'vue';

const router = useRouter();
const posts = ref([]);

const fetchPosts = () => {
	posts.value = getPosts();
};
fetchPosts();
const goPage = id => {
	router.push(`/posts/${id}`);
	// router.push({ name: 'PostDetail', params: { id }, query: { searchText: 'hello' } });
};
</script>
