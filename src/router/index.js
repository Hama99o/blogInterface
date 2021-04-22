import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '@/views/Home.vue'
import ArticlesIndex from '@/views/articles/Index.vue'
import NewArticle from '@/views/articles/New.vue'
import ShowArticle from '@/views/articles/Show.vue'
import UpdateArticle from '@/views/articles/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/articles',
    name: 'Articles',
    component: ArticlesIndex
  },
  {
    path: '/articles/new',
    name: 'NewArticle',
    component: NewArticle
  },
  {
    path: '/articles/:id',
    name: 'ShowArticle',
    component: ShowArticle
  },
  {
    path: '/articles/:id/edit',
    name: 'UpdateArticle',
    component: UpdateArticle
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
