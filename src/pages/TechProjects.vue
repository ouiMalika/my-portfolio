<template>
  <article class="about active" data-page="tech-projects">
    <header>
      <h2 class="h2 article-title">Tech Projects</h2>
    </header>

    <section class="timeline" id="visionboard-ai">
      <div class="title-wrapper">
        <div class="icon-box"><ion-icon name="color-wand-outline" /></div>
        <h3 class="h3">VisionBoard AI</h3>
      </div>

      <div class="timeline-list">
        <div class="timeline-item">
          <p class="timeline-text">
            <a href="https://github.com/ouiMalika/VisionBoard-AI" target="_blank" rel="noopener">
              <strong>VisionBoard AI</strong>
            </a>
            is a full-stack AI application that automatically clusters images into thematic groups
            for vision boards. Users upload a set of images and receive semantically organized
            clusters — no manual sorting needed.
          </p>

          <p class="timeline-text">
            The backend uses <strong>OpenAI CLIP</strong> to embed each image into a high-dimensional
            vector space, then applies <strong>K-Means clustering</strong> to group visually and
            semantically similar images together. Image processing runs asynchronously via
            <strong>Celery</strong> workers backed by <strong>Redis</strong>, so the UI stays
            responsive even for large batches. The REST API is built with
            <strong>Django REST Framework</strong>, persists data in <strong>PostgreSQL</strong>
            (Neon), and stores images on <strong>AWS S3</strong>.
          </p>

          <p class="timeline-text">
            The frontend is an <strong>Angular</strong> SPA deployed on
            <a href="https://malikab-visionboard-api.hf.space" target="_blank" rel="noopener" class="inline-link">HuggingFace Spaces</a>
            (API + worker) and <strong>Vercel</strong> (frontend). Source code on
            <a href="https://github.com/ouiMalika/VisionBoard-AI" target="_blank" rel="noopener" class="inline-link">GitHub</a>.
          </p>

          <div class="tech-tags">
            <span class="tag">CLIP</span>
            <span class="tag">Django</span>
            <span class="tag">Celery</span>
            <span class="tag">PostgreSQL</span>
            <span class="tag">Redis</span>
            <span class="tag">Angular</span>
            <span class="tag">AWS S3</span>
            <span class="tag">HuggingFace</span>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
</script>

<style src="../assets/research.css"></style>
<style scoped>
.tech-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
.tag {
  background: hsl(240, 2%, 20%);
  color: hsl(45, 100%, 72%);
  border: 1px solid hsl(240, 2%, 28%);
  border-radius: 6px;
  padding: 3px 10px;
  font-size: 12px;
  font-weight: 500;
}
</style>
