/**
 * Single source of truth for all portfolio content.
 * Every value here is derived directly from PROFILE.md — nothing is invented.
 */

export const profile = {
  name: "Andre Setiawan",
  firstName: "Andre",
  lastName: "Setiawan",
  avatar: "/fotoformal_gacor.png",
  role: "Data Analyst & Web Developer",
  location: "Tangerang, Indonesia",
  email: "andrestwnn01@gmail.com",
  linkedin: "https://www.linkedin.com/in/andre-setiawan-799771253/",
  github: "https://github.com/andresetwn",
  portfolio: "https://bit.ly/PortoDataAnalisisAndre",
  summary:
    "I am a graduate of the Information Systems Program at Gunadarma University with a career focus as a Data Analyst. Skilled in data processing, analysis, and visualization using Python, Excel, Looker, Tableau, and Power BI. Experienced in processing data systematically and presenting analytical results in an easy-to-understand manner.",
  stats: [
    { label: "GPA", value: "3.87" },
    { label: "Projects Built", value: "8" },
    { label: "Roles & Orgs", value: "3" },
  ],
};

/**
 * Gmail compose URL used for contact links.
 *
 * Plain `mailto:` silently does nothing for visitors with no default mail
 * client configured (common on fresh Windows installs and webmail-only
 * users), which made the email links look broken. This always works.
 */
export const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  profile.email,
)}&su=${encodeURIComponent("Portfolio Inquiry — Andre Setiawan")}&body=${encodeURIComponent(
  "Hi Andre,\n\nI came across your portfolio and would like to get in touch.\n\nBest regards,",
)}`;

export const socials = [
  { label: "Email", href: gmailCompose, icon: "Mail" },
  { label: "LinkedIn", href: profile.linkedin, icon: "Linkedin" },
  { label: "Portfolio", href: profile.portfolio, icon: "Globe" },
];

export const about = {
  heading: "About Me",
  paragraphs: [
    "I am a graduate of the Information Systems Program at Gunadarma University with a career focus as a Data Analyst. I am skilled in data processing, analysis, and visualization using Python, Excel, Looker, Tableau, and Power BI.",
    "I also have experience working on web development projects, building responsive websites and web-based applications using technologies such as React, Next.js, Laravel, JavaScript, and Tailwind CSS.",
  ],
  highlights: [
    "Data Analysis & Visualization",
    "Python, Excel, Looker, Tableau, Power BI",
    "Web Development",
    "React, Next.js, Laravel, JavaScript",
  ],
};

export type SkillCategory = {
  title: string;
  icon: string;
  accent: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: "Code2",
    accent: "from-blue-500 to-cyan-400",
    skills: ["Python", "Java"],
  },
  {
    title: "Database Management",
    icon: "Database",
    accent: "from-cyan-400 to-blue-500",
    skills: ["MySQL", "Oracle", "Supabase"],
  },
  {
    title: "Data Visualization",
    icon: "BarChart3",
    accent: "from-blue-400 to-cyan-300",
    skills: [
      "Microsoft Excel",
      "Google Sheets",
      "Looker",
      "Tableau",
      "Power BI",
    ],
  },
  {
    title: "Web Development",
    icon: "Globe",
    accent: "from-cyan-300 to-blue-400",
    skills: [
      "HTML5",
      "CSS",
      "JavaScript",
      "PHP",
      "React",
      "NextJS",
      "Tailwind",
      "NodeJS",
      "Laravel",
    ],
  },
  {
    title: "Soft Skills",
    icon: "Users",
    accent: "from-blue-500 to-cyan-400",
    skills: ["Communication", "Teamwork", "Adaptability", "Responsibility"],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: "Data Analysis" | "Web Application";
  tagline: string;
  description: string;
  highlights: string[];
  tools?: string[];
  methods?: string[];
  features?: string[];
  activities?: string[];
  icon: string;
  featured?: boolean;
};

export const dataProjects: Project[] = [
  {
    slug: "ecommerce-orders-uday-malviya",
    title: "E-Commerce Orders Uday Malviya",
    category: "Data Analysis",
    tagline: "Revenue, marketing channels & payment behavior analysis",
    description:
      "End-to-end e-commerce order analysis covering revenue contribution, marketing channel effectiveness, and customer payment preferences.",
    highlights: [
      "Identifying products with the highest revenue contribution",
      "Analyzing marketing channel effectiveness",
      "Analyzing customer payment method preferences",
    ],
    activities: [
      "Data collection and preprocessing",
      "Data cleaning",
      "Correlation analysis",
      "Data visualization",
      "Business insights and recommendations",
    ],
    tools: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Google Colaboratory",
      "Looker Studio",
    ],
    icon: "ShoppingCart",
    featured: true,
  },
  {
    slug: "ford-gobike-analysis",
    title: "Ford GoBike Data Analysis",
    category: "Data Analysis",
    tagline: "User characteristics & station demand patterns",
    description:
      "Analysis of bike-share service usage, focused on user characteristics, usage patterns, and the stations with the highest demand.",
    highlights: [
      "User characteristics",
      "Service usage patterns",
      "Stations with highest demand",
    ],
    activities: [
      "Data collection and preprocessing",
      "Missing value handling",
      "Outlier detection",
      "Duplicate checking",
      "Data analysis",
      "Data visualization",
      "Business insights and recommendations",
    ],
    tools: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Google Colaboratory",
      "Looker Studio",
    ],
    icon: "Bike",
    featured: true,
  },
  {
    slug: "web-sentiment-analysis",
    title: "Web Sentiment Analysis",
    category: "Data Analysis",
    tagline: "NLP app for Octo Mobile review sentiment & topic modeling",
    description:
      "A web-based application to analyze user reviews of the Octo Mobile application, combining sentiment classification with topic modeling.",
    highlights: [
      "Sentiment analysis & classification with IndoBERT",
      "Topic modeling with LDA",
      "Interactive sentiment distribution visualization",
    ],
    methods: ["IndoBERT", "LDA"],
    features: [
      "Dataset uploading and retrieval",
      "Data preprocessing",
      "Sentiment analysis and classification",
      "Sentiment distribution visualization",
      "Topic modeling",
    ],
    icon: "MessageSquareText",
    featured: true,
  },
];

export const webProjects: Project[] = [
  {
    slug: "bem-fikti-ug-website",
    title: "BEM FIKTI UG Website",
    category: "Web Application",
    tagline: "Official student organization platform",
    description:
      "Official platform for the Faculty of Computer Science and Information Technology student organization at Gunadarma University.",
    highlights: [
      "Designed and developed the official website",
      "System maintenance & content management",
    ],
    icon: "Building2",
  },
  {
    slug: "e-baca",
    title: "E-Baca",
    category: "Web Application",
    tagline: "Web-based online library with recommendations",
    description:
      "A web-based online library for browsing, reading, and downloading digital books, with a personalized recommendation system.",
    highlights: [
      "Digital book collections",
      "Book search & offline downloads",
      "Recommendation system based on user interests and reading history",
    ],
    features: [
      "Digital book collections",
      "Book search",
      "E-book reading",
      "Offline downloads",
      "Recommendation system based on user interests and reading history",
    ],
    icon: "BookOpen",
  },
  {
    slug: "warung-putri-inventory",
    title: "Warung Putri Inventory Website",
    category: "Web Application",
    tagline: "Web-based inventory management application",
    description:
      "A web-based inventory application for tracking stock movement and generating inventory reports.",
    highlights: [
      "Incoming and outgoing goods tracking",
      "Product & category search",
      "Inventory report downloads",
    ],
    features: [
      "Incoming and outgoing goods",
      "Product search",
      "Category search",
      "CRUD functionality",
      "Inventory report downloads",
    ],
    icon: "Boxes",
  },
  {
    slug: "psi-app",
    title: "PSI App",
    category: "Web Application",
    tagline: "Psychology Laboratory operations support",
    description:
      "A web-based application supporting Psychology Laboratory operations, covering programmer data and task management.",
    highlights: [
      "Programmer data management",
      "Task management",
      "Programmer standby schedules",
    ],
    features: [
      "Programmer data",
      "Task management",
      "Programmer standby schedules",
    ],
    icon: "ClipboardList",
  },
  {
    slug: "hadirin",
    title: "Hadirin",
    category: "Web Application",
    tagline: "Employee attendance administration app",
    description:
      "A web-based employee attendance administration application for tracking attendance and managing leave requests.",
    highlights: [
      "Attendance tracking",
      "Leave and permission requests",
      "Attendance history monitoring",
    ],
    features: [
      "Attendance tracking",
      "Leave and permission requests",
      "Attendance history monitoring",
    ],
    icon: "CalendarCheck",
  },
];

export const allProjects = [...dataProjects, ...webProjects];

export type Experience = {
  organization: string;
  role: string;
  period: string;
  type: "Work" | "Organization";
  points: string[];
  icon: string;
};

export const experiences: Experience[] = [
  {
    organization: "Gunadarma University Psychology Laboratory",
    role: "Programmer",
    period: "August 2025 – August 2026",
    type: "Work",
    icon: "Code2",
    points: [
      "Worked on website development projects with a team, including the Psychology Laboratory CMS Website and Laboratory Inventory Website.",
      "Assisted with Psychology Laboratory practical sessions, particularly computer-based activities.",
      "Provided technical support during laboratory sessions.",
    ],
  },
  {
    organization: "Gunadarma University Information Systems Laboratory",
    role: "Laboratory Assistant",
    period: "March 2024 – September 2024",
    type: "Work",
    icon: "GraduationCap",
    points: [
      "Explained practical materials to students.",
      "Guided students through hands-on laboratory sessions.",
      "Provided technical assistance.",
      "Assessed students' practical work and submitted reports.",
    ],
  },
  {
    organization: "BEM FIKTI UG",
    role: "Staff of Information Technology Development Bureau",
    period: "November 2023 – September 2024",
    type: "Organization",
    icon: "Users",
    points: [
      "Designed and developed the official BEM FIKTI UG website.",
      "Maintained the system and ensured the website functioned properly, both functionally and visually.",
      "Managed and updated website content.",
    ],
  },
];

export type Education = {
  institution: string;
  program: string;
  period: string;
  gpa?: string;
  location?: string;
  icon: string;
};

export const education: Education = {
  institution: "Gunadarma University",
  program: "Information Systems",
  period: "2022 – 2026",
  gpa: "3.87",
  icon: "GraduationCap",
};

export const highSchool: Education = {
  institution: "SMAN 15 Kota Tangerang",
  program: "Social Science",
  period: "2019 – 2022",
  location: "Tangerang, Indonesia",
  icon: "School",
};

export type Certification = {
  title: string;
  issuer: string;
  note: string;
  icon: string;
};

export const certifications: Certification[] = [
  {
    title: "Data Analyst Certification",
    issuer: "LSP Gunadarma University",
    note: "Licensed by BNSP",
    icon: "BadgeCheck",
  },
];

export type Training = {
  title: string;
  issuer: string;
  year: string;
};

export const trainings: Training[] = [
  { title: "Introduction to Data Analysis", issuer: "MySkill", year: "2023" },
  {
    title: "Fundamental Web Programming",
    issuer: "Lepkom Gunadarma",
    year: "2023",
  },
  { title: "Go-Lang for Beginner", issuer: "Lepkom Gunadarma", year: "2024" },
  {
    title: "Go-Lang for Intermediate",
    issuer: "Lepkom Gunadarma",
    year: "2025",
  },
  {
    title: "Data Preparation for Business Processes",
    issuer: "Gunadarma",
    year: "2025",
  },
  {
    title: "Creating Business Intelligence",
    issuer: "Gunadarma",
    year: "2026",
  },
];

export const languages = ["Indonesian", "English"];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
