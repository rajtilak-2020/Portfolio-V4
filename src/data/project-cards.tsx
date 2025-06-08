import { Icons } from "@/components/icons";

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

    //Project-1
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

    //Project-2
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

    //Project-3
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

    //Project-4
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
    
  ],
};