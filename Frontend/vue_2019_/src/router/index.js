import { createRouter, createWebHistory } from 'vue-router'
import eventsList from '../views/EventsList'
import eventAgenda from '../views/EventAgenda'
import sessionDetail from '../views/SessionDetail'
import attendeeLogin from '../views/AttendeeLogin'
import eventRegistration from '../views/EventRegistration'

const routes = [
  {
    path: '/eventsList',
    name: 'eventsList',
    component: eventsList
  },
  {
    path: '/eventAgenda',
    name: 'eventAgenda',
    component: eventAgenda
  },
  {
    path: '/sessionDetail',
    name: 'sessionDetail',
    component: sessionDetail
  },
  {
    path: '/attendeeLogin',
    name: 'attendeeLogin',
    component: attendeeLogin
  },
  {
    path: '/:id/eventRegistration',
    name: 'eventRegistration',
    component: eventRegistration
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
