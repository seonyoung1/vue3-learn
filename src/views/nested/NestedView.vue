<template>
	<div>
		<ul class="nav nav-pills">
			<li class="nav-item">
				<RouterLink to="/nested/one" active-class="active" class="nav-link">Nested one</RouterLink>
			</li>
			<li class="nav-item">
				<RouterLink to="/nested/two" active-class="active" class="nav-link">Nested two</RouterLink>
			</li>
		</ul>
		<hr class="my-4" />
		<RouterView />
	</div>
</template>
<script></script>
