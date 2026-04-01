# 📚 StudyNotion

A modern, interactive front-end code learning platform built with React and Tailwind CSS. StudyNotion offers comprehensive coding courses with an intuitive user interface, shopping cart functionality, and seamless user authentication.

## ✨ Features

- **Course Catalog**: Browse through a curated collection of coding courses
- **Detailed Course Pages**: In-depth course information with curriculum, highlights, and instructor details
- **Shopping Cart**: Add/remove courses with Redux state management
- **User Authentication**: Login and signup functionality with Google integration
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean, dark theme with smooth animations and transitions
- **Toast Notifications**: Real-time feedback for user actions

## 🛠️ Tech Stack

- **Frontend**: React 19.2.4
- **Styling**: Tailwind CSS 3.4.19
- **State Management**: Redux Toolkit 2.11.2
- **Routing**: React Router DOM 7.13.1
- **Icons**: React Icons 5.5.0
- **Notifications**: React Hot Toast 2.6.0
- **Testing**: Jest, React Testing Library

## ⚡ Quick Start

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn package manager
- Internet connection

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/studynotion.git
   cd studynotion
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏃 Available Scripts

- `npm start` — Runs the app in development mode
- `npm test` — Launches the test runner
- `npm run build` — Builds the app for production
- `npm run eject` — Ejects from Create React App (irreversible)

## 🗂️ Project Structure

```
studynotion/
├── src/
│   ├── Components/          # Reusable UI components
│   │   ├── Googlepassword.jsx
│   │   ├── GoogleSignin.jsx
│   │   └── Navbar.jsx
│   ├── data/                # Static data
│   │   └── CourseData.jsx
│   ├── pages/               # Page-level components
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Contact.jsx
│   │   ├── CourseDetail.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── Redux/               # State management
│   │   ├── cartSlice.jsx
│   │   └── store.jsx
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
└── public/                  # Static assets
```

## ⚙️ How It Works

1. **Routing**: React Router DOM handles navigation between pages
2. **State Management**: Redux Toolkit manages cart and user session state
3. **Authentication**: Google Sign-In integration for seamless login/signup
4. **Data Layer**: Course data served from static JSON-like data files
5. **Styling**: Tailwind CSS utility classes power the responsive dark theme
6. **Notifications**: React Hot Toast displays real-time user feedback

## 📱 Screenshots

### Homepage
Modern landing page with course listings and smooth transitions.

### Course Detail
Detailed view with curriculum breakdown, instructor info, and enroll options.

### Cart
Interactive shopping cart with course management and checkout flow.

## 🎯 Usage

1. **Browse Courses**: Explore available coding courses on the homepage
2. **View Details**: Click on any course card to see detailed information
3. **Add to Cart**: Use the cart button to add courses to your shopping cart
4. **Authentication**: Sign up or log in to access additional features
5. **Dashboard**: Access your dashboard for enrolled courses and progress

## 🔒 Security & Privacy

- Authentication handled via Google OAuth — no passwords stored locally
- No sensitive user data stored on external servers
- Session state is managed client-side only via Redux
- All connections are made directly to Google's OAuth portal

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This is a front-end only educational project. It is not affiliated with any official EdTech platform. Use responsibly and ensure compliance with any third-party service policies.

## 👨‍💻 Developer

Developed with ❤️ for learners everywhere

## 🐛 Known Issues

- Google Sign-In requires a valid OAuth Client ID configured in environment
- Cart state resets on full page refresh (no persistence layer yet)
- Course data is static and not fetched from a live API

## 🚀 Future Enhancements

- [ ] Backend integration with Node.js / Express
- [ ] Real payment gateway (Razorpay / Stripe)
- [ ] Video player for course content
- [ ] Progress tracking per course
- [ ] Certificate generation on completion
- [ ] Dark/Light theme toggle
- [ ] Search and filter functionality

## 📞 Contact

For questions, suggestions, or issues, please open an issue on GitHub.

## 🙏 Acknowledgments

- The open-source community for amazing tools and libraries
- Tailwind CSS team for the utility-first CSS framework
- Redux Toolkit for simplified state management

---

Made with ❤️ for learners everywhere

⭐ Star this repo if you find it helpful!