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
    description: "I am a 19yo student with expertise in Web Development, Robotics, IoT, and AI, specializing in full-stack development and cutting-edge technology integration. My projects range from IoT systems to responsive webpages, delivering innovative, efficient, and scalable results.",
    summary: "I'm a passionate developer, freelancer, and designer currently studying Computer Science Engineering. With a strong interest in Robotics, IoT, Web Development , and Artificial Intelligence, I enjoy blending technology with creativity to build innovative solutions. I'm always curious about new technologies and constantly honing my skills to stay on top of industry trends. Whether it's designing a sleek UI, crafting a functional backend, or experimenting with robotics, I enjoy bringing ideas to life through code. In addition to my academic work, I've had hands-on experience through an internship at Alpha EV, where I worked on IoT and Robotics projects, including developing a power and cost calculation system for an EV charging station and assembling an IoT-based vending machine. If you're looking for a dedicated and versatile developer who thrives in both the technical and creative aspects of projects, feel free to get in touch. Let's build something amazing together!",
    avatarUrl: "/me.webp",

    //work section
    work: [
      {
        company: "Alpha EV Technologies PVT. LTD.",
        href: "https://www.zaubacorp.com/ALPHAEV-TECHNOLOGIES-PRIVATE-LIMITED-U34300OR2019PTC032057",
        badges: [],
        location: "Remote",
        title: "IoT And Robotics Intern",
        logoUrl: "/alphaev.webp",
        start: "1",
        end: "Month",
        description: "Made a Power and Cost Calculation system for EV Charging Station, Assembled and Tested an IoT based Vending Machine, Assembled and Tested and IoT Based Survellance Rover, Acquired Industry level knowledge on IoT and Robotics.",
      },
    ],
  
    //education section
    education: [

      {
        institute: "DRIEMS Polytechnic",
        href: "https://www.driemspolytechnic.org/",
        degree: "Diploma In CSE [8.2 CGPA]",
        logoUrl: "/driemspoly.webp",
        start: "2022",
        end: "2025",
      },

      {
        institute: "ST Xavier's High School",
        href: "https://stxaviersbarabati.org/",
        degree: "Matriculation [6.5 CGPA]",
        logoUrl: "/stxavier.webp",
        start: "2012",
        end: "2022",
      },

      {
        institute: "Sri Satya Sai School",
        href: "https://sathyasaischoolcuttack.in/",
        degree: "Secondary Schooling",
        logoUrl: "/satyasai.webp",
        start: "2009",
        end: "2012",
      },

      {
        institute: "MYCA Public School",
        href: "https://www.facebook.com/p/MYCA-Public-School-100076661226390/",
        degree: "Junior Schooling",
        logoUrl: "/myca.webp",
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
          technologies: ["HTML", "CSS","Javascript"],
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
          video: "/robotui.mp4",
        },

    //2nd project
        {
          title: "News-Portal",
          href: "https://krajtilak-news-portal.vercel.app/",
          dates: "Jan 2025",
          active: true,
          description: "A responsive news portal built with modern web technologies, providing users with the latest updates in a clean and intuitive interface.",
          technologies: ["HTML","CSS","Javascript",],
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
          video: "/news.mp4",
        },

    //3rd project
    {
      title: "Joke-Generator",
      href: "https://rajtilak-2020.github.io/Joke-Generator/",
      dates: "Feb 2024 - Mar 2024",
      active: true,
      description: "A Dynamic Joke Generator with a sleek and interactive user interface, designed to entertain and impress. It uses JavaScript to fetch random jokes from an API.",
      technologies: ["HTML", "CSS","Javascript"],
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
      video: "/joke.mp4",
    },

    //4th project
    {
      title: "Web Compiler",
      href: "https://html-cse.netlify.app/",
      dates: "Feb 2024 - Mar 2024",
      active: true,
      description: "A web-based compiler designed for writing and executing HTML, CSS, and JavaScript code directly in the browser.",
      technologies: ["HTML", "CSS","Javascript"],
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
      video: "/compiler.mp4",
    },

  ],
  
} as const;