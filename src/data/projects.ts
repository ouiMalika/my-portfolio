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
    cover: '/images/research/calm/frontier.jpg',
    coverFit: 'contain',
    blurb: 'Calibrated perception for risk-aware action selection in urban driving.',
    intro:
      '<strong>Calibrated Vision–Language Perception for Risk-Aware Action Selection in Urban Driving.</strong> A planning pipeline that treats a vision–language model as a component that is sometimes confident and wrong. Its reading of a traffic sign is carried forward as a calibrated belief, so the action taken can be traced back to what was known and how well it was known.',
    sections: [
      {
        heading: 'Pipeline',
        text: 'Detected signs from nuScenes are read by open vision–language models. Conformal calibration turns raw confidence into a belief over five longitudinal actions, and a mixed-integer program commits one action per event under an explicit cost. Evaluation is open-loop, with the catastrophic-miss rate on required hard-brake events as the primary measure.',
        media: [img('/images/research/calm/pipeline.jpg', 'CALM pipeline from detection to action selection')],
        layout: 'wide',
      },
      {
        heading: 'Objectives',
        text: 'With the belief held fixed, the planner compares L1, asymmetric consequence, CVaR and distributionally robust objectives. The frontier below trades catastrophic misses against false stops.',
        media: [img('/images/research/calm/frontier.jpg', 'Catastrophic-miss rate against false-stop rate for each planner')],
        layout: 'wide',
      },
      {
        heading: 'Venues',
        text: 'IROS 2026 Workshop on Bridging Learning, Planning, and Control; IROS 2026 Workshop on Rethinking Uncertainty, Pittsburgh; Northeast Robotics Colloquium 2026, Princeton.<br>With Qiuyu Tang, Kaier Liang, Aparna Bharati and Cristian-Ioan Vasile.',
      },
    ],
  },
  {
    slug: 'better-read-than-said',
    title: 'Better Read Than Said',
    meta: 'AIR Lab · 2026',
    cover: '/images/research/brts/ladder.jpg',
    coverFit: 'contain',
    blurb: 'Locating spatial-planning failure at the output interface of vision–language models.',
    intro:
      'When a vision–language model fails to plan a route, which part of it broke: the representation it formed of the scene, or the step that turns that representation into a written move? We separate the two on grid mazes from the Visual Spatial Planning benchmark, where breadth-first search on the true map scores every proposed move exactly.',
    sections: [
      {
        heading: 'Setup',
        text: 'From one forward pass under one prompt, five ways of getting a next move out of the same frozen hidden state are compared: two that read what the model writes, and three that fit a classifier on its activations. Six open models across three families.',
        media: [
          img('/images/research/brts/task.jpg', 'Maze levels and transition rules'),
          img('/images/research/brts/design.jpg', 'Five readout methods from one shared context'),
        ],
        layout: 'grid2',
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
        text: 'NeurIPS 2026 Workshop on Vision Language Models: Challenges of Real World Deployment (VLM4RWD), Sydney. A companion paper, <em>Decoded and Generated Actions in Vision–Language Spatial Planning</em>, appeared at the IROS 2026 Workshop on Rethinking Uncertainty.<br>With Qiuyu Tang, Cristian-Ioan Vasile and Aparna Bharati.',
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
        text: '15th Annual oSTEM Conference, Baltimore, October 2025 · Voxel Baltimore, May 2025 · Lehigh Summer Research Expo, August 2024.',
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
      '<a href="https://savetuba.com" target="_blank" rel="noopener">Save Tuba</a> is a student mobile app and a teacher web app for environmental education in Kazakhstan. It was piloted with more than 500 students and teachers, and its interface and curriculum were revised from teacher feedback.',
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
        text: 'Gavade, Bronson, Leaventon, Tuleubayev, Ossinger, Buribayeva, Jalal, Mehta. <a href="https://ieeexplore.ieee.org/document/10354628" target="_blank" rel="noopener">How Teacher Feedback Helped Reimagine, Redesign, and Recode a Sustainability Education App</a>. IEEE GHTC 2023. Best Student Presentation Award.',
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
    cover: '/images/tech/capstone-pipeline.svg',
    coverFit: 'contain',
    blurb: 'Real-time recognition of enrolled riders from a phone camera, streamed to a GPU server.',
    intro:
      'A year-long capstone with an industry sponsor. A phone streams camera frames to a GPU server that runs a layered pipeline of person detection, face localization and face-embedding matching against enrolled riders, and returns names and boxes in real time. The product itself belongs to the sponsor, so this page describes the system rather than showing the app.',
    sections: [
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
    cover: '',
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

export const design: Project[] = [
  {
    slug: 'eames-house',
    group: 'Architecture',
    title: 'Eames House',
    meta: 'ARCH 034 Representations · Spring 2026',
    cover: '/images/design/eames/model-1.jpg',
    blurb: 'A study of Case Study House No. 8 in drawings, diagrams, a digital model and a physical model.',
    intro:
      'Charles and Ray Eames’ house in Pacific Palisades, studied through its frame. The steel grid and infill panels are read as a composition, then rebuilt in orthographic drawings, analytical diagrams, a Rhino model and a physical model.',
    sections: [
      {
        heading: 'Physical model',
        media: [
          img('/images/design/eames/model-full.jpg', 'Physical model, full view'),
          img('/images/design/eames/model-1.jpg', 'Physical model, facade'),
          img('/images/design/eames/model-2.jpg', 'Physical model, interior through the frame'),
          img('/images/design/eames/model-3.jpg', 'Physical model, open bay'),
        ],
        layout: 'grid2',
      },
      {
        heading: 'Drawings',
        media: [
          img('/images/design/eames/drawings.jpg', 'Site plan and elevation'),
          img('/images/design/eames/elevations.jpg', 'Sections through the house and studio'),
        ],
        layout: 'grid2',
      },
      {
        heading: 'Diagrams',
        text: 'The facade read as a Mondrian-like grid of panels in primary colors and neutrals; the frame as a stack of modules; the plans by public and private use.',
        media: [
          img('/images/design/eames/facade.jpg', 'Front facade as a grid of colored and open panels'),
          img('/images/design/eames/lattice.jpg', 'Form and lattice'),
          img('/images/design/eames/space.jpg', 'Space usage on both floors'),
        ],
        layout: 'grid3',
      },
      {
        heading: 'Interior and notes',
        media: [
          img('/images/design/eames/collage.jpg', 'Interior color study'),
          img('/images/design/eames/notes.jpg', 'Working sketches'),
        ],
        layout: 'grid2',
      },
    ],
  },
  {
    slug: 'daycare',
    group: 'Architecture',
    title: 'Daycare',
    meta: 'Architecture · Spring 2026',
    cover: '/images/design/daycare/collage.jpg',
    blurb: 'A daycare drawn in plan, elevation and section, with an interior collage of the play space.',
    intro: 'A daycare project developed in plan, elevation and section, with an interior collage of the play space.',
    sections: [
      {
        media: [img('/images/design/daycare/collage.jpg', 'Interior collage of the play space')],
        layout: 'wide',
      },
      {
        heading: 'Plan, elevation and section',
        media: [img('/images/design/daycare/elevation-section.jpg', 'Site plan, elevation and section')],
        layout: 'wide',
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
    coverFit: 'contain',
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
    cover: '/images/design/icarus/proto-6.jpg',
    blurb: 'A 3D-printable reinterpretation of the Greek sandal, with a woven upper and versatile lacing.',
    intro:
      'Inspired by traditional woven sandals and popular vacation styles, Icarus Sandals reinterpret the classical Greek form as a durable, fully 3D-printable accessory for costume parties, themed events and festive settings.',
    sections: [
      {
        heading: 'Research',
        text: 'Woven references and a teardown of an existing sandal, to understand how sandals are made and how they fit the foot, next to a 3D-printed last.',
        media: [
          img('/images/design/icarus/research-1.jpg', 'Woven sandal reference'),
          img('/images/design/icarus/research-2.jpg', 'Woven strap detail'),
          img('/images/design/icarus/research-3.jpg', 'Reference sandal'),
          img('/images/design/icarus/research-4.jpg', 'Teardown of a sandal into its parts'),
          img('/images/design/icarus/research-5.jpg', 'Printed last next to the shoe'),
          img('/images/design/icarus/research-6.jpg', 'Sketches of strap options'),
          img('/images/design/icarus/research-7.jpg', 'Sketches of the wrap'),
        ],
        layout: 'strip',
      },
      {
        heading: 'Design',
        text: 'A woven leather pattern that follows the natural curves of the foot, a barefoot sole and versatile lacing. Colorways in Andorra, Praline and Vaporous Gray.',
        media: [
          img('/images/design/icarus/render-exploded.jpg', 'Exploded view'),
          img('/images/design/icarus/render-front.jpg', 'Front'),
          img('/images/design/icarus/render-back.jpg', 'Back'),
        ],
        layout: 'grid3',
      },
      {
        heading: 'Prototype',
        text: 'Printed at 1:1 in gray and yellow to test the barefoot sole and strap system on the foot.',
        media: [
          img('/images/design/icarus/proto-1.jpg', 'Prototype worn'),
          img('/images/design/icarus/proto-2.jpg', 'Prototype, front three-quarter'),
          img('/images/design/icarus/proto-3.jpg', 'Prototype, side'),
          img('/images/design/icarus/proto-4.jpg', 'Lacing detail'),
          img('/images/design/icarus/proto-6.jpg', 'Prototype, three-quarter'),
          img('/images/design/icarus/proto-5.jpg', 'Sole'),
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
    cover: '/images/design/lamina/1.jpg',
    blurb: 'Four objects derived from the 1971 Plymouth Barracuda: a surface study, a mouse, goggles and a desk clock.',
    intro:
      'The 1971 Plymouth Barracuda, one of Detroit’s late-era muscle cars, was chosen for its broad, assertive stance and heavy sculpted volumes. The semester moved from a hand-held surface study to three products that carry the same form language.',
    sections: [
      {
        heading: 'Surface study',
        text: 'Muscle, reduced to form: foam and cast studies refined into a single sculpted surface.',
        media: [
          img('/images/design/barracuda/1.jpg', 'Surface study in hand'),
          img('/images/design/barracuda/2.jpg', 'Render'),
          img('/images/design/barracuda/5.jpg', 'Foam model'),
          img('/images/design/barracuda/6.jpg', 'Cast study'),
        ],
        layout: 'grid2',
      },
      {
        heading: 'Lamina 71, computer mouse',
        text: 'A wired gaming mouse whose layered body takes its lines from the car’s profile.',
        media: [
          img('/images/design/lamina/1.jpg', 'Lamina 71 on a desk'),
          img('/images/design/lamina/2.jpg', 'Rear detail'),
          img('/images/design/lamina/3.jpg', 'Side layers'),
        ],
        layout: 'grid3',
      },
      {
        heading: 'Vortex, water-ski goggles',
        text: 'A streamlined, impact-ready shell that keeps the skier’s field of view clear, after the aggressive front of the 1971 ’Cuda.',
        media: [
          img('/images/design/vortex/1.jpg', 'Vortex render'),
          img('/images/design/vortex/2.jpg', 'Orthographic drawing'),
        ],
        layout: 'grid2',
      },
      {
        heading: 'Desk clock',
        text: 'The instrument cluster as a desk object.',
        media: [
          img('/images/design/clock/1.jpg', 'Clock face'),
          img('/images/design/clock/2.jpg', 'Three-quarter view'),
          img('/images/design/clock/3.jpg', 'Back'),
          img('/images/design/clock/4.jpg', 'Detail'),
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
    cover: '/images/design/tacti/device.jpg',
    blurb: 'A clip-on device and app that guide a shopper to an item through vibration cues.',
    intro:
      'Tacti clips to the back of a phone and guides a shopper through the store with left and right vibration cues, with voice guidance as an option. It also signals when an item is unavailable. The work spans the enclosure, the cue vocabulary, firmware for a two-motor prototype and the app.',
    sections: [
      {
        heading: 'Device',
        media: [img('/images/design/tacti/device.jpg', 'Tacti enclosure')],
        layout: 'wide',
      },
      {
        heading: 'App',
        text: 'Pairing, finding items by category or aisle, the shopping list, and turn-by-turn navigation on a store map.',
        media: [
          img('/images/design/tacti/screen-pair.png', 'Pair your Tacti'),
          img('/images/design/tacti/screen-find.png', 'Find items'),
          img('/images/design/tacti/screen-list.png', 'Shopping list'),
          img('/images/design/tacti/screen-nav.png', 'Navigation'),
        ],
        layout: 'phones',
      },
      {
        heading: 'Flows',
        media: [img('/images/design/tacti/board.jpg', 'High-fidelity flows')],
        layout: 'wide',
      },
    ],
  },
  {
    slug: 'grubhub-usability',
    group: 'Product and interaction',
    title: 'Pickup at The Grind',
    meta: 'DES 156 UX/UI Design · Fall 2026',
    cover: '/images/design/grubhub/lockers.jpg',
    blurb: 'A usability study of campus mobile ordering, pickup lockers and the kiosk.',
    intro:
      'A usability study of ordering at The Grind, a campus café, through the Grubhub app, the pickup lockers and the in-store kiosk. Three participants with different levels of experience completed the same ordering and pickup tasks.',
    sections: [
      {
        heading: 'Study',
        media: [
          img('/images/design/grubhub/slide-03.jpg', 'The ordering interface'),
          img('/images/design/grubhub/slide-04.jpg', 'Accessibility features and considerations'),
          img('/images/design/grubhub/slide-05.jpg', 'Study procedure'),
        ],
        layout: 'grid3',
      },
      {
        heading: 'Observations',
        text: 'The app and the locker disagreed, an order showed as closed in the app while the café kept serving, and the kiosk receipt carried no order number.',
        media: [
          img('/images/design/grubhub/slide-08.jpg', 'The app and the locker do not agree'),
          img('/images/design/grubhub/slide-11.jpg', 'Ordering through the kiosk'),
          img('/images/design/grubhub/slide-12.jpg', 'Blank receipt and counter pickup'),
        ],
        layout: 'grid3',
      },
      {
        heading: 'Recommendations',
        text: 'Show the pickup location, explain cancellations, and keep the order number available after payment.',
        media: [
          img('/images/design/grubhub/slide-15.jpg', 'Comparison of pickup methods'),
          img('/images/design/grubhub/slide-16.jpg', 'Recommended changes'),
        ],
        layout: 'grid2',
      },
    ],
  },
  {
    slug: 'led-therapy-cap',
    group: 'Product and interaction',
    title: 'LED Therapy Wearables',
    meta: 'DES 240 · Spring 2026',
    cover: '/images/design/omnilux/proto-4.jpg',
    blurb: 'Concepts for LED light-therapy wearables beyond the face mask: a cap, a lip mask and body straps.',
    intro:
      'A brand-led product study for an LED skincare company. Starting from the current face masks and competitors, the project develops wearables for other parts of the body, carried from sketches to printed prototypes and technical drawings.',
    sections: [
      {
        heading: 'Sketches',
        media: [
          img('/images/design/omnilux/sketch-3.jpg', 'Cap concept with battery module'),
          img('/images/design/omnilux/sketch-1.jpg', 'Lip mask concept'),
          img('/images/design/omnilux/sketch-5.jpg', 'Body straps'),
          img('/images/design/omnilux/sketch-2.jpg', 'Lip mask forms'),
          img('/images/design/omnilux/sketch-4.jpg', 'Cap forms'),
          img('/images/design/omnilux/sketch-6.jpg', 'Strap forms'),
        ],
        layout: 'grid3',
      },
      {
        heading: 'Prototypes',
        media: [
          img('/images/design/omnilux/proto-1.jpg', 'Printed cap, three-quarter'),
          img('/images/design/omnilux/proto-2.jpg', 'Printed cap, back'),
          img('/images/design/omnilux/proto-3.jpg', 'Printed cap, side'),
          img('/images/design/omnilux/proto-4.jpg', 'Two cap prototypes'),
        ],
        layout: 'grid2',
      },
      {
        heading: 'Lip mask drawings',
        media: [
          img('/images/design/omnilux/drawing-1.jpg', 'Lip mask, views'),
          img('/images/design/omnilux/assembly.jpg', 'Lip mask, exploded assembly'),
          img('/images/design/omnilux/drawing-2.jpg', 'Lip mask, dimensions'),
        ],
        layout: 'grid3',
      },
    ],
  },
  {
    slug: 'observational-drawing',
    group: 'Drawing',
    title: 'Observational Sketch',
    meta: 'ARCH 034 Representations · Spring 2026',
    cover: '/images/design/drawing/observational.jpg',
    coverFit: 'contain',
    blurb: 'Restaurant signs of South Bethlehem, drawn on site.',
    intro: 'An on-site drawing of the restaurant signs along South Bethlehem’s main street.',
    sections: [{ media: [img('/images/design/drawing/observational.jpg', 'Restaurant signs of South Bethlehem')], layout: 'wide' }],
  },
  {
    slug: 'des-040',
    group: 'Earlier work',
    title: 'Product Design I',
    meta: 'DES 040 · Spring 2024',
    cover: '/images/design/early/fans-2.jpg',
    coverFit: 'contain',
    blurb: 'First-year form studies from two mood boards, Trendy and Timeless, and a sleigh racer.',
    intro: 'Form-finding exercises from the first product design course.',
    sections: [
      {
        media: [
          img('/images/design/early/fans-1.jpg', 'Form sketches'),
          img('/images/design/early/fans-2.jpg', 'Final form drawing'),
          img('/images/design/early/sleigh-form.jpg', 'Sleigh racer form finding'),
        ],
        layout: 'grid3',
      },
    ],
  },
]

export const collections = { research, tech, design }
export type CollectionKey = keyof typeof collections
