import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './components/App.vue';
import { routes } from './routes';
import './bootstrap';
import '../css/app.css';

const app = createApp(App);

app.use(VueAxios, axios);

const router = createRouter({
 history: createWebHistory(),
 routes,
});

app.use(router);

app.mount('#app');
