export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export const SOCIAL_LINKS = {
  github: 'https://github.com/MOHIT-21-OFF',
  linkedin: 'https://www.linkedin.com/',
  leetcode: 'https://leetcode.com/',
  email: 'mohitksh25@gmail.com',
  phone: '7903607181',
}

export const SKILLS: { name: string; note?: string }[] = [
  { name: 'Python' },
  { name: 'C' },
  { name: 'C++', note: 'Currently learning' },
  { name: 'Data Structures & Algorithms', note: 'Currently learning' },
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'Git' },
  { name: 'GitHub' },
  { name: 'Communication' },
  { name: 'Problem Solving' },
]

export const SERVICES = [
  {
    title: 'Web & Website Development',
    description:
      'Building clean, responsive websites and web interfaces using HTML, CSS and JavaScript.',
  },
  {
    title: 'Real-Life Problem Projects',
    description:
      'Designing and developing projects that solve practical, everyday problems with technology.',
  },
  {
    title: 'Programming Solutions',
    description:
      'Writing basic Python and C/C++ programs and solutions for tasks and coding problems.',
  },
  {
    title: 'Problem Solving & DSA',
    description:
      'Approaching problems logically and practicing data structures and algorithms.',
  },
  {
    title: 'Portfolio Website Development',
    description:
      'Creating professional personal and portfolio websites that present work clearly.',
  },
]

export const EDUCATION = [
  {
    degree: 'B.Tech, Computer Science & Engineering (CSE Core)',
    institution: 'Lovely Professional University (LPU)',
    period: '2025 – 2029',
    note: 'Currently in 2nd Year',
    current: true,
  },
  {
    degree: 'Class XII / Higher Secondary',
    institution: 'USM Public School, Nangloi, New Delhi',
    period: 'Completed 2025',
    current: false,
  },
  {
    degree: 'Class X / Secondary',
    institution: 'Sunbeam Suncity, Karsana, Varanasi',
    period: 'Completed 2023',
    current: false,
  },
]

export type Project = {
  name: string
  tagline: string
  problem: string
  solution: string
  features: string[]
  technologies: string[]
  image: string
  imageAlt: string
  isConcept?: boolean
  isHardware?: boolean
  gallery?: { src: string; alt: string }[]
}

export const PROJECTS: Project[] = [
  {
    name: 'CampusBite',
    tagline: 'Campus food ordering & pre-ordering platform for students',
    problem:
      'Students often have to wait in long queues at food outlets, especially when arriving directly from class.',
    solution:
      'CampusBite lets students explore available food options and place orders in advance, so they save time and avoid unnecessary waiting.',
    features: [
      'Food listings',
      'Simple navigation',
      'Responsive interface',
      'User interaction',
      'Order management',
      'Student-focused pre-ordering',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/campusbite.png',
    imageAlt: 'CampusBite campus food pre-ordering web platform',
  },
  {
    name: 'Smart Ambulance Corridor',
    tagline: 'A student concept for smarter emergency traffic management',
    problem:
      'Ambulances lose critical time stuck in traffic during emergencies, with no clear priority route.',
    solution:
      'A concept for a smarter traffic-management approach that helps create a clear route for an ambulance during emergencies.',
    features: [
      'Emergency route prioritization concept',
      'Traffic-flow management idea',
      'Focus on reducing ambulance delays',
    ],
    technologies: ['Concept / Student Project'],
    image: '/projects/smart-ambulance.png',
    imageAlt: 'Smart Ambulance Corridor traffic management concept',
    isConcept: true,
  },
  {
    name: 'Smart Insole / Foot Pressure Detection System',
    tagline: 'A hardware prototype for foot-pressure and motion sensing',
    problem:
      'Capturing reliable foot-pressure and motion data requires integrating several sensors into a wearable prototype.',
    solution:
      'A hardware-based prototype built around foot-pressure sensing and motion-related data using an ESP32 and multiple sensors.',
    features: [
      'ESP32 Dev Board',
      'MF18A-N-0A8-A01 insole pressure sensor',
      'MPU-9250 IMU',
      'ADS1115 16-bit ADC (I2C)',
      'DS3231 RTC Module',
      'Velcro straps, breadboard, wires & connectors',
    ],
    technologies: ['ESP32', 'Sensors', 'I2C', 'Hardware'],
    image: '/projects/smart-insole-2.jpeg',
    imageAlt: 'Smart Insole foot pressure detection hardware prototype',
    isHardware: true,
    gallery: [
      {
        src: '/projects/smart-insole-2.jpeg',
        alt: 'Blue foot-shaped pressure-sensor insole connected by ribbon cable to an ESP32 on a breadboard',
      },
      {
        src: '/projects/smart-insole-1.jpeg',
        alt: 'Close-up of the ESP32 dev board wired on a breadboard with jumper wires and resistors',
      },
      {
        src: '/projects/smart-insole-3.jpeg',
        alt: 'LPU project presentation slides showing the insole hardware and a laptop running the sensor code',
      },
    ],
  },
]

export type Certificate = {
  title: string
  organization: string
  date: string
  description: string
  image: string
}

export const CERTIFICATES: Certificate[] = [
  {
    title: 'Programming Fundamentals using Python – Part 1',
    organization: 'Infosys Springboard',
    date: 'Completed July 14, 2026',
    description:
      'Foundational course covering core Python programming concepts and fundamentals.',
    image: '/certificates/infosys-python-part-1.png',
  },
  {
    title: 'Programming Fundamentals using Python – Part 2',
    organization: 'Infosys Springboard',
    date: 'Completed July 14, 2026',
    description:
      'Continuation course building on Python fundamentals with further programming concepts.',
    image: '/certificates/infosys-python-part-2.png',
  },
  {
    title: 'Basics of Motivation and Leadership',
    organization:
      'UniAthena, in partnership with Cambridge International Qualifications, UK',
    date: 'Completed October 30, 2025',
    description:
      'Course covering the fundamentals of motivation and leadership skills.',
    image: '/certificates/uniathena-leadership.png',
  },
  {
    title: 'Educational & Community Awareness Work',
    organization:
      'Middle School, Uchauli, Block-Khizersarai, District Gaya',
    date: '25/07/2026 – 30/07/2026',
    description:
      'Recognizes educational and community awareness work on child marriage, child labour, child education, Python basics and cyber security awareness among school students and the village community.',
    image: '/certificates/community-awareness.jpeg',
  },
]
