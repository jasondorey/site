// Wording is taken from Jason Dorey's CV. The speaking caption uses text
// visible in the Ho Chi Minh City photograph.

export const pageTitle =
  "Jason Dorey — Digital Transformation, Technology Strategy, AI & EdTech";

export const pageDescription =
  "Director-level technology, digital transformation, AI, and EdTech leader with nearly 20 years of experience. Halifax, Nova Scotia.";

export const profile = {
  name: "Jason Dorey",
  role: ["Digital Transformation", "Technology Strategy", "AI & EdTech"],
  currentTitle: "Director, AI Learning Solutions",
  currentOrg: "AKD International Inc.",
  location: "Halifax, Nova Scotia",
  phone: {
    display: "(902) 300-7400",
    href: "tel:+19023007400",
  },
  email: "jason.dorey@icloud.com",
  linkedin: {
    display: "linkedin.com/in/jasonrdorey",
    href: "https://www.linkedin.com/in/jasonrdorey",
  },
  summary: [
    "Director-level technology, digital transformation, AI, and EdTech leader with nearly 20 years of experience across technology strategy, product development, business operations, and international education.",
    "Reports directly to the CEO and/or Board Chairman as Director, AI Learning Solutions. Leads enterprise technology initiatives, platform strategy, analytics, and AI adoption across multi-site organizations in Canada and Asia. Brings cross-functional leadership and international business-development experience supporting 15 organizations and initiatives spanning education, technology, and business functions.",
  ],
  focus: [
    "Digital and AI strategy",
    "Enterprise transformation",
    "Platform and product strategy",
    "Technology governance",
    "Data and analytics",
    "Operational leadership",
    "Strategic partnerships",
    "International Education",
  ],
  experience: [
    {
      slug: "akd",
      visual: "speaking",
      org: "AKD International Inc.",
      title: "Director, AI Learning Solutions",
      start: { label: "June 2019", datetime: "2019-06" },
      end: null,
      points: [
        "Provide director-level leadership for digital transformation, platform strategy, analytics, AI integration, and systems modernization across AKD International’s education and technology portfolio, including CanGlory Education, the Canadian International School group, Everon Learning Solutions, and NovaLearn.",
        "Direct the rollout of a multi-site digital learning ecosystem across 11 schools serving more than 5,000 students and 400 educators, standardizing learning operations and enabling network-wide reporting, collaboration, and digital service delivery.",
        "Set technology roadmaps and product priorities across AKD-affiliated ventures for online curriculum program delivery, AI-enabled learning solutions, mobile learning, and EdTech services.",
        "Lead multidisciplinary teams of more than 400 professionals across technology, product, academic, and business functions to deliver transformation and learning-technology initiatives.",
        "Established business intelligence and KPI reporting capabilities for online learning environments, translating learning and operational data into insights for individualized learning, early intervention, teaching-gap analysis, and academic decision-making.",
        "Lead AI adoption reviews across six AKD schools in China, assessing tool adoption, policy maturity, assessment integrity, and PIPL data-privacy risk; developed network recommendations and a phased 24-month implementation roadmap.",
        "Advance Southeast Asia growth across Thailand, Vietnam, Malaysia, and Indonesia through partnership pipelines, executive presentations, and engagement with private-sector and government stakeholders.",
      ],
    },
    {
      slug: "glg",
      org: "Gerson Lehrman Group (GLG)",
      title: "Expert Network Advisor",
      start: { label: "July 2025", datetime: "2025-07" },
      end: null,
      points: [
        "Advise investors and consulting clients on EdTech market dynamics, LMS strategy, digital transformation, AI adoption, technology implementation, and international education markets to inform strategic and investment decisions.",
      ],
    },
    {
      slug: "matata",
      org: "Matata Education",
      title: "Managing Director",
      start: { label: "June 2017", datetime: "2017-06" },
      end: { label: "August 2019", datetime: "2019-08" },
      points: [
        "Led the development and scale-up of an education-services company in Mainland China, establishing the operating model, strategic partnerships, business processes, and program-delivery infrastructure needed to move from concept to active operations.",
        "Built operating processes and delivery standards for K–12 experiential education programs across Mainland China.",
        "Hired and led a seven-person team responsible for program delivery, partnerships, and operations.",
      ],
    },
    {
      slug: "ibo",
      org: "International Baccalaureate Organization",
      title: "Northern China Network Chair",
      start: { label: "August 2013", datetime: "2013-08" },
      end: { label: "June 2017", datetime: "2017-06" },
      points: [
        "Led a regional network of IB coordinators across Northern China and Mongolia, including chairing quarterly meetings, acting as primary IBO liaison, and directing regional conference coordination.",
      ],
    },
    {
      slug: "cisb",
      org: "Canadian International School of Beijing",
      title: "IB DP Coordinator",
      start: { label: "August 2007", datetime: "2007-08" },
      end: { label: "June 2017", datetime: "2017-06" },
      points: [
        "Led IB Diploma Programme coordination, teacher development, policy implementation, accreditation/evaluation, and cross-functional academic initiatives.",
      ],
    },
  ],
  education: [
    {
      credential: "Master of Education (Leadership)",
      school: "University of New Brunswick",
    },
    {
      credential: "Bachelor of Education (Secondary Education)",
      school: "St. Thomas University",
    },
    {
      credential: "Bachelor of Arts (Commerce)",
      school: "Mount Allison University",
    },
  ],
  technology: [
    {
      label: "AI & Data",
      text: "AI Strategy, AI Integration, SQL, Business Intelligence, KPI Reporting, Data Visualization",
    },
    {
      label: "Platforms",
      text: "Moodle LMS, Totara LMS, Gibbon SIS, Microsoft Entra, Drupal",
    },
    {
      label: "Development & Technical",
      text: "HTML, CSS, APIs, GitHub, Visual Studio, VMware",
    },
    {
      label: "Credentials",
      text: "Moodle MEQ Facilitator, Moodle MAQ Facilitator, Totara LMS Site Administrator, Gibbon SIS Administrator, Data Analytics",
    },
  ],
  speaking: {
    alt: "Jason Dorey speaking on stage beside a slide titled The Future of AI-Enabled Learning, dated 17 October 2026 at Vinpearl Landmark 81, Ho Chi Minh City.",
    caption:
      "Speaking on “The Future of AI-Enabled Learning,” Saturday, 17 October 2026, at Vinpearl Landmark 81, Ho Chi Minh City. The slide shows Education Malaysia Higher Education, CanGlory International Academy, and Consulate General Malaysia, Ho Chi Minh City.",
  },
  portraits: {
    primaryAlt: "Portrait of Jason Dorey in a navy suit and tie.",
    alternateAlt: "Portrait of Jason Dorey in a navy suit, open collar.",
  },
};

export function formatDates(job) {
  return job.end ? `${job.start.label} – ${job.end.label}` : `${job.start.label} – Present`;
}
