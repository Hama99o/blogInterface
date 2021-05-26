import Index from './components/blog/index.vue'
import New from './components/blog/new.vue'
import Show from './components/blog/show.vue'
import Update from './components/blog/edit.vue'

export default [
  { path: '/', component: Index },
  { path: '/add', component: New },
  { path: '/blog/:id', component: Show },
  { path: '/update/:id', component: Update }

]
