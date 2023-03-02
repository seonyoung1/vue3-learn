import { reactive } from 'vue';

const alerts = reactive({
	show: false,
	message: '',
	type: '',
});
export function useAlert() {
	const vAlert = (message, type = 'error') => {
		// alerts.value.push({ message, type });
		// setTimeout(() => {
		// 	alerts.value.shift();
		// }, 2000);
		alerts.show = true;
		alerts.message = message;
		alerts.type = type;

		setTimeout(() => {
			alerts.show = false;
		}, 2000);
	};
	const vSuccess = message => vAlert(message, 'success');
	return {
		alerts,
		vAlert,
		vSuccess,
	};
}
