import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostList from '@/views/posts/PostList.vue';
import PostCreate from '@/views/posts/PostCreate.vue';
import PostDetail from '@/views/posts/PostDetail.vue';
import PostEdit from '@/views/posts/PostEdit.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'About',
		component: AboutView,
	},
	{
		path: '/posts',
		name: 'Posts',
		component: PostList,
	},
	{
		path: '/posts/create',
		name: 'PostCreate',
		component: PostCreate,
	},
	{
		path: '/posts/:id',
		name: 'PostDetail',
		component: PostDetail,
	},
	{
		path: '/posts/:id/edit',
		name: 'PostEdit',
		component: PostEdit,
	},
];
const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
