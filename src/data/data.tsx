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
      video: "https://media-hosting.imagekit.io/d9664115bce64899/news.mp4?Expires=1840708345&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=sbwxmUofY5hgt3rUWdsIfOeF~xumy0Zq2Th5~hjo-zRle8y4O9dmXP5W1l03D1l7mwiVG~tyweR9BCT75aT6eigxJWgO~IoA92-ZVDNUsnUfHUK-bjY7CGuElgPrhLq7UrhiGZ8GHhBhf2T2t1xAp2QoBePg77YN7MGfF6xA8y-NsrGd0Q~SqXFi837DGXZ-T3LRT9qzPwYI1PCG9levCItHe62Mj-kdriRCbwFbDOuXy60je7Cu79m~R-tQHBbLerRHqDtCCVdDendl96WnVbk-n4XxhegLDOuHLcgNYTIKrwnuiFvIETMhe4At8mRpZaA3m0XfkFMQIJAhKHL71w__",
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
      video: "https://media-hosting.imagekit.io/aed6f139472547d3/robotui.mp4?Expires=1840708345&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Lr0XPedhB1VALY2-1jTaSfIfZ54XH2eVuy7pelcih2XbxEjwFIg4R5OrDPCqxjEyk6KW6pwzBEixLUNvKnNM~c0S4GZdngBaauYHXuIqO3EseUpJN1RFJ16uAVsNwBLgCqdFaSBaBCLaMyMnxG5FhXOEV-ouesvEQqVxii68IehaQfUeW5OOKHzcCt-MHjPKK--SDrVrYSqV9XAexX6MSHjXo9Q0RSFpFr957181NNSa5rT~T81h~BrOh0w5dNJqqUxzZFyS35VdomfciFyN~DNSlHIye3wjJmQzgUQNn0hd31nJdmxwpeihu3UnTlCAbT0cZxnT8YmRaJCPQNdyhw__",
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
      video: "https://media-hosting.imagekit.io/70189d5fff5e4634/compiler.mp4?Expires=1840708345&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WthC~IwdGf5u84ZvP6GUSYHnf45pDnhe7k5oTqw6Svsdgol4T4RxsFk5sXuSaIZqZ8dHC~hM1IXwdsSiWIL65jtw3O8oQU~RsnjFvJ7j99XsZO3pe-f7B3QmavDARvHxh4y~YZpV6dMugkbyPgzfCMa6Uh4aUqNv6mBXcrl~ajPmF6JYUPN-4HqzwbH2VgWGlZbN~6GGn87D~Wip6-z4wkL0PWMHG36j6pPbe7dkCAS2vbd1w~lPIzFzrUP~GP17HYuFmqbxJG4NBUjutReMzHXMU6duo6kHnNF77tUYzC6sL8GIY8OySGpPXSP-p2kLnGUb1qmKipS4odz0ldju~A__",
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
      video: "https://media-hosting.imagekit.io/2b120391d7c948c8/joke.mp4?Expires=1840708345&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1sRq~WxdXEYBDdpcpkYPBYqSk6Gg0clZjdNL1w8go0lGqzLWwPXDeqJYE3B3KmB8FkuZCAgpaXZg-lIBwQ4Ygy1Hp20SvFHaVWEvEYp2l45yoHy5gszmpBlI2j~DAIJ~Mrj9i8Jr7Y~AJ0OZ~0RY0Ze8n83sWkJxrV66buz-uN3l5cVe~FZ87pGOLKxFMpIrGGBWub~d80QJdWNyJiLXE~AACRzRAHqRCMSbYkpPak0l-0pmFWRmv~2zmIICWyTVKAWXoUGE9F03s52xMZslfNqftXzVydHxEOFevp6U9DJptJXWGafHWHz-NdqoQD-ZrF0UkSy7MppeHgEThzsIsg__",
    },
    
  ],
};