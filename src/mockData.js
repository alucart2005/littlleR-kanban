import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    id: uuidv4(),
    title: " 📋 To Do",
    task: [
      {
        id: uuidv4(),
        title: "Enroll in the JavaScript course",
      },
      {
        id: uuidv4(),
        title: "Sign up for HTML adn CSS course",
      },
      {
        id: uuidv4(),
        title: "Sing up for the React Course",
      },
    ],
  },
  {
    id: uuidv4(),
    title: " 📉 In Progress",
    task: [
      {
        id: uuidv4(),
        title: "JavaScript course",
      },
      {
        id: uuidv4(),
        title: "HTML adn CSS course",
      },
      {
        id: uuidv4(),
        title: "React Course",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "✔️ Completed",
    task: [
      {
        id: uuidv4(),
        title: "HTML and CSS course"
      }
    ]
  }
];

export default mockData