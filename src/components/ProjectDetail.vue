<template>
  <article class="detail">
    <RouterLink :to="backTo" class="back">← {{ backLabel }}</RouterLink>

    <header class="detail__head">
      <h1>{{ project.title }}</h1>
      <p class="detail__meta">
        {{ project.meta }}<span v-if="project.status" class="pill">{{ project.status }}</span>
      </p>
      <p class="detail__intro" v-html="project.intro" />
    </header>

    <section v-for="(s, i) in project.sections" :key="i" class="block">
      <h2 v-if="s.heading" class="block__heading">{{ s.heading }}</h2>

      <div v-if="s.metrics" class="metrics">
        <div v-for="m in s.metrics" :key="m.label" class="metric">
          <span class="metric__value">{{ m.value }}</span>
          <span class="metric__label">{{ m.label }}</span>
        </div>
      </div>

      <p v-if="s.text" class="block__text" v-html="s.text" />

      <div v-if="s.media || s.embed" class="media" :class="`media--${s.layout || 'grid2'}`">
        <figure v-for="m in s.media || []" :key="m.src" class="media__item">
          <button type="button" class="media__btn" @click="open(m.src, m.alt)" :aria-label="`Enlarge: ${m.alt}`">
            <img :src="m.src" :alt="m.alt" loading="lazy" />
          </button>
          <figcaption v-if="m.caption">{{ m.caption }}</figcaption>
        </figure>
        <div v-if="s.embed" class="media__embed" :style="{ aspectRatio: s.embed.ratio || '16 / 9' }">
          <iframe :src="s.embed.src" :title="s.embed.title" loading="lazy" allow="autoplay" />
        </div>
      </div>

      <p v-if="s.links" class="links">
        <a v-for="l in s.links" :key="l.href" :href="l.href" target="_blank" rel="noopener">{{ l.label }} ↗</a>
      </p>

      <div v-if="s.tags" class="tags">
        <span v-for="t in s.tags" :key="t" class="tag">{{ t }}</span>
      </div>
    </section>

    <RouterLink :to="backTo" class="back back--bottom">← {{ backLabel }}</RouterLink>

    <div v-if="lightbox" class="lightbox" role="dialog" aria-modal="true" @click="close">
      <img :src="lightbox.src" :alt="lightbox.alt" />
      <button type="button" class="lightbox__close" aria-label="Close" @click.stop="close">×</button>
    </div>
  </article>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { Project } from '../data/projects'

const props = defineProps<{ project: Project; backTo: string; backLabel: string }>()

const lightbox = ref<{ src: string; alt: string } | null>(null)
const open = (src: string, alt: string) => (lightbox.value = { src, alt })
const close = () => (lightbox.value = null)
const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
watch(() => props.project.slug, close)
</script>
