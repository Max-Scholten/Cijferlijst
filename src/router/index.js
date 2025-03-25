import { createRouter, createWebHistory } from 'vue-router'                // ./router/index.js

import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import Cijferlijst from '../views/Cijferlijst.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Home',
            path: '/',
            component: HomePage,
            meta: {
                title: 'Home'
            }
        },
        {
            name: 'About',
            path: '/about',
            component: AboutPage,
            meta: {
                title: 'About'
            }
        },
        {
            name: 'Cijferlijst',
            path: '/cijferlijst',
            component: Cijferlijst,
            meta: {
                title: 'Cijferlijst'
            }
        },
    ],
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router