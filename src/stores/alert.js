import { defineStore } from 'pinia';

export const useAlertStore = defineStore('alert', {
	state: () => ({
		show: false,
		message: '',
		type: '',
	}),
	actions: {
		vAlert(message, type = 'error') {
			this.show = true;
			this.message = message;
			this.type = type;

			// setTimeout(() => {
			// 	this.show = false;
			// }, 2000);
		},
		vSuccess(message) {
			this.vAlert(message, 'success');
		},
	},
});
