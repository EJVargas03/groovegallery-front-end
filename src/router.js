import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
const {isAuthenticated} = useAuth()
import MainPage from '@/components/MainPage.vue'
import LoginPage from '@/components/LoginPage.vue'
import SettingsPage from '@/components/SettingsPage.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
  { path: '/Groove-gallery/', name: 'Home', component: MainPage },
  { path: '/Groove-gallery/login', name: 'Login', component: LoginPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) next({ name: 'Login', query: { redirect: to.fullPath } })
  else next()
})

export default router