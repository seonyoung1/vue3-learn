export default {
	install(app, options) {
		const person = {
			name: 'vue3',
			say() {
				alert(this.name);
			},
		};
		app.config.globalProperties.$person = person;
	},
};
