import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {

    //navbar
    navbar: [
      { href: "/", icon: HomeIcon, label: "Home" },
      { href: "/blog", icon: NotebookIcon, label: "Blog" },
    ],

    contact: {
      // email: "rajtilak1062020@gmail.com",
      // tel: "+91 7008818173",
  
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
          navbar: true,
        },

        contact: {
          name: "Contact Me",
          url: "https://x.com/2020rajtilak",
          navbar: true,
          icon: Icons.X,
        },

      },
    },

    //Hero Section Data
    name: "K Rajtilak's Portfolio",
    initials: "KR",
    url: "https://krajtilak.vercel.app",
    location: "Odisha, India",
    locationLink: "https://www.google.com/maps/place/india",
    description: "A passionate Computer Science Engineering student, I strive to bridge the gap between innovative ideas and transformative technologies. I focus on crafting solutions that redefine possibilities.",
    summary: "To leverage my skills in IoT, robotics, and programming to contribute effectively to innovative projects, while continuously enhancing my technical expertise and problem-solving abilities in a dynamic work environment.",
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
        start: "May 2024",
        end: "Jun 2024",
        description: "Made a Power and Cost Calculation system for EV Charging Station, Assembled and Tested an IoT based Vending Machine, Assembled and Tested and IoT Based Survellance Rover, Acquired Industry level knowledge on IoT and Robotics.",
      },
    ],
  
    //education section
    education: [
      {
        school: "DRIEMS Polytechnic",
        href: "https://www.driemspolytechnic.org/",
        degree: "Diploma In CSE [8.21 CGPA]",
        logoUrl: "/driems.png",
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
    "Git",
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
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },

    //2nd project
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github1 className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },

    //3rd project
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github1.com/dillionverma/llm.report",
          icon: <Icons.github1 className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },

    //4th project
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],

} as const;
