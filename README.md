<div align="center">

# 🏛️ Government Scheme Finder
### *Smart Eligibility Engine for Indian Citizens*

[![Status](https://img.shields.io/badge/Status-In%20Development-yellow?style=for-the-badge)](https://github.com)
[![Made With](https://img.shields.io/badge/Made%20With-React.js-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org)
[![API](https://img.shields.io/badge/API-data.gov.in-orange?style=for-the-badge)](https://data.gov.in)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

> **Bridging the gap between citizens and government welfare programs** — one eligibility check at a time.

</div>

---

## 📌 Project Overview

**Government Scheme Finder** is a web-based application that helps Indian citizens discover government schemes they are eligible for — based on their personal profile. The system simplifies access to public welfare programs by intelligently filtering relevant schemes and explaining eligibility in a clean, user-friendly interface.

This project tackles a real-world problem: millions of government schemes go unused simply because people don't know they exist or don't understand whether they qualify. By combining smart rule-based logic with open government APIs, this application transforms complex, scattered data into meaningful, actionable guidance.

---

## 🎯 Problem Statement

> *"Only 20–30% of eligible beneficiaries actually avail government schemes."*

The reasons are clear:
- 🔴 Schemes are scattered across multiple portals and PDFs
- 🔴 Eligibility language is complex and bureaucratic
- 🔴 No single platform offers personalized filtering
- 🔴 Rural and semi-urban users are most affected

**This project aims to solve this by providing a simple, intelligent interface that:**
- ✅ Identifies schemes a user is personally eligible for
- ✅ Explains eligibility in plain language
- ✅ Makes welfare programs accessible to everyone

---

## 💡 Proposed Solution

The application collects basic user information and matches it against eligibility criteria of known schemes using rule-based logic.

```
User fills profile  →  System applies eligibility rules  →  Relevant schemes displayed
     (Age, Income,            (Age range check,                 (Cards with benefits,
    Occupation, State)         Income threshold,               eligibility reason, links)
                               Occupation match)
```

---

## 🧠 Key Features

<table>
<tr>
<td width="50%">

### 👤 User Profiling
Collects basic details to power the eligibility engine:
- Age
- Annual Income
- Occupation *(Student, Farmer, Salaried, etc.)*
- State / Region

</td>
<td width="50%">

### 🔍 Smart Eligibility Matching
Rule-based filtering that checks:
- Age range defined per scheme
- Income below threshold
- Occupation requirements
- Optional conditions handled gracefully

</td>
</tr>
<tr>
<td width="50%">

### 📋 Scheme Card Display
Each scheme is presented as a clean card showing:
- Scheme name & category
- Key benefits
- Eligibility summary
- Link to official portal

</td>
<td width="50%">

### 🧠 Eligibility Explanation
Transparency-first design:
- Shows **"Why you are eligible"** for each result
- Builds user trust and understanding
- Helps users verify their own eligibility

</td>
</tr>
<tr>
<td width="50%">

### 🎯 Category Filtering
Browse schemes by sector:
- 🎓 Education
- 🏥 Health
- 🌾 Agriculture
- 👩 Women & Welfare
- 🏠 Housing

</td>
<td width="50%">

### ❤️ Bookmark Feature *(Optional)*
- Save schemes for later reference
- Persisted in local storage
- Quick access from a dedicated bookmark panel

</td>
</tr>
</table>

### 📊 Eligibility Score *(Optional)*
> Displays a **percentage match** score between the user's profile and each scheme's criteria — helping users prioritize the most relevant schemes.

---

## 🔌 API Integration

| Detail | Info |
|--------|------|
| **Primary Source** | [data.gov.in](https://data.gov.in) — India's Open Government Data platform |
| **Method** | REST API calls using `fetch` / `axios` |
| **Fields Used** | Scheme title, category, ministry, description |
| **Strategy** | Hybrid — API data + manually defined eligibility rules |

### Data Handling Flow
```
data.gov.in API
      ↓
Fetch raw JSON data
      ↓
Clean & normalize fields
      ↓
Merge with custom eligibility rules
      ↓
Store in React state
      ↓
Apply user profile filters
      ↓
Render matched SchemeCards
```

> **Note:** Since open APIs may lack structured eligibility fields (like income limits), these are manually defined and layered on top of the API data — creating a hybrid dataset that is both dynamic and accurate.

---

## 🧱 System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     React Frontend                       │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌───────────────────────┐ │
│  │  Navbar  │  │ UserForm │  │      FilterBar        │ │
│  └──────────┘  └────┬─────┘  └──────────┬────────────┘ │
│                     │                   │               │
│              User Profile           Category/           │
│               submitted             Sort filter         │
│                     │                   │               │
│              ┌──────▼───────────────────▼──────┐        │
│              │     Eligibility Engine (JS)      │        │
│              │  (Rule-based filtering logic)    │        │
│              └──────────────┬───────────────────┘        │
│                             │                            │
│                    ┌────────▼────────┐                   │
│                    │   SchemeList    │                   │
│                    │  ┌───────────┐ │                   │
│                    │  │SchemeCard │ │                   │
│                    │  └───────────┘ │                   │
│                    └────────────────┘                   │
└─────────────────────────────────────────────────────────┘
                             ↑
                    data.gov.in REST API
```

---

## 🖥️ Component Structure

```
App
 ├── Navbar
 ├── UserForm              ← Collects age, income, occupation, state
 ├── FilterBar             ← Category and sort controls
 ├── SchemeList
 │    └── SchemeCard       ← Displays individual scheme info
 ├── BookmarkList          ← (Optional) saved schemes
 └── SchemeDetails         ← (Optional) expanded view of a scheme
```

---

## ⚙️ Core Eligibility Logic

```js
function isEligible(user, scheme) {
  const ageMatch = user.age >= scheme.minAge && user.age <= scheme.maxAge;
  const incomeMatch = user.income <= scheme.maxIncome;
  const occupationMatch = !scheme.occupation || scheme.occupation === user.occupation;

  return ageMatch && incomeMatch && occupationMatch;
}
```

> The system uses **optional conditions** — if a scheme has no occupation requirement, it is automatically considered a match for all users.

---

## 🎨 UI/UX Design Principles

| Principle | Implementation |
|-----------|---------------|
| 🧼 Clean & Minimal | No visual clutter; only relevant info shown |
| 📱 Responsive | Works on mobile, tablet, and desktop |
| 🃏 Card-based Layout | Easy-to-scan scheme cards |
| ♿ Accessible | Simple forms, readable fonts, high contrast |
| 🔍 Clear Hierarchy | Most eligible schemes ranked at the top |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| 🏗️ Structure | HTML5 |
| 🎨 Styling | CSS3 (Vanilla CSS) |
| ⚙️ Logic | JavaScript (ES6+) |
| ⚛️ UI Framework | React.js |
| 🌐 Data Fetching | Fetch API / Axios |
| 📦 API Source | [data.gov.in](https://data.gov.in) |
| 🚀 Deployment | GitHub Pages / Vercel *(planned)* |

---

## 🗂️ Project Structure

```
government-scheme-finder/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── SchemeCard.jsx
│   │   └── FilterBar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Results.jsx
│   │   └── About.jsx
│   ├── services/
│   │   └── api.js            ← All API call functions
│   ├── utils/
│   │   └── eligibility.js    ← Core filtering logic
│   ├── styles/
│   │   └── *.css
│   └── App.jsx
├── .env
├── README.md
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm
- A browser (Chrome recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/government-scheme-finder.git

# Navigate into the project
cd government-scheme-finder

# Install dependencies
npm install

# Start the development server
npm start
```

### Environment Variables

Create a `.env` file in the root:

```env
REACT_APP_API_BASE_URL=https://api.data.gov.in/resource
REACT_APP_API_KEY=your_api_key_here
```

> Get your free API key at [data.gov.in/user/register](https://data.gov.in/user/register)

---

## 📅 Implementation Roadmap

| Phase | Tasks | Status |
|-------|-------|--------|
| **Phase 1** | Project setup, UI layout, UserForm, dummy data | 🔄 In Progress |
| **Phase 2** | Eligibility engine, filtered scheme display | 🔜 Upcoming |
| **Phase 3** | data.gov.in API integration, category filters | 🔜 Upcoming |
| **Phase 4** | Bookmarks, eligibility score, polish & deploy | 🔜 Upcoming |

---

## ⚠️ Challenges & Mitigations

| Challenge | Mitigation Strategy |
|-----------|-------------------|
| Unstructured API data | Clean and normalize in a dedicated service layer |
| Missing eligibility fields in API | Manually define rules and merge with API data |
| Complex government language | Rewrite scheme descriptions in plain English |
| Keeping it simple yet useful | Phased approach — core features first |

---

## 🏆 Expected Outcomes

- ✅ A fully functional, user-friendly web application
- ✅ Demonstrates React.js, API integration, and state management skills
- ✅ Practical solution to a real civic problem
- ✅ A strong addition to a developer portfolio

---

## 📈 Future Enhancements

- 🤖 **AI-based recommendation** using ML models
- 🌏 **Multi-language support** (Hindi, Tamil, Telugu, etc.)
- 🔔 **Real-time scheme updates** via API polling
- 🔗 **Direct application links** to official government portals
- 📱 **PWA support** for offline use

---

## 👨‍💻 Author

**Yashvardhan Mundhra**
B.Tech — 1st Year | Capstone Project 2025–26

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

*"Technology should serve every citizen — not just those who know where to look."*

⭐ Star this repo if you found it useful!

</div>
