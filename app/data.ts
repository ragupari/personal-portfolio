type Project = {
  name: string
  description: string
  view: string
  gitlink: string
  image: string
  id: string
}
type VolunteerExperience = {
  institution: string
  position: string
  start: string
  end: string
  id: string
}
type Certification = {
  title: string
  issuer: string
  date: string
  link: string
  id: string
}

type EducationExperience = {
  institution: string
  degree: string
  start: string
  end: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
    {
    name: 'AgroBridge',
    description:
      'Connecting farmers directly to buyers for a fairer, fresher harvest.',
    view: '',
    gitlink: 'https://github.com/ragupari/AgroBridge-FlutterApp.git',
    image:
      '/projects/7.png',
    id: 'project0',
  },
  {
    name: 'Dr. Physio',
    description:
      'AI-powered physiotherapy assistant with RAG and Visual feedback.',
    view: '',
    gitlink: 'https://github.com/dr-physio',
    image:
      '/projects/5.png',
    id: 'project1',
  },
  {
    name: 'Supply Chain Management System',
    description: 'SCM system for efficient logistics and inventory management.',
    gitlink: 'https://github.com/ragupari/SCM-project.git',
    view: '',
    image:
      '/projects/2.png',
    id: 'project2',
  },
  {
    name: 'School Deduction Points Calculator',
    description:
      'Scores given to a student based on their home location and no of other schools inbetween upon registering to a school.',
    view: 'https://youtu.be/TK8zg94yjFQ?si=hduZNPY8J0XZhX3x',
    gitlink: 'https://github.com/ragupari/nim-website-template.git',
    image:
      '/projects/1.png',
    id: 'project3',
  },
  {
    name: 'SpritX 11',
    description:
      'A fantasy cricket game platform where users can create their dream cricket teams by selecting players.',
    view: '',
    gitlink: 'https://github.com/ragupari/SpritX_Nexus_02.git',
    image:
      '/projects/6.png',
    id: 'project4',
  },
    {
    name: 'Nano Processor Design',
    description:
      'Design and simulate a 4-bit nanoprocessor capable of executing basic arithmetic and control instructions using VHDL.',
    view: '',
    gitlink: 'https://github.com/ragupari/nano-processor-second-sem-project.git',
    image:
      '/projects/4.png',
    id: 'project5',
  },
  {
    name: 'ELEC',
    description:
      'A web application for election management with features like candidate registration, voting, canvassing and result tallying.',
    view: 'https://www.youtube.com/watch?v=WpQ2EArViNY',
    gitlink: 'https://github.com/ragupari/ELEC-YGC-Juniors2018-web-application.git',
    image:
      '/projects/3.png',
    id: 'project6',
  },

]

export const EDUCATION_EXPERIENCE: EducationExperience[] = [
  {
    institution: 'University of Moratuwa',
    degree: 'Computer Science and Engineering (BSc. Eng.)',
    start: '2023',
    end: 'Present',
    id: 'edu1',
  },
  {
    institution: 'Jaffna Hindu College, Jaffna',
    degree: 'GCE Advanced Level, GCE Ordinary Level [Secondary Education]',
    start: '2013',
    end: '2021',
    id: 'edu2',
  },
]

export const VOLUNTEER_EXPERIENCE: VolunteerExperience[] = [
    {
    institution: 'Mora Exams',
    position: 'MORA EXAMS 2024 - President',
    start: 'Jun 2024',
    end: 'Dec 2024',
    id: 'vol0',
  },
  {
    institution: 'AIESEC in University of Moratuwa',
    position: 'IDEALIZE 2024 - Marketing Team Vice President',
    start: 'Feb 2024',
    end: 'Nov 2024',
    id: 'vol1',
  },
  {
    institution: 'AIESEC in University of Moratuwa',
    position: 'Marcom Team Manager of oGT (Summer Term 24/25)',
    start: 'Feb 2024',
    end: 'Jul 2024',
    id: 'vol2',
  },
  {
    institution: 'Jaffna Hindu College, Jaffna',
    position: 'Prefect',
    start: 'Feb 2020',
    end: 'Feb 2022',
    id: 'vol3',
  },

]

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    date: 'Jul 2025',
    link: 'https://www.credly.com/badges/09efc9c3-a935-4c47-8f95-b43453f57ac2/linked_in_profile',
    id: 'cert1',
  },
  {
    title: 'The Complete Full-Stack Web Development Bootcamp',
    issuer: 'Udemy',
    date: 'Jul 2024',
    link: 'https://ude.my/UC-d32cc911-c48b-4d89-93e2-04da6aa7b35c',
    id: 'cert2',
  },
  {
    title: 'Intermediate Machine Learning',
    issuer: 'Kaggle',
    date: 'Mar 2025',
    link: 'https://www.kaggle.com/learn/certification/parishithragumar/intro-to-machine-learning',
    id: 'cert3',
  },
  {
    title: 'Building Generative AI Applications with Gradio',
    issuer: 'Deeplearning.ai',
    date: 'Aug 2024',
    link: 'https://learn.deeplearning.ai/accomplishments/7651ea46-a041-456c-89c9-22329c100d2d?usp=sharing',
    id: 'cert4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ragupari',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/RP7_official',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/rp07official',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/rp07_official',
  },
  {
    label: 'YouTube',
    link: 'https://youtube.com/@parishithragumar?si=5L8vds5yCAHMd9bG',
  },

]

export const EMAIL = 'pariunimora@gmail.com'
