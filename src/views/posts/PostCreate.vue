<template>
	<h2>게시글 생성</h2>
	<hr class="my-4" />
	<form>
		<div class="mb-3">
			<label for="userTitle" class="form-label">제목</label>
			<input type="text" class="form-control" id="userTitle" placeholder="title" />
		</div>
		<div class="mb-3">
			<label for="userContent" class="form-label">내용</label>
			<textarea class="form-control" id="userContent" placeholder="content"></textarea>
		</div>
		<div>
			<button type="button" class="btn btn-outline-secondary me-2" @click="goListPage">목록</button>
			<button type="button" class="btn btn-primary">저장</button>
		</div>
	</form>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goListPage = () => {
	router.push({ name: 'Posts' });
};
</script>
