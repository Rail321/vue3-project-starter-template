import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '../pages/MainPage'

const routes = [
  {
    path: '/',
    name: 'Main page',
    component: MainPage,
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import('@/pages/ComponentsPage'),
  },
  {
    path: '/components/file-input',
    name: 'File input',
    component: () => import('@/pages/ComponentsPage/pages/FileInputPage'),
  },
  {
    path: '/components/drag-file-input',
    name: 'Drag file input',
    component: () => import('@/pages/ComponentsPage/pages/DragFileInputPage'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
