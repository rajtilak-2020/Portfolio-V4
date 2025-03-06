import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {

    //navbar
    navbar: [
      { href: "/", icon: HomeIcon, label: "Home" },
      { href: "/blog", icon: NotebookIcon, label: "Blog" },
     // { href: "/projects", icon: Icons.react, label: "Projects" },
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

        Resume: {
          name: "View My Resume",
          url: "https://drive.google.com/file/d/1S5rTR2MIT-CCaEkv8pt9ROsAHOYshzJ_/view?usp=drive_link",
          icon: Icons.Resume,
          navbar: true,
        },

      },
    },

    //Hero Section Data
    name: "K Rajtilak's Portfolio",
    initials: "KR",
    url: "https://krajtilak.vercel.app",
    location: "Odisha, India",
    locationLink: "https://www.google.com/maps/place/india",
    description: "I am a 19yo student with expertise in Web Development, Robotics, IoT, and AI, specializing in full-stack development and cutting-edge technology integration. My projects range from IoT systems to responsive webpages, delivering innovative, efficient, and scalable results.",
    summary: "I'm a passionate developer, freelancer, and designer currently studying Computer Science Engineering. With a strong interest in Robotics, IoT, Web Development , and Artificial Intelligence, I enjoy blending technology with creativity to build innovative solutions. I’m always curious about new technologies and constantly honing my skills to stay on top of industry trends. Whether it’s designing a sleek UI, crafting a functional backend, or experimenting with robotics, I enjoy bringing ideas to life through code. In addition to my academic work, I’ve had hands-on experience through an internship at Alpha EV, where I worked on IoT and Robotics projects, including developing a power and cost calculation system for an EV charging station and assembling an IoT-based vending machine. If you’re looking for a dedicated and versatile developer who thrives in both the technical and creative aspects of projects, feel free to get in touch. Let’s build something amazing together!",
    avatarUrl: "/me.png",

    //work section
    work: [
      {
        company: "Alpha EV Technologies PVT. LTD.",
        href: "https://www.zaubacorp.com/ALPHAEV-TECHNOLOGIES-PRIVATE-LIMITED-U34300OR2019PTC032057",
        badges: [],
        location: "Remote",
        title: "IoT And Robotics Intern",
        logoUrl: "/alphaev.png",
        start: "1",
        end: "Month",
        description: "Made a Power and Cost Calculation system for EV Charging Station, Assembled and Tested an IoT based Vending Machine, Assembled and Tested and IoT Based Survellance Rover, Acquired Industry level knowledge on IoT and Robotics.",
      },
    ],
  
    //education section
    education: [

      {
        school: "DRIEMS Polytechnic",
        href: "https://www.driemspolytechnic.org/",
        degree: "Diploma In CSE [8.21 SGPA]",
        logoUrl: "/driemspoly.png",
        start: "2022",
        end: "2025",
      },

      {
        school: "ST Xavier's High School",
        href: "https://stxaviersbarabati.org/",
        degree: "Matriculation [6.5 CGPA]",
        logoUrl: "/stxavier.png",
        start: "2012",
        end: "2022",
      },

      {
        school: "Sri Satya Sai School",
        href: "https://sathyasaischoolcuttack.in/",
        degree: "Secondary Schooling",
        logoUrl: "/satyasai.png",
        start: "2009",
        end: "2012",
      },

      {
        school: "MYCA Public School",
        href: "https://www.facebook.com/p/MYCA-Public-School-100076661226390/",
        degree: "Junior Schooling",
        logoUrl: "/myca.png",
        start: "2007",
        end: "2009",
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
    "Raspberry Pi",
  ],

  //projects section
  projects: [

    //1st project
    {
      title: "Institution-Robot-UI",
      href: "https://rajtilak-2020.github.io/Institution-Robot-UI/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description: "This project is focused on creating an interactive UI for a robot designed to operate on a college campus. The robot will be able to interact with four distinct user types: Admin, Faculty, Students, and Visitors.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
      ],
      links: [
        {
          type: "Preview",
          href: "https://rajtilak-2020.github.io/Institution-Robot-UI/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://github.com/rajtilak-2020/Institution-Robot-UI.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://media-hosting.imagekit.io//70c2f7af75ef4087/robotui.mp4?Expires=1833548490&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=QgcL1XQOXs6t01f3~4Pcwb8fDOYMbQXnP5Poxa~dRkMrrUu2I5RyqBorNZFp8C1qyxqwlu7IDkUG1~QXkFiilrs6mCfp0PL7rfLlQ-nLmPp-NEiYCkd3PhnaC1fVK0OEbXPQYPwHxjlsd7klxDsT8bkjkIO7ihQ0r8T80y2DaSlB9srWwXhVCUq4PFKK8FHoBpaxguSHtK7lE7GEgLaIrwhq9jVy8f8D2g3W6LY5cJCfrq~P6g7f0slpIUW9TppmAh8zHuyybazTflXNbfV~nEMGswy4fw0nGpOJxBJKm5f6bKNPj1LpmaicEd1jBT4HNrgWpzjplaAiLqKsoPgNGg__",
    },

    //2nd project
    {
      title: "News-Portal",
      href: "https://krajtilak-news-portal.vercel.app/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "A responsive news portal built with modern web technologies, providing users with the latest updates in a clean and intuitive interface.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
      ],
      links: [
        {
          type: "Preview",
          href: "https://krajtilak-news-portal.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://github.com/rajtilak-2020/News-Portal.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://media-hosting.imagekit.io//412365c8b3d8465d/news.mp4?Expires=1833548490&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=okx8i6gVgKFaTg9wKVm~JjoFckpr1AiWTSK3dBOrz6EtRGRX3wf4-I5Lsjut4993QOvgo9SKqODGOn3fwzYoEw39Xzl5S43fkL-eTQDyKQM8v8GeDeVfOHdNgwJtiwBHhqq4j-TtGlzdWdBmN3jNjpr9tAV8bZV~7wW3nZofyzoUNQpcDoEraV1QPItaKHhGqhY5YI6mVt~CSS9ii1kLujvaiB-Vj4LS6xJ5djWvi7Nklr9cr6b8R6T6WO1Om3A~XcPSNPQF6QTtYeKy2TpJLqq4FJpj6UU7Bo3rTzEqVp~FDarwqWWk7--Bwef0XsOYuE~dz-k0eXDPsC6ZrnV~4Q__",
    },

    //3rd project
    {
      title: "Joke-Generator",
      href: "https://rajtilak-2020.github.io/Joke-Generator/",
      dates: "April 2023 - September 2023",
      active: true,
      description: "A Dynamic Joke Generator with a sleek and interactive user interface, designed to entertain and impress. It uses JavaScript to fetch random jokes from an API.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
      ],
      links: [
        {
          type: "Preview",
          href: "https://rajtilak-2020.github.io/Joke-Generator/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://github.com/rajtilak-2020/Joke-Generator.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://media-hosting.imagekit.io//956cfd9f72b144f1/joke.mp4?Expires=1833548490&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=loeOzFMkPYyFsVdr0VmlYqMrbwNW~ol2CIpAhcAtqjq2BPd98QCFp5~haXgGZWaeV0RRUxUukG55wh7YTSzwXpqMOCaktauYZdOfZ0t5D7wBLRw6-HWkjW0TJydiuj7CXCQ5bSsVDhMUGcqsgbv1j20Ngvd7bHHBJJVmyA-Z-Vs~3lDzq9Ew2dnTUNP38-iCvqGRuXlqJCcCYTRmUYxV7FxVWCVzRXURKOypotRe4RVjnh932X6xibegeZvv9q~DZ7axdMC7C6dzyF0xzHXypvDGsNVGrfOEEzKJQhc~R7Q5zxeUFTTEVq1xEFayhunVR77YjTT70Qu3OiXmoc0vVQ__",
    },

    //4th project
    {
      title: "Web Compiler",
      href: "https://html-cse.netlify.app/",
      dates: "April 2023 - March 2024",
      active: true,
      description: "A web-based compiler designed for writing and executing HTML, CSS, and JavaScript code directly in the browser.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
      ],
      links: [
        {
          type: "Preview",
          href: "https://html-cse.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://github.com/rajtilak-2020/HTML-CSS-JS-compiler.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://media-hosting.imagekit.io//a1cf134d99ef4a7e/compiler.mp4?Expires=1833548490&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=o-mVBnuIa9CLfOhggp0sVYW6osvUPt~rNXavqQxpYAquSiklOIvh1r2nfSBC4RNapQvcy1iAwtkdC7-1xm2uZ7fXEF1xm7SE6Cyz~SopjwkCGzBIKAnzxE9Z7YfmIAZwSqNMheQb5xNTv4fNMTqtMnWkfrQZpTQbc5muLkTZbwXtTyVEVOW236EpDYRQYbzr3YcIFIve7kXr40S3QyT60jA3BbIG8QOmsjH4tXozG8p70EJYi~D0~87EBwfX2pVcRbOoqLxIAWm2xke1B-6Q8D8hs-nZ8QT-safen8IQq21r~Hl7od8PsbI6Y5e21A~l9W2yd8ed82VRxnxlmR1W3Q__",
    },
  ],

} as const;
