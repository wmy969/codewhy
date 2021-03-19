import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import About from '../components/about.vue'
const homenews =()=>import('../components/homenews')
const homemessage =()=>import('../components/homemessage')
Vue.use(VueRouter)

const routes =[
    {
        path:'/home',
        component:Home,
       children:[
           {
              path:'/',
              redirect:'news'
           },
           {
               path:'news',
               component:homenews,
               meta:{
                   title:'新闻'
               }
           },
           {
               path:'message',
               component:homemessage,
               meta:{
                title:'消息'
            }
           }
       ]
    },
    
    {
        path:'/about',
        component:About,
        meta:{
            title:'关于'
        }

    },
    {
        path:'/',
        redirect:'/home',
        meta:{
            title:'主页'
        }
    }
]
const router =new  VueRouter ({
    routes,
    mode:'history'
})

router.beforeEach((to,from,next)=>{
    document.title=to.meta.title
    console.log(to);
    next()

})

export default router