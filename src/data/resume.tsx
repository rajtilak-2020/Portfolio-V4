import { Icons } from "@/components/icons";
import { HomeIcon, ImageIcon, NotebookIcon } from "lucide-react";

export const DATA = {

    //Navbar
    navbar: [
      { href: "/", icon: HomeIcon, label: "Home" },
      { href: "/blog", icon: NotebookIcon, label: "Blog" },
      { href: "/projects", icon: Icons.react, label: "Projects" },
    ],

    contact: {
      
      social: {
  
        GitHub: {
          name: "GitHub",
          url: "https://github.com/rajtilak-2020",
          icon: Icons.github,
          navbar: true,
        },
  
        LinkedIn: {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/krajtilak2020",
          icon: Icons.linkedin,
          navbar: true,
        },
  
        X: {
          name: "X",
          url: "https://x.com/2020rajtilak",
          icon: Icons.X,
          navbar: true,
        },
  
        Instagram: {
          name: "Instagram",
          url: "https://instagram.com/k.raj_tilak2020",
          icon: Icons.Instagram,
          navbar: true,
        },
  
        Email: {
          name: "Mail Me",
          url: "mailto:rajtilak1062020@gmail.com",
          icon: Icons.Email,
          navbar: false,
        },

      },
    },

    //Hero Section Data
    name: "K Rajtilak's Portfolio",
    initials: "KR",
    url: "https://krajtilak.vercel.app",
    location: "Odisha, India",
    locationLink: "https://www.google.com/maps/place/india",
    description: "I’m into building clean, functional, and creative tech whether it’s on the web or something experimental. Always exploring, always creating.🧑‍💻☕📈",
    summary: "I’m a developer from **India** exploring the world of tech, from creative designs to cybersecurity. Always building, always learning. I enjoy crafting smooth, meaningful **digital experiences** that are both functional and fun. Tech excites me because there's always something new to create or improve. Check out my [GitHub](https://github.com/rajtilak-2020) to see what I’ve been working on. Or connect with me on [LinkedIn](https://www.linkedin.com/in/krajtilak2020) for collaborations and updates!",
    avatarUrl: "/me.webp",

    //work section
    work: [
      {
        company: "Alpha EV Technologies",
        href: "https://www.zaubacorp.com/ALPHAEV-TECHNOLOGIES-PRIVATE-LIMITED-U34300OR2019PTC032057",
        badges: [],
        location: "Remote",
        title: "Internship",
        logoUrl: "/alphaev.webp",
        start: "1",
        end: "Month",
        description: "Worked as an Intern, contributing to real-world tech applications in EV and automation. Built and tested IoT-based systems like smart vending machines and surveillance rovers. Gained hands-on exposure to industry-grade hardware, software tools, and project development processes.",
      },
    ],
  
    //education section
    education: [

      {
        institute: "DRIEMS Polytechnic",
        href: "https://www.driemspolytechnic.org/",
        degree: "Diploma In CSE",
        logoUrl: "/driemspoly.webp",
        start: "2022",
        end: "2025",
        description: "Completed a Diploma in Computer Science and Engineering with a CGPA of 8.2. Served as a Student Innovation Ambassador and represented the college at multiple state-level events. Gained hands-on experience in software development, IoT, and robotics through impactful projects and internships.",
      },

      {
        institute: "ST Xavier's High School",
        href: "https://stxaviersbarabati.org/",
        degree: "Matriculation",
        logoUrl: "/stxavier.webp",
        start: "2012",
        end: "2022",
        description: "Completed matriculation with a CGPA of 6.5, emphasizing core subjects like science, mathematics, and English. Actively participated in school-level science exhibitions and computer-based learning. Built foundational academic and technical knowledge for future studies.",
      },

      {
        institute: "Sri Satya Sai School",
        href: "https://sathyasaischoolcuttack.in/",
        degree: "Middle School",
        logoUrl: "/satyasai.webp",
        start: "2009",
        end: "2012",
        description: "Received a strong grounding in secondary education, developing discipline and time management. Focused on subjects like science, mathematics, and social studies. Developed early interest in technology and logical reasoning.",
      },

      {
        institute: "MYCA Public School",
        href: "https://www.facebook.com/p/MYCA-Public-School-100076661226390/",
        degree: "Junior School",
        logoUrl: "/myca.webp",
        start: "2007",
        end: "2009",
        description: "Started my academic journey here with foundational education in reading, writing, and communication. Built early curiosity through engaging classroom activities and learning games. Laid the base for academic and social skills.",
      },

    ],

  //skill section
  skills: [
    "Git" ,
    "React",
    "Next.js",
    "Typescript",
    "TailwindCSS",
    "HTML",
    "CSS",
    "Javascript",
    "Python",
    "Java",
    "C++",
    "AI",
    "Arduino",
  ],

 

  
} as const;