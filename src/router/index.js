import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'
import CrearUsuario from '../views/CrearUsuario.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Listado_usuario',
    component: List
  },
  {
    path: '/crear',
    name: 'crear_usuario',
    component: CrearUsuario
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
