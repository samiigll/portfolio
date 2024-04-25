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
    docker,
    meta,
    ubn_jr,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Figma Designer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Ubn Jr",
      icon: ubn_jr,
      iconBg: "#383E56",
      date: "September 2023 - ",
      points: [
        "I've recently begun an internship after completing training in frontend development. ",
        "During my studies, I focused on several key technologies and languages, including HTML, CSS, JavaScript, React.js, and TypeScript.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "CTO-LAB",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - ",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Taking education in artificial intelligence engineering.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "OctopOS Prime",
      icon: shopify,
      iconBg: "#383E56",
      date: "April 2024 - ",
      points: [
        "I joined a team dedicated to building robots, where I serve as a web developer.",
        "In this role, I have learned and taught many things through teamwork.",
        "It has also given me the opportunity to understand the value of working collaboratively.",
      ],
    },
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
      name: "Tic Toc Toe Game",
      description:
      "This project uses artificial intelligence to create a Tic Tac Toe game, demonstrating AI's capacity to generate essential components like visuals and game mechanics. Developed with React.js, it lets players face off against the computer, with local storage preserving player data for convenience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/samiigll/tic-tac-toe-game",
    },
    {
      name: "Shopping Cart",
      description:
      "I've created a JavaScript-based shopping cart that leverages the Fetch API. This shopping cart allows you to add and remove items with ease. Because it fetches products from an API in real-time, you can be sure the product information is always current.",
      tags: [
        {
          name: "fetchapi",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/samiigll/shopping-cart",
    },
    {
      name: "Trip Guide",
      description:
      "I built this project using HTML, CSS, and JavaScript. To retrieve real-time weather information, I used the weather API from openweathermap.org.",
      tags: [
        {
          name: "api",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/samiigll/weather_forecast",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };