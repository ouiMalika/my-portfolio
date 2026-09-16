<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">About Me</h2>
    </header>

    <section class="about-text">
      <p>
        I’m Malika — I study Computer Science &amp; Engineering and Product Design at Lehigh,
        graduating in 2027. Those two degrees are less of a split than they sound: both are
        about finding the real problem before building the thing, and I’ve ended up doing that
        on fab floors, in driving datasets, and on a whiteboard with a professor.
      </p>
      <p>
        Right now I work on <strong>vision–language models that have to make decisions</strong> —
        when a model reads a traffic sign and isn’t sure, what should the car actually do? — and
        on <strong>data infrastructure</strong>, the unglamorous plumbing that decides whether
        anyone can answer a question in four seconds or four minutes.
      </p>
      <p>
        When I’m not doing that, I’m usually running (first half marathon, April 2026), teaching —
        I’ve been a TA long enough to have opinions about it — or taking apart a system I only
        knew as a black box, which is how most of the projects on this site started.
      </p>

      <ul class="honors">
        <li><span class="honor-tag">Award</span> Lehigh Future Maker Award</li>
        <li><span class="honor-tag">Award</span> Trustees’ Scholarship</li>
        <li><span class="honor-tag">Award</span> IEEE GHTC 2023 Best Student Presentation</li>
      </ul>
    </section>

    <!-- RESEARCH -->
    <section class="timeline" id="research">
      <div class="title-wrapper">
        <div class="icon-box"><ion-icon name="document-text-outline" /></div>
        <h3 class="h3">Research</h3>
      </div>

      <ul class="timeline-list">
        <li class="timeline-item">
          <h4 class="timeline-item-title">
            CALM — Calibrated Vision-Language Perception for Risk-Aware Action Selection in Urban Driving
          </h4>
          <span>AIR Lab, Lehigh University</span>
          <p class="timeline-text">
            A vision–language model looking at a road scene will sometimes be confident and wrong.
            CALM takes those uncertain readings of traffic signs and signals and turns them into
            driving decisions you can actually audit — Grounding DINO and Qwen2-VL for perception,
            conformal calibration to put honest error bars on what the model claims, and MILP
            planning to choose an action given those bounds. Evaluated on the nuScenes
            autonomous-driving dataset.
          </p>
          <p class="timeline-text venue-line">
            <span class="venue-tag">Poster</span>
            <a href="https://nerc2026.github.io/" target="_blank" rel="noopener" class="inline-link">
              NERC 2026
            </a>
            — Northeast Robotics Colloquium, Princeton University, October 3, 2026
          </p>
          <p class="timeline-text venue-line">
            <span class="venue-tag">Workshop</span>
            <a href="https://rethinking-uncertainty.github.io/" target="_blank" rel="noopener" class="inline-link">
              Rethinking Uncertainty for Modern Robotics Paradigms
            </a>
            — IROS 2026, Pittsburgh
          </p>
          <p class="timeline-text venue-line">
            <span class="venue-tag">Workshop</span>
            <a href="https://sites.google.com/bu.edu/hybridarchforautonomy" target="_blank" rel="noopener" class="inline-link">
              Hybrid Architectures for Embodied Autonomy: Bridging Learning, Planning and Control (BLPC)
            </a>
            — IROS 2026, Pittsburgh
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="timeline-item-title">
            Better Read Than Said — Locating Spatial-Planning Failure at the Output Interface of Vision–Language Models
          </h4>
          <span>AIR Lab, Lehigh University</span>
          <p class="timeline-text">
            When a vision–language model fails to plan a route, which part broke — what it
            understood about the scene, or the step that turns understanding into a written move?
            We separate the two on grid mazes where breadth-first search can score every proposed
            move exactly, comparing what six open models <em>write</em> against what a classifier
            can read directly from their frozen hidden states.
          </p>
          <p class="timeline-text">
            The classifiers recover an optimal move far more often than five of the six models
            manage to write one. Within a model family, the written plan improves with parameter
            count while the probe stays flat — so scale is buying better <em>access</em> to spatial
            information the model already encodes at the smallest size we measured. That points at
            an action-emission bottleneck, not a perception one.
          </p>
          <p class="timeline-text venue-line">
            <span class="venue-tag">Workshop</span>
            <a href="https://rethinking-uncertainty.github.io/" target="_blank" rel="noopener" class="inline-link">
              Rethinking Uncertainty for Modern Robotics Paradigms
            </a>
            — IROS 2026, Pittsburgh
          </p>
        </li>
      </ul>
    </section>

   <!-- EDUCATION -->
    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box"><ion-icon name="school-outline" /></div>
        <h3 class="h3">Education</h3>
      </div>

      <ul class="timeline-list">
        <li class="timeline-item">
          <h4 class="timeline-item-title"><strong>Lehigh University</strong></h4>
          <span>B.S. Computer Science &amp; Engineering, B.A. Product Design — expected May 2027 · GPA 3.52</span>
          <p class="timeline-text">
            <strong>Systems &amp; AI:</strong> Deep Learning, Parallel Computing, Distributed Systems, Databases, Computer Networks, Operating Systems, Systems Software, Computer Architecture, Algorithms, Programming Languages.
            <br />
            <strong>Also:</strong> AI, HCI, Software Engineering, Data Structures, Computer Graphics, Statistics and Probability, Applied Linear Algebra.
            <br />
            <strong>Design:</strong> Product Design I–II, Interactive Data Visualization, 2D Design, 3D Design.
          </p>
        </li>
      </ul>
    </section>

    <!-- EXPERIENCE -->
    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box"><ion-icon name="briefcase-outline" /></div>
        <h3 class="h3">My Experiences</h3>
      </div>
      <ul class="timeline-list">
        <li class="timeline-item">
          <h4 class="timeline-item-title">
            Data Engineering Intern — <a href="https://atomicmachines.com" target="_blank" rel="noopener">Atomic Machines</a>
          </h4>
          <span>Jun 2026 – Aug 2026 | Emeryville, CA</span>
          <p class="timeline-text">
            Built a Flask/React analytics tool for ~25 fab machines, unifying telemetry, process
            runs, configurations, inspections, lab results and incident history that had lived in
            five separate systems.<br />
            Built per-machine anomaly detection and LLM fault analysis over production telemetry,
            evaluating 114 historical incidents to find where root-cause explanations were actually
            reliable versus where a deterministic threshold did better.<br />
            Reworked telemetry processing with server-side rollups, Parquet→S3 ingestion, bounded
            TimescaleDB queries and immutable-run caching, cutting analytics load time from 245s to 4.6s.
            <br />
            <RouterLink to="/tech-projects#nodemind" class="inline-link">
              See project → NodeMind
            </RouterLink>
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="timeline-item-title">
            Research Assistant — AIR Lab, Lehigh University
          </h4>
          <span>Jan 2026 – Present | Bethlehem, PA</span>
          <p class="timeline-text">
            Vision–language models as the decision layer of driving and embodied agents: how to
            tell what they actually know, and what to do when they are not sure. Two papers so far,
            one on risk-aware planning from calibrated VLM perception and one locating where
            spatial planning breaks down inside open models.
            <br />
            <a href="#research" class="inline-link">See research ↑</a>
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="timeline-item-title">
            Software Developer Intern — Skillion Inc.
          </h4>
          <span>Jan 2026 – Present | New York, NY</span>
          <p class="timeline-text">
            Built a React Native (Expo) cyclist-recognition app and a 24-endpoint FastAPI service
            with JWT auth, role-based access control, live rider detection and post-ride analytics.<br />
            Built the recognition pipeline: YOLOv8 person detection, MTCNN face localization,
            FaceNet512 embeddings and cosine-similarity matching.<br />
            Designed PostgreSQL identity storage for enrolled face embeddings and direct-to-S3
            uploads with SQS event processing, replacing file-based storage and keeping binary
            payloads off the API server.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="timeline-item-title">
            Rossin Research Scholar — <a href="https://engineering.lehigh.edu" target="_blank" rel="noopener">P.C. Rossin College of Engineering</a>
          </h4>
          <span>Jan 2026 – Present | Lehigh University, Bethlehem, PA</span>
          <p class="timeline-text">
            Developing a visual hierarchical perception model for autonomous driving that constructs symbolic refinement trees through incremental resolution to inform utility-based planning under uncertainty.<br />
            Implementing a Grounded SAM-2 pipeline for zero-shot traffic sign detection and tracking on nuScenes data, benchmarking Florence-2, constrained VQA, and Claude VLM for symbolic label extraction.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="timeline-item-title">
            Grader — CSE 017
          </h4>
          <span>May 2024 – December 2025 | Lehigh University, Bethlehem, PA</span>
          <p class="timeline-text">
            Grade 20+ students' weekly programming and lab assignments for the Programming and Data Structures course.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="timeline-item-title">
            Software Developer Fellow — <a href="https://nhi.lehigh.edu/" target="_blank" rel="noopener"> Nano | Human Interfaces Presidential Initiative</a>
          </h4>
          <span>Aug 2025 – Present | Lehigh University, Bethlehem, PA</span>
          <p class="timeline-text">
            Built a Python-to-Unity data pipeline converting material stress simulation outputs into 3D animations; optimized rendering and asset streaming to sustain 90 FPS across Apple Vision Pro and Meta Quest 3.<br />
            Adapted the visionOS build in Swift, enabling Apple Vision Pro compatibility and cutting iteration time by 40%.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="timeline-item-title">
            Robotics Course Developer / Head Teaching Assistant — ENGR 010
          </h4>
          <span>Jan 2024 – Present | Lehigh University, Bethlehem, PA</span>
          <p class="timeline-text">
            Created Python robotics-control labs and Pandas-based data-analysis assignments, redesigning a 300-student introductory engineering course; led the migration to BBC micro:bit hardware.<br />
            Built a Flask + React web quiz platform to automate grading, reducing TA workload and improving grading turnaround.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="timeline-item-title">Engineering Intern — <a href="https://www.artisandisplayinc.com" target="_blank" rel="noopener"> Artisan Display, Inc.</a>
          </h4>
          <span>Jun 2025 – Aug 2025 | On-site</span>
          <p class="timeline-text">
            Produced and revised AutoCAD technical drawings and spatial layouts; executed Innergy millwork takeoffs and material audits ensuring fabrication accuracy.<br />
            Piloted new LIDAR scanning workflows to integrate precise room dimensions into layout planning.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="timeline-item-title">Software Developer Intern — Future Ghost</h4>
          <span>Jan 2024 – May 2025 | Bethlehem, PA</span>
          <p class="timeline-text">
            Developed and refactored a multi-user VR archival media platform in Unity with STYLY SDK, integrating Python data-processing scripts to sync 3D assets and metadata via JSON + MQTT.<br />
            Optimized asset streaming and lightmapping, cutting VR scene load times by 24% on Meta Quest 2/3.
            <br />
            <RouterLink
              to="/research#archive-of-queer-care"
              class="inline-link"
            >
              See project → Archive of Queer Care
            </RouterLink>
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="timeline-item-title">
            <a href="https://trac.lehigh.edu" target="_blank" rel="noopener">TRAC</a> Fellow
          </h4>
          <span>Aug 2023 – Present | Lehigh University, Bethlehem, PA</span>
          <p class="timeline-text">
            Conducted conferences for 50+ engineering and business students to provide feedback on their research papers, essays, and reports.<br />
            Analyzed key trends in a dataset of graduate career outcomes for 4,500+ U.S. higher education institutions using Excel and created interactive visualizations in Tableau for presentations.<br />
            Provided data-driven insights and recommendations to university faculty and administration, contributing to strategic decision-making.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="timeline-item-title">Full-Stack Team Lead <a href="https://creativeinquiry.lehigh.edu/global-social-impact-fellowship/kazakhstan-save-tuba" target="_blank" rel="noopener"> (Global Social Impact Fellowship)</a></h4>
          <span>Jan 2023 – Dec 2024 | Lehigh University, Bethlehem, PA</span>
          <p class="timeline-text">
            Led the development of a cross-platform sustainability education app for K–12 schools in Kazakhstan using React, React Native, and Firebase.<br />
            Implemented OAuth 2.0, Redux-based multilingual UI, and real-time data sync; managed a 7-member team through Agile sprints reaching 500+ students.<br />
            <RouterLink
              to="/research#save-tuba"
              class="inline-link"
            >
              See project → Save Tuba
            </RouterLink> 
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="timeline-item-title">Graphic Design Intern — Office of Sustainability</h4>
          <span>Jan 2023 – Dec 2023 | Lehigh University, Bethlehem, PA</span>
          <p class="timeline-text">
            Created flyers, posters, and social media content for three semester-long campus events under the Office of Sustainability; collaborated on design team feedback and project critiques.
          </p>
        </li>
      </ul>
    </section>

    <!-- SKILLS -->
    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box"><ion-icon name="construct-outline" /></div>
        <h3 class="h3">Technical Skills</h3>
      </div>

      <div class="skill-groups">
        <div class="skill-group">
          <h4 class="skill-label">Languages</h4>
          <div class="tech-tags">
            <span class="tag">Python</span><span class="tag">JavaScript</span>
            <span class="tag">TypeScript</span><span class="tag">C / C++</span>
            <span class="tag">Rust</span><span class="tag">Go</span>
            <span class="tag">Java</span><span class="tag">SQL</span>
          </div>
        </div>
        <div class="skill-group">
          <h4 class="skill-label">ML &amp; AI</h4>
          <div class="tech-tags">
            <span class="tag">PyTorch</span><span class="tag">CUDA</span>
            <span class="tag">TensorFlow</span><span class="tag">NumPy</span>
            <span class="tag">pandas</span><span class="tag">scikit-learn</span>
            <span class="tag">OpenCV</span><span class="tag">Hugging Face</span>
            <span class="tag">CLIP</span><span class="tag">YOLO</span>
          </div>
        </div>
        <div class="skill-group">
          <h4 class="skill-label">Frameworks</h4>
          <div class="tech-tags">
            <span class="tag">React</span><span class="tag">React Native</span>
            <span class="tag">Flask</span><span class="tag">FastAPI</span>
            <span class="tag">Django</span><span class="tag">Next.js</span>
            <span class="tag">Node.js</span><span class="tag">Celery</span>
            <span class="tag">Express</span><span class="tag">Angular</span>
            <span class="tag">Vue</span>
          </div>
        </div>
        <div class="skill-group">
          <h4 class="skill-label">Data &amp; Infrastructure</h4>
          <div class="tech-tags">
            <span class="tag">PostgreSQL</span><span class="tag">Redis</span>
            <span class="tag">Kafka</span><span class="tag">TimescaleDB</span>
            <span class="tag">AWS S3 / SQS / EKS</span><span class="tag">Docker</span>
            <span class="tag">Kubernetes</span><span class="tag">Linux</span>
            <span class="tag">Git</span><span class="tag">CI/CD</span>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<style src="../assets/research.css"></style>
<style scoped>
/* Honors under the intro */
.honors {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
  padding: 0;
  list-style: none;
}

/* The chip is dark in both themes, so its text is set explicitly rather than
   inherited — otherwise the light theme paints dark text on a dark chip. */
.honors li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  color: hsl(0, 0%, 88%);
  background: hsl(240, 2%, 20%);
  border: 1px solid hsl(240, 2%, 28%);
  border-radius: 8px;
  padding: 7px 12px;
}

/* Intro paragraphs need breathing room; research.css sets none. */
.about-text p + p {
  margin-top: 14px;
}

.honor-tag,
.venue-tag {
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: hsl(45, 100%, 72%);
  border: 1px solid hsl(45, 100%, 72%, 0.45);
  border-radius: 4px;
  padding: 2px 6px;
  flex-shrink: 0;
}

/* Where each paper was accepted */
.venue-line {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
  font-size: 13.5px;
}

/* Skills */
.skill-groups {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-top: 8px;
}

.skill-label {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: hsl(45, 100%, 72%);
  margin-bottom: 10px;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: hsl(240, 2%, 20%);
  color: hsl(45, 100%, 72%);
  border: 1px solid hsl(240, 2%, 28%);
  border-radius: 6px;
  padding: 3px 10px;
  font-size: 12px;
  font-weight: 500;
}

@media (max-width: 580px) {
  .venue-line { gap: 6px; }
}
</style>
