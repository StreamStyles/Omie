import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Vods from '../views/VodsView.vue';
import HomeVODList from '../components/HomeVODList.vue';
import VODPlayer from '../components/VODPlayer.vue';

const routes = [
	{ path: '/', component: HomeView, HomeVODList },
	{ path: '/vods', component: Vods },
	{ path: '/vod/:vodId', component: VODPlayer, props: true },
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
