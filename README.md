# Government Scheme Finder

A web app that helps Indian citizens find government schemes they are eligible for based on their profile (age, income, occupation, and state).

---

## Problem

Most government schemes go unused because people don't know about them or find it hard to check eligibility. This app makes that process simple.

---

## What it does

- User fills a form with their basic details
- App matches them with eligible schemes using rule-based logic
- Results are shown as cards with scheme name, benefits, and why they qualify
- Users can filter by category and bookmark schemes

---

## Tech Stack

- HTML, CSS, JavaScript
- React.js
- data.gov.in API for scheme data

---

## Features

- User profile form (age, income, occupation, state)
- Eligibility matching logic
- Scheme cards with category, benefits, and eligibility reason
- Category filters (Education, Health, Agriculture, Women & Welfare)
- Bookmark schemes *(optional)*
- Eligibility score *(optional)*

---

## Project Structure

```
src/
├── components/    # Navbar, SchemeCard, FilterBar
├── pages/         # Home, Results, About
├── services/      # API calls
├── utils/         # Eligibility logic
└── styles/        # CSS files
```

---

## How to Run

```bash
git clone https://github.com/<your-username>/government-scheme-finder.git
cd government-scheme-finder
npm install
npm start
```

---

## Roadmap

- [x] Project setup & README
- [ ] UI + form
- [ ] Eligibility logic
- [ ] API integration
- [ ] Filters, bookmarks, deployment

---

## Author

Yashvardhan Mundhra — B.Tech 1st Year | Capstone Project 2025–26
