<template>
	<header>
		<nav class="navbar navbar-expand-sm bg-primary navbar-dark">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">LEARN</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto">
						<li class="nav-item">
							<RouterLink to="/" active-class="active" class="nav-link" aria-current="page">Home</RouterLink>
						</li>
						<li class="nav-item">
							<RouterLink to="/about" active-class="active" class="nav-link">Link</RouterLink>
						</li>
						<li class="nav-item">
							<RouterLink to="/posts" active-class="active" class="nav-link">Posts</RouterLink>
						</li>
						<li class="nav-item">
							<RouterLink to="/nested" active-class="active" class="nav-link">Nested</RouterLink>
						</li>
					</ul>
					<form class="d-flex" role="search">
						<button class="btn btn-outline-light" type="button" @click="goPage">New</button>
					</form>
				</div>
			</div>
		</nav>
	</header>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goPage = () => {
	router.push('/posts/create');
};
</script>
