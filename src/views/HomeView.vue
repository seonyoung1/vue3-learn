<template>
	<h2>Home</h2>
	<p>{{ $route.path }}</p>
	<button type="button" class="btn btn-primary" @click="$router.push('/about')">Primary</button>
	<hr class="my-4" />
	<AppLists :items="items" v-slot="{ item }">
		<AppCard>{{ item }}</AppCard>
	</AppLists>
	<!--	<div v-for="(item, index) in items" :key="index" class="col-3">-->
	<!--		<AppCard>{{ item }}</AppCard>-->
	<!--	</div>-->
	<hr class="py-4" />
	<p>counter: {{ store.counter }}</p>
	<p>counter(구조분해할당): {{ counter }}</p>
	<p>double count: {{ store.doubleCount }}</p>
	<p>double count + 1: {{ store.doubleCountPlusOne }}</p>
	<button @click="increment">클릭</button>
</template>
<script>
export default {
	created() {
		// console.log(this.$person.name);
		// this.$person.say();
	},
};
</script>
<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const items = ref(['딸기', '포도', '바나나']);

const route = useRoute();
console.log(route.path);

//store
const store = useCounterStore();
// state 나 getter 는 storeToRefs 을 이용해서 구조분해할당, actions 는 바로 가져와도 됨
const { counter } = storeToRefs(store);
const { increment } = store;
</script>
