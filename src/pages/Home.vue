<template>
  <div class="home">
    <aside class="profile">
      <img class="profile__photo" src="/images/headshot.jpg" alt="Malika Buribayeva" width="646" height="621" />
      <ul class="profile__links">
        <li><span class="label">Email</span> mabc26 <em>at</em> lehigh <em>dot</em> edu</li>
        <li><a href="https://github.com/ouiMalika" target="_blank" rel="noopener">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/ouimalika/" target="_blank" rel="noopener">LinkedIn</a></li>
        <li>Bethlehem, PA</li>
      </ul>
    </aside>

    <section class="bio">
      <h1 class="bio__name">Malika Buribayeva</h1>
      <p class="bio__role">B.S. Computer Science and Engineering, B.A. Product Design · Lehigh University, 2027</p>

      <p>
        I work on robotic systems whose decisions stay reliable when perception is uncertain. In Lehigh's
        <a href="https://idisc.lehigh.edu/research/autonomy-intelligent-robotics-lab-air-lab" target="_blank" rel="noopener">Autonomy and Intelligent Robotics Lab</a>,
        advised by
        <a href="https://engineering.lehigh.edu/faculty/cristian-ioan-vasile" target="_blank" rel="noopener">Cristian-Ioan Vasile</a>
        and
        <a href="https://www.aparnabharati.com/" target="_blank" rel="noopener">Aparna Bharati</a>,
        I study vision–language models as the perception layer of driving and embodied agents: calibrating what they
        report, and locating where their spatial planning fails.
      </p>
      <p>
        I also build data infrastructure and full-stack systems, and I have a parallel training in product design and
        architecture, which my honors project brings together with perception research. I am from Almaty, Kazakhstan.
      </p>

      <h2 class="section-title">News</h2>
      <ul class="news">
        <li v-for="(n, i) in news" :key="i" class="news__item">
          <span class="news__date">{{ n.date }}</span>
          <span class="news__text" v-html="n.html" />
        </li>
      </ul>

      <h2 class="section-title">Honors</h2>
      <p class="honors">
        IEEE GHTC Best Student Presentation Award · Lehigh Future Maker Award · Trustees’ Scholarship ·
        Cork O’Keefe Memorial Scholarship · Bret Talley Scholarship for Future Tech Pioneers
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { news } from '../data/news'
</script>
