<template>
	<h2>Transition Group</h2>
	<div class="row g-3">
		<transition-group name="slide">
			<div v-for="item in lists" :key="item.id" class="col-6">
				<div class="card">
					<div class="card-body">
						<p class="card-text">{{ item.text }}</p>
						<a href="#" class="card-link" @click="() => listDelete(item.id)">Close</a>
					</div>
				</div>
			</div>
		</transition-group>
	</div>
</template>
<script setup>
import { ref } from 'vue';
const lists = ref([
	{
		id: '1',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, explicabo.',
	},
	{
		id: '2',
		text: 'Ab accusamus accusantium adipisci',
	},
	{
		id: '3',
		text: 'aliquam aspernatur aut delectus dicta doloremque',
	},
	{
		id: '4',
		text: 'excepturi facilis maxime modi',
	},
	{
		id: '5',
		text: 'natus nisi optio repellat reprehenderit',
	},
	{
		id: '6',
		text: 'repudiandae voluptatibus',
	},
]);
const listDelete = id => {
	lists.value = lists.value.filter(i => i.id !== id);
};
</script>
<style scoped>
.card {
	position: relative;
}
.slide-enter-from {
	opacity: 0;
	transform: translateY(-50px);
}
.slide-enter-active {
	transition: opacity, transform 0.5s ease;
}
.slide-enter-to {
	opacity: 1;
	transform: translateY(0);
}
.slide-leave-from {
	opacity: 1;
}
.slide-leave-active {
	transition: opacity 0.5s ease;
}
.slide-leave-to {
	opacity: 0;
}
</style>
