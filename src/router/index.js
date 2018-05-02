import Vue from 'vue'
import Router from 'vue-router'
import ProfileMine from '@/components/ProfileMine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/profile/:type',
      name: 'profile-mine',
      component: ProfileMine
    },
    {
      path: '/',
      redirect: '/profile/mine'
    },
    {
      path: '*',
      redirect: '/profile/mine'
    },
    {
      path: '',
      redirect: '/profile/mine'
    },
  ]
})
