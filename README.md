# 🚀 K Rajtilak's Portfolio (V4)  

[![Website](https://img.shields.io/badge/Live%20Website-krajtilak.vercel.app-blue?style=flat-square&logo=vercel)](https://krajtilak.vercel.app)  [![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)  [![ShadCN/UI](https://img.shields.io/badge/ShadCN/UI-Stylish-blueviolet?style=flat-square)](https://ui.shadcn.com/)  [![Magic UI](https://img.shields.io/badge/Magic%20UI-Dynamic-purple?style=flat-square)](https://magicui.design/)  [![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)  

🎯 **A high-performance, visually appealing, and feature-rich portfolio website showcasing my skills, projects, and achievements. Built with modern web technologies, optimized for responsiveness, and deployed on Vercel.**  

---

## 🏗️ Tech Stack  
| **Category**     | **Technology Used** |
|-----------------|---------------------|
| **Framework**    | Next.js 14 |
| **UI Framework** | ShadCN/UI, Magic UI |
| **Styling**      | Tailwind CSS, PostCSS |
| **Markdown Handling** | MDX |
| **Package Manager** | PNPM |
| **Deployment**   | Vercel |

---

## 📌 Features  
✅ **Modern UI** – Aesthetic and responsive design powered by **ShadCN/UI & Magic UI**.  
✅ **Optimized Performance** – Built with **Next.js 14** for blazing-fast performance.  
✅ **Dynamic Blog System** – Supports **.mdx** files for seamless content management.  
✅ **Dark Mode** – Integrated with ShadCN's theme toggle.  
✅ **Social Links** – GitHub, LinkedIn, Twitter, and Instagram embedded.  
✅ **Fast & Secure Deployment** – Hosted on **Vercel** with optimized configurations.  
✅ **Custom Animations** – Smooth UI/UX using **Magic UI animations**.  
✅ **Reusable Components** – Well-structured component library for scalability.  

---

## 🏛️ Project Structure  

```mermaid
graph TD;
    A[Root Directory] --> B[content] 
    A --> C[public] 
    A --> D[src] 

    D --> D1[app] 
    D --> D2[components] 
    D --> D3[data] 
    D --> D4[lib] 

    D1 --> D1a[globals.css]
    D1 --> D1b[layout.tsx]
    D1 --> D1c[page.tsx]
    D1 --> D1d[blog/page.tsx]
    D1 --> D1e[blog/slug/page.tsx]

    D2 --> D2a[ContactSection.tsx]
    D2 --> D2b[Sharebutton.tsx]
    D2 --> D2c[Navbar.tsx]
    D2 --> D2d[ThemeProvider.tsx]
    D2 --> D2e[ProjectCard.tsx]
    
    D2 --> D2f[MagicUI]
    D2f --> D2f1[BlurFade.tsx]
    D2f --> D2f2[Dock.tsx]

    D2 --> D2g[UI Components]
    D2g --> D2g1[Avatar.tsx]
    D2g --> D2g2[Badge.tsx]
    D2g --> D2g3[Button.tsx]
    D2g --> D2g4[Card.tsx]

    D3 --> D3a[blog.ts]
    D3 --> D3b[resume.tsx]

    D4 --> D4a[utils.ts]
```

---

## 📂 Directory Overview  

- **`content/`** – Stores `.mdx` blog posts.  
- **`public/`** – Static assets (images, icons, etc.).  
- **`src/app/`** – Main application logic and routing.  
- **`src/components/`** – Modular UI components.  
- **`src/data/`** – Data files for blog and resume.  
- **`src/lib/`** – Utility functions.  
- **`tailwind.config.ts`** – Tailwind CSS configuration.  
- **`next.config.mjs`** – Next.js configuration.  

---

## 📦 Installation & Setup  

1️⃣ **Clone the Repository**  
```bash
git clone https://github.com/rajtilak-2020/K-Rajtilak_s-Portfolio-V4.git
cd K-Rajtilak_s-Portfolio-V4
```

2️⃣ **Install Dependencies**  
```bash
pnpm install
```

3️⃣ **Run the Development Server**  
```bash
npm run dev
```
🔹 Open [localhost:3000](http://localhost:3000) in your browser.

---

## 🖼️ Screenshots  

| **Dark Mode** | **Light Mode** |
|---------------|--------------|
| ![Dark Mode](https://github.com/user-attachments/assets/5ec8fc81-e08b-47bb-a178-4266adafee1e) | ![Light Mode](https://github.com/user-attachments/assets/f0616c28-7d44-4817-a4ec-b097ba15a40e) |

---

## 🔗 Live Preview  

<div align="center">
<img alt="Preview" src="/public/preview.gif" width="90%">
</div>

🔹 [Visit Live Website](https://krajtilak.vercel.app)  

---

## 📜 License  
This project is licensed under the **MIT License** – feel free to use and modify.   

---

# Credits

- Special thanks to [Dillion Verma](https://github.com/dillionverma/portfolio) for his base template!

---

## 📞 Contact  
📩 **Email:** [Click Here](mailto:rajtilak1062020@gmail.com)  
🔗 **GitHub:** [Click Here](https://github.com/rajtilak-2020)  
🔗 **LinkedIn:** [Click Here](www.linkedin.com/in/krajtilak2020)  

---

### 🌟 If you like this project, don't forget to star ⭐ it on GitHub!  

---
