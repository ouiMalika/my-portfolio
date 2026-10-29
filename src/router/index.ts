import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Collection from '../pages/Collection.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/research/:slug?', component: Collection, props: (r: any) => ({ kind: 'research', slug: r.params.slug }) },
  { path: '/tech/:slug?', component: Collection, props: (r: any) => ({ kind: 'tech', slug: r.params.slug }) },
  { path: '/design/:slug?', component: Collection, props: (r: any) => ({ kind: 'design', slug: r.params.slug }) },
  // Old paths, kept so existing links still land somewhere sensible.
  { path: '/tech-projects', redirect: '/tech' },
  { path: '/design-projects', redirect: '/design' },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    // Opening or closing a project inside the same page keeps the reader near the grid.
    if (to.path.split('/')[1] === from.path.split('/')[1] && to.path !== '/') {
      return { el: '#collection-top', top: 72 }
    }
    return { top: 0 }
  },
})
