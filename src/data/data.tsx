import { Icons } from "@/components/icons";

export const DATA = {
  more_projects: [

    // Project Card Structure
    // {
    //   title: "#",                                                 //Project Title
    //   href: "#",                                                  //Project URL
    //   dates: "MMMM YYYY - MMMM YYYY",                             //Dates of the project
    //   active: true,
    //   description: "Hello, World!",                               //Description of the project
    //   technologies: ["#", "#","#",],                              //Technologies used
    //   links: [
    //             {
    //               type: "Preview",
    //               href: "#",                                      //Preview URL
    //               icon: <Icons.globe className="size-3" />,
    //             },
    //             {
    //               type: "Source Code",
    //               href: "#",                                     //Source Code URL
    //               icon: <Icons.github className="size-3" />,
    //             },
    //   ],
    //   image: "",                                                 //Image URL
    //   video: "",                                                 //Video URL
    // },


    //Project-1
    {
      title: "News-Portal",
      href: "https://krajtilak-news-portal.vercel.app/",
      dates: "June 2023 - Present",
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
      video: "https://media-hosting.imagekit.io//412365c8b3d8465d/news.mp4?Expires=1833548490&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=okx8i6gVgKFaTg9wKVm~JjoFckpr1AiWTSK3dBOrz6EtRGRX3wf4-I5Lsjut4993QOvgo9SKqODGOn3fwzYoEw39Xzl5S43fkL-eTQDyKQM8v8GeDeVfOHdNgwJtiwBHhqq4j-TtGlzdWdBmN3jNjpr9tAV8bZV~7wW3nZofyzoUNQpcDoEraV1QPItaKHhGqhY5YI6mVt~CSS9ii1kLujvaiB-Vj4LS6xJ5djWvi7Nklr9cr6b8R6T6WO1Om3A~XcPSNPQF6QTtYeKy2TpJLqq4FJpj6UU7Bo3rTzEqVp~FDarwqWWk7--Bwef0XsOYuE~dz-k0eXDPsC6ZrnV~4Q__",
    },

    //Project-2
    {
      title: "#",
      href: "#",
      dates: "MMMM YYYY - MMMM YYYY",
      active: true,
      description: "Hello, World!",
      technologies: ["#", "#","#",],
      links: [
                {
                  type: "Preview",
                  href: "#",
                  icon: <Icons.globe className="size-3" />,
                },
                {
                  type: "Source Code",
                  href: "#",
                  icon: <Icons.github className="size-3" />,
                },
      ],
      image: "",
      video: "",
    },
    
  ],
};