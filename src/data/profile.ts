/**
 * Single source of truth for all portfolio content.
 * Every value here is derived directly from PROFILE.md — nothing is invented.
 */

/** Keys into `content.<locale>.hero.stats`. */
export type StatKey = "gpa" | "projects" | "roles";

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
    "I am a graduate of the Information Systems Program at Gunadarma University with an interest in Full Stack Web Development and Data Analytics. Skilled in data processing, analysis, and visualization using Python, Excel, Looker, Tableau, and Power BI. Experienced in processing data systematically and presenting analytical results in an easy-to-understand manner.",
  stats: [
    { labelKey: "gpa", value: "3.87" },
    { labelKey: "projects", value: "10" },
    { labelKey: "roles", value: "3" },
  ] satisfies { labelKey: StatKey; value: string }[],
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

export type SkillCategory = {
  /** Matches a key in `content.<locale>.skills.categories`. */
  i18nKey: string;
  title: string;
  icon: string;
  accent: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    i18nKey: "programming",
    title: "Programming",
    icon: "Code2",
    accent: "from-blue-500 to-cyan-400",
    skills: ["Python", "Java"],
  },
  {
    i18nKey: "database",
    title: "Database Management",
    icon: "Database",
    accent: "from-cyan-400 to-blue-500",
    skills: ["MySQL", "Oracle", "Supabase"],
  },
  {
    i18nKey: "visualization",
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
    i18nKey: "web",
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
    i18nKey: "devops",
    title: "Tools & DevOps",
    icon: "GitBranch",
    accent: "from-cyan-400 to-blue-500",
    skills: ["Git", "GitHub", "Docker"],
  },
  {
    i18nKey: "soft",
    title: "Soft Skills",
    icon: "Users",
    accent: "from-blue-500 to-cyan-400",
    skills: ["Communication", "Teamwork", "Adaptability", "Responsibility"],
  },
];

export type Project = {
  /** Matches a key in `content.<locale>.projects.items`. */
  i18nKey: string;
  slug: string;
  title: string;
  category: "Data Analysis" | "Web Application";
  /**
   * Extra filter categories this project belongs to, beyond `category`.
   * `category` stays the primary one (badge colour, default filter) so a
   * project that is both an analysis and an app still shows up under both
   * tabs without duplicating the record.
   */
  alsoIn?: ("Data Analysis" | "Web Application")[];
  tagline: string;
  description: string;
  highlights: string[];
  tools?: string[];
  methods?: string[];
  features?: string[];
  activities?: string[];
  icon: string;
  /** Preview image in `public/`, shown in the card and the detail modal. */
  image?: string;
  /** Screenshot for this specific sub-project (only on tree parents). */
  subImage?: string;
  /** Live demo URL when the project is deployed and publicly viewable. */
  link?: string;
  /** Public source repository. */
  repo?: string;
  /** Child projects, for a project that is really a family of sites. */
  children?: Project[];
  featured?: boolean;
};

export const dataProjects: Project[] = [
  {
    i18nKey: "ecommerce-orders-uday-malviya",
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
    link: "https://drive.google.com/file/d/1iBPI3crTTKRyv0l2rLf6kUMbKbpVmNWD/view?usp=drive_link",
    featured: true,
  },
  {
    i18nKey: "ford-gobike-analysis",
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
    link: "https://drive.google.com/file/d/1bXAbDl9j_rQoOIlLsXKQYkhjbTNSGtoj/view?usp=drive_link",
    featured: true,
  },
  {
    i18nKey: "web-sentiment-analysis",
    slug: "web-sentiment-analysis",
    title: "Web Sentiment Analysis",
    category: "Web Application",
    alsoIn: ["Data Analysis"],
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
    image: "/gambaranwebsentimenanalysis.webp",
    repo: "https://github.com/andresetwn/web-sentiment-analysis",
    icon: "MessageSquareText",
    featured: true,
  },
];

export const webProjects: Project[] = [
  {
    i18nKey: "bem-fikti-ug-website",
    slug: "bem-fikti-ug-website",
    title: "BEM FIKTI UG Website",
    category: "Web Application",
    tagline: "Official student organization platform",
    description:
      "Official platform for the Faculty of Computer Science and Information Technology student organization at Gunadarma University, covering information, recruitment, and student activity space.",
    highlights: [
      "Designed and developed the official website",
      "System maintenance & content management",
    ],
    children: [
      {
        i18nKey: "web-oprec",
        slug: "web-oprec",
        title: "Web Oprec",
        category: "Web Application",
        tagline: "Committee recruitment registration website",
        description:
          "A committee recruitment website for BEM FIKTI UG, where candidates register and fill out their application online.",
        highlights: [
          "Online committee registration form",
          "Applicant data input",
          "Stage and announcement information",
        ],
        image: "/gambaranweboprecbemfiktiug.webp",
        icon: "ClipboardList",
      },
      {
        i18nKey: "fiktispace",
        slug: "fiktispace",
        title: "FIKTISpace",
        category: "Web Application",
        tagline: "Student activity & information space",
        description:
          "The student activity and information space of BEM FIKTI UG, presenting organization activities, programs, and announcements.",
        highlights: ["Activity and program information", "Announcements"],
        image: "/gambaranwebfiktispacebemfiktiug.webp",
        icon: "Building2",
      },
    ],
    image: "/gambaranweboprecbemfiktiug.webp",
    icon: "Building2",
  },
  {
    i18nKey: "e-baca",
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
    image: "/gambaranwebebaca.webp",
    icon: "BookOpen",
    repo: "https://github.com/andresetwn/eBaca",
  },
  {
    i18nKey: "warung-putri-inventory",
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
    image: "/gambaranwebinventariswaput.webp",
    icon: "Boxes",
    repo: "https://github.com/andresetwn/inventaris-app",
  },
  {
    i18nKey: "psi-app",
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
    image: "/gambaranwebpsiapp.webp",
    icon: "ClipboardList",
    repo: "https://github.com/andresetwn/psi-app",
  },
  {
    i18nKey: "hadirin",
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
    image: "/gambaranwebhadirin.webp",
    icon: "CalendarCheck",
    repo: "https://github.com/andresetwn/hadirin",
  },
  {
    i18nKey: "hpp-calculator",
    slug: "hpp-calculator",
    title: "HPP Calculator",
    category: "Web Application",
    tagline: "Cost-of-goods & selling price calculator for small producers",
    description:
      "A web calculator that helps small food and beverage producers find their true cost per unit and a profitable selling price, from raw materials, labor, and overhead.",
    highlights: [
      "Three cost components: raw materials, labor & overhead",
      "Automatic HPP per unit, selling price & profit margin",
      "Cost breakdown visualization per component",
      "Works offline — data stays on the user's device",
    ],
    features: [
      "Raw material cost (quantity × price)",
      "Labor cost (workers × hours × rate)",
      "Overhead cost (electricity, gas, water, packaging)",
      "Automatic HPP per unit and profit margin",
      "Cost breakdown visualization per component",
      "Data saved on the user's device",
    ],
    image: "/gambaranwebhpp.webp",
    icon: "Calculator",
    link: "https://hpp-calculator-by-andrestwn.vercel.app/",
    repo: "https://github.com/andresetwn/hpp-calculator",
    featured: true,
  },
  {
    i18nKey: "service-tracker",
    slug: "service-tracker",
    title: "Servis Tracker",
    category: "Web Application",
    tagline: "Vehicle service & repair history tracker",
    description:
      "A web application for recording the maintenance and repair history of personal vehicles, so owners know what was done, at what mileage, and at what cost — without relying on paper or memory.",
    highlights: [
      "Dashboard with totals, spending & last service summary",
      "Multi-vehicle CRUD with normalized, unique plate numbers",
      "Repair records with parts, work items & auto-calculated cost",
      "Search, filter & sort across the service timeline",
      "Supabase RLS keeps every user's data private",
    ],
    features: [
      "Vehicle management (add, view, edit, delete)",
      "Repair history with parts and work items",
      "Cost calculation from parts, labor & additional fees",
      "Search, filter by vehicle/date/mileage, and sorting",
      "User accounts with Supabase Row Level Security",
    ],
    image: "/gambaranwebservis.webp",
    icon: "Wrench",
    link: "https://service-tracker-snowy.vercel.app/",
    repo: "https://github.com/andresetwn/service-tracker",
    featured: true,
  },
];

export const allProjects = [...dataProjects, ...webProjects];

export type Experience = {
  /** Matches a key in `content.<locale>.experience.items`. */
  i18nKey: string;
  organization: string;
  role: string;
  period: string;
  type: "Work" | "Organization";
  points: string[];
  icon: string;
};

export const experiences: Experience[] = [
  {
    i18nKey: "psych-lab",
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
    i18nKey: "is-lab",
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
    i18nKey: "bem-fikti",
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
  /** Matches a key in `content.<locale>.education.items`. */
  i18nKey: string;
  institution: string;
  program: string;
  period: string;
  gpa?: string;
  location?: string;
  icon: string;
};

export const education: Education = {
  i18nKey: "university",
  institution: "Gunadarma University",
  program: "Information Systems",
  period: "2022 – 2026",
  gpa: "3.87",
  icon: "GraduationCap",
};

export const highSchool: Education = {
  i18nKey: "high-school",
  institution: "SMAN 15 Kota Tangerang",
  program: "Social Science",
  period: "2019 – 2022",
  location: "Tangerang, Indonesia",
  icon: "School",
};

export type Certification = {
  /** Matches a key in `content.<locale>.certifications.items`. */
  i18nKey: string;
  title: string;
  issuer: string;
  icon: string;
};

export const certifications: Certification[] = [
  {
    i18nKey: "data-analyst",
    title: "Data Analyst Certification",
    issuer: "LSP Gunadarma University",
    icon: "BadgeCheck",
  },
];

export type Training = {
  /** Matches a key in `content.<locale>.trainings`. */
  i18nKey: string;
  year: string;
};

export const trainings: Training[] = [
  { i18nKey: "intro-data-analysis", year: "2023" },
  { i18nKey: "fundamental-web-programming", year: "2023" },
  { i18nKey: "golang-beginner", year: "2024" },
  { i18nKey: "java-beginner", year: "2024" },
  { i18nKey: "golang-intermediate", year: "2025" },
  { i18nKey: "java-intermediate", year: "2025" },
  { i18nKey: "data-preparation", year: "2025" },
  { i18nKey: "business-intelligence", year: "2026" },
];
