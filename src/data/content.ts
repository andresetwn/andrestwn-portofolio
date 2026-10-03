/**
 * Every piece of copy shown on the page, per locale.
 *
 * Structural data (names, links, icon keys, tool lists, periods) stays in
 * `profile.ts`; anything a visitor reads lives here so it can be swapped
 * without touching markup. English is the source locale, Indonesian mirrors
 * it — no facts are invented, only translated.
 */

import type { Locale } from "@/lib/i18n";
import type { StatKey } from "@/data/profile";

export type NavItem = { id: string; label: string };

export type LocaleContent = {
  language: {
    /** Screen-reader label for the language switch group. */
    aria: string;
  };
  nav: {
    items: NavItem[];
    cta: string;
  };
  hero: {
    rolePrefix: string;
    roleHighlight: string;
    viewWork: string;
    getInTouch: string;
    downloadCV: string;
    scroll: string;
    /** `{{name}}` is replaced with the person's name. */
    portraitAlt: string;
    stats: Record<StatKey, string>;
  };
  about: {
    eyebrow: string;
    title: string;
    highlight: string;
    divider: string;
    paragraphs: string[];
    highlights: string[];
  };
  skills: {
    eyebrow: string;
    title: string;
    highlight: string;
    categories: Record<string, string>;
  };
  projects: {
    eyebrow: string;
    title: string;
    highlight: string;
    intro: string;
    /** Label for the live-demo link on deployed project cards. */
    liveDemo: string;
    /** Label for the source-code link on a project card / modal. */
    sourceCode: string;
    /** Label for a downloadable/notebook report link (data projects). */
    viewReport: string;
    /** Label for the technology & tools heading inside the detail modal. */
    techStack: string;
    /** Label for the features heading inside the detail modal. */
    features: string;
    /** Label for the sub-projects heading inside a parent project's modal. */
    subProjects: string;
    /** Screen-reader text for the project detail dialog. */
    dialogAria: string;
    /** Button label shown when the detail modal is closed. */
    dialogClose: string;
    filters: {
      all: string;
      data: string;
      web: string;
    };
    categories: {
      data: string;
      web: string;
    };
    items: Record<
      string,
      {
        tagline: string;
        description: string;
        highlights: string[];
        /**
         * What renders as the card's tag chips. Data projects list their
         * tools (product names, identical across locales); web projects list
         * their features, which are translated.
         */
        tags: string[];
        /** Technologies & tools, shown in the detail modal. */
        techStack?: string[];
      }
    >;
  };
  experience: {
    eyebrow: string;
    title: string;
    highlight: string;
    types: {
      Work: string;
      Organization: string;
    };
    items: Record<
      string,
      {
        role: string;
        organization: string;
        period: string;
        points: string[];
      }
    >;
  };
  education: {
    eyebrow: string;
    title: string;
    highlight: string;
    gpa: string;
    items: Record<
      string,
      {
        institution: string;
        program: string;
      }
    >;
  };
  certifications: {
    eyebrow: string;
    title: string;
    highlight: string;
    training: string;
    languages: string;
    note: string;
    items: Record<
      string,
      {
        title: string;
        issuer: string;
      }
    >;
    languagesList: string[];
    /** Training programs, keyed by `Training.i18nKey`. */
    trainings: Record<string, { title: string; issuer: string }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    highlight: string;
    intro: string;
    heading: string;
    links: {
      email: string;
      linkedin: string;
      github: string;
      portfolio: string;
    };
  };
  footer: {
    navigation: string;
    /** `{{role}}` and `{{location}}` are replaced from `profile`. */
    blurb: string;
    rights: string;
  };
};

export const content: Record<Locale, LocaleContent> = {
  en: {
    language: {
      aria: "Switch language",
    },
    nav: {
      items: [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "experience", label: "Experience" },
        { id: "education", label: "Education" },
        { id: "certifications", label: "Certifications" },
        { id: "contact", label: "Contact" },
      ],
      cta: "Let's talk",
    },
    hero: {
      rolePrefix: "Data Analyst &",
      roleHighlight: "Website Developer",
      viewWork: "View My Work",
      getInTouch: "Get In Touch",
      downloadCV: "Download CV",
      scroll: "Scroll",
      portraitAlt: "Portrait of {{name}}",
      stats: {
        gpa: "GPA",
        projects: "Projects Built",
        roles: "Roles & Orgs",
      },
    },
    about: {
      eyebrow: "About",
      title: "Turning data into",
      highlight: "insights",
      divider: "Data Analyst | Web Developer",
      paragraphs: [
        "I am a graduate of the Information Systems Program at Gunadarma University with an interest in Full Stack Web Development and Data Analytics. I am skilled in data processing, analysis, and visualization using Python, Excel, Looker, Tableau, and Power BI.",
        "I also have experience working on web development projects, building responsive websites and web-based applications using technologies such as React, Next.js, Laravel, JavaScript, and Tailwind CSS.",
      ],
      highlights: [
        "Data Analysis & Visualization",
        "Python, Excel, Looker, Tableau, Power BI",
        "Web Development",
        "React, Next.js, Laravel, JavaScript",
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Skills & ",
      highlight: "Technologies",
      categories: {
        programming: "Programming",
        database: "Database Management",
        visualization: "Data Visualization",
        web: "Web Development",
        devops: "Tools & DevOps",
        soft: "Soft Skills",
      },
    },
    projects: {
      eyebrow: "Projects",
      title: "Selected",
      highlight: "Projects",
      intro: "A mix of data analysis projects and web applications",
      liveDemo: "Live demo",
      sourceCode: "Source code",
      viewReport: "View report",
      techStack: "Technology & Tools",
      features: "Features",
      subProjects: "Included websites",
      dialogAria: "Project details",
      dialogClose: "Close",
      filters: {
        all: "All",
        data: "Data Analysis",
        web: "Web Application",
      },
      categories: {
        data: "Data Analysis",
        web: "Web Application",
      },
      items: {
        "ecommerce-orders-uday-malviya": {
          tagline: "Revenue, marketing channels & payment behavior analysis",
          description:
            "End-to-end e-commerce order analysis covering revenue contribution, marketing channel effectiveness, and customer payment preferences.",
          highlights: [
            "Identifying products with the highest revenue contribution",
            "Analyzing marketing channel effectiveness",
            "Analyzing customer payment method preferences",
          ],
          tags: [
            "Python",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "Google Colaboratory",
            "Looker Studio",
          ],
          techStack: [
            "Python",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "Google Colaboratory",
            "Looker Studio",
          ],
        },
        "ford-gobike-analysis": {
          tagline: "User characteristics & station demand patterns",
          description:
            "Analysis of bike-share service usage, focused on user characteristics, usage patterns, and the stations with the highest demand.",
          highlights: [
            "User characteristics",
            "Service usage patterns",
            "Stations with highest demand",
          ],
          tags: [
            "Python",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "Google Colaboratory",
            "Looker Studio",
          ],
          techStack: [
            "Python",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "Google Colaboratory",
            "Looker Studio",
          ],
        },
        "web-sentiment-analysis": {
          tagline: "NLP app for Octo Mobile review sentiment & topic modeling",
          description:
            "A web-based application to analyze user reviews of the Octo Mobile application, combining sentiment classification with topic modeling.",
          highlights: [
            "Sentiment analysis & classification with IndoBERT",
            "Topic modeling with LDA",
            "Interactive sentiment distribution visualization",
          ],
          tags: ["IndoBERT", "LDA"],
          techStack: [
            "Python",
            "IndoBERT",
            "LDA",
            "Flask",
            "Next.js",
            "Supabase",
          ],
        },
        "bem-fikti-ug-website": {
          tagline: "Official student organization platform",
          description:
            "Official platform for the Faculty of Computer Science and Information Technology student organization at Gunadarma University, covering information, recruitment, and student activity space.",
          highlights: [
            "Designed and developed the official website",
            "System maintenance & content management",
          ],
          tags: [],
          techStack: ["Next.js", "React", "Tailwind CSS"],
        },
        "web-oprec": {
          tagline: "Committee recruitment registration website",
          description:
            "A committee recruitment website for BEM FIKTI UG, where candidates register and fill out their application online.",
          highlights: [
            "Online committee registration form",
            "Applicant data input",
            "Stage and announcement information",
          ],
          tags: ["Online registration", "Applicant data", "Announcements"],
          techStack: ["Next.js", "React", "Tailwind CSS"],
        },
        fiktispace: {
          tagline: "Student activity & information space",
          description:
            "The student activity and information space of BEM FIKTI UG, presenting organization activities, programs, and announcements.",
          highlights: ["Activity and program information", "Announcements"],
          tags: ["Activity information", "Announcements"],
          techStack: ["Next.js", "React", "Tailwind CSS"],
        },
        "e-baca": {
          tagline: "Web-based online library with recommendations",
          description:
            "A web-based online library for browsing, reading, and downloading digital books, with a personalized recommendation system.",
          highlights: [
            "Digital book collections",
            "Book search & offline downloads",
            "Recommendation system based on user interests and reading history",
          ],
          tags: [
            "Digital book collections",
            "Book search",
            "E-book reading",
            "Offline downloads",
          ],
          techStack: ["Next.js", "React", "Tailwind CSS"],
        },
        "warung-putri-inventory": {
          tagline: "Web-based inventory management application",
          description:
            "A web-based inventory application for tracking stock movement and generating inventory reports.",
          highlights: [
            "Incoming and outgoing goods tracking",
            "Product & category search",
            "Inventory report downloads",
          ],
          tags: [
            "Incoming and outgoing goods",
            "Product search",
            "Category search",
            "CRUD functionality",
            "Inventory report downloads",
          ],
          techStack: [
            "Next.js",
            "React",
            "Supabase",
            "Framer Motion",
            "Tailwind CSS",
          ],
        },
        "psi-app": {
          tagline: "Psychology Laboratory operations support",
          description:
            "A web-based application supporting Psychology Laboratory operations, covering programmer data and task management.",
          highlights: [
            "Programmer data management",
            "Task management",
            "Programmer standby schedules",
          ],
          tags: [
            "Programmer data",
            "Task management",
            "Programmer standby schedules",
          ],
          techStack: [
            "Next.js",
            "React",
            "Supabase",
            "Framer Motion",
            "Tailwind CSS",
          ],
        },
        hadirin: {
          tagline: "Employee attendance administration app",
          description:
            "A web-based employee attendance administration application for tracking attendance and managing leave requests.",
          highlights: [
            "Attendance tracking",
            "Leave and permission requests",
            "Attendance history monitoring",
          ],
          tags: [
            "Attendance tracking",
            "Leave and permission requests",
            "Attendance history monitoring",
          ],
          techStack: ["Laravel", "PHP", "Blade", "Tailwind CSS", "MySQL"],
        },
        "hpp-calculator": {
          tagline:
            "Cost-of-goods & selling price calculator for small producers",
          description:
            "A web calculator that helps small food and beverage producers find their true cost per unit and a profitable selling price, from raw materials, labor, and overhead.",
          highlights: [
            "Three cost components: raw materials, labor & overhead",
            "Automatic HPP per unit, selling price & profit margin",
            "Cost breakdown visualization per component",
            "Works offline — data stays on the user's device",
          ],
          tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
          techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        },
        "service-tracker": {
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
          tags: ["Next.js", "React", "TypeScript", "Supabase"],
          techStack: [
            "Next.js",
            "React",
            "TypeScript",
            "Supabase",
            "Tailwind CSS",
          ],
        },
      },
    },
    experience: {
      eyebrow: "Experience",
      title: "My",
      highlight: "Experience",
      types: {
        Work: "Work",
        Organization: "Organization",
      },
      items: {
        "psych-lab": {
          role: "Programmer",
          organization: "Gunadarma University Psychology Laboratory",
          period: "August 2025 – August 2026",
          points: [
            "Worked on website development projects with a team, including the Psychology Laboratory CMS Website and Laboratory Inventory Website.",
            "Assisted with Psychology Laboratory practical sessions, particularly computer-based activities.",
            "Provided technical support during laboratory sessions.",
          ],
        },
        "is-lab": {
          role: "Laboratory Assistant",
          organization: "Gunadarma University Information Systems Laboratory",
          period: "March 2024 – September 2024",
          points: [
            "Explained practical materials to students.",
            "Guided students through hands-on laboratory sessions.",
            "Provided technical assistance.",
            "Assessed students' practical work and submitted reports.",
          ],
        },
        "bem-fikti": {
          role: "Staff of Information Technology Development Bureau",
          organization: "BEM FIKTI UG",
          period: "November 2023 – September 2024",
          points: [
            "Designed and developed the official BEM FIKTI UG website.",
            "Maintained the system and ensured the website functioned properly, both functionally and visually.",
            "Managed and updated website content.",
          ],
        },
      },
    },
    education: {
      eyebrow: "Education",
      title: "Academic",
      highlight: "Background",
      gpa: "GPA",
      items: {
        university: {
          institution: "Gunadarma University",
          program: "Information Systems",
        },
        "high-school": {
          institution: "SMAN 15 Kota Tangerang",
          program: "Social Science",
        },
      },
    },
    certifications: {
      eyebrow: "Certifications",
      title: "Certifications &",
      highlight: "Learning",
      training: "Training Programs",
      languages: "Languages",
      note: "Licensed by BNSP",
      items: {
        "data-analyst": {
          title: "Data Analyst Certification",
          issuer: "LSP Gunadarma University",
        },
      },
      languagesList: ["Indonesian", "English"],
      trainings: {
        "intro-data-analysis": {
          title: "Introduction to Data Analysis",
          issuer: "MySkill",
        },
        "fundamental-web-programming": {
          title: "Fundamental Web Programming",
          issuer: "LEPKOM Gunadarma",
        },
        "golang-beginner": {
          title: "Go-Lang for Beginner",
          issuer: "LEPKOM Gunadarma",
        },
        "java-beginner": {
          title: "Java Programming for Beginner",
          issuer: "LEPKOM Gunadarma",
        },
        "golang-intermediate": {
          title: "Go-Lang for Intermediate",
          issuer: "LEPKOM Gunadarma",
        },
        "java-intermediate": {
          title: "Java Programming for Intermediate",
          issuer: "LEPKOM Gunadarma",
        },
        "data-preparation": {
          title: "Data Preparation for Business Processes",
          issuer: "Gunadarma",
        },
        "business-intelligence": {
          title: "Creating Business Intelligence",
          issuer: "Gunadarma",
        },
      },
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's Work",
      highlight: "Together",
      intro:
        "Have a dataset that needs making sense of, or a web application you'd like to build? I'm open to both — whether it's a full-stack web development role or a data analyst role.",
      heading: "Open to Full-Stack Web Developer & Data Analyst opportunities",
      links: {
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
        portfolio: "Portfolio Data Analyst",
      },
    },
    footer: {
      navigation: "Navigation",
      blurb: "{{role}} based in {{location}}.",
      rights: "All rights reserved.",
    },
  },
  id: {
    language: {
      aria: "Ganti bahasa",
    },
    nav: {
      items: [
        { id: "about", label: "Tentang" },
        { id: "skills", label: "Keahlian" },
        { id: "projects", label: "Proyek" },
        { id: "experience", label: "Pengalaman" },
        { id: "education", label: "Pendidikan" },
        { id: "certifications", label: "Sertifikasi" },
        { id: "contact", label: "Kontak" },
      ],
      cta: "Mari Bicara",
    },
    hero: {
      rolePrefix: "Data Analyst &",
      roleHighlight: "Pengembang Website",
      viewWork: "Lihat Karya Saya",
      getInTouch: "Hubungi Saya",
      downloadCV: "Unduh CV",
      scroll: "Gulir",
      portraitAlt: "Foto {{name}}",
      stats: {
        gpa: "IPK",
        projects: "Proyek Dibuat",
        roles: "Peran & Organisasi",
      },
    },
    about: {
      eyebrow: "Tentang",
      title: "Mengubah data menjadi",
      highlight: "wawasan",
      divider: "Data Analyst | Pengembang Web",
      paragraphs: [
        "Saya lulusan program Sistem Informasi di Universitas Gunadarma dengan minat pada Full Stack Web Development dan Data Analytics. Saya terampil dalam pemrosesan, analisis, dan visualisasi data menggunakan Python, Excel, Looker, Tableau, dan Power BI.",
        "Saya juga memiliki pengalaman dalam pengerjaan proyek pengembangan web, membangun situs web responsif dan aplikasi berbasis web menggunakan teknologi seperti React, Next.js, Laravel, JavaScript, dan Tailwind CSS.",
      ],
      highlights: [
        "Analisis & Visualisasi Data",
        "Python, Excel, Looker, Tableau, Power BI",
        "Pengembangan Web",
        "React, Next.js, Laravel, JavaScript",
      ],
    },
    skills: {
      eyebrow: "Keahlian",
      title: "Keahlian & ",
      highlight: "Teknologi",
      categories: {
        programming: "Pemrograman",
        database: "Manajemen Database",
        visualization: "Visualisasi Data",
        web: "Pengembangan Web",
        devops: "Tools & DevOps",
        soft: "Soft Skills",
      },
    },
    projects: {
      eyebrow: "Proyek",
      title: "Proyek",
      highlight: "Pilihan",
      intro: "Kombinasi proyek analisis data dan aplikasi web",
      liveDemo: "Demo langsung",
      sourceCode: "Kode sumber",
      viewReport: "Lihat laporan",
      techStack: "Teknologi & Tools",
      features: "Fitur",
      subProjects: "Website yang dibawahi",
      dialogAria: "Detail proyek",
      dialogClose: "Tutup",
      filters: {
        all: "Semua",
        data: "Analisis Data",
        web: "Aplikasi Web",
      },
      categories: {
        data: "Analisis Data",
        web: "Aplikasi Web",
      },
      items: {
        "ford-gobike-analysis": {
          tagline: "Karakteristik pengguna & pola permintaan stasiun",
          description:
            "Analisis penggunaan layanan bike-sharing, berfokus pada karakteristik pengguna, pola penggunaan, dan stasiun dengan permintaan tertinggi.",
          highlights: [
            "Karakteristik pengguna",
            "Pola penggunaan layanan",
            "Stasiun dengan permintaan tertinggi",
          ],
          tags: [
            "Python",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "Google Colaboratory",
            "Looker Studio",
          ],
          techStack: [
            "Python",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "Google Colaboratory",
            "Looker Studio",
          ],
        },
        "web-sentiment-analysis": {
          tagline:
            "Aplikasi NLP untuk sentimen & topic modeling ulasan Octo Mobile",
          description:
            "Aplikasi berbasis web untuk menganalisis ulasan pengguna aplikasi Octo Mobile, menggabungkan klasifikasi sentimen dengan topic modeling.",
          highlights: [
            "Analisis & klasifikasi sentimen dengan IndoBERT",
            "Topic modeling dengan LDA",
            "Visualisasi distribusi sentimen interaktif",
          ],
          tags: ["IndoBERT", "LDA"],
          techStack: [
            "Python",
            "IndoBERT",
            "LDA",
            "Flask",
            "Next.js",
            "Supabase",
          ],
        },
        "ecommerce-orders-uday-malviya": {
          tagline:
            "Analisis pendapatan, kanal pemasaran & perilaku pembayaran (notebook)",
          description:
            "Analisis eksploratif data pesanan e-commerce: kontribusi pendapatan per produk, efektivitas kanal pemasaran, dan preferensi metode pembayaran.",
          highlights: [
            "Kontribusi pendapatan per produk",
            "Efektivitas kanal pemasaran",
            "Preferensi metode pembayaran pelanggan",
          ],
          tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
          techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
        },
        "bem-fikti-ug-website": {
          tagline: "Platform organisasi mahasiswa resmi",
          description:
            "Platform resmi organisasi mahasiswa Fakultas Ilmu Komputer dan Teknologi Informasi di Universitas Gunadarma, mencakup informasi, rekrutmen, dan ruang aktivitas mahasiswa.",
          highlights: [
            "Mendesain dan mengembangkan situs web resmi",
            "Pemeliharaan sistem & manajemen konten",
          ],
          tags: [],
          techStack: ["Next.js", "React", "Tailwind CSS"],
        },
        "web-oprec": {
          tagline: "Website pendaftaran rekrutmen panitia",
          description:
            "Website pendaftaran rekrutmen panitia BEM FIKTI UG, tempat kandidat mendaftar dan mengisi formulir lamaran secara online.",
          highlights: [
            "Formulir pendaftaran panitia online",
            "Isian data pelamar",
            "Informasi tahapan dan pengumuman",
          ],
          tags: ["Pendaftaran online", "Data pelamar", "Pengumuman"],
          techStack: ["Next.js", "React", "Tailwind CSS"],
        },
        fiktispace: {
          tagline: "Ruang aktivitas & informasi mahasiswa",
          description:
            "Ruang aktivitas dan informasi mahasiswa BEM FIKTI UG, menampilkan aktivitas organisasi, program, dan pengumuman.",
          highlights: ["Informasi aktivitas dan program", "Pengumuman"],
          tags: ["Informasi aktivitas", "Pengumuman"],
          techStack: ["Next.js", "React", "Tailwind CSS"],
        },
        "e-baca": {
          tagline: "Perpustakaan online berbasis web dengan rekomendasi",
          description:
            "Perpustakaan online berbasis web untuk menelusuri, membaca, dan mengunduh buku digital, dengan sistem rekomendasi yang dipersonalisasi.",
          highlights: [
            "Koleksi buku digital",
            "Pencarian buku & unduhan offline",
            "Sistem rekomendasi berdasarkan minat dan riwayat membaca pengguna",
          ],
          tags: [
            "Koleksi buku digital",
            "Pencarian buku",
            "Membaca e-book",
            "Unduhan offline",
          ],
          techStack: ["Next.js", "React", "Tailwind CSS"],
        },
        "warung-putri-inventory": {
          tagline: "Aplikasi manajemen inventaris berbasis web",
          description:
            "Aplikasi inventaris berbasis web untuk melacak pergerakan stok dan membuat laporan inventaris.",
          highlights: [
            "Pelacakan barang masuk dan keluar",
            "Pencarian produk & kategori",
            "Pengunduhan laporan inventaris",
          ],
          tags: [
            "Barang masuk dan keluar",
            "Pencarian produk",
            "Pencarian kategori",
            "Fungsi CRUD",
            "Pengunduhan laporan inventaris",
          ],
          techStack: [
            "Next.js",
            "React",
            "Supabase",
            "Framer Motion",
            "Tailwind CSS",
          ],
        },
        "psi-app": {
          tagline: "Dukungan operasional Laboratorium Psikologi",
          description:
            "Aplikasi berbasis web untuk mendukung operasional Laboratorium Psikologi, mencakup data programmer dan manajemen tugas.",
          highlights: [
            "Manajemen data programmer",
            "Manajemen tugas",
            "Jadwal siap programmer",
          ],
          tags: [
            "Data programmer",
            "Manajemen tugas",
            "Jadwal siap programmer",
          ],
          techStack: [
            "Next.js",
            "React",
            "Supabase",
            "Framer Motion",
            "Tailwind CSS",
          ],
        },
        hadirin: {
          tagline: "Aplikasi administrasi kehadiran karyawan",
          description:
            "Aplikasi administrasi kehadiran karyawan berbasis web untuk melacak kehadiran dan mengelola permohonan cuti.",
          highlights: [
            "Pelacakan kehadiran",
            "Permohonan cuti dan izin",
            "Pemantauan riwayat kehadiran",
          ],
          tags: [
            "Pelacakan kehadiran",
            "Permohonan cuti dan izin",
            "Pemantauan riwayat kehadiran",
          ],
          techStack: ["Laravel", "PHP", "Blade", "Tailwind CSS", "MySQL"],
        },
        "hpp-calculator": {
          tagline: "Kalkulator HPP & harga jual untuk pelaku usaha kecil",
          description:
            "Kalkulator web yang membantu pelaku usaha makanan dan minuman kecil mengetahui biaya per unit yang sebenarnya dan harga jual yang menguntungkan, dari bahan baku, tenaga kerja, dan overhead.",
          highlights: [
            "Tiga komponen biaya: bahan baku, tenaga kerja & overhead",
            "HPP per unit, harga jual & margin keuntungan otomatis",
            "Visualisasi rincian biaya per komponen",
            "Berjalan offline — data tersimpan di perangkat pengguna",
          ],
          tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
          techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        },
        "service-tracker": {
          tagline: "Pelacak riwayat servis & perbaikan kendaraan",
          description:
            "Aplikasi web untuk mencatat riwayat perawatan dan perbaikan kendaraan pribadi, agar pemilik tahu apa yang dikerjakan, di kilometer berapa, dan berapa biayanya — tanpa mengandalkan kertas atau ingatan.",
          highlights: [
            "Dashboard berisi total, pengeluaran & ringkasan servis terakhir",
            "CRUD banyak kendaraan dengan nomor polisi yang dinormalisasi & unik",
            "Catatan reparasi dengan part, pekerjaan & biaya otomatis",
            "Pencarian, filter & sortir pada linimasa servis",
            "Supabase RLS menjaga data tiap pengguna tetap privat",
          ],
          tags: ["Next.js", "React", "TypeScript", "Supabase"],
          techStack: [
            "Next.js",
            "React",
            "TypeScript",
            "Supabase",
            "Tailwind CSS",
          ],
        },
      },
    },
    experience: {
      eyebrow: "Pengalaman",
      title: "Pengalaman",
      highlight: "Saya",
      types: {
        Work: "Pekerjaan",
        Organization: "Organisasi",
      },
      items: {
        "psych-lab": {
          role: "Programmer",
          organization: "Laboratorium Psikologi Universitas Gunadarma",
          period: "Agustus 2025 – Agustus 2026",
          points: [
            "Mengerjakan proyek pengembangan situs web bersama tim, termasuk Situs Web CMS Laboratorium Psikologi dan Situs Web Inventaris Laboratorium.",
            "Membantu sesi praktikum Laboratorium Psikologi, khususnya aktivitas berbasis komputer.",
            "Memberikan dukungan teknis selama sesi laboratorium.",
          ],
        },
        "is-lab": {
          role: "Asisten Laboratorium",
          organization: "Laboratorium Sistem Informasi Universitas Gunadarma",
          period: "Maret 2024 – September 2024",
          points: [
            "Menjelaskan materi praktikum kepada mahasiswa.",
            "Membimbing mahasiswa selama sesi laboratorium praktik.",
            "Memberikan bantuan teknis.",
            "Menilai praktik mahasiswa dan mengumpulkan laporan.",
          ],
        },
        "bem-fikti": {
          role: "Staff Biro Pengembangan Teknologi Informasi",
          organization: "BEM FIKTI UG",
          period: "November 2023 – September 2024",
          points: [
            "Mendesain dan mengembangkan situs web resmi BEM FIKTI UG.",
            "Memelihara sistem dan memastikan situs web berfungsi dengan baik, baik secara fungsional maupun visual.",
            "Mengelola dan memperbarui konten situs web.",
          ],
        },
      },
    },
    education: {
      eyebrow: "Pendidikan",
      title: "Latar Belakang",
      highlight: "Akademik",
      gpa: "IPK",
      items: {
        university: {
          institution: "Universitas Gunadarma",
          program: "Sistem Informasi",
        },
        "high-school": {
          institution: "SMAN 15 Kota Tangerang",
          program: "Ilmu Sosial",
        },
      },
    },
    certifications: {
      eyebrow: "Sertifikasi",
      title: "Sertifikasi &",
      highlight: "Pelatihan",
      training: "Program Pelatihan",
      languages: "Bahasa",
      note: "Bersertifikasi BNSP",
      items: {
        "data-analyst": {
          title: "Sertifikasi Data Analyst",
          issuer: "LSP Universitas Gunadarma",
        },
      },
      languagesList: ["Indonesia", "Inggris"],
      trainings: {
        "intro-data-analysis": {
          title: "Pengenalan Analisis Data",
          issuer: "MySkill",
        },
        "fundamental-web-programming": {
          title: "Dasar Pemrograman Web",
          issuer: "LEPKOM Gunadarma",
        },
        "golang-beginner": {
          title: "Go-Lang untuk Pemula",
          issuer: "LEPKOM Gunadarma",
        },
        "java-beginner": {
          title: "Pemrograman Java untuk Pemula",
          issuer: "LEPKOM Gunadarma",
        },
        "golang-intermediate": {
          title: "Go-Lang untuk Menengah",
          issuer: "LEPKOM Gunadarma",
        },
        "java-intermediate": {
          title: "Pemrograman Java untuk Menengah",
          issuer: "LEPKOM Gunadarma",
        },
        "data-preparation": {
          title: "Persiapan Data untuk Proses Bisnis",
          issuer: "Gunadarma",
        },
        "business-intelligence": {
          title: "Membuat Business Intelligence",
          issuer: "Gunadarma",
        },
      },
    },
    contact: {
      eyebrow: "Kontak",
      title: "Mari",
      highlight: "Bekerja Sama",
      intro:
        "Punya dataset yang perlu diberi makna, atau aplikasi web yang ingin dibangun? Saya terbuka untuk keduanya — baik peran full-stack web developer maupun data analyst.",
      heading: "Terbuka untuk peluang Full-Stack Web Developer & Data Analyst",
      links: {
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
        portfolio: "Portofolio Data Analis",
      },
    },
    footer: {
      navigation: "Navigasi",
      blurb: "Sebagai {{role}} yang berdomisili di {{location}}.",
      rights: "Hak cipta dilindungi.",
    },
  },
};
