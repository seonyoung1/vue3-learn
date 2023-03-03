// import { reactive } from 'vue';
import { useAlertStore } from '@/stores/alert';
import { storeToRefs } from 'pinia';

// const alerts = reactive({
// 	show: false,
// 	message: '',
// 	type: '',
// });
export function useAlert() {
	const { show, message, type } = storeToRefs(useAlertStore());
	const { vAlert, vSuccess } = useAlertStore();
	return {
		show,
		message,
		type,
		vAlert,
		vSuccess,
	};
}

// const vAlert = (message, type = 'error') => {
// 	// alerts.value.push({ message, type });
// 	// setTimeout(() => {
// 	// 	alerts.value.shift();
// 	// }, 2000);
// 	alerts.show = true;
// 	alerts.message = message;
// 	alerts.type = type;
//
// 	setTimeout(() => {
// 		alerts.show = false;
// 	}, 2000);
// };
// const vSuccess = message => vAlert(message, 'success');
