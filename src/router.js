import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Nvq from './views/Nvq.vue'
import Mfa from './views/Mfa.vue'
import Admin from './views/Admin.vue'
import Nvq45 from './views/Nvq45.vue'
import Nvq67 from './views/Nvq67.vue'
import Plant from './views/Plant.vue'
import HS from './views/HS.vue'
import HSETest from './views/HSETest.vue'
import Cards from './views/Cards.vue'
import Funding from './views/Funding.vue'
import Contact from './views/Contact.vue'
import CPCS from './views/CPCS.vue'
import Basket from './views/Basket.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import Mycourses from './views/Mycourses.vue'
import Under from './views/Under.vue'
import Checkout from './views/Checkout.vue'
import CSCScards from './views/CSCScards.vue'
import CPCScards from './views/CPCScards.vue'
import Recruitment from './views/Recruitment.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/under',
      name: 'under',
      component: Under,
    },
    {
      path: '/Recruitment',
      name: 'Recruitment',
      component: Recruitment,
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/MyCourses',
      name: 'MyCourses',
      component: Mycourses,
      meta:{
        protected: true
      }
    },
    {
      path: '/Nvq',
      name: 'Nvq',
      component: Nvq,
    },
    {
      path: '/first_aid',
      name: 'Mfa',
      component: Mfa,
    },
    {
      path: '/CPCS',
      name: 'CPCS',
      component: CPCS,
    },
    {
      path: '/CSCScards',
      name: 'CSCScards',
      component: CPCScards
    },
    {
      path: '/CPCScards',
      name: 'CPCScards',
      component: CSCScards
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin,
      meta:{
        protected: true
      }
    }, 
    {
      path: '/Nvq45',
      name: 'Nvq45',
      component: Nvq45,
    },
    {
      path: '/Nvq67',
      name: 'Nvq67',
      component: Nvq67,
    },
    {
      path: '/plant',
      name: 'plant',
      component: Plant,
    },
    {
      path: '/H&S',
      name: 'h&s',
      component: HS,
    },
    {
      path: '/HSETest',
      name: 'hseTest',
      component: HSETest,
    },
    {
      path: '/Cards',
      name: 'cards',
      component: Cards,
    },
    {
      path: '/Funding',
      name: 'funding',
      component: Funding,
    },
    {
      path: '/Contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/Basket',
      name: 'basket',
      component: Basket,
    },
    {
      path: '/Checkout',
      name: 'checkout',
      component: Checkout,
      meta:{
        protected: true
      }
    }
  ]
})


