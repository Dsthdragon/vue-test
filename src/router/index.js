import { createRouter, createWebHashHistory } from 'vue-router';
import IndexedDbPage from '../components/IndexedDbPage.vue';
import LocalStoragePage from '../components/LocalStoragePage.vue';

const routes =[
    { path: '/', component: IndexedDbPage},
    { path: '/localstorage', component: LocalStoragePage},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;