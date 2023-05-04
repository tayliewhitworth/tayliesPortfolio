// images will go here style: import 'Image Name' from './assets/imageName.jpg

import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import smallLvl from './assets/smallLvl.png'

import img5 from "./assets/5.png";
import img6 from "./assets/6.png";
import img7 from "./assets/7.png";
import img8 from "./assets/8.png";
import largeLvl from './assets/largeLvl.png'

export const projectData = [
  {
    id: 1,
    name: "Time Tracking Dashboard",
    color: "var(--purple-3)",
    description:
      "This web app was made to track a users time spent on different activities. The layout was inspired by a Frontend Mentor challenge. I added a todo list page so a user can add tasks to a todo list. The tasks can be edited and deleted and the data will be saved to the users local storage.",
    tags: ["HTML", "CSS", "JavaScript", "JSON", "localStorage"],
    howBuilt:
      "I built this app using JavaScript, HTML and CSS. I got the data from a JSON file provided by Frontend Mentor. This app is a time tracking dashboard that tracks time spent on different activites. I also added a todo list that uses local storage to remember the users tasks. This allows the user to create, update and delete a task.",
    challenges:
      "When I was building this I struggled with creating clean JavaScript code. At first, I had a function for everything but I realized I could combine the functions into one. This was my first time working with JSON data so I had to figure out the best way to access that and use the require import.",
    improvements:
      "I would change the way I used the JSON data and make it so a user can add their own data like the todo list.",
    img: img3,
    bigImg: img5,
    link: "https://timetracker101.netlify.app/",
    githubLink: "https://github.com/tayliewhitworth/timetracker",
  },
  {
    id: 2,
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
    id: 3,
    name: "WordSearchAPI",
    color: "var(--pink-3)",
    description:
      "This is a dictionary api that allows a user to search for any word. I used the Free Dictionary API for the word data. I also added a light and dark mode feature. Since the API is free, there are times when it isn't working! If that happens on the day you use it, just wait a few hours and try again!",
    tags: ["HTML", "CSS", "JavaScript", "API", "localStorage"],
    howBuilt:
      "I built this app using HTML, CSS, and JavaScript. I had to use the Free Dicitonary API in order to get access to a dictionary. Since it is free, there are times when it won't work correctly. I also used localStorage to save the lighting mode to the users preference.",
    challenges:
      "The main challenge I had with building this app was the API not working at certain times but I don't have control over that.",
    improvements:
      "I would like to improve the API and find a better one that works majority of the time. I would also like to add a control flow for when the API is not working so the user will know that is is down.",
    img: img1,
    bigImg: img8,
    link: "https://wordsearch101.netlify.app/",
    githubLink: "https://github.com/tayliewhitworth/dictionaryAPI",
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
