import { Icons } from "@/components/icons";

export const metadata = {
  title: "Projects | K Rajtilak",
  description: "Learn more about me.",
  alternates: {
    canonical: "https://krajtilak.vercel.app/projects"
  }
};

export const DATA = {
  more_projects: [

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Project Card Structure                                                                      ////////////////////////////////////////////////////////////////////////////
    // {                                                                                           ////////////////////////////////////////////////////////////////////////////
    //   title: "#",                                                 //Project Title               ////////////////////////////////////////////////////////////////////////////
    //   href: "#",                                                  //Project URL                 ////////////////////////////////////////////////////////////////////////////
    //   dates: "MMMM YYYY - MMMM YYYY",                             //Dates of the project        ////////////////////////////////////////////////////////////////////////////
    //   active: true,                                                                             ////////////////////////////////////////////////////////////////////////////
    //   description: "Hello, World!",                               //Description of the project  ////////////////////////////////////////////////////////////////////////////
    //   technologies: ["#", "#","#",],                              //Technologies used           ////////////////////////////////////////////////////////////////////////////
    //   links: [                                                                                  ////////////////////////////////////////////////////////////////////////////
    //             {                                                                               ////////////////////////////////////////////////////////////////////////////
    //               type: "Preview",                                                              ////////////////////////////////////////////////////////////////////////////
    //               href: "#",                                      //Preview URL                 ////////////////////////////////////////////////////////////////////////////
    //               icon: <Icons.globe className="size-3" />,                                     ////////////////////////////////////////////////////////////////////////////
    //             },                                                                              ////////////////////////////////////////////////////////////////////////////
    //             {                                                                               ////////////////////////////////////////////////////////////////////////////
    //               type: "Source Code",                                                          ////////////////////////////////////////////////////////////////////////////
    //               href: "#",                                     //Source Code URL              ////////////////////////////////////////////////////////////////////////////
    //               icon: <Icons.github className="size-3" />,                                    ////////////////////////////////////////////////////////////////////////////
    //             },                                                                              ////////////////////////////////////////////////////////////////////////////
    //   ],                                                                                        ////////////////////////////////////////////////////////////////////////////
    //   image: "",                                                 //Image URL                    ////////////////////////////////////////////////////////////////////////////
    //   video: "",                                                 //Video URL                    ////////////////////////////////////////////////////////////////////////////
    // },                                                                                          ////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    {
      title: "SRAAS Smart Rural Analytics and Alert System",
      href: "https://github.com/rajtilak-2020/SRAAS.git",
      dates: "Aug 2025 - Present",
      active: true,
      description: "SRAAS (Smart Rural Analytic And Alert System) is an intelligent IoT-based platform designed to provide real-time analytics and automated alerts for rural infrastructure monitoring and management.",
      technologies: ["React","Typescript","Vercel","Node.js","Express.js","REST API","FastAPI","Python","Java","Rasberry Pi","WebSockets","Linux","AI","IoT","OpenWebUI","HTML","CSS","Javascript"],
      links: [
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/sraas.git",
                icon: <Icons.github className="size-3" />,
              },
              {
                type: "Preview",
                href: "https://sraas.vercel.app/",
                icon: <Icons.globe className="size-3" />,
              },
            ],
      image: "/sraas.png",
      video: "",
    },

    {
      title: "ESP32-WiFi-Deception-Station",
      href: "https://github.com/rajtilak-2020/ESP32-WiFi-Deception-Station.git",
      dates: "July 2025",
      active: true,
      description: "ESP32-based fake SSID broadcaster with live web interface. Allows custom SSID injection and dynamic broadcasting over AP mode. Built for educational testing and wireless security awareness.",
      technologies: ["C++","ESP32", "HTML", "CSS", "JavaScript"],
      links: [
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/ESP32-WiFi-Deception-Station.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/beacon.webp",
      video: "",
    },

    {
      title: "ESP32-Wi-Fi-Sniffer-Tool",
      href: "https://github.com/rajtilak-2020/ESP32-wifi-sniffer-tool.git",
      dates: "July 2025",
      active: true,
      description: "A real-time Wi-Fi packet sniffer built using ESP32. Captures MAC addresses, signal strength (RSSI), and packet types in promiscuous mode. Displays live packet data on a web dashboard hosted directly from the ESP32.",
      technologies: ["C++","ESP32", "HTML", "CSS", "JavaScript"],
      links: [
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/ESP32-wifi-sniffer-tool.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/sniffer.webp",
      video: "",
    },

    {
      title: "Portfolio",
      href: "https://krajtilak.vercel.app/",
      dates: "Feb 2025 - Currently Active",
      active: true,
      description: "This is my personal developer portfolio built with Next.js 14, Tailwind CSS, ShadCN/UI, and MDX. It showcases my projects, skills, blogs, and more.",
      technologies: [
                    "Next.js",
                    "React",
                    "JavaScript",
                    "TypeScript",
                    "Tailwind CSS",
                    "HTML",
                    "CSS",
                    "Framer Motion",
                    "ShadCN/UI",
                    "Lucide Icons",
                    "Lighthouse CI",
                    "GitHub Actions",
                    "Vercel",
                    "Markdown",
                    "ESLint",
                    "Prettier"
                  ],
      links: [
              {
                type: "Preview",
                href: "https://krajtilak.vercel.app/",
                icon: <Icons.globe className="size-3" />,
              },
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/K-Rajtilak_s-Portfolio-V4.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/og-image.png",
      video: "",
    },

    {
      title: "Whatsaap MCP Server",
      href: "https://krajtilak-news-portal.vercel.app/",
      dates: "Jul 2025",
      active: true,
      description: "A lightweight backend server built with FastAPI to handle WhatsApp message dispatching via Twilio API. Enables Multi-Channel Protocol (MCP) support for structured and automated message delivery. Ideal for integrating WhatsApp messaging into bots, notification systems, or support tools.",
      technologies: ["Python","FastAPI","Twilio"],
      links: [
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/whatsaap-mcp-server.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/whatsaapmcp.webp",
      video: "",
    },

    {
      title: "Robotic Arm",
      href: "https://github.com/rajtilak-2020/Robotic_Arm.git",
      dates: "[Diploma Final Year Project] Jul 2024 - Jun 2025",
      active: true,
      description: "This project involves designing and developing a robotic arm powered by the ESP32 microcontroller. The arm is programmed for precision control and task automation, incorporating advanced features such as wireless connectivity for real-time command execution. This project demonstrates expertise in robotics, IoT, and microcontroller programming.",
      technologies: ["C++","ESP32","HTML","CSS","Javascript"],
      links: [
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/Robotic_Arm.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/roboticarm.webp",
      video: "",
    },

    {
      title: "SpeedyBites",
      href: "https://rajtilak-2020.github.io/SpeedyBites/",
      dates: "Jun 2024",
      active: true,
      description: "SpeedyBites is a web-based food ordering platform with a responsive interface. Built with HTML, CSS, and JavaScript, it delivers a seamless dining experience.",
      technologies: ["HTML","CSS","Javascript",],
      links: [
              {
                type: "Preview",
                href: "https://rajtilak-2020.github.io/SpeedyBites/",
                icon: <Icons.globe className="size-3" />,
              },
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/SpeedyBites.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/speedybites.webp",
      video: "",
    },

    {
      title: "StegoWeb",
      href: "https://krajtilak-stegoweb.vercel.app/",
      dates: "Jun 2024",
      active: true,
      description: "StegoWeb is a web-based tool to hide secret messages inside images using client-side steganography. It uses the LSB (Least Significant Bit) technique to encode and decode text without uploading files to a server.",
      technologies: ["React","Tailwind CSS","Typescript","Javascript","Html"],
      links: [
              {
                type: "Preview",
                href: "https://krajtilak-stegoweb.vercel.app/",
                icon: <Icons.globe className="size-3" />,
              },
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/StegoWeb.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/stegoweb.webp",
      video: "",
    },
    
    {
      title: "DraftForge",
      href: "https://krajtilak-draftforge.vercel.app/",
      dates: "May 2024",
      active: true,
      description: "A simple and fast online tool to convert Markdown to PDF using only client-side technologies. Features live preview, clean UI, and export functionality with no backend required.",
      technologies: ["React","Tailwind CSS","Typescript","Javascript","Html"],
      links: [
              {
                type: "Preview",
                href: "https://krajtilak-draftforge.vercel.app/",
                icon: <Icons.globe className="size-3" />,
              },
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/DraftForge.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/m2pdf.webp",
      video: "",
    },

    {
      title: "Github Insight Explorer",
      href: "https://krajtilak-github-analyzer.vercel.app/",
      dates: "Apr 2025",
      active: true,
      description: "GitHub Profile Analyzer is a React-based tool that visualizes a developer’s GitHub profile with insightful charts and summaries. It uses the GitHub API to analyze repositories, languages, and contributions.",
      technologies: ["React","Tailwind CSS","Typescript","Javascript"],
      links: [
              {
                type: "Preview",
                href: "https://krajtilak-github-analyzer.vercel.app/",
                icon: <Icons.globe className="size-3" />,
              },
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/github-insight-explorer.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/gitinsight.webp",
      video: "",
    },

    {
      title: "Noted",
      href: "https://krajtilak-noted.vercel.app/",
      dates: "Mar 2025",
      active: true,
      description: "Noted is a minimal, responsive notes app built with React and Tailwind CSS, allowing users to create, edit, and delete notes effortlessly. It runs fully on the client-side—no backend required.",
      technologies: ["React","Tailwind CSS","Typescript","Javascript","React Hooks"],
      links: [
              {
                type: "Preview",
                href: "https://krajtilak-noted.vercel.app/",
                icon: <Icons.globe className="size-3" />,
              },
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/Noted.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/noted.webp",
      video: "",
    },

    {
      title: "Institution-Robot-UI",
      href: "https://rajtilak-2020.github.io/Institution-Robot-UI/",
      dates: "Feb 2024",
      active: true,
      description: "Institution Robot UI is a responsive web interface for controlling and monitoring educational robots. It features real-time status updates, control buttons, and a clean, user-friendly design. Built with HTML, CSS, and JavaScript to ensure cross-device compatibility and smooth performance. Ideal for use in classrooms, labs, or research environments with minimal setup required. The UI can be adapted to various robotic systems and easily extended for future upgrades.",
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

    {
      title: "Weather App",
      href: "https://rajtilak-2020.github.io/Weather-App/",
      dates: "Dec 2024",
      active: true,
      description: "It is a front-end web application built using HTML, CSS, and JavaScript. It fetches real-time weather data from a weather API (such as OpenWeatherMap API) using asynchronous JavaScript (fetch). The app dynamically updates the user interface based on API responses, displaying temperature, weather conditions, and location-specific details.",
      technologies: ["HTML","CSS","Javascript","OWM-Api"],
      links: [
              {
                type: "Preview",
                href: "https://rajtilak-2020.github.io/Weather-App/",
                icon: <Icons.globe className="size-3" />,
              },
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/Weather-App.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/weather.webp",
      video: "",
    },

    {
      title: "Morsecode Converter",
      href: "https://github.com/rajtilak-2020/Morsecode_converter.git",
      dates: "Jan 2025",
      active: true,
      description: "This project converts user-input words into Morse code. Each letter or digit in the input is translated into its corresponding Morse code representation using a predefined dictionary.",
      technologies: ["Python"],
      links: [
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/Morsecode_converter.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/morsecode.webp",
      video: "",
    },

    {
      title: "Currency Converter",
      href: "https://github.com/rajtilak-2020/Currency-Converter.git",
      dates: "Jan 2025",
      active: true,
      description: "A simple and interactive python based command-line tool that helps you convert currencies using real-time exchange rates provided by the Fixer.io API",
      technologies: ["Python"],
      links: [
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/Currency-Converter.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/currencyconverter.webp",
      video: "",
    },

    {
      title: "TXT Analyzer",
      href: "https://github.com/rajtilak-2020/Text-File-Analysis.git",
      dates: "Jan 2025",
      active: true,
      description: "It is a Python script that processes text files to provide statistics such as line count, character count, word count, unique words, and special character count.",
      technologies: ["Python"],
      links: [
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/Text-File-Analysis.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/textanalyzer.webp",
      video: "",
    },

    {
      title: "ISRO Launch Statistics Dashboard",
      href: "https://rajtilak-2020.github.io/ISRO-Launch-Statistics/",
      dates: "Jan 2025",
      active: true,
      description: "A data visualization project showcasing ISRO’s historic launch data using interactive charts. Built with HTML, CSS, JavaScript, and Chart.js to present launch trends and insights clearly. Helps users explore mission types, frequencies, and success rates in an engaging visual format.",
      technologies: ["HTML","CSS","Javascript","ISRO-API"],
      links: [
              {
                type: "Preview",
                href: "https://rajtilak-2020.github.io/ISRO-Launch-Statistics/",
                icon: <Icons.globe className="size-3" />,
              },
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/ISRO-Launch-Statistics.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/isrostatistics.webp",
      video: "",
    },

    {
      title: "News Portal",
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

    {
      title: "Temprature and Humidity Monitoring System",
      href: "https://github.com/rajtilak-2020/IoT_based-Temprature-and-Humidity-Monitoring-System.git",
      dates: "Jan 2025",
      active: true,
      description: "This project showcases a simple and effective IoT solution for real-time temperature and humidity monitoring using an ESP32-S microcontroller and a DHT11 sensor. The data is displayed on a smartphone via the Blynk App, making it perfect for applications such as environmental monitoring, smart homes, and agricultural automation.",
      technologies: ["C++","ESP32","Blynk"],
      links: [
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/IoT_based-Temprature-and-Humidity-Monitoring-System.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/tempraturemonitoring.webp",
      video: "",
    },

    {
      title: "IR Breaking System",
      href: "https://github.com/rajtilak-2020/IR-Breaking-System.git",
      dates: "Jan 2025",
      active: true,
      description: "This project is an Arduino-based automatic braking system. It uses a servo motor, IR sensors, and a relay to detect obstacles or engage the braking mechanism based on user input. The system can be utilized in small robotic vehicles or other applications requiring automatic braking.",
      technologies: ["C++","Arduino"],
      links: [
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/IR-Breaking-System.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/brakingsystem.webp",
      video: "",
    },

    {
      title: "ESP-32-Pishing-Tool",
      href: "https://github.com/rajtilak-2020/ESP-32-Pishing-Tool.git",
      dates: "Jan 2025",
      active: true,
      description: "This project creates a WiFi login portal for the mentioned SSID Network , allowing victims to log in with their email and password to gain access to the fake network. The portal runs on an ESP32 board and utilizes the WiFiMulti, DNSServer, and WebServer libraries to handle network requests and DNS spoofing.",
      technologies: ["C++","ESP32"],
      links: [
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/ESP-32-Pishing-Tool.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/pishing.webp",
      video: "",
    },

    {
      title: "Quantum Coin Flip",
      href: "https://rajtilak-2020.github.io/Quantum-coin-flip/",
      dates: "Jan 2025",
      active: true,
      description: "Interactive Quantum Coin Flip simulator demonstrating quantum principles like superposition and quantum gates. The project uses HTML, CSS, and JavaScript with the Quantum Circuit library for quantum operations. Explore the concept of quantum mechanics through a fun and engaging coin flip animation!",
      technologies: ["HTML","CSS","Javascript",],
      links: [
              {
                type: "Preview",
                href: "https://rajtilak-2020.github.io/Quantum-coin-flip/",
                icon: <Icons.globe className="size-3" />,
              },
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/Quantum-coin-flip.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/quantumcoin.webp",
      video: "",
    },

    {
      title: "Harmonic Dust",
      href: "https://rajtilak-2020.github.io/Audio-Controlled-Particles/",
      dates: "Dec 2024",
      active: true,
      description: "It is an interactive web-based project that generates animated particles based on audio input. Using HTML, CSS, and JavaScript, the particles react to the rhythm and frequency of the sound, creating a dynamic visual experience synchronized with music.",
      technologies: ["HTML","CSS","Javascript",],
      links: [
              {
                type: "Preview",
                href: "https://rajtilak-2020.github.io/Audio-Controlled-Particles/",
                icon: <Icons.globe className="size-3" />,
              },
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/Audio-Controlled-Particles.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/particles.webp",
      video: "",
    },

    {
      title: "SSTV Encoder",
      href: "https://rajtilak-2020.github.io/SSTV-Encoder/",
      dates: "Dec 2024",
      active: true,
      description: "It is a web-based tool that converts images into Slow Scan Television (SSTV) signals using JavaScript. It demonstrates the encoding process of SSTV signals, allowing users to explore how images can be transmitted over radio frequencies.",
      technologies: ["HTML","CSS","Javascript"],
      links: [
              {
                type: "Preview",
                href: "https://rajtilak-2020.github.io/SSTV-Encoder/",
                icon: <Icons.globe className="size-3" />,
              },
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/SSTV-Encoder.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/sstv.webp",
      video: "",
    },

    {
      title: "ASCII Rickroll",
      href: "https://github.com/rajtilak-2020/Rick-Roll.git",
      dates: "Jan 2025",
      active: true,
      description: "This project utilizes a simple batch file (.bat) to fetch an ASCII art of the Rickroll using the curl command, directly from the ascii.live/rick endpoint. This demonstrates the ability to automate terminal commands and leverage external APIs through scripting.",
      technologies: ["Batchfile"],
      links: [
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/Rick-Roll.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/rickroll.webp",
      video: "",
    },

    {
      title: "Web Based Compiler",
      href: "https://html-cse.netlify.app/",
      dates: "Feb 2024",
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

    {
      title: "Joke Generator",
      href: "https://rajtilak-2020.github.io/Joke-Generator/",
      dates: "Feb 2024",
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

    {
      title: "QR Code Generator",
      href: "https://rajtilak-2020.github.io/QR-Code-Generator/",
      dates: "Nov 2024",
      active: true,
      description: "A simple and responsive QR Code Generator built using HTML, CSS, and JavaScript. Users can instantly generate QR codes for any text or URL input. The project works offline and features real-time QR rendering.",
      technologies: ["HTML","CSS","Javascript"],
      links: [
              {
                type: "Preview",
                href: "https://rajtilak-2020.github.io/QR-Code-Generator/",
                icon: <Icons.globe className="size-3" />,
              },
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/QR-Code-Generator.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/qrcode.webp",
      video: "",
    },
  
    {
      title: "Attendance Management System",
      href: "https://rajtilak-2020.github.io/Attendance-Management-System/",
      dates: "Nov 2024",
      active: true,
      description: "An efficient and user-friendly Attendance Management System designed for seamless attendance tracking by admins, teachers, and students. This system offers a role-based login feature, ensuring secure and intuitive access for all users.",
      technologies: ["HTML","CSS","Javascript"],
      links: [
              {
                type: "Preview",
                href: "https://rajtilak-2020.github.io/Attendance-Management-System/",
                icon: <Icons.globe className="size-3" />,
              },
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/Attendance-Management-System.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/attendance.webp",
      video: "",
    },

    {
      title: "3D Renderer",
      href: "https://github.com/rajtilak-2020/3D_Renderer.git",
      dates: "Nov 2024",
      active: true,
      description: "A simple yet powerful 3D rendering program written in Java using Swing. Rotate 3D objects interactively with sliders to control horizontal and vertical angles, and experience dynamic rendering with smooth real-time updates.",
      technologies: ["Java"],
      links: [
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/3D_Renderer.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/object3d.webp",
      video: "",
    },

    {
      title: "Simple Calculator",
      href: "https://github.com/rajtilak-2020/Java_Calculator.git",
      dates: "Nov 2024",
      description: "A simple yet elegant calculator application developed in Java using Swing. This project demonstrates basic calculator functionalities and a clean user interface.",
      technologies: ["Java"],
      links: [
              {
                type: "Source Code",
                href: "https://github.com/rajtilak-2020/Java_Calculator.git",
                icon: <Icons.github className="size-3" />,
              },
            ],
      image: "/calculator.webp",
      video: "",
    },
    
  ],
};