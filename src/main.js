import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import db from '@/fb'
import VueStripeCheckout from 'vue-stripe-checkout';
//import 'babel-polyfill'
 
Vue.use(VueStripeCheckout, 'pk_test_CKhF0eYGhWu88DsU2CUBh3yP00wCrhPaZt');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCXl3SOjd5ow_PZCDAOA5zddnkXTuw7yDI",
    authDomain: "asnellrose.firebaseapp.com",
    databaseURL: "https://asnellrose.firebaseio.com",
    projectId: "asnellrose",
    storageBucket: "asnellrose.appspot.com",
    messagingSenderId: "569182022274",
    appId: "1:569182022274:web:df1c001f2e9189b6"
}

var list =[]
db.collection('items').onSnapshot(res =>{
  const changes = res.docChanges();
  changes.forEach(change =>{
      list.push({
        ...change.doc.data(),
        id: change.doc.id
      })
      
  })
  store.commit('setSale',list)
})

/*router.beforeEach((to, from, next) => {

const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
if (requiresAuth && !currentUser) {
  next('/sign-in');
} else if (requiresAuth && currentUser) {
  next();
} else {
  next()
}

}); */

router.beforeEach((to,form,next)=>{
  const currentUser = firebase.auth().currentUser;

  if(!to.meta.protected){
    next()
  }
  if(to.meta.protected && !currentUser){
    next('/Login')
  }
  if( to.meta.protected  && currentUser){
      next()
  }  
})


  /*firebase.initializeApp(config);
  const db = firebase.firestore();
  //db.settings({timestampsInSnapshots: true})
  export default db; */
  
 
/*

NOTES FOR SITE:
1) NEED A BASKET CHECKOUT PAGE/SQUAREPAY FOR PAYMENTS/ PANEL TO EMAIL CLIENTS
2)


*/
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
