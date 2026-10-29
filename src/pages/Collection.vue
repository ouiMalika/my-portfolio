<template>
  <div class="collection">
    <span id="collection-top" class="anchor" />

    <ProjectDetail v-if="current" :project="current" :back-to="`/${kind}`" :back-label="title" />

    <template v-else>
      <header class="collection__head">
        <h1>{{ title }}</h1>
        <p v-if="lede" class="collection__lede">{{ lede }}</p>
      </header>

      <section v-for="g in groups" :key="g.name || 'all'" class="collection__group">
        <h2 v-if="g.name" class="section-title">{{ g.name }}</h2>
        <div class="card-grid">
          <RouterLink v-for="p in g.items" :key="p.slug" :to="`/${kind}/${p.slug}`" class="card">
            <div class="card__media" :class="{ 'card__media--contain': p.coverFit === 'contain', 'card__media--text': !p.cover }">
              <img v-if="p.cover" :src="p.cover" :alt="p.title" loading="lazy" />
              <span v-else>{{ p.title }}</span>
            </div>
            <div class="card__body">
              <h3 class="card__title">{{ p.title }}</h3>
              <p class="card__meta">
                {{ p.meta }}<span v-if="p.status" class="pill">{{ p.status }}</span>
              </p>
              <p class="card__blurb">{{ p.blurb }}</p>
            </div>
          </RouterLink>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { collections, designGroups, type CollectionKey, type Project } from '../data/projects'
import ProjectDetail from '../components/ProjectDetail.vue'

const props = defineProps<{ kind: CollectionKey; slug?: string }>()

const titles: Record<CollectionKey, string> = { research: 'Research', tech: 'Tech', design: 'Design' }
const ledes: Record<CollectionKey, string> = {
  research: 'Perception and planning for robots and vehicles, and work across design and extended reality.',
  tech: 'Systems, data and machine learning projects. Work still in progress is marked.',
  design: 'Architecture, product and interaction design, and drawing.',
}

const title = computed(() => titles[props.kind])
const lede = computed(() => ledes[props.kind])
const items = computed<Project[]>(() => collections[props.kind])
const current = computed(() => (props.slug ? items.value.find((p) => p.slug === props.slug) : undefined))

const groups = computed(() => {
  if (props.kind !== 'design') return [{ name: '', items: items.value }]
  return designGroups
    .map((name) => ({ name, items: items.value.filter((p) => p.group === name) }))
    .filter((g) => g.items.length)
})

watchEffect(() => {
  document.title = current.value ? `${current.value.title} · Malika Buribayeva` : `${title.value} · Malika Buribayeva`
})
</script>
