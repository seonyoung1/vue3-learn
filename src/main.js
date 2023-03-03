import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/style.scss';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import dayjs from './plugins/dayjs';
// import funcPlugins from './plugins/func';
// import person from './plugins/person';
// import globalComponents from './plugins/global-components';

const app = createApp(App);
// app.use(globalComponents);
// app.use(funcPlugins);
// app.use(person);
app.use(dayjs);
app.use(router);
app.use(createPinia());
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';

// console.log(import.meta.env.MODE);
// console.log(import.meta.env.VITE_APP_API_URL);
