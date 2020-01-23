import Vue from 'vue'
import VueRouter from 'vue-router'

import Homepage from '../pages/Homepage'
import Control from '../pages/Control'
import Bluetooth from '../pages/Bluetooth'
/*import Settings from '../pages/Settings'*/

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/s',
      name: 'Homepage',
      component: Homepage,
    },
    {
      path: '/',
      name: 'Control',
      component: Control,
    },
    {
      path: '/bluetooth',
      name: 'Bluetooth',
      component: Bluetooth,
    },
    /*{
      path: '/settings',
      name: 'Settings',
      component: Settings,
    },*/
  ]
})

export default router
