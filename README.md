# 🏛️ Government Scheme Finder

A web application to help Indian citizens easily discover and understand government schemes relevant to their profile — by category, state, eligibility, and more.

---

## 📌 Project Overview

Many government schemes go unused simply because citizens aren't aware of them. **Government Scheme Finder** solves this by providing a centralized, easy-to-search platform where users can filter and find schemes based on:

- 👤 Personal profile (age, gender, income, occupation)
- 🗺️ State / Central government schemes
- 📂 Category (education, agriculture, health, housing, women empowerment, etc.)
- ✅ Eligibility criteria

---

## 🎯 Key Features (Planned)

- 🔍 **Smart Search** — Search schemes by keyword, category, or department
- 🧩 **Filter by Profile** — Filter schemes by age group, gender, income level, and state
- 📋 **Scheme Details Page** — Full information including benefits, eligibility, and how to apply
- 🔖 **Bookmarks** — Save schemes for later reference
- 📊 **Dashboard** — Personalized scheme recommendations based on user profile
- 🌐 **Multilingual Support** *(stretch goal)* — Support for regional Indian languages

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (Vanilla CSS) |
| Logic | JavaScript (ES6+) |
| UI Framework | React.js |
| Data Fetching | REST APIs (Fetch API / Axios) |
| API Source | [MyScheme API](https://api.myscheme.gov.in) / Custom Government Open Data APIs |
| Deployment | GitHub Pages / Vercel *(planned)* |

---

## 🗂️ Project Structure *(Planned)*

```
government-scheme-finder/
├── public/
│   └── index.html
├── src/
│   ├── components/       # Reusable UI components (Navbar, SchemeCard, Filters)
│   ├── pages/            # Home, Search, SchemeDetail, About
│   ├── services/         # API call functions (fetchSchemes, fetchByCategory, etc.)
│   ├── utils/            # Helper functions (filters, formatters)
│   ├── styles/           # CSS files per component/page
│   └── App.jsx
├── README.md
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- A browser (Chrome recommended)
- API Key *(if required by the chosen government API)*

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/government-scheme-finder.git

# Navigate to the project directory
cd government-scheme-finder

# Install dependencies
npm install

# Start the development server
npm start
```

### Environment Variables

Create a `.env` file in the root directory:
```env
REACT_APP_API_BASE_URL=https://api.myscheme.gov.in
REACT_APP_API_KEY=your_api_key_here
```

---

## 📅 Development Roadmap

| Phase | Goal | Status |
|---|---|---|
| Phase 1 | Project setup, README, UI wireframes | ✅ In Progress |
| Phase 2 | Static scheme data + Search & Filter UI | 🔜 Upcoming |
| Phase 3 | Backend API + Database integration | 🔜 Upcoming |
| Phase 4 | User authentication + Bookmarks | 🔜 Upcoming |
| Phase 5 | Deployment + Final testing | 🔜 Upcoming |

---

## 🧑‍💻 Author

**Yashvardhan Mundhra**
B.Tech — 1st Year
Capstone Project — 2025–26

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> _"Technology should serve every citizen, not just those who know where to look."_
