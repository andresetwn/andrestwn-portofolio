# Andre Setiawan

## Profile

I am a graduate of the Information Systems Program at Gunadarma University
with a career focus as a Data Analyst.

Skilled in data processing, analysis, and visualization using Python, Excel,
Looker, Tableau, and Power BI.

Experienced in processing data systematically and presenting analytical
results in an easy-to-understand manner.

## Contact

- Location: Tangerang, Indonesia
- Email: andrestwnn01@gmail.com
- LinkedIn: https://www.linkedin.com/in/andre-setiawan-799771253/
- GitHub: https://github.com/andresetwn
- Portfolio: https://bit.ly/PortoDataAnalisisAndre

## Education

### Gunadarma University
Information Systems
2022 – 2026

GPA: 3.87

### SMAN 15 Kota Tangerang
Social Science
2019 – 2022

## Work Experience

### Gunadarma University Psychology Laboratory
**Programmer**
August 2025 – August 2026

- Worked on website development projects with a team, including
  Psychology Laboratory CMS Website and Laboratory Inventory Website.
- Assisted with Psychology Laboratory practical sessions,
  particularly computer-based activities.
- Provided technical support during laboratory sessions.

### Gunadarma University Information Systems Laboratory
**Laboratory Assistant**
March 2024 – September 2024

- Explained practical materials to students.
- Guided students through hands-on laboratory sessions.
- Provided technical assistance.
- Assessed students' practical work and submitted reports.

## Organizational Experience

### BEM FIKTI UG
**Staff of Information Technology Development Bureau**
November 2023 – September 2024

- Designed and developed the official BEM FIKTI UG website.
- Maintained the system and ensured the website functioned properly
  both functionally and visually.
- Managed and updated website content.

## Skills

### Programming
- Python
- Java

### Database Management
- MySQL
- Oracle
- Supabase

### Data Visualization
- Microsoft Excel
- Google Sheets
- Looker
- Tableau
- Power BI

### Web Development
- HTML5
- CSS
- JavaScript
- PHP
- React
- NextJS
- Tailwind
- NodeJS
- Laravel

### Tools & DevOps
- Git
- GitHub
- Docker

### Soft Skills
- Communication
- Teamwork
- Adaptability
- Responsibility

## Data Analysis Projects

### E-Commerce Orders Uday Malviya

Data analysis project focused on:
- Identifying products with the highest revenue contribution
- Analyzing marketing channel effectiveness
- Analyzing customer payment method preferences

Activities:
- Data collection and preprocessing
- Data cleaning
- Correlation analysis
- Data visualization
- Business insights and recommendations

Tools:
- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- Google Colaboratory
- Looker Studio

### Ford GoBike Data Analysis

Focused on:
- User characteristics
- Service usage patterns
- Stations with highest demand

Activities:
- Data collection and preprocessing
- Missing value handling
- Outlier detection
- Duplicate checking
- Data analysis
- Data visualization
- Business insights and recommendations

Tools:
- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- Google Colaboratory
- Looker Studio

### Web Sentiment Analysis

Developed a web-based application to analyze user reviews
of the Octo Mobile application.

Methods:
- IndoBERT
- LDA

Features:
- Dataset uploading and retrieval
- Data preprocessing
- Sentiment analysis and classification
- Sentiment distribution visualization
- Topic modeling

## Other Projects

### BEM FIKTI UG Website

Official platform for the Faculty of Computer Science and Information
Technology student organization at Gunadarma University.

### E-Baca

Web-based online library featuring:
- Digital book collections
- Book search
- E-book reading
- Offline downloads
- Recommendation system based on user interests and reading history

### Warung Putri Inventory Website

Web-based inventory application featuring:
- Incoming and outgoing goods
- Product search
- Category search
- CRUD functionality
- Inventory report downloads

### PSI App

Web-based application supporting Psychology Laboratory operations:
- Programmer data
- Task management
- Programmer standby schedules

### Hadirin

Web-based employee attendance administration application:
- Attendance tracking
- Leave and permission requests
- Attendance history monitoring

## Certification

### Data Analyst Certification
LSP Gunadarma University
Licensed by BNSP

## Training

- Fundamental Web Programming - Lepkom Gunadarma
- Go-Lang for Beginner - Lepkom Gunadarma
- Go-Lang for Intermediate - Lepkom Gunadarma
- Creating Business Intelligence - Gunadarma (2026)
- Data Preparation for Business Processes - Gunadarma (2025)
- Introduction to Data Analysis - MySkill (2023)

## Languages

The site is bilingual: English (default) and Bahasa Indonesia. All copy lives in
`src/data/content.ts` keyed by locale; `src/lib/i18n.ts` holds the locale types.
Structural data in `src/data/profile.ts` carries an `i18nKey` on each record so a
section can look up its translated copy without duplicating it.

- A globe toggle in the Navbar (`src/components/i18n/LanguageToggle.tsx`) switches
  locale at runtime; the choice persists in `localStorage` and `<html lang>` is
  kept in sync for assistive tech.
- English is the server-rendered default, so the first paint always matches; the
  stored or browser preference is applied in an effect.
- Sections that read copy are client components (`"use client"`) because they
  call the `useLocale()` hook — `LocaleProvider` wraps the tree in `layout.tsx`.

### Spoken languages

- Indonesian
- English

## Web Projects

Each project card on the portfolio is clickable and opens a detail modal with
the technology stack, features, and a preview screenshot.

### BEM FIKTI UG Website

Official platform for the Faculty of Computer Science and Information
Technology student organization at Gunadarma University. It is a family of
two websites:

- **Web Oprec** — committee recruitment registration website where candidates
  register and fill out their application online.
- **FIKTISpace** — the student activity and information space, presenting
  organization activities, programs, and announcements.

Tech stack: Next.js, React, Tailwind CSS.

### E-Baca
Live: https://e-baca.vercel.app/
Repo: https://github.com/andresetwn/eBaca

A web-based online library featuring:
- Digital book collections
- Book search
- E-book reading
- Offline downloads
- Recommendation system based on user interests and reading history

Tech stack: Next.js, React, Tailwind CSS.

### Warung Putri Inventory Website
Repo: https://github.com/andresetwn/inventaris-app

A web-based inventory application featuring:
- Incoming and outgoing goods
- Product search
- Category search
- CRUD functionality
- Inventory report downloads

Tech stack: Next.js, React, Supabase, Framer Motion, Tailwind CSS.

### PSI App
Repo: https://github.com/andresetwn/psi-app

A web-based application supporting Psychology Laboratory operations:
- Programmer data
- Task management
- Programmer standby schedules

Tech stack: Next.js, React, Supabase, Framer Motion, Tailwind CSS.

### Hadirin
Repo: https://github.com/andresetwn/hadirin

A web-based employee attendance administration application:
- Attendance tracking
- Leave and permission requests
- Attendance history monitoring

Tech stack: Laravel, PHP, Blade, Tailwind CSS, MySQL.

### HPP Calculator
Live: https://hpp-calculator-by-andrestwn.vercel.app/
Repo: https://github.com/andresetwn/hpp-calculator

A web calculator that helps small food and beverage producers find their
true cost per unit and a profitable selling price, from raw materials,
labor, and overhead.

Built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

Key features:
- Three cost components — raw materials (qty x price), labor
  (workers x hours x rate), and overhead (electricity, gas, water,
  packaging).
- Total HPP, HPP per unit, profit margin, estimated selling price per unit,
  and total profit, all computed automatically.
- Cost breakdown visualization showing the share of each component.
- Numeric inputs are kept as `number | string` so users can type "1.500"
  freely without the value changing mid-typing; a `hasPendingInput` flag
  keeps the summary from flickering to a partial value.
- `Math.max(0, ...)` on every calculation so invalid input never reduces
  the total HPP.
- Sample "Nasi Goreng" data as the initial state, with a reset feature
  guarded by a confirmation dialog.
- Runs offline — data stays on the user's device.

### Servis Tracker
Live: https://service-tracker-snowy.vercel.app/
Repo: https://github.com/andresetwn/service-tracker

A web application for recording the maintenance and repair history of
personal vehicles, so owners know what was done, at what mileage, and at
what cost — without relying on paper or memory.

Tech stack: Next.js, React, TypeScript, Supabase, Tailwind CSS.

Key features:
- Dashboard showing total vehicles, total repair records, total spending,
  last repair, and last mileage.
- Vehicle management (add, view, edit, delete) with the plate number as the
  primary identifier, normalized and unique per user.
- Repair history management (add, view detail, edit, delete with
  confirmation) — supports multiple parts and multiple work items per
  repair.
- Chronological timeline view (newest first) and table view, plus search
  (vehicle name, plate number, repair type, part, complaint, notes),
  filters (vehicle, type, date range, mileage range, part), and sorting.
- Validation: mileage must be a non-negative number, a warning appears if
  mileage decreases from the previous record, costs cannot be negative,
  totals are calculated automatically, and Rupiah formatting is applied in
  the UI only.
- User accounts (register, login, verification) with Supabase RLS, so each
  user only sees their own data.