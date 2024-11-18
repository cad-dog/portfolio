import { SkillList } from "./definitions";

export const skills: SkillList[] = [
  {
    listTitle: "Programming Languages",
    list: [
      {
        proficiency: "Experienced",
        cards: [
          { skillName: "JavaScript", skillType: "language" },
          { skillName: "C#", skillType: "language" },
        ],
      },
      {
        proficiency: "Proficient",
        cards: [
          { skillName: "Python", skillType: "language" },
          { skillName: "C/C++", skillType: "language" },
        ],
      },
      {
        proficiency: "Acquainted",
        cards: [
          { skillName: "Java", skillType: "language" },
          { skillName: "Swift", skillType: "language" },
        ],
      },
    ],
  },
  {
    listTitle: "Technologies",
    list: [
      {
        proficiency: "Experienced",
        cards: [
          { skillName: "React.jS", skillType: "technology" },
          { skillName: "Vue.jS", skillType: "technology" },
          { skillName: "Node.jS", skillType: "technology" },
          { skillName: ".NET", skillType: "technology" },
          { skillName: "CSS/SASS", skillType: "technology" },
          { skillName: "TailWindCSS", skillType: "technology" },
          { skillName: "AzureDevOps", skillType: "technology" },
          { skillName: "Jira", skillType: "technology" },
          { skillName: "Express.js", skillType: "technology" },
          { skillName: "MySQL", skillType: "technology" },
        ],
      },
      {
        proficiency: "Proficient",
        cards: [
          { skillName: "PostgreSQL", skillType: "technology" },
          { skillName: "MongoDB", skillType: "technology" },
        ],
      },
      {
        proficiency: "Acquainted",
        cards: [
          { skillName: "Java", skillType: "technology" },
          { skillName: "Swift", skillType: "technology" },
          { skillName: "Heroku", skillType: "technology" },
          { skillName: "Nuxt", skillType: "technology" },
          { skillName: "GraphQL", skillType: "technology" },
          { skillName: "Jest", skillType: "technology" },
          { skillName: "Cypress", skillType: "technology" },
        ],
      },
    ],
  },
];
