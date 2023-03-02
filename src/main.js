import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/style.scss';
import router from './router';
// import funcPlugins from './plugins/func';
// import person from './plugins/person';
// import globalComponents from './plugins/global-components';

const app = createApp(App);
// app.use(globalComponents);
// app.use(funcPlugins);
// app.use(person);
app.use(router);
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';

// console.log(import.meta.env.MODE);
// console.log(import.meta.env.VITE_APP_API_URL);
