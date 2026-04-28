# 🧾 Government Scheme Finder (Smart Eligibility Engine)

## 📌 Project Overview

Government Scheme Finder is a web-based application that helps users discover government schemes they are eligible for based on their personal profile. The system simplifies access to public welfare programs by filtering relevant schemes and explaining eligibility in a user-friendly manner.

This project focuses on bridging the gap between citizens and government initiatives by transforming complex and scattered data into meaningful insights.

---

## 🎯 Problem Statement

Many government schemes remain underutilized because people are unaware of their existence or do not understand whether they qualify for them. Existing platforms are often complex, unstructured, and difficult to navigate.

This project aims to solve this problem by providing a simple, intelligent interface that:

* Identifies relevant schemes for a user
* Explains eligibility clearly
* Improves accessibility to welfare programs

---

## 💡 Proposed Solution

The application collects basic user information such as age, income, occupation, and location, and matches it against predefined eligibility criteria of various schemes.

It then:

* Filters eligible schemes
* Displays them in a clean UI
* Provides explanations for eligibility
* Allows filtering and bookmarking

---

## 🧠 Key Features

### 👤 User Profiling

* Input fields:

  * Age
  * Income
  * Occupation (Student, Farmer, etc.)
  * State

### 🔍 Smart Eligibility Matching

* Filters schemes based on:

  * Age range
  * Income limits
  * Occupation
* Uses rule-based logic for matching

### 📋 Scheme Display

* Clean card-based UI
* Each card includes:

  * Scheme name
  * Category
  * Benefits
  * Eligibility summary

### 🧠 Eligibility Explanation

* Displays:

  * "Why you are eligible"
* Improves transparency and trust

### 🎯 Category Filtering

* Education
* Health
* Agriculture
* Women & Welfare

### ❤️ Bookmark Feature (Optional)

* Save schemes for later reference

### 📊 Eligibility Score (Optional)

* Displays percentage match with scheme criteria

---

## 🔌 API Integration

### Primary Source:

* data.gov.in (India Open Government Data)

### API Usage:

* Fetch scheme-related data
* Extract useful fields such as title and category
* Transform raw data into structured format

### Data Handling Strategy:

* API data is cleaned and simplified
* Missing fields (like income limits) are manually defined
* Hybrid approach (API + custom logic)

---

## 🧱 System Architecture

### Frontend:

* React.js
* HTML, CSS, JavaScript

### Data Flow:

1. Fetch API data
2. Clean and structure data
3. Store in state
4. Apply eligibility logic
5. Render UI

---

## ⚙️ Core Logic

Eligibility is determined using rule-based filtering:

* Age must fall within defined range
* Income must be below threshold
* Occupation must match (if required)

The system ensures flexibility by allowing optional conditions.

---

## 🖥️ Component Structure

* App

  * Navbar
  * UserForm
  * FilterBar
  * SchemeList

    * SchemeCard
  * BookmarkList (optional)
  * SchemeDetails (optional)

---

## 🎨 UI/UX Design Principles

* Clean and minimal interface
* Card-based layout for readability
* Responsive design
* Simple forms for accessibility
* Clear visual hierarchy

---

## 🚀 Implementation Plan

### Phase 1:

* Build UI and form
* Create dummy dataset

### Phase 2:

* Implement eligibility logic
* Display filtered schemes

### Phase 3:

* Integrate API
* Add enhancements (bookmark, filters)

---

## ⚠️ Challenges

* Unstructured API data
* Defining eligibility rules manually
* Maintaining simplicity while ensuring usefulness

---

## 🏆 Expected Outcome

* A functional and user-friendly application
* Demonstration of frontend development skills
* Practical solution to a real-world problem
* Strong portfolio project

---

## 📈 Future Enhancements

* AI-based recommendation system
* Multi-language support
* Real-time updates from APIs
* Integration with application portals

---

## 🧠 Conclusion

Government Scheme Finder is designed as a practical solution to improve awareness and accessibility of public welfare programs. By combining structured logic with clean UI, the application transforms complex data into meaningful guidance for users.

---
