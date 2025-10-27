import { createRouter, createWebHistory } from 'vue-router'
import About from '../pages/About.vue'
import Research from '../pages/Research.vue'
import TechProjects from '../pages/TechProjects.vue'
import DesignProjects from '../pages/DesignProjects.vue'

const routes = [
  { path: '/', component: About },
  { path: '/research', component: Research },
  { path: '/tech-projects', component: TechProjects },
  { path: '/design-projects', component: DesignProjects },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
