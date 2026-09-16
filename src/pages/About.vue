<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">About Me</h2>
    </header>

    <section class="about-text">
      <div class="intro-row">
        <div class="intro-copy">
          <p>
            I’m Malika, an international student from Almaty, Kazakhstan — the city of mountains
            and apples. I study Computer Science &amp; Engineering and Product Design at Lehigh
            University, graduating in May 2027.
          </p>
          <p>
            I do research in Lehigh’s
            <a href="https://idisc.lehigh.edu/research/autonomy-intelligent-robotics-lab-air-lab" target="_blank" rel="noopener" class="inline-link">Autonomy &amp; Intelligent Robotics Lab</a>,
            advised by
            <a href="https://engineering.lehigh.edu/faculty/cristian-ioan-vasile" target="_blank" rel="noopener" class="inline-link">Prof. Cristian-Ioan Vasile</a>
            and
            <a href="https://engineering.lehigh.edu/faculty/aparna-bharati" target="_blank" rel="noopener" class="inline-link">Prof. Aparna Bharati</a>.
            My work is on vision–language models used for driving and embodied agents: how to tell
            what these models actually know, and what a system should do when they are not sure.
          </p>
          <p>
            Alongside research I build data infrastructure and full-stack systems. Outside of it,
            I dance, make visual art, and hike.
          </p>

          <p class="honors-line">
            Lehigh Future Maker Award · Trustees’ Scholarship · IEEE GHTC 2023 Best Student Presentation
          </p>
        </div>

        <figure class="intro-photo">
          <img
            src="/images/almaty.jpg"
            alt="Malika in the mountains above Almaty, Kazakhstan, with the gondola line behind her"
            loading="lazy"
          />
          <figcaption>Above Almaty, December 2025.</figcaption>
        </figure>
      </div>
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
            <RouterLink to="/research" class="inline-link">See research → CALM, Better Read Than Said</RouterLink>
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
/* Intro sits beside the photo on wide screens and stacks underneath on narrow. */
.intro-row {
  display: grid;
  grid-template-columns: minmax(0, 1.9fr) minmax(0, 1fr);
  gap: 28px;
  align-items: start;
}

.intro-photo {
  margin: 0;
  max-width: 380px;
  justify-self: end;
}

.intro-photo img {
  width: 100%;
  height: auto;
  border-radius: 14px;
  box-shadow: var(--shadow-3);
  display: block;
}

.intro-photo figcaption {
  margin-top: 8px;
  font-size: 12.5px;
  color: hsl(0, 0%, 52%);
}

@media (max-width: 840px) {
  .intro-row {
    grid-template-columns: 1fr;
  }

  .intro-photo {
    max-width: 320px;
  }
}

/* Awards sit under the intro as one quiet line, not as pills — they should
   register on a second read, not compete with the first paragraph. */
.honors-line {
  margin-top: 18px;
  font-size: 13px;
  color: hsl(0, 0%, 52%);
}

/* Intro paragraphs need breathing room; research.css sets none. */
.about-text p + p {
  margin-top: 14px;
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
  color: var(--vegas-gold);
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

</style>
