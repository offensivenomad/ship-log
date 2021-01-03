import Vue from 'vue'
import Router from 'vue-router'
import LogCreate from './views/LogCreate.vue'
import LogList from './views/LogList.vue'
import LogShow from './views/LogShow.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'log-list',
      component: LogList
    },
    {
      path: '/log/create',
      name: 'log-create',
      component: LogCreate
    },
    {
      path: '/log/:id',
      name: 'log-show',
      component: LogShow,
      props: true
    }
  ]
})
