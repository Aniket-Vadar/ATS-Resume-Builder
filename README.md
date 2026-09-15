# ATS Resume Builder 🚀

A modern, SaaS-grade, single-column ATS-optimized resume builder built with **Next.js**, **React**, and **Tailwind CSS**. Designed specifically to produce 100% parseable, single-page resumes that pass applicant tracking systems (Jobscan, ResumeGo, Greenhouse, Lever) with top scores.

---

## ✨ Features

- **Single-Column ATS Layout**: Linear hierarchy compliant with modern parser standards (no multi-column text interleaving).
- **Guaranteed 1-Page Optimization**: Real-time height tracking and visual boundary indicators prevent accidental 2-page spillage. Dynamic section pull-up when items are removed.
- **Modern SaaS UI**: Dark slate studio interface with collapsible cards, inline section renaming, section toggle controls, and quick JSON import/export.
- **Zero Watermarks**: Clean, unbranded, professional PDF generation directly via browser print engine (`Save as PDF`).
- **Drag & Drop Reordering**: Reorder key achievements, experience, and projects effortlessly.
- **Privacy-First**: Operates client-side; no personal resume data is stored on remote servers.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App/Pages router)
- **Frontend**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Drag & Drop**: [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Aniket-Vadar/ATS-Resume-Builder.git

# Navigate into project directory
cd ATS-Resume-Builder

# Install dependencies
yarn install
# or
npm install
```

### Running Locally

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to start editing your resume.

---

## 📄 PDF Export Guide

1. Click the **Download PDF** button in the top navigation bar.
2. In the browser print dialog:
   - Set **Destination** to `Save as PDF` (recommended: Chrome / Edge native print).
   - Set **Paper size** to `A4`.
   - Set **Margins** to `Default` (handled automatically by `@page` CSS).
   - Uncheck **Headers and footers**.
3. Save your clean, ATS-compliant PDF.

---

## 📝 License

Distributed under the [MIT License](LICENSE.md).
