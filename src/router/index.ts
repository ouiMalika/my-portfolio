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
  // Without this, links like /tech-projects#marathon-pipeline land at the top
  // of the page. The delay lets the incoming view render before we scroll to
  // the target, since sections are inside the routed component.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => resolve({ el: to.hash, behavior: 'smooth', top: 20 }), 120)
      })
    }
    return { top: 0 }
  },
})
