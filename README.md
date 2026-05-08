# 🏛️ Government Scheme Finder

A modern web application designed to help Indian citizens discover government schemes they are eligible for based on their personal profile (age, income, occupation, and state).

---

## 🚀 Features

- **Personalized Discovery:** A smart eligibility form that matches users with schemes.
- **Real-time Filtering:** Instantly filter schemes by categories like Education, Health, Agriculture, and Women Welfare.
- **Scheme Dashboard:** Clean, interactive cards displaying benefits, eligibility criteria, and direct application links.
- **Custom API:** Powered by a curated database of 30+ real Indian government schemes hosted via My JSON Server.

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite)
- **Styling:** Tailwind CSS v4
- **API:** My JSON Server (Custom REST API)
- **Data Source:** Curated database of real Indian government schemes.

---

## 📂 Project Structure

```text
src/
├── assets/              # Icons and images
├── components/          # Reusable UI components
│   ├── ProfileForm.jsx  # Eligibility input form
│   ├── SchemeCard.jsx   # Individual scheme display
│   └── FilterBar.jsx    # Category filters
├── data/
│   └── db.json          # Local scheme database
├── App.jsx              # Main application logic
├── main.jsx             # Entry point
└── index.css            # Tailwind styles
```

---

## ⚙️ How to Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Marwadi-me/government-scheme-finder.git
   cd government-scheme-finder
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

---

## 📡 API Endpoint

The project uses a live API for scheme data:
[https://my-json-server.typicode.com/Marwadi-me/government-scheme-finder/schemes](https://my-json-server.typicode.com/Marwadi-me/government-scheme-finder/schemes)
