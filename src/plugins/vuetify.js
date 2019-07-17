import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
Vue.use(Vuetify, {
  iconfont: 'fa',
  icons: {
    'facebook': "fab fa-facebook-f"
  },
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c',
    newPink:'#db129f',
    texts:'#969699'
  }
})
