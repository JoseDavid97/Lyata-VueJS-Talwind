import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import './style.css'

import App from './App.vue'
import Home from './components/home.vue'
import ByName from './components/byname.vue'
import ByLatLon from './components/bylatlon.vue'
import ByZipCode from './components/byzipcode.vue'
import ByIP from './components/byip.vue'

const routes = [
    { path: '/', component: Home},
    { path: '/byName', component: ByName},
    { path: '/byLatLon', component: ByLatLon},
    { path: '/byZipCode', component: ByZipCode},
    { path: '/byIP', component: ByIP},
  ]
  
  const router = createRouter({
    linkActiveClass: 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500',
    history: createMemoryHistory(),
    routes,
})

createApp(App).use(router).mount('#app')