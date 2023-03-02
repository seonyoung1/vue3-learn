<template>
	<h2>목록</h2>
	<hr class="my-4" />
	<PostFilter v-model:title="params.title_like" v-model:limit="params._limit"></PostFilter>
	<hr class="my-4" />
	<AppLoading v-if="loading" />
	<AppError v-else-if="error" :message="error.message" />
	<template v-else>
		<AppLists :items="posts" col-class="col-4">
			<template v-slot="{ item }">
				<PostItem
					:title="item.title"
					:content="item.content"
					:created-at="item.createdAt"
					@click="goPage(item.id)"
					@modal="openModal(item)"
				/>
			</template>
		</AppLists>
		<AppPagination :currentPage="params._page" :pageCount="pageCount" @page="goPagination"></AppPagination>
	</template>

	<Teleport to="#modal">
		<PostModal v-model="isShow" :title="modal.title" :content="modal.content" :createdAt="modal.createdAt" />
	</Teleport>
	<template v-if="posts && posts.length > 0">
		<hr class="my-5" />
		<AppCard>
			<PostDetail :id="posts[0].id"></PostDetail>
		</AppCard>
	</template>
</template>
<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import PostModal from '@/components/posts/PostModal.vue';
import PostDetail from '@/views/posts/PostDetail.vue';
import AppError from '@/components/app/AppError.vue';
import AppLoading from '@/components/app/AppLoading.vue';
import { ref, computed, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAxios } from '@/hooks/useAxios';
// import { getPosts } from '@/api/posts';

const router = useRouter();
// const error = ref(null);
// const loading = ref(false);
// const posts = ref([]);
const params = ref({
	_sort: 'createdAt',
	_order: 'desc',
	_page: 1,
	_limit: 3,
	title_like: '',
});
const { data: posts, error, loading, response } = useAxios('/posts', { params });

// const fetchPosts = async () => {
// 	try {
// 		loading.value = true;
// 		const { data, headers } = await getPosts(params.value);
// 		posts.value = data;
// 		totalCount.value = headers['x-total-count'];
// 	} catch (err) {
// 		// console.log(err);
// 		error.value = err;
// 	} finally {
// 		loading.value = false;
// 	}
// };
// fetchPosts();
// fetchPosts 에서 사용한 반응형 상태가 변경되었을 때 다시 실행해줌
// watchEffect(fetchPosts);

console.log(response);
// pagination
// const totalCount = ref(0);
const totalCount = computed(() => response.value.headers['x-total-count']);
const pageCount = computed(() => Math.ceil(totalCount.value / params.value._limit));

const goPage = id => {
	router.push(`/posts/${id}`);
	// router.push({ name: 'PostDetail', params: { id }, query: { searchText: 'hello' } });
};
const goPagination = page => {
	params.value._page = page;
};

//modal
const isShow = ref(false);
const modal = reactive({
	title: '',
	content: '',
	createdAt: '',
});
const openModal = ({ title, content, createdAt }) => {
	isShow.value = true;
	modal.title = title;
	modal.content = content;
	modal.createdAt = createdAt;
};
</script>
