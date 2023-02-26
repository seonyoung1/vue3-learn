<template>
	<h2>목록</h2>
	<hr class="my-4" />
	<PostFilter v-model:title="params.title_like" v-model:limit="params._limit"></PostFilter>
	<hr class="my-4" />
	<AppLists :items="posts" col-class="col-4">
		<template v-slot="{ item }">
			<PostItem :title="item.title" :content="item.content" :created-at="item.createdAt" @click="goPage(item.id)" />
		</template>
	</AppLists>
	<AppPagination :currentPage="params._page" :pageCount="pageCount" @page="goPagination"></AppPagination>
	<template v-if="posts && posts.length > 0">
		<hr class="my-5" />
		<AppCard>
			<PostDetail :id="posts[0].id"></PostDetail>
		</AppCard>
	</template>
</template>
<script setup>
import { ref, computed, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { getPosts } from '@/api/posts';
import PostItem from '@/components/posts/PostItem.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import AppLists from '@/components/AppLists.vue';
import AppCard from '@/components/AppCard.vue';
import AppPagination from '@/components/AppPagination.vue';
import PostDetail from '@/views/posts/PostDetail.vue';

const router = useRouter();
const posts = ref([]);
const params = ref({
	_sort: 'createdAt',
	_order: 'desc',
	_page: 1,
	_limit: 3,
	title_like: '',
});
// pagination
const totalCount = ref(0);
const pageCount = computed(() => Math.ceil(totalCount.value / params.value._limit));
const fetchPosts = async () => {
	try {
		const { data, headers } = await getPosts(params.value);
		posts.value = data;
		totalCount.value = headers['x-total-count'];
	} catch (err) {
		console.log(err);
	}
};

fetchPosts();
// fetchPosts 에서 사용한 반응형 상태가 변경되었을 때 다시 실행해줌
watchEffect(fetchPosts);
const goPage = id => {
	router.push(`/posts/${id}`);
	// router.push({ name: 'PostDetail', params: { id }, query: { searchText: 'hello' } });
};

const goPagination = page => {
	params.value._page = page;
};
</script>
