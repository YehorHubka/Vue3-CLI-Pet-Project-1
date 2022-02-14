import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import NotFound from '../views/NotFound'
import AppPostInner from "../components/AppPostInner";
import AppCreatePost from "../components/AppCreatePost";

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
         {
            path: ':postId?',
            component: AppPostInner,
            props: true
         },
         {
            path: '/create',
            component: AppCreatePost
         }
      ]
   },
   {
      path: "/:catchAll(.*)",
      component: NotFound,
   }
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
   linkActiveClass: 'active',
   linkExactActiveClass: 'active'
})

export default router
