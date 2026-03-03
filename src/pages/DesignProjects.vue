<template>
  <article class="about active" data-page="design-projects">
    <header>
      <h2 class="h2 article-title">Design Projects</h2>
    </header>

    <section
      v-for="project in projects"
      :key="project.id"
      class="timeline"
      :id="project.id"
    >
      <div class="title-wrapper">
        <div class="icon-box"><ion-icon name="color-palette-outline" /></div>
        <h3 class="h3">{{ project.title }}</h3>
      </div>

      <div class="timeline-list">
        <div class="timeline-item">
          <span v-if="project.category" class="design-category">{{ project.category }}</span>
          <p class="timeline-text">{{ project.desc }}</p>

          <!-- Multi-image gallery -->
          <div v-if="project.images && project.images.length" class="design-gallery">
            <div v-for="(img, i) in project.images" :key="i" class="design-img-wrap">
              <a :href="img" target="_blank" rel="noopener">
                <img :src="img" :alt="`${project.title} — image ${i + 1}`" class="design-img" />
              </a>
            </div>
          </div>

          <!-- Single cover image fallback -->
          <div v-else-if="project.cover" class="design-cover-wrap">
            <a :href="project.cover" target="_blank" rel="noopener">
              <img :src="project.cover" :alt="project.title" class="design-img" />
            </a>
          </div>

          <!-- PDF link -->
          <a
            v-if="project.pdf"
            :href="project.pdf"
            target="_blank"
            rel="noopener"
            class="pdf-btn"
          >
            <ion-icon name="document-text-outline" />
            View PDF
          </a>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import projects from '../data/design.json'
</script>

<style src="../assets/research.css"></style>
<style scoped>
.design-category {
  display: inline-block;
  font-size: 0.75rem;
  color: var(--vegas-gold);
  border: 1px solid var(--vegas-gold);
  border-radius: 4px;
  padding: 2px 8px;
  margin-bottom: 14px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

/* Grid gallery for multiple images */
.design-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

/* Single cover image */
.design-cover-wrap {
  margin-top: 20px;
}

.design-cover-wrap .design-img {
  max-width: 600px;
}

.design-img {
  width: 100%;
  border-radius: 10px;
  box-shadow: var(--shadow-3);
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.design-img:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 30px rgba(255, 255, 255, 0.15);
}

/* PDF button */
.pdf-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 18px;
  background: hsl(240, 2%, 20%);
  color: var(--vegas-gold);
  border: 1px solid hsl(240, 2%, 28%);
  border-radius: 8px;
  padding: 7px 16px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.pdf-btn:hover {
  background: hsl(240, 2%, 25%);
  border-color: var(--vegas-gold);
}

@media (max-width: 600px) {
  .design-gallery {
    grid-template-columns: 1fr;
  }
}
</style>
