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
import AppLists from '@/components/AppLists.vue';
import AppCard from '@/components/AppCard.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const items = ref(['딸기', '포도', '바나나']);

const route = useRoute();
console.log(route.path);
</script>
