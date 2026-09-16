<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">About Me</h2>
    </header>

    <section class="about-text">
      <p>
        I’m Malika Buribayeva, a Computer Science & Design student at Lehigh University (2022–2027). 
        I merge AI research, software development, and design thinking to create meaningful, human-centered technologies.
      </p>
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
          <span>B.S. Computer Science & B.A. Design — 2022–2027</span>
          <p class="timeline-text">
            <strong>CS Coursework:</strong> AI, Computer Networks, Systems Software, Operating Systems, HCI, Algorithms, Software Engineering, Data Structures, Programming Languages, Computer Architecture, Computer Graphics, Statistics and Probability, Applied Linear Algebra.
            <br />
            <strong>Design Coursework:</strong> Product Design I-II, Interactive Data Visualization, 2D Design, 3D Design.
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
  </article>
</template>
