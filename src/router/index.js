import { createRouter, createWebHistory } from 'vue-router'
import TodosTable from '../views/TodosTable.vue'
import AddTodo from '../views/AddTodo.vue'
import DelAllTodos from '../views/DelAllTodos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TodosTable
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    },
    {
      path: '/add-todo',
      name: 'hoadd-todo',
      component: AddTodo
    },
    {
      path: '/del-all-todos',
      name: 'del-all-todos',
      component: DelAllTodos
    },
  ]
})

export default router
