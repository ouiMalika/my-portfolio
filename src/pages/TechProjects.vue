<template>
  <article class="about active" data-page="tech-projects">
    <header>
      <h2 class="h2 article-title">Tech Projects</h2>
    </header>

    <!-- NODEMIND -->
    <section class="timeline" id="nodemind">
      <div class="title-wrapper">
        <div class="icon-box"><ion-icon name="git-network-outline" /></div>
        <h3 class="h3">NodeMind — Fleet Observability for a Micro-Manufacturing Fab</h3>
      </div>

      <div class="timeline-list">
        <div class="timeline-item">
          <p class="timeline-span">Data Engineering Internship · Summer 2026</p>

          <p class="timeline-text">
            A fab of about <strong>25 networked machines</strong> — laser micro-machining,
            thermo-mechanical bonding, robotic transport, optical inspection — each streaming
            telemetry up to kHz rates. Every machine team already had a good real-time viewer
            answering <em>“is my machine OK right now.”</em> Nobody could answer
            <strong>“what happened to this machine, and why”</strong>, because the answer was
            scattered across five systems: a time-series database, a process-records database, a
            ticketing system, config files on the machines themselves, and hand-kept spreadsheets.
            Diagnosing one incident meant opening all five and joining them by hand.
          </p>

          <p class="timeline-text">
            I interviewed three machine teams and found they were asking for three different
            products that were really one product: <strong>the run</strong> — one cut, one bond, one
            transport — as a first-class object, with everything that happened to it attached.
          </p>

          <div class="case-metrics">
            <div class="case-metric">
              <span class="case-metric-value">53×</span>
              <span class="case-metric-label">faster core analytics page (245 s → 4.6 s)</span>
            </div>
            <div class="case-metric">
              <span class="case-metric-value">73%</span>
              <span class="case-metric-label">of inspection images bound to a part, vs ~1% before</span>
            </div>
            <div class="case-metric">
              <span class="case-metric-value">5 → 1</span>
              <span class="case-metric-label">systems to open to diagnose an incident</span>
            </div>
            <div class="case-metric">
              <span class="case-metric-value">33</span>
              <span class="case-metric-label">API endpoints behind the production service</span>
            </div>
          </div>

          <h4 class="case-h4">The missing link</h4>
          <p class="timeline-text">
            The core problem was not a missing chart. <strong>No recorded link existed between a
            finished device and the parts and process runs that produced it.</strong> Each system
            knew its own half and nothing joined them. I designed the capture mechanism — an
            exact-identity join keyed on the serial etched into each workpiece — and built the
            knowledge graph binding every device to its cuts, bonds, transports, inspection images
            and lab measurements.
          </p>
          <p class="timeline-text">
            Identity had to be exact rather than approximate. Parts travel the fab in carriers and
            are processed as a batch, so matching an image by container and time window returns a
            dozen candidates and resolves almost nothing. The etched serial resolves to exactly one
            part. That single design decision is the difference between
            <strong>~1% and ~73%</strong> of inspection images binding to the part they show.
          </p>

          <h4 class="case-h4">Decisions worth defending</h4>
          <p class="timeline-text">
            <strong>Absence is information.</strong> When a part was never measured, the page says
            “never measured” and names the producer that would have filled it, instead of rendering
            a blank field — making a fab-wide measurement gap visible on every record it touches.
          </p>
          <p class="timeline-text">
            <strong>The rollout gap belongs in the product.</strong> A tab whose upstream data
            source isn’t deployed yet greys out and names the exact service that would fill it. The
            distance between “what runs today” and “the full product” stays visible rather than
            looking like a bug.
          </p>
          <p class="timeline-text">
            <strong>One timeline.</strong> Failed runs, config changes with their author, incidents,
            maintenance and machine logs merged into a single ordering per machine — the join that
            existed in no prior tool, and the one that turns “this machine has been weird for weeks”
            into a specific line, a specific author, and a specific date.
          </p>

          <h4 class="case-h4">Prototype, then production</h4>
          <p class="timeline-text">
            I built a research prototype first — a single-file Streamlit app where a new panel took
            minutes, so engineers’ questions drove the interface. That is where the design was
            actually discovered: which joins matter, which views engineers open by default, what
            they ignore. I then ported the validated design to a production service: a Flask JSON
            API with a React front end, API-as-contract so other internal tools consume the data
            without my UI, shipped through strict typing, lint, tests, a container build and review
            by four engineers across two teams.
          </p>

          <h4 class="case-h4">Live demo</h4>
          <p class="timeline-text">
            The demo below is a faithful <strong>recreation</strong> of the interface, built from
            scratch on <strong>fully synthetic data</strong> — generated machines, parts, runs,
            incidents and people. No proprietary data, internal names, or employer code appears in
            it. The two joins are computed at runtime from the generated fleet rather than
            hardcoded, so the ~1% versus ~73% gap is something the demo actually measures.
          </p>

          <p class="timeline-text">
            <a :href="demoUrl" target="_blank" rel="noopener" class="inline-link">
              <strong>Open the live demo →</strong>
            </a>
            &nbsp;·&nbsp;
            <a :href="repoUrl" target="_blank" rel="noopener" class="inline-link">
              Source on GitHub
            </a>
          </p>

          <!-- Live UI Preview Card -->
          <div class="site-preview">
            <div class="browser-bar">
              <div class="browser-dots">
                <span></span><span></span><span></span>
              </div>
              <div class="browser-url">nodemind.vercel.app</div>
            </div>
            <div class="preview-body">
              <iframe
                :src="demoUrl"
                title="NodeMind Live Preview"
                scrolling="no"
                loading="lazy"
                class="site-iframe"
              ></iframe>
              <a
                :href="demoUrl"
                target="_blank"
                rel="noopener"
                class="preview-overlay"
                aria-label="Open NodeMind"
              >
                <span class="preview-cta">Open App ↗</span>
              </a>
            </div>
          </div>

          <div class="media-row">
            <div class="media-item poster-box">
              <a :href="demoUrl" target="_blank" rel="noopener">
                <img src="/images/nodemind-fleet.png" alt="NodeMind fleet view" class="poster-img" />
              </a>
              <p class="poster-caption">Fleet view — machines ranked by failure rate</p>
            </div>
            <div class="media-item poster-box">
              <a :href="demoUrl" target="_blank" rel="noopener">
                <img src="/images/nodemind-graph.png" alt="NodeMind knowledge graph view" class="poster-img" />
              </a>
              <p class="poster-caption">Knowledge graph — device to parts, runs, images, lab results</p>
            </div>
          </div>

          <div class="tech-tags">
            <span class="tag">Python</span>
            <span class="tag">Flask</span>
            <span class="tag">React</span>
            <span class="tag">Vite</span>
            <span class="tag">Recharts</span>
            <span class="tag">TimescaleDB</span>
            <span class="tag">PostgreSQL</span>
            <span class="tag">Iceberg / Parquet</span>
            <span class="tag">Docker</span>
            <span class="tag">GitLab CI</span>
            <span class="tag">Kubernetes</span>
            <span class="tag">OPC UA</span>
          </div>
        </div>
      </div>
    </section>


    <!-- MINI KAFKA -->
    <section class="timeline" id="mini-kafka">
      <div class="title-wrapper">
        <div class="icon-box"><ion-icon name="layers-outline" /></div>
        <h3 class="h3">Mini Kafka — A Message Broker Written From the Protocol Spec</h3>
      </div>

      <div class="timeline-list">
        <div class="timeline-item">
          <p class="timeline-span">CSE 376 Distributed Systems · Spring 2026</p>

          <p class="timeline-text">
            I had used Kafka as a black box on another project and wanted to know what was
            actually inside it, so for my distributed systems final I wrote one in C++ from the
            protocol specification. Three brokers, a <code>bids</code> topic split into three
            partitions, each partition led by one broker and replicated onto another. The demo
            application on top is a real-time auction: bidders, a live leaderboard, an outbid
            notifier, and an audit log, all reading the same partitioned stream.
          </p>

          <p class="timeline-text">
            It ran across three of Lehigh's SunLab machines — <code>ariel</code>,
            <code>caliban</code> and <code>callisto</code> — because a broker that only survives
            a process dying on your laptop has not really been tested. Killing a machine and
            watching the cluster keep taking bids is the whole point.
          </p>

          <div class="case-metrics">
            <div class="case-metric">
              <span class="case-metric-value">99.6%</span>
              <span class="case-metric-label">of 20,000 bids accepted while a leader was killed mid-run</span>
            </div>
            <div class="case-metric">
              <span class="case-metric-value">98 ms</span>
              <span class="case-metric-label">to pull 6,172 missed entries and rejoin as a replica</span>
            </div>
            <div class="case-metric">
              <span class="case-metric-value">1.2 ms</span>
              <span class="case-metric-label">median produce ack, replicated, across 100,000 bids</span>
            </div>
            <div class="case-metric">
              <span class="case-metric-value">0</span>
              <span class="case-metric-label">acknowledged bids lost in any failure run</span>
            </div>
          </div>

          <h4 class="case-h4">What is actually implemented</h4>
          <p class="timeline-text">
            An append-only log per partition with monotonic offsets. Synchronous primary-backup
            replication: the leader appends locally, sends <code>REPLICATE</code> to its follower,
            waits for the acknowledgement, and only then acknowledges the producer — so a bid that
            came back "accepted" exists on two hosts before the bidder sees it. Heartbeats every
            250 ms, and a follower that has not heard from its leader in 750 ms promotes itself.
            On rejoin, a recovering broker pulls what it missed from the current leader, truncates
            any local entries that diverged while it was writing alone, and signals
            <code>RESUME</code>.
          </p>

          <h4 class="case-h4">The hash mattered more than I expected</h4>
          <p class="timeline-text">
            My first partitioner used <code>std::hash</code>. With ten auction items, it put 4,705
            and 4,927 messages on two partitions and 368 on the third — one broker doing almost
            nothing while the other two did the work. Switching to the murmur2 variant Kafka itself
            uses, seed <code>0x9747b28c</code>, spread the same keys far more evenly. Ten keys
            across three partitions can never be perfectly balanced, but the difference between a
            starved partition and a working one came down to the hash function.
          </p>

          <div class="media-row">
            <div class="media-item poster-box">
              <img src="/images/minikafka-skew.png" alt="Partition load distribution under std::hash versus murmur2" class="poster-img" />
              <p class="poster-caption">Same 10,000 bids, same ten keys. Left: <code>std::hash</code> starves p1. Right: murmur2.</p>
            </div>
            <div class="media-item poster-box">
              <img src="/images/minikafka-latency.png" alt="Latency CDF for produce acknowledgement and end to end delivery" class="poster-img" />
              <p class="poster-caption">100,000 bids. Produce ack lands near 1.2 ms; end-to-end delivery near 28 ms.</p>
            </div>
          </div>

          <h4 class="case-h4">Failure, and then recovery</h4>
          <p class="timeline-text">
            The two runs below are the same workload — 20,000 bids at 500/s — with broker 3 killed
            at <em>t</em> = 5 s. In both, failures are confined to a window slightly wider than the
            heartbeat timeout, then throughput returns to its pre-failure rate. The difference is
            the purple line, which counts fully replicated partitions. In the first run the broker
            never comes back and the cluster keeps serving in degraded mode, one replica short,
            indefinitely. In the second it restarts at 15.3 s and the cluster is fully replicated
            again by 16.27 s.
          </p>

          <p class="timeline-text">
            Tightening heartbeats from 1 s / 3 s to 250 ms / 750 ms moved acceptance during the
            failure window from 94.9% to 99.6%. The failure window scales with the timeout, which
            is the tradeoff you are actually choosing when you tune those numbers.
          </p>

          <div class="media-row">
            <div class="media-item poster-box">
              <img src="/images/minikafka-failover.png" alt="Throughput around a leader failure with no recovery" class="poster-img" />
              <p class="poster-caption">Leader killed at 5 s, never restarted — throughput returns, replication stays degraded.</p>
            </div>
            <div class="media-item poster-box">
              <img src="/images/minikafka-recovery.png" alt="Throughput around a leader failure followed by log-based recovery" class="poster-img" />
              <p class="poster-caption">Same failure, broker restarted at 15.3 s — catches up and rejoins by 16.27 s.</p>
            </div>
          </div>

          <h4 class="case-h4">Making it runnable off campus</h4>
          <p class="timeline-text">
            The project only ran on the SunLab machines, which meant I could not show it to anyone
            without campus access. I added a local mode — <code>MINI_KAFKA_LOCAL=1</code> — that
            puts all three brokers on loopback. Replication, heartbeats, promotion and log recovery
            take exactly the same code paths; only the addresses change. You can kill a broker in
            one terminal and watch the demo clients carry on in another, on one machine.
          </p>

          <p class="timeline-text">
            <a :href="kafkaRepo" target="_blank" rel="noopener" class="inline-link">
              <strong>Source on GitHub →</strong>
            </a>
            &nbsp;·&nbsp;
            <a :href="kafkaReport" target="_blank" rel="noopener" class="inline-link">
              Full write-up and evaluation (PDF)
            </a>
          </p>

          <div class="tech-tags">
            <span class="tag">C++17</span>
            <span class="tag">POSIX sockets</span>
            <span class="tag">pthreads</span>
            <span class="tag">Custom wire protocol</span>
            <span class="tag">murmur2</span>
            <span class="tag">Primary-backup replication</span>
            <span class="tag">Python</span>
            <span class="tag">matplotlib</span>
          </div>
        </div>
      </div>
    </section>

    <!-- MARATHON PIPELINE -->
    <section class="timeline" id="marathon-pipeline">
      <div class="title-wrapper">
        <div class="icon-box"><ion-icon name="pulse-outline" /></div>
        <h3 class="h3">Boston Marathon Analytics — A Streaming Pipeline End to End</h3>
      </div>

      <div class="timeline-list">
        <div class="timeline-item">
          <p class="timeline-span">Personal project · Spring 2026</p>

          <p class="timeline-text">
            I started running this spring and finished my first half marathon in April. Around the
            same time I wanted to build a streaming pipeline properly — not a toy producer printing
            to a console, but the whole path from raw files to something a person would actually
            look at. Race results turned out to be a good fit: they are genuinely time-ordered, they
            are messy in interesting ways, and I cared about the questions.
          </p>

          <p class="timeline-text">
            The pipeline replays three years of Boston Marathon results — 2015, 2016 and 2017,
            roughly 26,500 runners each — as a live event stream. Each runner crosses nine timing
            checkpoints, which melts out to <strong>715,687 checkpoint events</strong>. The producer
            publishes them to Kafka in simulated real time, a stateful consumer aggregates them into
            SQLite as they arrive, and a Streamlit dashboard reads both the live race and the
            year-over-year comparisons.
          </p>

          <div class="case-metrics">
            <div class="case-metric">
              <span class="case-metric-value">715,687</span>
              <span class="case-metric-label">checkpoint events replayed through Kafka</span>
            </div>
            <div class="case-metric">
              <span class="case-metric-value">3</span>
              <span class="case-metric-label">race years, one Kafka partition each, keyed by race id</span>
            </div>
            <div class="case-metric">
              <span class="case-metric-value">79,344</span>
              <span class="case-metric-label">finishers classified into pace cohorts</span>
            </div>
            <div class="case-metric">
              <span class="case-metric-value">9</span>
              <span class="case-metric-label">aggregate tables updated incrementally, never batched</span>
            </div>
          </div>

          <div class="media-row">
            <div class="media-item poster-box wide">
              <img src="/images/marathon-live.png" alt="Live race monitor showing three race years side by side" class="poster-img" />
              <p class="poster-caption">
                Live race monitor. One column per year, filling as the producer streams. The race
                clock is derived from the newest event the consumer has processed, so if the
                consumer falls behind, the clock shows it.
              </p>
            </div>
          </div>

          <h4 class="case-h4">Decisions that came out of things breaking</h4>
          <p class="timeline-text">
            <strong>Partition by race id.</strong> Every event for one race lands on one partition,
            which preserves checkpoint ordering within a race. A runner cannot pass 30K before 25K
            in the stream. Adding a fourth race year means a fourth partition, not a rewrite.
          </p>
          <p class="timeline-text">
            <strong>WAL mode on SQLite.</strong> The first version threw
            <code>database is locked</code> constantly — the dashboard polls while the consumer
            writes, and the default journal mode makes those two collide. Write-ahead logging lets
            readers and the writer work at the same time.
          </p>
          <p class="timeline-text">
            <strong>Idempotent writes everywhere.</strong> Raw events carry a uniqueness constraint
            on <code>(race_id, runner_id, checkpoint)</code>, and every aggregate table upserts. I
            can kill the consumer mid-race and restart it without double counting, which matters
            because during development I killed it constantly.
          </p>
          <p class="timeline-text">
            <strong>State keyed per race.</strong> Bib numbers repeat across years. Without keying
            every piece of consumer state by race id, 2016's bib 231 quietly contaminates 2015's.
          </p>

          <h4 class="case-h4">Dropping data on purpose</h4>
          <p class="timeline-text">
            Some segment times are impossible — faster than the marathon world record pace, or
            slower than walking. These are timing mat glitches, not runners. Rather than let a
            single bad split drag a cohort average around, the consumer flags anything outside
            those bounds and excludes it from the aggregates, while still counting it. The
            dashboard shows those counts per year, which turns a data quality problem into one of
            the five questions the dashboard answers.
          </p>

          <div class="media-row">
            <div class="media-item poster-box wide">
              <img src="/images/marathon-yoy.png" alt="Year over year analysis views comparing three race years" class="poster-img" />
              <p class="poster-caption">
                Five comparative views, all computed incrementally as events arrive: field size,
                median finish per cohort, where each year's field hits the wall, pacing discipline,
                and anomalies flagged per year.
              </p>
            </div>
          </div>

          <p class="timeline-text">
            The pacing numbers are my favourite result, because they are unkind. Across all three
            years, between 89% and 96% of finishers ran their second span slower than their first
            half. Positive splits are not a beginner mistake, they are what nearly everyone does.
          </p>

          <p class="timeline-text">
            <a :href="marathonRepo" target="_blank" rel="noopener" class="inline-link">
              <strong>Source on GitHub →</strong>
            </a>
          </p>
          <p class="timeline-text note-line">
            The dashboard is not hosted, because a live instance needs Kafka in Docker plus a
            producer and consumer running alongside it. The screenshots above are the real thing
            with all three years loaded, and the repo has a one-command launcher.
          </p>

          <div class="tech-tags">
            <span class="tag">Python</span>
            <span class="tag">Apache Kafka</span>
            <span class="tag">Docker Compose</span>
            <span class="tag">kafka-python-ng</span>
            <span class="tag">SQLite (WAL)</span>
            <span class="tag">pandas</span>
            <span class="tag">Streamlit</span>
          </div>
        </div>
      </div>
    </section>

    <section class="timeline" id="visionboard-ai">
      <div class="title-wrapper">
        <div class="icon-box"><ion-icon name="color-wand-outline" /></div>
        <h3 class="h3">VisionBoard AI</h3>
      </div>

      <div class="timeline-list">
        <div class="timeline-item">
          <p class="timeline-text">
            <a href="https://visionboard-ai-xi.vercel.app" target="_blank" rel="noopener">
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

          <!-- Live UI Preview Card -->
          <div class="site-preview">
            <div class="browser-bar">
              <div class="browser-dots">
                <span></span><span></span><span></span>
              </div>
              <div class="browser-url">visionboard-ai-xi.vercel.app</div>
            </div>
            <div class="preview-body">
              <iframe
                src="https://visionboard-ai-xi.vercel.app"
                title="VisionBoard AI Live Preview"
                scrolling="no"
                loading="lazy"
                class="site-iframe"
              ></iframe>
              <a
                href="https://visionboard-ai-xi.vercel.app"
                target="_blank"
                rel="noopener"
                class="preview-overlay"
                aria-label="Open VisionBoard AI"
              >
                <span class="preview-cta">Open App ↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
const demoUrl = 'https://nodemind.vercel.app'
const repoUrl = 'https://github.com/ouiMalika/nodemind'
const kafkaRepo = 'https://github.com/ouiMalika/mini-kafka'
const kafkaReport = 'https://github.com/ouiMalika/mini-kafka/blob/main/CSE_376_FINAL_REPORT.pdf'
const marathonRepo = 'https://github.com/ouiMalika/marathon-dashboard'
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

/* --- VisionBoard AI Live Preview Card --- */
.site-preview {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-3);
  border: 1px solid hsl(240, 2%, 28%);
  margin-top: 22px;
}

.browser-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  background: hsl(240, 2%, 20%);
  padding: 8px 14px;
  border-bottom: 1px solid hsl(240, 2%, 28%);
}

.browser-dots {
  display: flex;
  gap: 6px;
  flex-shrink: 0;
}
.browser-dots span {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}
.browser-dots span:nth-child(1) { background: #ff5f57; }
.browser-dots span:nth-child(2) { background: #ffbd2e; }
.browser-dots span:nth-child(3) { background: #28c840; }

.browser-url {
  flex: 1;
  background: hsl(240, 2%, 15%);
  border-radius: 6px;
  padding: 3px 10px;
  font-size: 0.74rem;
  color: hsl(0, 0%, 55%);
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.preview-body {
  position: relative;
  height: 340px;
  overflow: hidden;
  background: hsl(240, 2%, 12%);
}

.site-iframe {
  width: 200%;
  height: 680px;
  border: none;
  transform: scale(0.5);
  transform-origin: top left;
  pointer-events: none;
}

.preview-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 14px;
  background: linear-gradient(to bottom, transparent 55%, rgba(0, 0, 0, 0.5) 100%);
  text-decoration: none;
  transition: background 0.25s ease;
}

.preview-overlay:hover {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.65) 100%);
}

.preview-cta {
  background: hsl(45, 100%, 72%);
  color: hsl(240, 10%, 10%);
  font-weight: 700;
  font-size: 0.78rem;
  padding: 6px 14px;
  border-radius: 20px;
  transition: transform 0.2s ease;
}

.preview-overlay:hover .preview-cta {
  transform: scale(1.06);
}

/* --- Case-study sections (NodeMind, Mini Kafka, Marathon) --- */
.case-h4 {
  margin: 22px 0 8px;
  font-size: 15px;
  font-weight: 600;
  color: var(--white-2, #fafafa);
}

.timeline-span {
  font-size: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: hsl(45, 100%, 72%);
  margin-bottom: 10px;
}

.case-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
  margin: 18px 0 6px;
}

.case-metric {
  padding: 12px 14px;
  border-radius: 12px;
  background: hsl(240, 2%, 20%);
  border: 1px solid hsl(240, 2%, 28%);
}

.case-metric-value {
  display: block;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: hsl(45, 100%, 72%);
}

.case-metric-label {
  display: block;
  margin-top: 3px;
  font-size: 12.5px;
  line-height: 1.4;
  color: hsl(0, 0%, 62%);
}

/* Screenshots here are wide captures, not posters, so let them size naturally
   rather than inherit the fixed 420px poster height from research.css. */
.media-row {
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  align-items: start;
  margin-top: 26px;
}

.media-row .poster-img {
  height: auto;
  object-fit: contain;
  background: hsl(240, 2%, 15%);
  border: 1px solid hsl(240, 2%, 28%);
}

.media-item.wide,
.poster-box.wide {
  grid-column: 1 / -1;
}

.poster-caption {
  line-height: 1.45;
  text-align: left;
  margin-top: 8px;
}

.timeline-text code,
.poster-caption code {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.88em;
  padding: 1px 5px;
  border-radius: 5px;
  background: hsl(240, 2%, 20%);
  color: hsl(45, 100%, 82%);
}

.note-line {
  font-size: 13px;
  color: hsl(0, 0%, 58%);
  border-left: 2px solid hsl(240, 2%, 28%);
  padding-left: 12px;
}

@media (max-width: 950px) {
  .media-row {
    grid-template-columns: 1fr;
  }
}
</style>
