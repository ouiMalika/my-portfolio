<template>
  <article class="about active" data-page="design-projects">
    <header>
      <h2 class="h2 article-title">Design Projects</h2>
    </header>

    <!-- ══════════════════════════════════
         ICARUS SANDALS
    ══════════════════════════════════ -->
    <section class="design-project" id="icarus-sandals">

      <!-- Project header -->
      <div class="project-header">
        <div class="project-meta">
          <span class="project-tag">Product Design</span>
          <span class="project-tag">Digital Prototyping</span>
        </div>
        <h3 class="project-title">Icarus Sandals</h3>
        <p class="project-subtitle">Digital Prototyping Studio — Lehigh University</p>
        <p class="project-desc">
          A barefoot sandal concept exploring the tension between lightness and structure.
          Inspired by ancient woven footwear and modernized through 3D-printed parametric construction,
          Icarus Sandals pairs a woven leather upper with a flexible last — designed to feel like wearing nothing.
        </p>
      </div>

      <div class="project-divider" />

      <!-- ── Phase 1: Research & Inspiration ── -->
      <div class="phase">
        <div class="phase-label">
          <span class="phase-number">01</span>
          <span class="phase-name">Research &amp; Inspiration</span>
        </div>
        <p class="phase-desc">
          Beginning with woven sandal traditions — from Greek leather strapping to Japanese waraji —
          the concept was grounded in material honesty. Sketches and material teardowns examined
          woven fabric, leather, paper, and 3D-printed structures.
        </p>

        <!-- Horizontal scroll filmstrip -->
        <div class="filmstrip-wrapper">
          <div class="filmstrip">
            <!--
              DROP YOUR RESEARCH IMAGES HERE.
              Copy the <div class="film-card"> block for each image.
              Images go in: public/images/design/icarus-sandals/research/
            -->
            <div class="film-card film-card--placeholder">
              <div class="film-placeholder-img">Reference 1</div>
              <p class="film-caption">Woven sandal reference</p>
            </div>
            <div class="film-card film-card--placeholder">
              <div class="film-placeholder-img">Reference 2</div>
              <p class="film-caption">Material teardown — woven fabric</p>
            </div>
            <div class="film-card film-card--placeholder">
              <div class="film-placeholder-img">Reference 3</div>
              <p class="film-caption">Leather structure study</p>
            </div>
            <div class="film-card film-card--placeholder">
              <div class="film-placeholder-img">Sketch 1</div>
              <p class="film-caption">Initial concept sketches</p>
            </div>
            <div class="film-card film-card--placeholder">
              <div class="film-placeholder-img">Sketch 2</div>
              <p class="film-caption">Lacing system exploration</p>
            </div>
          </div>
          <p class="filmstrip-hint">← scroll →</p>
        </div>
      </div>

      <div class="project-divider" />

      <!-- ── Phase 2: 3D Design ── -->
      <div class="phase">
        <div class="phase-label">
          <span class="phase-number">02</span>
          <span class="phase-name">3D Design &amp; Development</span>
        </div>
        <p class="phase-desc">
          The parametric form was developed digitally with Pantone-matched colorways —
          Andorra, Praline, and Vaporous Gray — exploring woven leather patterning,
          versatile lacing options, and barefoot ergonomics through an exploded view.
        </p>

        <!-- Interactive 3D model viewer -->
        <div class="viewer-block">
          <div class="viewer-label">
            <ion-icon name="cube-outline" />
            Interactive 3D Model — drag to orbit
          </div>
          <!--
            DROP YOUR .glb FILE HERE.
            File goes in: public/models/icarus-sandals.glb
            Replace the src attribute below.
          -->
          <model-viewer
            src="/models/icarus-sandals.glb"
            alt="Icarus Sandals 3D model"
            auto-rotate
            camera-controls
            shadow-intensity="1"
            exposure="1.1"
            class="model-viewer"
            poster="/images/design/icarus-sandals/model-poster.jpg"
          >
            <div slot="progress-bar" class="model-loading">
              <div class="model-loading-bar" />
            </div>
          </model-viewer>
        </div>

        <!-- Turntable video -->
        <div class="video-block">
          <div class="viewer-label">
            <ion-icon name="videocam-outline" />
            Turntable Render
          </div>
          <!--
            DROP YOUR TURNTABLE VIDEO HERE.
            File goes in: public/videos/icarus-turntable.mp4
          -->
          <video
            src="/videos/icarus-turntable.mp4"
            autoplay
            loop
            muted
            playsinline
            class="turntable-video"
          >
            Your browser does not support video.
          </video>
        </div>

        <!-- Angle renders carousel -->
        <div class="viewer-label" style="margin-top: 32px;">
          <ion-icon name="images-outline" />
          Render Gallery
        </div>
        <!--
          DROP YOUR RENDER IMAGES HERE.
          Images go in: public/images/design/icarus-sandals/renders/
          Add as many <img> tags as you have renders — the carousel cycles through all of them.
        -->
        <div class="render-carousel">
          <div class="render-track" ref="renderTrack">
            <div class="render-slide film-card--placeholder"><div class="film-placeholder-img">Render — Front</div></div>
            <div class="render-slide film-card--placeholder"><div class="film-placeholder-img">Render — Side</div></div>
            <div class="render-slide film-card--placeholder"><div class="film-placeholder-img">Render — 3/4</div></div>
            <div class="render-slide film-card--placeholder"><div class="film-placeholder-img">Render — Exploded</div></div>
            <div class="render-slide film-card--placeholder"><div class="film-placeholder-img">Color Study</div></div>
          </div>
          <div class="render-dots">
            <button
              v-for="(_, i) in renderCount"
              :key="i"
              class="render-dot"
              :class="{ active: currentRender === i }"
              @click="goToRender(i)"
            />
          </div>
        </div>
      </div>

      <div class="project-divider" />

      <!-- ── Phase 3: Physical Prototype ── -->
      <div class="phase">
        <div class="phase-label">
          <span class="phase-number">03</span>
          <span class="phase-name">Physical Prototype</span>
        </div>
        <p class="phase-desc">
          The final 3D-printed prototype — realized in gray and yellow — tests the wearability
          of the barefoot last and woven strap system at 1:1 scale.
        </p>

        <!--
          DROP YOUR PROTOTYPE PHOTOS HERE.
          Images go in: public/images/design/icarus-sandals/prototype/
          Remove the placeholder divs and replace with <img> tags.
        -->
        <div class="proto-grid">
          <div class="proto-cell film-card--placeholder"><div class="film-placeholder-img">Prototype — Top view</div></div>
          <div class="proto-cell film-card--placeholder"><div class="film-placeholder-img">Prototype — Side</div></div>
          <div class="proto-cell film-card--placeholder"><div class="film-placeholder-img">Prototype — Worn</div></div>
          <div class="proto-cell film-card--placeholder"><div class="film-placeholder-img">Prototype — Detail</div></div>
        </div>
      </div>

    </section>
  </article>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// ── Render carousel ──────────────────────────────
const renderTrack = ref(null)
const renderCount = 5        // ← update this to match your number of renders
const currentRender = ref(0)
let autoTimer = null

function goToRender(i) {
  currentRender.value = i
  const track = renderTrack.value
  if (!track) return
  const slide = track.children[i]
  slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
}

function nextRender() {
  goToRender((currentRender.value + 1) % renderCount)
}

onMounted(() => {
  autoTimer = setInterval(nextRender, 3200)
})
onUnmounted(() => {
  clearInterval(autoTimer)
})
</script>

<style src="../assets/research.css"></style>
<style scoped>
/* ── Project wrapper ─────────────────────────── */
.design-project {
  margin-top: 30px;
}

.project-header {
  margin-bottom: 32px;
}

.project-meta {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.project-tag {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--accent);
  border: 1px solid var(--accent);
  border-radius: 4px;
  padding: 2px 9px;
}

.project-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--white-2);
  letter-spacing: -0.02em;
  margin-bottom: 4px;
}

.project-subtitle {
  font-size: 0.85rem;
  color: var(--light-gray-70);
  margin-bottom: 14px;
  font-style: italic;
}

.project-desc {
  font-size: 0.97rem;
  line-height: 1.8;
  color: var(--light-gray);
  max-width: 700px;
}

.project-divider {
  height: 1px;
  background: var(--border);
  margin: 36px 0;
}

/* ── Phase blocks ────────────────────────────── */
.phase {
  margin-bottom: 10px;
}

.phase-label {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 14px;
}

.phase-number {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0.1em;
}

.phase-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--white-2);
}

.phase-desc {
  font-size: 0.93rem;
  line-height: 1.8;
  color: var(--light-gray);
  max-width: 680px;
  margin-bottom: 24px;
}

/* ── Filmstrip (research gallery) ─────────────── */
.filmstrip-wrapper {
  position: relative;
}

.filmstrip {
  display: flex;
  gap: 14px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
  scrollbar-color: var(--border) transparent;
  padding-bottom: 10px;
  cursor: grab;
}

.filmstrip:active { cursor: grabbing; }

.film-card {
  flex: 0 0 260px;
  scroll-snap-align: start;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-2);
}

.film-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.film-card:hover img {
  transform: scale(1.04);
}

.film-caption {
  font-size: 0.78rem;
  color: var(--light-gray-70);
  padding: 8px 10px;
  background: var(--panel);
  border-top: 1px solid var(--border);
}

/* placeholder styling (remove once real images are added) */
.film-card--placeholder {
  border: 1.5px dashed var(--border);
  background: var(--bg);
}

.film-placeholder-img {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: var(--light-gray-70);
  background: var(--border-gradient-onyx);
}

.filmstrip-hint {
  font-size: 0.72rem;
  color: var(--light-gray-70);
  margin-top: 8px;
  text-align: right;
  letter-spacing: 0.05em;
}

/* ── 3D model viewer ─────────────────────────── */
.viewer-block,
.video-block {
  margin-top: 20px;
  margin-bottom: 28px;
}

.viewer-label {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 0.8rem;
  color: var(--light-gray-70);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 12px;
}

model-viewer.model-viewer {
  width: 100%;
  height: 480px;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: var(--bg);
  box-shadow: var(--shadow-3);
}

.model-loading {
  width: 100%;
  height: 4px;
  background: var(--border);
  border-radius: 2px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
}

.model-loading-bar {
  height: 100%;
  width: 40%;
  background: var(--accent);
  border-radius: 2px;
  animation: loading-slide 1.2s ease-in-out infinite;
}

@keyframes loading-slide {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(350%); }
}

/* ── Turntable video ─────────────────────────── */
.turntable-video {
  width: 100%;
  max-height: 480px;
  border-radius: 16px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-3);
  object-fit: cover;
  background: var(--bg);
}

/* ── Render carousel ─────────────────────────── */
.render-carousel {
  margin-top: 12px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-3);
  background: var(--bg);
}

.render-track {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}

.render-track::-webkit-scrollbar { display: none; }

.render-slide {
  flex: 0 0 100%;
  scroll-snap-align: start;
  height: 420px;
}

.render-slide img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.render-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  background: var(--panel);
  border-top: 1px solid var(--border);
}

.render-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: var(--border);
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
  padding: 0;
}

.render-dot.active {
  background: var(--accent);
  transform: scale(1.25);
}

/* ── Prototype photo grid ────────────────────── */
.proto-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin-top: 8px;
}

.proto-cell {
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  box-shadow: var(--shadow-2);
}

.proto-cell img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.proto-cell:hover img {
  transform: scale(1.04);
}

.proto-cell .film-placeholder-img {
  height: 100%;
}

@media (max-width: 640px) {
  .proto-grid {
    grid-template-columns: 1fr;
  }
  model-viewer.model-viewer {
    height: 320px;
  }
  .render-slide {
    height: 280px;
  }
}
</style>
