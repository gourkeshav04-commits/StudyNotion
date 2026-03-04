<h1 align="center">        
  💲 StudyNotion by Apex
</h1>

<p align="center">
  A modern e-learning platform frontend inspired by StudyNotion, built with React and Tailwind CSS.  
  This project provides a clean UI for browsing courses, authentication pages, and an interactive learning dashboard.
</p>

---

# 🌟 Features

* **Modern UI Design** – Clean and responsive interface built using Tailwind CSS
* **Course Marketplace** – Browse multiple professional courses with details and pricing
* **Interactive Course Cards** – Expand descriptions with *Read More / Show Less*
* **Course Management** – Remove courses dynamically and refresh course list
* **Authentication Pages** – Login and Signup pages included
* **Google Sign-In Flow** – Custom Google email and password authentication pages
* **Dashboard Page** – Dedicated dashboard route for logged-in users
* **Responsive Layout** – Works across desktop, tablet, and mobile devices
* **Dynamic Routing** – Implemented using React Router

---

# 🎨 UI Highlights

* Beautiful **course cards with hover animations**
* **Dynamic course grid layout**
* Smooth UI transitions
* Dark themed modern interface
* Professional landing page structure

---

# 🚀 Quick Start

## Prerequisites

Make sure you have installed:

* Node.js (v16 or higher)
* npm or yarn

---

## Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/studynotion-apex.git
cd studynotion-apex
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm start
```

### 4️⃣ Open in browser

```
http://localhost:3000
```

---

# 📖 Usage

1. Visit the **Home Page** to explore available courses
2. Click **Read More** to see full course descriptions
3. Remove courses using the **Remove Course** button
4. Use **Login / Signup** to simulate authentication
5. Navigate through **Dashboard, About, Contact** pages

---

# 🛠️ Tech Stack

**Frontend**

* React.js
* React Router DOM
* Tailwind CSS
* JavaScript (ES6)

**UI & Styling**

* Tailwind CSS
* Responsive Grid Layout
* Custom animations

---

# 📂 Project Structure

```
StudyNotion-Apex/
│
├── src/
│   ├── Components/
│   │   ├── Navbar.js
│   │   ├── GoogleSignin.js
│   │   └── GooglePassword.js
│   │
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Dashboard.js
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   ├── About.js
│   │   └── Contact.js
│   │
│   ├── App.js
│   └── index.js
│
├── public/
└── package.json
```

---

# 🎯 Key Functionalities

### Dynamic Course Rendering

Courses are rendered using React's `map()` function and managed through state.

### State Management

React `useState` is used to manage course data and authentication state.

### Navigation

Routing is implemented using **React Router DOM**.

### Page Refresh Handling

A `useEffect` hook detects refresh and redirects users to the Home page.

---

# 📊 Example Features in Code

* Course cards with pricing and tags
* Expandable course descriptions
* Remove course functionality
* Refresh courses feature
* Protected dashboard route structure

---

# 🔮 Future Enhancements

* [ ] Backend integration
* [ ] Real authentication with JWT
* [ ] Payment gateway integration
* [ ] Course video player
* [ ] Student progress tracking
* [ ] Instructor dashboard
* [ ] Course reviews and ratings
* [ ] Search and filter courses

---

# 👨‍💻 Developer

**Keshav Gour (Apex)**
Frontend Developer

Built with ❤️ using React and Tailwind CSS.

---

# ⭐ Support

If you found this project helpful, please consider **starring the repository**.

```
⭐ Star the repo to support the project!
```
