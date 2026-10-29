export interface NewsItem {
  date: string
  html: string
}

// Newest first. Dates come from event pages and the academic CV.
export const news: NewsItem[] = [
  {
    date: 'Oct 2026',
    html: 'Presented <em>CALM</em> at the Northeast Robotics Colloquium (NERC 2026), Princeton University.',
  },
  {
    date: 'Sep 2026',
    html: '<em>Better Read Than Said</em> accepted to the NeurIPS 2026 Workshop on Vision Language Models: Challenges of Real World Deployment (VLM4RWD), Sydney, December 2026.',
  },
  {
    date: 'Sep 2026',
    html: 'Presented two workshop papers at IROS 2026 in Pittsburgh: <em>CALM</em> at Rethinking Uncertainty and at Bridging Learning, Planning, and Control, and <em>Decoded and Generated Actions in Vision–Language Spatial Planning</em> at Rethinking Uncertainty.',
  },
  {
    date: 'Aug 2026',
    html: 'Started the honors project <em>Taste Topology</em> in Art, Architecture and Design, advised by Prof. Eugene Han.',
  },
  {
    date: 'Jun 2026',
    html: 'Joined the AIMS team at Atomic Machines, Emeryville, CA, as a data engineering intern.',
  },
  {
    date: 'Jan 2026',
    html: 'Joined the Autonomy and Intelligent Robotics Lab as a Rossin Research Scholar, working with Prof. Cristian-Ioan Vasile and Prof. Aparna Bharati.',
  },
  {
    date: 'Oct 2025',
    html: 'Presented the <em>Archive of Queer Care</em> poster and VR playtest at the 15th Annual oSTEM Conference, Baltimore.',
  },
  {
    date: 'May 2025',
    html: 'The <em>Archive of Queer Care</em> was shown at Voxel Baltimore as part of <em>the dance floor, the hospital room, and the kitchen table</em>.',
  },
  {
    date: 'Aug 2024',
    html: 'Presented the <em>Archive of Queer Care</em> and <em>Save Tuba</em> at the Lehigh Summer Research Expo.',
  },
  {
    date: 'Oct 2023',
    html: 'Received the Best Student Presentation Award at IEEE GHTC 2023, Villanova, for <em>Save Tuba</em>.',
  },
  {
    date: 'Apr 2023',
    html: 'Founded the Central Asian Students Association at Lehigh.',
  },
]
