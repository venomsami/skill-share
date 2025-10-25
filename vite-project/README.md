# SkillSwap 🎓🤝

A collaborative platform where users can **share**, **learn**, and **exchange skills** with others. Users can register/login, browse skill listings, view detailed descriptions, and book sessions — all powered by **Firebase Authentication** and built with **React**.

---

## 🚀 Live URL

👉 [Visit SkillSwap Live](https://astounding-marzipan-2bb47c.netlify.app/profile)  
*(Replace with actual deployed URL)*

---

## 🎯 Project Purpose

**SkillSwap** is designed to promote peer-to-peer learning and teaching. Whether it's music, design, programming, or wellness — users can connect with others to offer or gain skills.

---

## 🧩 Key Features

### 🔐 Authentication
- Email/password signup and login via **Firebase Auth**
- Google social login
- Password reset support

### 📄 Pages
- **Home Page** with Swiper slider and intro
- **Browse Skills**: Lists popular skills with image, rating, price
- **Skill Details**: Detailed description, image, booking form
- **Profile Page**:
  - Shows user name, email, photo
  - Real-time **profile update**
- **Protected Routes** for authenticated pages

### 📦 Backend Integration
- Firebase Authentication
- Optional: Firebase Storage (for profile photo uploads)

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Bootstrap 5 (for layout & responsiveness)
- SwiperJS (for carousel on homepage)

### Firebase
- Firebase Auth (Email/Password + Google)
- Firebase SDK v9 (modular)

---

## 📦 NPM Packages Used

| Package                  | Purpose                                 |
|--------------------------|-----------------------------------------|
| `firebase`               | Firebase Authentication                 |
| `react-router-dom`       | Routing in React                        |
| `swiper`                 | Carousel/Slider                         |
| `bootstrap`              | Responsive UI components                |
| `react-icons` (optional) | Icons (for stars, UI visuals, etc.)     |

---

## 🏁 Getting Started Locally

1. **Clone this repo**
   ```bash
   git clone https://github.com/venomsami/skill-share.git
   cd skillswap
