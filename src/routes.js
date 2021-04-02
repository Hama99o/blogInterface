import showBlog from './components/showBlog.vue';
import addBlog from './components/addBlog.vue';
import singleBolg from './components/singleBolg.vue';
import Update from './components/update.vue';





export default[
  {path:'/',component:showBlog},
  {path:'/add', component:addBlog},
  {path:'/blog/:id', component:singleBolg},
  {path:'/update/:id', component:Update}


]
