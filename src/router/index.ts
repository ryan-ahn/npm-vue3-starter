import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router';

import { main } from './routePaths';

const routes: Array<RouteRecordRaw> = [{
  path: main,
  component: () => import('@views/Main.vue'),
}];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
