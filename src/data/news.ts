export interface NewsItem {
  date: string
  html: string
}

const a = (href: string, text: string) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`

// Newest first. Dates come from event pages and the academic CV.
export const news: NewsItem[] = [
  {
    date: 'Oct 2026',
    html: `Presented <em>CALM</em> at the ${a('https://nerc2026.github.io/', 'Northeast Robotics Colloquium (NERC 2026)')}, Princeton University.`,
  },
  {
    date: 'Sep 2026',
    html: `<em>Better Read Than Said</em> accepted to the ${a('https://vlm4rwd.github.io/', 'NeurIPS 2026 Workshop on Vision Language Models: Challenges of Real World Deployment (VLM4RWD)')}, Sydney, December 2026.`,
  },
  {
    date: 'Sep 2026',
    html: `Presented at two IROS 2026 workshops in Pittsburgh: <em>CALM</em> at ${a('https://sites.google.com/bu.edu/hybridarchforautonomy', 'Bridging Learning, Planning, and Control (BLPC)')}, and <em>CALM</em> and <em>Decoded and Generated Actions in Vision–Language Spatial Planning</em> at ${a('https://rethinking-uncertainty.github.io/', 'Rethinking Uncertainty')}.`,
  },
  {
    date: 'Aug 2026',
    html: 'Started the honors project <em>Taste Topology</em> in Art, Architecture and Design, advised by Prof. Eugene Han.',
  },
  {
    date: 'Jun 2026',
    html: `Joined the AIMS team at ${a('https://atomicmachines.com', 'Atomic Machines')}, Emeryville, CA, as a data engineering intern.`,
  },
  {
    date: 'Jan 2026',
    html: `Joined the ${a('https://idisc.lehigh.edu/research/autonomy-intelligent-robotics-lab-air-lab', 'Autonomy and Intelligent Robotics Lab')} as a Rossin Research Scholar, working with Prof. Cristian-Ioan Vasile and Prof. Aparna Bharati.`,
  },
  {
    date: 'Oct 2025',
    html: `Presented the <em>Archive of Queer Care</em> poster and VR playtest at the ${a('https://conference.ostem.org/2025', '15th Annual oSTEM Conference')}, Baltimore.`,
  },
  {
    date: 'May 2025',
    html: `The <em>Archive of Queer Care</em> was shown at ${a('https://voxel.org/events/dance-floor-hospital-room-kitchen-table', 'Voxel Baltimore')} as part of <em>the dance floor, the hospital room, and the kitchen table</em>.`,
  },
  {
    date: 'Aug 2024',
    html: `Presented the <em>Archive of Queer Care</em> and <em>Save Tuba</em> at the ${a('https://news.lehigh.edu/lehigh-summer-research-expo-showcases-students-innovative-projects', 'Lehigh Summer Research Expo')}.`,
  },
  {
    date: 'May 2024',
    html: `Fieldwork in Almaty, Kazakhstan, for <em>Save Tuba</em> with ${a('https://almau.edu.kz/', 'AlmaU')} and ${a('https://www.kaznpu.kz/en/', 'Abai Kazakh National Pedagogical University')}.`,
  },
  {
    date: 'Oct 2023',
    html: `Received the Best Student Presentation Award at ${a('https://technologyandsociety.org/13th-ieee-global-humanitarian-technology-conference-ghtc-2023/', 'IEEE GHTC 2023')}, Villanova, for <em>Save Tuba</em>.`,
  },
  {
    date: 'May 2023',
    html: `Fieldwork in Almaty, Kazakhstan, for <em>Save Tuba</em> with ${a('https://almau.edu.kz/', 'AlmaU')} and ${a('https://www.kaznpu.kz/en/', 'Abai Kazakh National Pedagogical University')}.`,
  },
  {
    date: 'Apr 2023',
    html: 'Founded the Central Asian Students Association at Lehigh.',
  },
]
