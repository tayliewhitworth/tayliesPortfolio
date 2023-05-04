import img4 from "./assets/4.png";
import smallLvl from "./assets/smallLvl.png";
import bookKeeper from "./assets/bookKeeper-main.png";
import studyProMain from "./assets/studypro-frontpage.jpeg";
import flashcards from "./assets/flashcards-all.png";

import img7 from "./assets/7.png";
import largeLvl from "./assets/largeLvl.png";

export const projectData = [
  {
    id: 1,
    name: "Book Keeper",
    color: "var(--purple-3)",
    description:
      "This was a fullstack app I made where users can connect and post about the books they have read. I used Next.js, Tailwind, TypeScript, Prisma and PostgreSQL to create this app. I also added A.I. to generate book recommendations.",
    tags: ["Next.js", "Tailwind", "TypeScript", "Prisma", "PostgreSQL"],
    howBuilt:
      "I built this app using the t3 stack which consists of Tailwind css, TypeScript and TRPC. I used Next.js for the frontend and Prisma and PostgreSQL for the backend. I also added a few A.I. features to generate book recommendations and a book search feature.",
    challenges:
      "This project was my first time working with the t3 stack so I was learning while building. I also had to learn how to use Prisma and PostgreSQL. When I was adding the A.I. features, I had to learn how to use the Google Books API and how to use the data from the API.",
    improvements:
      "I would like to add a feature where users can review books posts and add friends to their book club.",
    img: bookKeeper,
    bigImg: bookKeeper,
    link: "https://bookkeeper-eight.vercel.app/",
    githubLink: "https://github.com/tayliewhitworth/bookkeeper",
  },
  {
    id: 2,
    name: "StudyPro",
    color: "var(--pink-3)",
    description:
      "This is a flashcards app where a user can create flashcards to help study. I used the MERN stack to build this app. I integrated A.I. to generate flashcards from a topic entered by the user. I also added a spaced repetition algorithm to help the user review.",
    tags: ["React", "Node.js", "OpenAI", "Redux", "MongoDB"],
    howBuilt:
      "I built this app using the MERN stack. I used React for the frontend and Node.js for the backend. I used Redux for state management and React Router for routing. I used MongoDB for the database. I also integrated OpenAI to generate flashcards from a topic entered by the user. I used a spaced repetition algorithm to help the user review.",
    challenges:
      "The main challenge I had with building this app was making sure I had good security and was using the best practices. I also had to learn how to use OpenAI and how to use the data from the API.",
    improvements:
      "I would like to add Clerk Auth for authentification and add a feature where users can add friends and share flashcards.",
    img: studyProMain,
    bigImg: flashcards,
    link: "https://studypro.onrender.com/",
    githubLink: "https://github.com/tayliewhitworth/studypro",
  },
  {
    id: 3,
    name: "Level Solar",
    color: "var(--green-3)",
    description:
      "This is a website I made for a solar company. I used bootstrap, HTML, CSS and JavaScript to create this website. This was one of my first freelance jobs.",
    tags: ["Bootstrap", "JavaScript", "UI/UX design", "Responsiveness"],
    howBuilt:
      "I built this website using Bootstrap, HTML, CSS, and JavaScript. Most of the functionality comes from Bootstrap.",
    challenges:
      "Since this website was built with Boostrap, I didn't have control over the JavaScript. This caused a weird issue with the mobile menu.",
    improvements:
      "I would get rid of bootstrap and create my own styling and functionality. I know so much more know from when I made this and have learned so much. I would add a better contact form and more responsiveness.",
    img: smallLvl,
    bigImg: largeLvl,
    link: "https://lvlsolar.com/",
    githubLink: "https://github.com/tayliewhitworth/level-energy.github.io",
  },
  {
    id: 4,
    name: "Crypto Tracking App",
    color: "var(--indigo-3)",
    description:
      "I created this crypto tracking app use the crypto API to track that crypto market. This app was made using React Native and Expo to deploy the app.",
    tags: ["React", "ReactNative", "Expo", "API"],
    howBuilt:
      "I build this app using ReactNative, Expo and the Crypto API. This was my first app I made with ReactNative. It was similar to React but different syntax. I used the Crypto API to get the updated amount for each coin.",
    challenges:
      "Since this was my first time using ReactNative, I had a lot of challenges. I had to figure out how ReactNative components worked like FlatList and View.",
    improvements:
      "I would make a section where a user can add the coin they want to keep track off or delete the coins the don't want.",
    img: img4,
    bigImg: img7,
    githubLink: "https://github.com/tayliewhitworth/cryptoAPI",
  },
];

export const courseCertificates = [
  {
    id: 1,
    name: "Building Interactive JavaScript Websites",
    source: "CodeCademy",
  },
  {
    id: 2,
    name: "Learn Python 3",
    source: "CodeCademy",
  },
  {
    id: 3,
    name: "Learn React Native",
    source: "CodeCademy",
  },
  {
    id: 4,
    name: "Learn JavaScript",
    source: "CodeCademy",
  },
  {
    id: 5,
    name: "Learn SQL",
    source: "CodeCademy",
  },
  {
    id: 6,
    name: "Front-end Volunteer",
    source: "Tribaliii",
  },
];
