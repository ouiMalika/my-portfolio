<template>
  <article class="about active" data-page="research">
    <header>
      <h2 class="h2 article-title">Research</h2>
    </header>

    <!-- CALM -->
    <section class="timeline" id="calm">
      <div class="title-wrapper">
        <div class="icon-box"><ion-icon name="navigate-outline" /></div>
        <h3 class="h3">CALM — Risk-Aware Planning from Calibrated Perception</h3>
      </div>

      <div class="timeline-list">
        <div class="timeline-item">
          <p class="timeline-text">
            <strong>CALM</strong> is a planning pipeline for urban driving that treats a
            vision–language model as what it actually is — a component that is sometimes
            confident and wrong. Rather than trusting a model's reading of a traffic sign or
            signal outright, it carries that uncertainty forward into the decision, so the
            action a vehicle takes can be traced back to what was known and how well it was
            known.
          </p>

          <p class="timeline-text">
            Perception runs through <strong>Grounding DINO</strong> and
            <strong>Qwen2-VL</strong>; <strong>conformal calibration</strong> converts raw model
            confidence into statistically valid bounds; and a <strong>MILP planner</strong>
            selects an action that stays safe across everything those bounds still allow. The
            system is evaluated on the <a href="https://www.nuscenes.org/" target="_blank" rel="noopener" class="inline-link">nuScenes</a>
            autonomous-driving dataset. Developed in Lehigh's Autonomy &amp; Intelligent
            Robotics Lab under Prof. Cristian-Ioan Vasile and Prof. Aparna Bharati.
          </p>

          <p class="timeline-text">
            Accepted as a poster at the
            <a href="https://nerc2026.github.io/" target="_blank" rel="noopener" class="inline-link">
              Northeast Robotics Colloquium (NERC 2026)
            </a>
            at Princeton University, October 2026, and at two IROS 2026 workshops in Pittsburgh:
            <a href="https://rethinking-uncertainty.github.io/" target="_blank" rel="noopener" class="inline-link">
              Rethinking Uncertainty for Modern Robotics Paradigms
            </a>
            and
            <a href="https://sites.google.com/bu.edu/hybridarchforautonomy" target="_blank" rel="noopener" class="inline-link">
              Hybrid Architectures for Embodied Autonomy: Bridging Learning, Planning, and Control
            </a>.
          </p>
        </div>
      </div>
    </section>

    <!-- BETTER READ THAN SAID -->
    <section class="timeline" id="better-read-than-said">
      <div class="title-wrapper">
        <div class="icon-box"><ion-icon name="grid-outline" /></div>
        <h3 class="h3">Better Read Than Said</h3>
      </div>

      <div class="timeline-list">
        <div class="timeline-item">
          <p class="timeline-text">
            <strong>Better Read Than Said: Locating Spatial-Planning Failure at the Output
            Interface of Vision–Language Models</strong> asks a diagnostic question. When a
            vision–language model fails to plan a route, which part of it broke — the
            representation it formed of the scene, or the step that turns that representation
            into a move it writes down?
          </p>

          <p class="timeline-text">
            We separate the two on grid mazes from the Visual Spatial Planning benchmark, where
            breadth-first search on the ground-truth map scores every proposed move exactly. From
            a single forward pass under one prompt, we compare five ways of getting a next move
            out of one frozen hidden state: two that read what the model writes, and three that
            fit a classifier on its frozen activations. Six open models across three families.
          </p>

          <p class="timeline-text">
            The classifiers recover an optimal move far more often than five of the six models
            manage to write one. Within a family, the written plan improves with parameter count
            while the classifier stays flat — so scale is buying better <em>access</em> to
            spatial information the model already encodes at the smallest size we measured. The
            same pattern shows up one level down, on the agent's own coordinates, and again in
            perception, where feeding the model's hazard estimates back in as a hard constraint
            scores worse than ignoring them. Together these locate an
            <strong>action-emission bottleneck</strong> rather than a perception one.
          </p>

          <p class="timeline-text">
            Accepted at the
            <a href="https://rethinking-uncertainty.github.io/" target="_blank" rel="noopener" class="inline-link">
              Rethinking Uncertainty for Modern Robotics Paradigms
            </a>
            workshop at IROS 2026, Pittsburgh.
          </p>
        </div>
      </div>
    </section>

    <!-- ARCHIVE OF QUEER CARE -->
    <section class="timeline" id="archive-of-queer-care">
      <div class="title-wrapper">
        <div class="icon-box"><ion-icon name="film-outline" /></div>
        <h3 class="h3">Archive of Queer Care</h3>
      </div>

      <div class="timeline-list">
        <div class="timeline-item">
          <p class="timeline-text">
            <strong>The Archive of Queer Care</strong> is a mixed-reality archive that curates oral histories and
            first-person accounts of queer care across domestic and communal spaces.  
            I re-imagined the earlier version previously hosted on
            <a
              href="https://www.jamodei.com/new-media?pgid=loyqxxk5-adea3c96-4a1f-4c84-9087-591e9fdd1ac5"
              target="_blank"
              class="inline-link"
            >
              Arena XR
            </a>
            and migrated it to the <a
              href="https://gallery.styly.cc/scene/c40f51c2-b6d9-4d5b-8469-e85a92720dfd"
              target="_blank"
              class="inline-link"
            ><strong>STYLY</strong></a> platform, optimizing performance, interaction fidelity, and spatial
            navigation for browser-based VR accessibility.
          </p>

          <p class="timeline-text">
            The archive was developed with the mutual support of <strong>Future Ghost</strong> and the
            <strong>Lehigh University Department of Theatre</strong>, combining extended-reality design and performance
            scholarship. It was presented at the <strong>Lehigh Mountaintop Research Expo 2024</strong>, showcased at
            <a
              href="https://voxel.org/events/dance-floor-hospital-room-kitchen-table"
              target="_blank"
              class="inline-link"
            >
              Voxel Baltimore (May 2025)
            </a>,
            exhibited as a research poster at the
            <strong>15th Annual National oSTEM Conference (October 2025, Baltimore MD)</strong>,
            and will appear in the published proceedings.
          </p>

          <!-- Poster + Video Side by Side -->
          <div class="media-row">
            <!-- Poster -->
            <div class="media-item poster-box">
              <a href="/images/archive-poster.png" target="_blank" rel="noopener">
                <img
                  src="/images/archive-poster.png"
                  alt="Archive of Queer Care Poster"
                  class="poster-img"
                />
              </a>
              <p class="poster-caption">Click to view full-size poster</p>
            </div>

            <!-- Video -->
            <div class="media-item">
              <iframe
                src="https://drive.google.com/file/d/1AnLHMrf-F_KYwoCCO9AHiE0XRNspBXoa/preview"
                allow="autoplay"
                class="poster-video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SAVE TUBA -->
    <section class="timeline" id="save-tuba">
      <div class="title-wrapper">
        <div class="icon-box"><ion-icon name="leaf-outline" /></div>
        <h3 class="h3">Save Tuba</h3>
      </div>

      <div class="timeline-list">
        <div class="timeline-item">
          <!-- Narrative 1 -->
          <p class="timeline-text">
            <a href="https://savetuba.com" target="_blank" rel="noopener"><strong>Save Tuba</strong></a>
            is an environmental education initiative that uses gamification to promote sustainability awareness among
            K–12 students in Kazakhstan.  
            Developed as part of the Lehigh–Kazakhstan Global Social Impact Fellowship, the project integrates
            technology, design, and education for real-world behavioral impact.
          </p>

          <!-- Narrative 2 -->
          <p class="timeline-text">
            As a developer and designer, I contributed to front-end architecture, UI/UX prototyping, and user-testing
            design for cross-platform
            <a
              href="https://play.google.com/store/apps/details?id=com.jameschang.SaveTuba&hl=en_US"
              target="_blank"
              class="inline-link"
            >
              native deployment
            </a>.
            The platform currently supports localized content delivery in English, Russian, and Kazakh, and the educational
            curriculum was developed in partnerships with local universities.  
          </p>

          <!-- IEEE Paper -->
          <p class="timeline-text">
            Received <strong>"Best Student Presentation"</strong> Award at IEEE Global Humanitarian Technology Conference 2023. <br />Read the full publication in IEEE Xplore:  
            <a
              href="https://ieeexplore.ieee.org/document/10354628"
              target="_blank"
              class="inline-link"
            >
              “How Teacher Feedback Helped Reimagine, Redesign, and Recode a Sustainability Education App”
            </a>
          </p>

          <!-- GIF Row -->
          <div class="media-row" id="save-tuba-gallery">
            <div class="media-item poster-box">
              <img src="/images/gavad1-p4-gavad-small.gif" alt="Save Tuba App 1" class="poster-img" />
            </div>
            <div class="media-item poster-box">
              <img src="/images/gavad2-p4-gavad-small.gif" alt="Save Tuba App 2" class="poster-img" />
            </div>
            <div class="media-item poster-box">
              <img src="/images/gavad3-p4-gavad-small.gif" alt="Save Tuba App 3" class="poster-img" />
            </div>
          </div>
        </div>
      </div>
    </section>

  </article>
</template>

<script setup>
</script>

<style src="../assets/research.css"></style>
