export interface Media {
  src: string
  alt: string
  caption?: string
}

export interface Section {
  heading?: string
  text?: string
  media?: Media[]
  layout?: 'wide' | 'grid2' | 'grid3' | 'strip' | 'phones'
  metrics?: { value: string; label: string }[]
  embed?: { src: string; title: string; ratio?: string }
  links?: { label: string; href: string }[]
  tags?: string[]
}

export interface Project {
  slug: string
  title: string
  meta: string
  status?: string
  group?: string
  cover: string
  coverFit?: 'cover' | 'contain'
  blurb: string
  intro: string
  sections: Section[]
}

const img = (src: string, alt: string, caption?: string): Media => ({ src, alt, caption })

/* ───────────────────────────── RESEARCH ───────────────────────────── */

export const research: Project[] = [
  {
    slug: 'calm',
    title: 'CALM',
    meta: 'AIR Lab · 2026',
    cover: '/images/research/calm/scenario.jpg',
    coverFit: 'contain',
    blurb: 'Calibrated perception for risk-aware action selection in urban driving.',
    intro:
      '<strong>Calibrated Vision–Language Perception for Risk-Aware Action Selection in Urban Driving.</strong> A planning pipeline that treats a vision–language model as a component that is sometimes confident and wrong. Its reading of a traffic sign is carried forward as a calibrated belief, so the action taken can be traced back to what was known and how well it was known.',
    sections: [
      {
        heading: 'One event, end to end',
        text: 'A car approaching a red light with a two-second horizon. GroundingDINO finds the light, an open vision–language model reads three padded crops, the readings are calibrated into a distribution over five longitudinal actions, and the planner commits one. The predicted speed change is compared with what the human driver did.',
        media: [img('/images/research/calm/scenario.jpg', 'Scene 0017: detection, VLM reading, calibration and planning for one red-light event')],
        layout: 'wide',
      },
      {
        heading: 'Perception on nuScenes',
        text: 'Sign and signal detection and tracking on nuScenes scenes, the input to the reading and calibration stages.',
        media: [img('/images/research/calm/nuscenes-annotated.mp4', 'Annotated nuScenes drive with detected signs')],
        layout: 'wide',
      },
      {
        heading: 'Pipeline',
        text: 'Detection, VLM reading, calibration with logistic regression and split-conformal sets, a per-class action library, and a MILP planner with a cost matrix, CVaR and distributionally robust layers. Evaluation is open-loop, with the catastrophic-miss rate on required hard-brake events as the primary measure.',
        media: [
          img('/images/research/calm/pipeline-steps.jpg', 'Pipeline stages from detection to the committed action'),
          img('/images/research/calm/belief.jpg', 'Calibrated belief over the five actions for a hard-brake event'),
        ],
        layout: 'grid2',
      },
      {
        heading: 'Objectives',
        text: 'With the belief held fixed, the planner compares L1, asymmetric consequence, CVaR and distributionally robust objectives, trading catastrophic misses against false stops.',
        media: [
          img('/images/research/calm/frontier.jpg', 'Catastrophic-miss rate against false-stop rate for each planner'),
          img('/images/research/calm/cost-sweep.jpg', 'Catastrophic misses under each cost, at three units of analysis'),
        ],
        layout: 'grid2',
      },
      {
        heading: 'Venues',
        text: 'IROS 2026, Pittsburgh: <a href="https://sites.google.com/bu.edu/hybridarchforautonomy" target="_blank" rel="noopener">Workshop on Bridging Learning, Planning, and Control (BLPC)</a> and <a href="https://rethinking-uncertainty.github.io/" target="_blank" rel="noopener">Workshop on Rethinking Uncertainty</a>, September 2026. <a href="https://nerc2026.github.io/" target="_blank" rel="noopener">Northeast Robotics Colloquium (NERC 2026)</a>, Princeton, October 2026.<br>With Qiuyu Tang, Kaier Liang, Aparna Bharati and Cristian-Ioan Vasile.',
      },
    ],
  },
  {
    slug: 'better-read-than-said',
    title: 'Better Read Than Said',
    meta: 'AIR Lab · 2026',
    cover: '/images/research/brts/maze.png',
    coverFit: 'contain',
    blurb: 'Locating spatial-planning failure at the output interface of vision–language models.',
    intro:
      'When a vision–language model fails to plan a route, which part of it broke: the representation it formed of the scene, or the step that turns that representation into a written move? We separate the two on grid mazes from the Visual Spatial Planning benchmark, where breadth-first search on the true map scores every proposed move exactly.',
    sections: [
      {
        heading: 'Setup',
        text: 'From one forward pass under one prompt, five ways of getting a next move out of the same frozen hidden state are compared: two that read what the model writes, and three that fit a classifier on its activations. Six open models across three families.',
        media: [
          img('/images/research/brts/maze.png', 'A maze from the benchmark'),
          img('/images/research/brts/task.jpg', 'Maze levels and transition rules'),
          img('/images/research/brts/design.jpg', 'Five readout methods from one shared context'),
        ],
        layout: 'grid3',
      },
      {
        heading: 'Result',
        text: 'The classifiers recover an optimal move far more often than five of the six models manage to write one. Within a family, the written plan improves with scale while the classifier stays flat, so scale buys better access to spatial information the model already encodes at the smallest size measured. The same pattern appears for the agent’s own coordinates and in perception. Together these point to an action-emission bottleneck rather than a perception one.',
        media: [
          img('/images/research/brts/ladder.jpg', 'Optimal-action agreement by readout method and model'),
          img('/images/research/brts/results.jpg', 'One maze as shown, as decoded from the hidden state, and as stated in text'),
          img('/images/research/brts/calibration.jpg', 'Hazard estimates used as a hard wall or as a soft cost'),
        ],
        layout: 'grid3',
      },
      {
        heading: 'Venues',
        text: '<a href="https://vlm4rwd.github.io/" target="_blank" rel="noopener">NeurIPS 2026 Workshop on Vision Language Models: Challenges of Real World Deployment (VLM4RWD)</a>, Sydney, December 2026. A companion paper, <em>Decoded and Generated Actions in Vision–Language Spatial Planning</em>, was presented at the <a href="https://rethinking-uncertainty.github.io/" target="_blank" rel="noopener">IROS 2026 Workshop on Rethinking Uncertainty</a>, Pittsburgh.<br>With Qiuyu Tang, Cristian-Ioan Vasile and Aparna Bharati.',
      },
    ],
  },
  {
    slug: 'taste-topology',
    title: 'Taste Topology',
    meta: 'Honors project · Art, Architecture and Design · 2026',
    status: 'In progress',
    cover: '/images/research/taste/panels.jpg',
    coverFit: 'contain',
    blurb: 'Whether aesthetic preference for a digital composition holds when the same design becomes a physical relief.',
    intro:
      'An undergraduate honors project advised by Prof. Eugene Han. It asks whether preferences for abstract digital compositions are stable when the same designs are realized as physical reliefs, using one parametric stimulus grammar for both media.',
    sections: [
      {
        heading: 'Stimuli',
        text: 'Four designs come from one deterministic function: six paths, four cycles, 10 mm amplitude, identical bounds and line width. A and B use even spacing, C and D two groups of three; A and C are smooth, B and D angular. The same metric geometry drives the drawings and the CAD reliefs.',
        media: [
          img('/images/research/taste/panels.jpg', 'Four flat-top relief panels A to D'),
          img('/images/research/taste/relief-a.jpg', 'Relief A, CAD render'),
        ],
        layout: 'grid2',
      },
      {
        heading: 'Study interface',
        text: 'A library installation guides each visitor through six drawing pairs and then the same six pairs as physical panels. Responses, timing and background are stored locally with no names or contact details.',
        media: [
          img('/images/research/taste/start.jpg', 'Start screen'),
          img('/images/research/taste/comparison.jpg', 'Drawing comparison'),
          img('/images/research/taste/physical.jpg', 'Physical pair instructions'),
        ],
        layout: 'grid3',
      },
    ],
  },
  {
    slug: 'archive-of-queer-care',
    title: 'Archive of Queer Care',
    meta: 'Amodei Lab · 2024–2025',
    cover: '/images/research/archive/poster.jpg',
    blurb: 'A VR archive of queer mutual aid and caregiving, built from oral histories.',
    intro:
      'A VR archive adapted from the performance <em>the dance floor, the hospital room, and the kitchen table</em>. It pairs first-person oral histories of queer care with transcript overlays and citation cards, across domestic and communal spaces.',
    sections: [
      {
        text: 'I selected content from more than 200 hours of interviews across five U.S. cities, spanning the AIDS epidemic to the COVID-19 pandemic, and rebuilt the scenes in Unity. The earlier version on Arena XR was migrated to <a href="https://gallery.styly.cc/scene/c40f51c2-b6d9-4d5b-8469-e85a92720dfd" target="_blank" rel="noopener">STYLY</a> for browser and Meta Quest access. Developed with Future Ghost and the Lehigh Department of Theatre; PI Joseph Amodei.',
      },
      {
        media: [img('/images/research/archive/poster.jpg', 'Archive of Queer Care poster')],
        embed: { src: 'https://drive.google.com/file/d/1AnLHMrf-F_KYwoCCO9AHiE0XRNspBXoa/preview', title: 'Archive of Queer Care walkthrough', ratio: '16 / 9' },
        layout: 'grid2',
      },
      {
        heading: 'Shown at',
        text: '<a href="https://conference.ostem.org/2025" target="_blank" rel="noopener">15th Annual oSTEM Conference</a>, Baltimore, October 2025 · <a href="https://voxel.org/events/dance-floor-hospital-room-kitchen-table" target="_blank" rel="noopener">Voxel Baltimore</a>, May 2025 · <a href="https://news.lehigh.edu/lehigh-summer-research-expo-showcases-students-innovative-projects" target="_blank" rel="noopener">Lehigh Summer Research Expo</a>, August 2024.',
      },
    ],
  },
  {
    slug: 'save-tuba',
    title: 'Save Tuba',
    meta: 'Global Social Impact Fellowship · 2023–2024',
    cover: '/images/research/savetuba/gavad1-p4-gavad-small.gif',
    coverFit: 'contain',
    blurb: 'A sustainability-education app for students and teachers in Kazakhstan.',
    intro:
      '<a href="https://savetuba.com" target="_blank" rel="noopener">Save Tuba</a> is a student mobile app and a teacher web app for environmental education in Kazakhstan. It was piloted with more than 500 students and teachers, and its interface and curriculum were revised from teacher feedback. Fieldwork took place in Almaty in May 2023 and May 2024 with <a href="https://almau.edu.kz/" target="_blank" rel="noopener">AlmaU</a> and <a href="https://www.kaznpu.kz/en/" target="_blank" rel="noopener">Abai Kazakh National Pedagogical University</a>.',
    sections: [
      {
        text: 'As a Fellow I worked on the seven-member development team, prototyped the teacher-facing front end, improved the Kazakh and Russian translations, and expanded the question bank in natural-science content. The app is on <a href="https://play.google.com/store/apps/details?id=com.jameschang.SaveTuba&hl=en_US" target="_blank" rel="noopener">Google Play</a>.',
        media: [
          img('/images/research/savetuba/gavad1-p4-gavad-small.gif', 'Save Tuba app screens'),
          img('/images/research/savetuba/gavad2-p4-gavad-small.gif', 'Save Tuba app screens'),
          img('/images/research/savetuba/gavad3-p4-gavad-small.gif', 'Save Tuba app screens'),
        ],
        layout: 'grid3',
      },
      {
        heading: 'Publication',
        text: 'Gavade, Bronson, Leaventon, Tuleubayev, Ossinger, Buribayeva, Jalal, Mehta. <a href="https://ieeexplore.ieee.org/document/10354628" target="_blank" rel="noopener">How Teacher Feedback Helped Reimagine, Redesign, and Recode a Sustainability Education App</a>. <a href="https://technologyandsociety.org/13th-ieee-global-humanitarian-technology-conference-ghtc-2023/" target="_blank" rel="noopener">IEEE GHTC 2023</a>, Villanova. Best Student Presentation Award.',
      },
    ],
  },
]

/* ───────────────────────────── TECH ───────────────────────────── */

export const tech: Project[] = [
  {
    slug: 'multi-view-recognition',
    title: 'Viewpoint Robustness in Multi-View Recognition',
    meta: 'CSE 330 Deep Learning · Fall 2026',
    status: 'In progress',
    cover: '/images/tech/multiview/navi.jpg',
    blurb: 'How four backbones and five view-fusion methods hold up when some views of an object are uninformative.',
    intro:
      'Object recognition is usually benchmarked on a few canonical views. This project measures how modern architectures recognize objects when some available views are poor, and whether combining several views of the same object makes recognition more robust. Team project with Maisy Earl, Trang Tran and Jacob Spangler.',
    sections: [
      {
        heading: 'Protocol',
        text: 'NAVI multi-view captures, four frozen backbones (ResNet-152, ConvNeXt-B, ViT-B/16, DINOv2 ViT-B/14) and five fusion methods from mean and max pooling to a graph neural network over views, all under one protocol with 3-fold object-level cross-validation. Robustness is measured by swapping standard views for hard views, the viewpoints a single-view classifier gets wrong, and by reducing the number of views.',
        media: [img('/images/tech/multiview/pipeline.jpg', 'Feature extraction, test conditions and classifiers')],
        layout: 'wide',
      },
      {
        heading: 'View graphs',
        media: [img('/images/tech/multiview/graphs.jpg', 'All views, nearest cameras and most similar views as graphs')],
        layout: 'wide',
      },
      {
        heading: 'Intermediate results',
        text: 'Combining views improves top-1 accuracy over single views by 2 to 8 points on every backbone, and every method loses accuracy as hard views are added. DINOv2 features are the most accurate (86.0% with mean pooling) and the least affected by hard views. Max pooling helps over single views only on the convolutional backbones. Where the graph network has been evaluated, it shows no significant advantage over mean pooling so far.',
        media: [
          img('/images/tech/multiview/hard-views.jpg', 'Accuracy as hard views replace standard views, per backbone'),
          img('/images/tech/multiview/conditions.jpg', 'Clean, fewer-view and hard-view test conditions'),
        ],
        layout: 'grid2',
        tags: ['PyTorch', 'ResNet', 'ConvNeXt', 'ViT', 'DINOv2', 'Graph neural networks'],
      },
    ],
  },
  {
    slug: 'cyclist-recognition',
    title: 'Cyclist Recognition System',
    meta: 'Capstone · industry sponsor · 2026',
    status: 'In progress',
    cover: '/images/tech/capstone/cover.jpg',
    blurb: 'Real-time recognition of enrolled riders from a phone camera, streamed to a GPU server.',
    intro:
      'A year-long capstone with an industry sponsor. A phone streams camera frames to a GPU server that runs a layered pipeline of person detection, face localization and face-embedding matching against enrolled riders, and returns names and boxes in real time.',
    sections: [
      {
        heading: 'App',
        text: 'Live detection on the phone, with the screen flow below shown as wireframes.',
        media: [
          img('/images/tech/capstone/live-detection.jpg', 'Live detection during a ride'),
          img('/images/tech/capstone/wire-1.png', 'Teams'),
          img('/images/tech/capstone/wire-3.png', 'Team detail'),
          img('/images/tech/capstone/wire-4.png', 'Cyclist profile'),
          img('/images/tech/capstone/wire-6.png', 'Post-ride stats'),
        ],
        layout: 'phones',
      },
      {
        heading: 'System',
        media: [img('/images/tech/capstone-pipeline.svg', 'Phone frames to detection, localization, embedding and matching')],
        layout: 'wide',
      },
      {
        heading: 'Work so far',
        metrics: [
          { value: '1.1 s → 0.27 s', label: 'per-frame latency' },
          { value: '512-d', label: 'face embeddings matched by cosine similarity' },
        ],
        text: 'Latency came down through input-size limits, model warm-up and identity tracking between frames, so a rider already recognized is not re-matched on every frame. Enrollment is consent-gated, frames are stored only with separate consent, and the backend deploys through CI with automatic rollback. I own the core architecture and act as the main contact for the sponsor’s architecture questions.',
        tags: ['Python', 'FastAPI', 'PostgreSQL', 'React Native', 'YOLOv8', 'MTCNN', 'FaceNet512', 'AWS S3'],
      },
    ],
  },
  {
    slug: 'fab-fleet-observability',
    title: 'Fab Fleet Observability',
    meta: 'Data engineering internship · Summer 2026',
    cover: '/images/tech/fleet-overview.jpg',
    blurb: 'One place to answer what happened to a machine, and why, across a 25-machine fab.',
    intro:
      'A fab of about 25 networked machines (laser micro-machining, thermo-mechanical bonding, robotic transport, optical inspection), each streaming telemetry at up to kHz rates. Every team had a real-time viewer for whether a machine was fine right now. Nobody could answer what happened to a machine and why, because the answer was spread across five systems: a time-series database, a process-records database, a ticketing system, on-machine config files and hand-kept spreadsheets.',
    sections: [
      {
        metrics: [
          { value: '53×', label: 'faster core analytics page (245 s → 4.6 s)' },
          { value: '73%', label: 'of inspection images bound to a part, vs ~1% before' },
          { value: '5 → 1', label: 'systems to open to diagnose an incident' },
          { value: '33', label: 'API endpoints behind the production service' },
        ],
      },
      {
        heading: 'The missing link',
        text: 'No recorded link existed between a finished device and the parts and process runs that produced it. I designed the capture mechanism, an exact-identity join on the serial etched into each workpiece, and built the graph that binds every device to its cuts, bonds, transports, inspection images and lab measurements. Matching by carrier and time window returns a dozen candidates for a batch; the etched serial resolves to one part. That decision is the difference between ~1% and ~73% of images binding to the part they show.',
        media: [img('/images/tech/fleet-graph.jpg', 'Device to parts, runs, images and lab results')],
        layout: 'wide',
      },
      {
        heading: 'Decisions',
        text: '<strong>Absence is information.</strong> A part that was never measured says so and names the producer that would have filled it.<br><strong>The rollout gap stays visible.</strong> A tab whose upstream source is not deployed yet greys out and names the service that would fill it.<br><strong>One timeline.</strong> Failed runs, config changes with their author, incidents, maintenance and machine logs merge into one ordering per machine.',
        media: [img('/images/tech/fleet-overview.jpg', 'Fleet view, machines ranked by failure rate')],
        layout: 'wide',
      },
      {
        heading: 'Prototype, then production',
        text: 'A single-file Streamlit prototype came first, so engineers’ questions could drive the interface. The validated design was then ported to a Flask JSON API with a React front end, shipped through strict typing, tests, a container build and review by four engineers across two teams. The screenshots are from a recreation on fully synthetic data; no employer data, names or code appear in them.',
        tags: ['Python', 'Flask', 'React', 'TimescaleDB', 'PostgreSQL', 'Iceberg / Parquet', 'Docker', 'Kubernetes', 'OPC UA'],
      },
    ],
  },
  {
    slug: 'mini-kafka',
    title: 'Mini Kafka',
    meta: 'CSE 376 Distributed Systems · Spring 2026',
    cover: '/images/tech/minikafka-recovery.png',
    coverFit: 'contain',
    blurb: 'A partitioned, replicated message broker written in C++ from the Kafka protocol spec.',
    intro:
      'Three brokers, a <code>bids</code> topic split into three partitions, each led by one broker and replicated onto another. The application on top is a real-time auction: bidders, a live leaderboard, an outbid notifier and an audit log, all reading the same stream. It ran across three SunLab machines, because a broker that only survives a process dying on a laptop has not really been tested.',
    sections: [
      {
        metrics: [
          { value: '99.6%', label: 'of 20,000 bids accepted while a leader was killed mid-run' },
          { value: '98 ms', label: 'to pull 6,172 missed entries and rejoin as a replica' },
          { value: '1.2 ms', label: 'median replicated produce ack across 100,000 bids' },
          { value: '0', label: 'acknowledged bids lost in any failure run' },
        ],
      },
      {
        heading: 'Implementation',
        text: 'An append-only log per partition with monotonic offsets. Synchronous primary-backup replication: the leader appends, sends <code>REPLICATE</code>, waits for the ack and only then acknowledges the producer. Heartbeats every 250 ms; a follower that hears nothing for 750 ms promotes itself. A recovering broker pulls what it missed, truncates entries that diverged, and signals <code>RESUME</code>.',
      },
      {
        heading: 'The hash mattered',
        text: 'With <code>std::hash</code>, ten auction keys put 4,705 and 4,927 messages on two partitions and 368 on the third. Kafka’s murmur2 variant spread the same keys far more evenly.',
        media: [
          img('/images/tech/minikafka-skew.png', 'Partition load under std::hash and murmur2'),
          img('/images/tech/minikafka-latency.png', 'Produce ack and end-to-end latency'),
        ],
        layout: 'grid2',
      },
      {
        heading: 'Failure and recovery',
        text: '20,000 bids at 500/s with broker 3 killed at 5 s. Without restart the cluster serves one replica short indefinitely; with restart at 15.3 s it is fully replicated again by 16.27 s. Tightening heartbeats from 1 s / 3 s to 250 ms / 750 ms moved acceptance during the failure window from 94.9% to 99.6%.',
        media: [
          img('/images/tech/minikafka-failover.png', 'Leader killed, never restarted'),
          img('/images/tech/minikafka-recovery.png', 'Leader killed, restarted and caught up'),
        ],
        layout: 'grid2',
        links: [
          { label: 'Source', href: 'https://github.com/ouiMalika/mini-kafka' },
          { label: 'Report (PDF)', href: 'https://github.com/ouiMalika/mini-kafka/blob/main/CSE_376_FINAL_REPORT.pdf' },
        ],
        tags: ['C++17', 'POSIX sockets', 'pthreads', 'murmur2', 'Primary-backup replication'],
      },
    ],
  },
  {
    slug: 'marathon-pipeline',
    title: 'Boston Marathon Streaming Pipeline',
    meta: 'Personal project · Spring 2026',
    cover: '/images/tech/marathon-live.png',
    blurb: '715,687 checkpoint events replayed through Kafka into SQLite and a live dashboard.',
    intro:
      'Three years of Boston Marathon results, about 26,500 runners each, replayed as a live stream. Each runner crosses nine timing checkpoints. A producer publishes events to Kafka in simulated real time, a stateful consumer aggregates them into SQLite, and a Streamlit dashboard reads the live race and the year-over-year comparisons.',
    sections: [
      {
        metrics: [
          { value: '715,687', label: 'checkpoint events' },
          { value: '3', label: 'race years, one partition each' },
          { value: '79,344', label: 'finishers in pace cohorts' },
          { value: '9', label: 'aggregate tables updated incrementally' },
        ],
        media: [img('/images/tech/marathon-live.png', 'Live race monitor, one column per year')],
        layout: 'wide',
      },
      {
        heading: 'Decisions from things breaking',
        text: '<strong>Partition by race id</strong>, so checkpoint order holds within a race. <strong>WAL mode on SQLite</strong>, so dashboard reads and consumer writes stop colliding. <strong>Idempotent writes</strong> with a uniqueness constraint on <code>(race_id, runner_id, checkpoint)</code>, so the consumer can be killed and restarted without double counting. <strong>State keyed per race</strong>, because bib numbers repeat across years.',
      },
      {
        heading: 'Dropping data on purpose',
        text: 'Segment times faster than world-record pace or slower than walking are timing-mat glitches. The consumer flags and excludes them from aggregates while still counting them, and the dashboard reports those counts per year. Across all three years, 89% to 96% of finishers ran the second half slower than the first.',
        media: [img('/images/tech/marathon-yoy.png', 'Year-over-year views')],
        layout: 'wide',
        links: [{ label: 'Source', href: 'https://github.com/ouiMalika/marathon-dashboard' }],
        tags: ['Python', 'Apache Kafka', 'Docker Compose', 'SQLite', 'pandas', 'Streamlit'],
      },
    ],
  },
  {
    slug: 'moodboard',
    title: 'Moodboard',
    meta: 'Personal project · 2025',
    cover: '/images/tech/moodboard.jpg',
    blurb: 'Groups uploaded visual references into themed boards with CLIP embeddings and clustering.',
    intro:
      'Upload a set of images and get them back grouped into themed boards. Each image is embedded with CLIP and grouped with K-Means; processing runs in Celery workers backed by Redis so large batches do not block the interface.',
    sections: [
      {
        text: 'Django REST Framework API on PostgreSQL with images on S3; Angular front end. The API and worker run on Hugging Face Spaces and the front end on Vercel.',
        embed: { src: 'https://visionboard-ai-xi.vercel.app', title: 'Moodboard', ratio: '16 / 10' },
        links: [
          { label: 'Open the app', href: 'https://visionboard-ai-xi.vercel.app' },
          { label: 'Source', href: 'https://github.com/ouiMalika/VisionBoard-AI' },
        ],
        tags: ['CLIP', 'Django', 'Celery', 'Redis', 'PostgreSQL', 'Angular', 'AWS S3'],
      },
    ],
  },
]

/* ───────────────────────────── DESIGN ───────────────────────────── */

export const designGroups = ['Architecture', 'Product and interaction', 'Drawing', 'Earlier work']

const D = '/images/design'

export const design: Project[] = [
  {
    slug: 'eames-house-daycare',
    group: 'Architecture',
    title: 'Eames House to Daycare',
    meta: 'ARCH 034 Representations · Spring 2026',
    cover: `${D}/eames-daycare/eames-imaginary.jpg`,
    blurb: 'A study of the Eames House, carried into two scenarios and then into the design of a daycare.',
    intro:
      'The semester began as a study of the Eames House: its frame, its facade grid and how its spaces are used. The house was then drawn and rendered in two scenarios, an ordinary one and an imaginary one in which nature has taken over. The grid and wall logic from the study became the basis for a daycare, developed in plan, elevation and a physical model.',
    sections: [
      {
        heading: 'Two scenarios',
        media: [
          img(`${D}/eames-daycare/eames-normal.jpg`, 'Interior render, ordinary scenario'),
          img(`${D}/eames-daycare/eames-imaginary.jpg`, 'Interior render, nature taking over'),
          img(`${D}/eames-daycare/eames-section-normal.jpg`, 'Section, ordinary scenario'),
          img(`${D}/eames-daycare/eames-section-imaginary.jpg`, 'Section, nature taking over'),
        ],
        layout: 'grid2',
      },
      {
        heading: 'Study',
        media: [
          img(`${D}/eames-daycare/eames-facade.jpg`, 'Facade grid'),
          img(`${D}/eames-daycare/eames-space.jpg`, 'Space usage'),
          img(`${D}/eames-daycare/eames-plans.jpg`, 'Plans and elevation'),
          img(`${D}/eames-daycare/eames-lattice.jpg`, 'Form and lattice'),
          img(`${D}/eames-daycare/eames-sketch-1.jpg`, 'Sketch, form and concept'),
          img(`${D}/eames-daycare/eames-sketch-2.jpg`, 'Sketch, circulation'),
        ],
        layout: 'grid3',
      },
      {
        media: [
          img(`${D}/eames-daycare/eames-render-1.jpg`, 'Digital model'),
          img(`${D}/eames-daycare/eames-render-2.jpg`, 'Digital model'),
          img(`${D}/eames-daycare/eames-render-3.jpg`, 'Digital model, interior'),
          img(`${D}/eames-daycare/eames-render-4.jpg`, 'Digital model, studio'),
        ],
        layout: 'grid2',
      },
      {
        heading: 'Daycare',
        media: [
          img(`${D}/eames-daycare/daycare-grid-concept.jpg`, 'Grid concept'),
          img(`${D}/eames-daycare/daycare-grid-elements.jpg`, 'Usable grid elements'),
          img(`${D}/eames-daycare/daycare-wall-geometries.jpg`, 'Wall geometries'),
        ],
        layout: 'grid3',
      },
      {
        media: [
          img(`${D}/eames-daycare/daycare-plan-elevation.jpg`, 'Daycare plan and elevation'),
          img(`${D}/eames-daycare/daycare-interior.jpg`, 'Daycare interior'),
        ],
        layout: 'wide',
      },
      {
        media: [
          img(`${D}/eames-daycare/daycare-model-axon.jpg`, 'Physical model'),
          img(`${D}/eames-daycare/daycare-model-1.jpg`, 'Physical model, detail'),
          img(`${D}/eames-daycare/daycare-model-2.jpg`, 'Physical model, detail'),
          img(`${D}/eames-daycare/daycare-model-3.jpg`, 'Physical model, detail'),
        ],
        layout: 'grid2',
      },
    ],
  },
  {
    slug: 'taste-topology-reliefs',
    group: 'Architecture',
    title: 'Taste Topology Reliefs',
    meta: 'Honors project · Fall 2026',
    status: 'In progress',
    cover: '/images/research/taste/relief-a.jpg',
    blurb: 'Parametric relief panels made from the same geometry as their drawings.',
    intro:
      'The physical half of the Taste Topology study: four 190 mm panels with raised ribs, generated from the same metric definition as the drawings shown on screen. Full study on the <a href="/research/taste-topology">research page</a>.',
    sections: [
      {
        media: [
          img('/images/research/taste/panels.jpg', 'Panels A to D'),
          img('/images/research/taste/relief-a.jpg', 'Relief A'),
        ],
        layout: 'grid2',
      },
    ],
  },
  {
    slug: 'icarus-sandals',
    group: 'Product and interaction',
    title: 'Icarus Sandals',
    meta: 'DES 140 Digital Prototyping Studio · Fall 2025',
    cover: `${D}/icarus/proto-3.jpg`,
    blurb: 'A 3D-printable reinterpretation of the Greek sandal, with a woven upper and versatile lacing.',
    intro:
      'Inspired by traditional woven sandals and popular vacation styles, Icarus Sandals reinterpret the classical Greek form as a durable, fully 3D-printable accessory for costume parties, themed events and festive settings.',
    sections: [
      {
        heading: 'References',
        text: 'A contemporary woven slide and an ancient woven sandal.',
        media: [
          img(`${D}/icarus/research-1.jpg`, 'Contemporary woven slide'),
          img(`${D}/icarus/research-2.jpg`, 'Ancient woven sandal'),
        ],
        layout: 'grid2',
      },
      {
        heading: 'Brainstorming',
        text: 'Wearing and taking apart an existing sandal to see how it is made and how it fits the foot, next to a 3D-printed last, and sketching strap options.',
        media: [
          img(`${D}/icarus/research-3.jpg`, 'Sandal used for the teardown'),
          img(`${D}/icarus/research-4.jpg`, 'Teardown into woven fabric, leather and paper'),
          img(`${D}/icarus/research-5.jpg`, 'Printed last next to the shoe'),
          img(`${D}/icarus/research-6.jpg`, 'Sketches of strap options'),
          img(`${D}/icarus/research-7.jpg`, 'Sketches of the wrap'),
        ],
        layout: 'grid3',
      },
      {
        heading: 'Design',
        text: 'A woven leather pattern that follows the natural curves of the foot, a barefoot sole and versatile lacing. Colorways in Andorra, Praline and Vaporous Gray.',
        media: [
          img(`${D}/icarus/render-exploded.jpg`, 'Exploded view'),
          img(`${D}/icarus/render-front.jpg`, 'Front'),
          img(`${D}/icarus/render-back.jpg`, 'Back'),
        ],
        layout: 'grid3',
      },
      {
        heading: 'Prototype',
        text: 'Printed at 1:1 to test the barefoot sole and strap system on the foot.',
        media: [
          img(`${D}/icarus/proto-1.jpg`, 'Prototype worn'),
          img(`${D}/icarus/proto-2.jpg`, 'Front'),
          img(`${D}/icarus/proto-3.jpg`, 'Side'),
          img(`${D}/icarus/proto-4.jpg`, 'Sole'),
          img(`${D}/icarus/proto-5.jpg`, 'Woven upper'),
          img(`${D}/icarus/proto-6.jpg`, 'Lacing'),
        ],
        layout: 'grid3',
      },
    ],
  },
  {
    slug: 'barracuda-series',
    group: 'Product and interaction',
    title: 'Barracuda Series',
    meta: 'DES 140 Digital Prototyping Studio · Fall 2025',
    cover: `${D}/lamina/1.jpg`,
    blurb: 'Four objects derived from the 1971 Plymouth Barracuda: a surface study, a mouse, goggles and a desk clock.',
    intro:
      'The 1971 Plymouth Barracuda, one of Detroit’s late-era muscle cars, was chosen for its broad, assertive stance and heavy sculpted volumes. The semester moved from a hand-held surface study to three products that carry the same form language.',
    sections: [
      {
        heading: 'Surface study',
        media: [
          img(`${D}/barracuda/1.jpg`, 'Surface study in hand'),
          img(`${D}/barracuda/2.jpg`, 'Render'),
          img(`${D}/barracuda/5.jpg`, 'Foam model'),
          img(`${D}/barracuda/6.jpg`, 'Cast study'),
        ],
        layout: 'grid2',
      },
      {
        heading: 'Lamina 71, computer mouse',
        media: [
          img(`${D}/lamina/1.jpg`, 'Lamina 71 on a desk'),
          img(`${D}/lamina/2.jpg`, 'Rear detail'),
          img(`${D}/lamina/3.jpg`, 'Side layers'),
        ],
        layout: 'grid3',
      },
      {
        heading: 'Vortex, water-ski goggles',
        media: [
          img(`${D}/vortex/1.jpg`, 'Vortex render'),
          img(`${D}/vortex/2.jpg`, 'Orthographic drawing'),
        ],
        layout: 'grid2',
      },
      {
        heading: 'Desk clock',
        media: [
          img(`${D}/clock/1.jpg`, 'Clock face'),
          img(`${D}/clock/2.jpg`, 'Three-quarter view'),
          img(`${D}/clock/3.jpg`, 'Back'),
          img(`${D}/clock/4.jpg`, 'Detail'),
        ],
        layout: 'grid2',
      },
    ],
  },
  {
    slug: 'tacti',
    group: 'Product and interaction',
    title: 'Tacti',
    meta: 'Multi-sensory design · Fall 2026',
    status: 'In progress',
    cover: `${D}/tacti/device.jpg`,
    blurb: 'A clip-on device and app that guide a shopper to an item through vibration cues.',
    intro:
      'Tacti clips to the back of a phone and guides a shopper through the store with left and right vibration cues, with voice guidance as an option. It also signals when an item is unavailable. The work spans the enclosure, the cue vocabulary, firmware for a two-motor prototype and the app.',
    sections: [
      {
        media: [img(`${D}/tacti/device.jpg`, 'Tacti enclosure')],
        layout: 'wide',
      },
      {
        heading: 'Setup',
        media: [
          img(`${D}/tacti/screen-pair.png`, 'Pair your Tacti'),
          img(`${D}/tacti/screen-connected.png`, 'Tacti connected'),
          img(`${D}/tacti/screen-you.png`, 'Vibration output and settings'),
        ],
        layout: 'phones',
      },
      {
        heading: 'Shopping',
        media: [
          img(`${D}/tacti/screen-find.png`, 'Find items'),
          img(`${D}/tacti/screen-list.png`, 'Shopping list'),
          img(`${D}/tacti/screen-walk-turn.png`, 'Turn right, two short pulses on the right motor'),
          img(`${D}/tacti/screen-walk-arrived.png`, 'Arrived, two long pulses on both motors'),
        ],
        layout: 'phones',
      },
    ],
  },
  {
    slug: 'hiking-market',
    group: 'Product and interaction',
    title: 'Hiking Market',
    meta: 'DES 156 UX/UI Design · Fall 2026',
    cover: `${D}/hiking/tiles.jpg`,
    blurb: 'A trail map, tour booking and gear rental app for new hikers and visitors to Almaty.',
    intro:
      'A mobile interface for new hikers, visitors to Almaty and families: find a trail on an illustrated map of the mountains around the city, book a tour, rent the gear for it, and collect stamps for the routes completed.',
    sections: [
      {
        media: [img(`${D}/hiking/in-hand.jpg`, 'Hiking Market at Big Almaty Lake')],
        layout: 'wide',
      },
      {
        heading: 'Screens',
        media: [
          img(`${D}/hiking/screen-1.png`, 'Trail map'),
          img(`${D}/hiking/screen-2.png`, 'Explore'),
          img(`${D}/hiking/screen-3.png`, 'Destinations'),
          img(`${D}/hiking/screen-4.png`, 'Region'),
          img(`${D}/hiking/screen-5.png`, 'Trail detail'),
          img(`${D}/hiking/screen-6.png`, 'Gear'),
          img(`${D}/hiking/screen-7.png`, 'Gear detail'),
          img(`${D}/hiking/screen-8.png`, 'Tour detail'),
          img(`${D}/hiking/screen-9.png`, 'Order'),
          img(`${D}/hiking/screen-10.png`, 'Stamp collection'),
          img(`${D}/hiking/screen-11.png`, 'Profile'),
        ],
        layout: 'phones',
      },
      {
        media: [img(`${D}/hiking/mockup.jpg`, 'Three screens')],
        layout: 'wide',
      },
    ],
  },
  {
    slug: 'grubhub-usability',
    group: 'Product and interaction',
    title: 'Pickup at The Grind',
    meta: 'DES 156 UX/UI Design · Fall 2026',
    cover: `${D}/grubhub/cover.jpg`,
    blurb: 'A usability study of campus mobile ordering, pickup lockers and the kiosk, with a redesigned pickup flow.',
    intro:
      'A usability study of ordering at The Grind, a campus café, through the Grubhub app, the pickup lockers and the in-store kiosk. Three participants with different levels of experience completed the same ordering and pickup tasks, and the findings led to a redesigned pickup screen.',
    sections: [
      {
        heading: 'Redesign',
        text: 'Show where to collect the order, explain cancellations, and keep the order number available after payment.',
        media: [
          img(`${D}/grubhub/redesign.jpg`, 'Redesigned pickup screen'),
          img(`${D}/grubhub/slide-16.jpg`, 'Recommended changes'),
        ],
        layout: 'grid2',
      },
      {
        heading: 'Study',
        media: [
          img(`${D}/grubhub/slide-03.jpg`, 'The ordering interface'),
          img(`${D}/grubhub/slide-04.jpg`, 'Accessibility features and considerations'),
          img(`${D}/grubhub/slide-05.jpg`, 'Study procedure'),
          img(`${D}/grubhub/slide-08.jpg`, 'The app and the locker do not agree'),
          img(`${D}/grubhub/slide-11.jpg`, 'Ordering through the kiosk'),
          img(`${D}/grubhub/slide-12.jpg`, 'Blank receipt and counter pickup'),
        ],
        layout: 'grid3',
      },
    ],
  },
  {
    slug: 'led-lip-mask',
    group: 'Product and interaction',
    title: 'LED Lip Mask',
    meta: 'DES 240 · Spring 2026',
    cover: `${D}/omnilux/render-worn-2.jpg`,
    blurb: 'An LED light-therapy lip mask developed for an existing skincare brand, from research to printed prototype.',
    intro:
      'A brand-led product project for Omnilux, a maker of LED light-therapy masks. Research into the brand, its products, audience and competitors led to three directions beyond the face mask: lip renewal, scalp and hair, and body wraps. The lip mask was developed through sketches, printed prototypes, technical drawings and renders.',
    sections: [
      {
        media: [
          img(`${D}/omnilux/render-worn-2.jpg`, 'Lip mask, worn'),
          img(`${D}/omnilux/render-worn-1.jpg`, 'Lip mask, worn'),
        ],
        layout: 'grid2',
      },
      {
        media: [
          img(`${D}/omnilux/render-1.jpg`, 'Lip mask render'),
          img(`${D}/omnilux/render-2.jpg`, 'Lip mask render, back'),
          img(`${D}/omnilux/render-3.jpg`, 'Lip mask render'),
        ],
        layout: 'grid3',
      },
      {
        heading: 'Research',
        media: [
          img(`${D}/omnilux/research-01.jpg`, 'Omnilux, LED beauty tech'),
          img(`${D}/omnilux/research-04.jpg`, 'LED devices collection'),
          img(`${D}/omnilux/research-05.jpg`, 'Target audience'),
          img(`${D}/omnilux/research-08.jpg`, 'Design language'),
          img(`${D}/omnilux/research-09.jpg`, 'Lip renewal'),
          img(`${D}/omnilux/research-10.jpg`, 'Scalp and hair'),
          img(`${D}/omnilux/research-11.jpg`, 'Body wraps'),
        ],
        layout: 'grid2',
      },
      {
        heading: 'Sketches',
        media: [
          img(`${D}/omnilux/sketch-1.jpg`, 'Lip mask concept'),
          img(`${D}/omnilux/sketch-2.jpg`, 'Lip mask forms'),
          img(`${D}/omnilux/sketch-3.jpg`, 'Cap concept with battery module'),
          img(`${D}/omnilux/sketch-4.jpg`, 'Cap forms'),
          img(`${D}/omnilux/sketch-5.jpg`, 'Body straps'),
          img(`${D}/omnilux/sketch-6.jpg`, 'Strap forms'),
        ],
        layout: 'grid3',
      },
      {
        heading: 'Prototypes',
        media: [
          img(`${D}/omnilux/sketch-models.jpg`, 'Sketch models'),
          img(`${D}/omnilux/print-1.jpg`, 'Printed shell'),
          img(`${D}/omnilux/print-2.jpg`, 'Printed shell'),
          img(`${D}/omnilux/proto-4.jpg`, 'Printed cap prototypes'),
        ],
        layout: 'grid2',
      },
      {
        heading: 'Drawings',
        media: [
          img(`${D}/omnilux/drawing-1.jpg`, 'Views and section'),
          img(`${D}/omnilux/drawing-2.jpg`, 'Exploded assembly'),
          img(`${D}/omnilux/drawing-3.jpg`, 'Front and LED layout'),
          img(`${D}/omnilux/drawing-4.jpg`, 'Materials'),
        ],
        layout: 'grid2',
      },
    ],
  },
  {
    slug: 'drawing',
    group: 'Drawing',
    title: 'Drawing',
    meta: 'ART 011 · Fall 2025',
    cover: `${D}/drawing/folds.jpg`,
    blurb: 'Figure, still life, folds and a jungle diorama, drawn and built.',
    intro: 'Work from a semester of drawing: figure studies, a still life, drapery folds, and a jungle diorama that was built and then drawn.',
    sections: [
      {
        media: [
          img(`${D}/drawing/folds.jpg`, 'Folds'),
          img(`${D}/drawing/still-life-1.jpg`, 'Still life'),
        ],
        layout: 'grid2',
      },
      {
        media: [
          img(`${D}/drawing/diorama-1.jpg`, 'Jungle diorama'),
          img(`${D}/drawing/diorama-2.jpg`, 'Jungle diorama'),
          img(`${D}/drawing/diorama-drawing.jpg`, 'Drawing of the diorama'),
        ],
        layout: 'grid3',
      },
      {
        media: [
          img(`${D}/drawing/figure-1.jpg`, 'Figure study'),
          img(`${D}/drawing/figure-2.jpg`, 'Figure study'),
          img(`${D}/drawing/figure-3.jpg`, 'Figure study'),
        ],
        layout: 'grid3',
      },
    ],
  },
  {
    slug: 'sign-topology',
    group: 'Drawing',
    title: 'Sign Topology',
    meta: 'ARCH 034 Representations · Spring 2026',
    cover: `${D}/drawing/sign-topology.jpg`,
    blurb: 'A study of the restaurant signs along South Bethlehem’s main street.',
    intro: 'A sign topology study of South Bethlehem: the restaurant signs along the main street, their types, materials and placement, drawn on site.',
    sections: [{ media: [img(`${D}/drawing/sign-topology.jpg`, 'Restaurant signs of South Bethlehem')], layout: 'wide' }],
  },
  {
    slug: 'des-040',
    group: 'Earlier work',
    title: 'Product Design I',
    meta: 'DES 040 · Spring 2024',
    cover: `${D}/early/fans-2.jpg`,
    blurb: 'First-year form studies from two mood boards, Trendy and Timeless, and a sleigh racer.',
    intro: 'Form-finding exercises from the first product design course.',
    sections: [
      {
        media: [
          img(`${D}/early/fans-1.jpg`, 'Form sketches'),
          img(`${D}/early/fans-2.jpg`, 'Final form drawing'),
          img(`${D}/early/sleigh-form.jpg`, 'Sleigh racer form finding'),
        ],
        layout: 'grid3',
      },
    ],
  },
]

export const collections = { research, tech, design }
export type CollectionKey = keyof typeof collections
