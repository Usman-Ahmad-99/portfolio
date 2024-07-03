import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  // docker,
  meta,
  lps,
  nha,
  angular,
  codepen,
  medvinst,
  mapty,
  forkify,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Angular Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  //   {
  //     title: "Content Creator",
  //     icon: creator,
  //   },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "National Highway Authority of Pakistan",
    icon: nha,
    iconBg: "#383E56",
    date: "June 2022 - Jan 2023",
    points: [
      "Contributed in developing an application related to General ledger using Angular and .NET.",
      "Collaborated with UI/UX designers to translate wireframes and mockups into functional interfaces, maintaining visual consistency.",
      "Utilized RESTful APIs to integrate backend services, enhancing application functionality and performance.",
      "Effectively leveraged Angular Material components to enhance input forms and create visually attractive layouts.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Logic Powered Solutions",
    icon: lps,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "Developed and maintained Angular applications for various clients.",
      "Created Web applications from scratch implementing authorization with JSON Web token and securing routes from unauthorized users using Angular route guards.",
      "Utilized RxJS to implement efficient state management solutions, employing techniques such as BehaviorSubject and observable streams to propagate changes across components.",
      "Optimized applications performances by lazy loading modules, preventing memory leaks and minimizing HTTP requests.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Medvinst",
    description:
      "Web-based platform that compares product prices accross multiple pharmacies.",
    // "Web-based platform that functions as an online code editor for HTML/CSS & JavaScript.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: medvinst,
    source_code_link: "https://www.medvinst.se/#/medvinst",
  },
  {
    name: "Code-pen Clone",
    // description:
    //   "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    description:
      "Web-based platform that functions as an online code editor for HTML/CSS & JavaScript.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: codepen,
    source_code_link: "https://github.com/Usman-Ahmad-99/code-pen-clone",
  },
  {
    name: "Mapty",
    description:
      "Web application that enables users to log their workouts on the map.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "leaflet",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: mapty,
    source_code_link: "https://github.com/Usman-Ahmad-99/Mapty",
  },
  // {
  //   name: "Forkify",
  //   description:
  //     "Forkify is a recipe finding web application, with custom recipe uploads.",
  //   tags: [
  //     {
  //       name: "html",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: forkify,
  //   source_code_link: "https://github.com/Usman-Ahmad-99/forkify-app",
  // },
];

export { services, technologies, experiences, testimonials, projects };
