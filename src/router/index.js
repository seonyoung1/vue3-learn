import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostList from '@/views/posts/PostList.vue';
import PostCreate from '@/views/posts/PostCreate.vue';
import PostDetail from '@/views/posts/PostDetail.vue';
import PostEdit from '@/views/posts/PostEdit.vue';
import NotFound from '@/views/NotFound.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOne from '@/views/nested/NestedOne.vue';
import NestedTwo from '@/views/nested/NestedTwo.vue';
import NestedHome from '@/views/nested/NestedHome.vue';
import MyPage from '@/views/MyPage.vue';

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
		props: true,
		// props: route => {
		// 	return {
		// 		id: parseInt(route.params.id),
		// 	};
		// },
	},
	{
		path: '/posts/:id/edit',
		name: 'PostEdit',
		component: PostEdit,
	},
	{
		path: '/nested',
		name: 'NestedView',
		component: NestedView,
		children: [
			{
				path: '',
				name: 'NestedHome',
				component: NestedHome,
			},
			{
				path: 'one',
				name: 'NestedOne',
				component: NestedOne,
			},
			{
				path: 'two',
				name: 'NestedTwo',
				component: NestedTwo,
			},
		],
	},
	{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
	{
		path: '/my',
		name: 'MyPage',
		component: MyPage,
		beforeEnter: (to, from) => {
			console.log('to', to);
			console.log('from', from);
			return '/';
		},
	},
];
const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

// router.beforeEach((to, from, next) => {
// 	if (to.name === 'MyPage') {
// 		// return false;
// 		return { name: 'Home' };
// 	}
// });

export default router;
