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
      video: "https://media-hosting.imagekit.io/d9664115bce64899/news.mp4?Expires=1840708345&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=sbwxmUofY5hgt3rUWdsIfOeF~xumy0Zq2Th5~hjo-zRle8y4O9dmXP5W1l03D1l7mwiVG~tyweR9BCT75aT6eigxJWgO~IoA92-ZVDNUsnUfHUK-bjY7CGuElgPrhLq7UrhiGZ8GHhBhf2T2t1xAp2QoBePg77YN7MGfF6xA8y-NsrGd0Q~SqXFi837DGXZ-T3LRT9qzPwYI1PCG9levCItHe62Mj-kdriRCbwFbDOuXy60je7Cu79m~R-tQHBbLerRHqDtCCVdDendl96WnVbk-n4XxhegLDOuHLcgNYTIKrwnuiFvIETMhe4At8mRpZaA3m0XfkFMQIJAhKHL71w__",
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

    //Project-3
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