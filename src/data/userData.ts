import { UserData } from "../app/interfaces/userData";

const userData: UserData = {
  firstName: "Sven",
  lastName: "Kernke",
  title: "Fullstack Developer",
  description: `Sven Kernke ist ein erfahrener Fullstack Web Developer mit Fachwissen in kontinuierlicher
Integration, Softwaretests und Technologien wie Angular, Next.js, Ionic, TypeScript, Nest.js und Agile
Methoden. Er verfügt über umfangreiche Frontend-Codierungsfähigkeiten und hat bei verschiedenen
Unternehmen in der Softwareentwicklung gearbeitet.`,
  contact: {
    email: "sven.kernke@yahoo.de",
    city: "Neuwied",
    phone: "+4917682949586",
    street: "Bachstraße 102",
    zip: "56566",
  },
  // image: "https://randomuser,//FIXME:
  topSkills: ["Typescript/JavaScript", "Nestjs", "Nextjs", "Angular"],
  languages: [
    { language: "German", level: "Muttersprache" },
    { language: "English", level: "Fließend" },
  ],
  social: [
    {
      url: "https://www.linkedin.com/in/sven-kernke-75689715a/",
      social: "linkedIn",
    },
    {
      url: "https://www.xing.com/profile/Sven_Kernke",
      social: "xing",
    },
    {
      url: "https://github.com/Sevenhero",
      social: "github",
    },
    {
      email: "sven.kernke@yahoo.de",
      social: "email",
    },
  ],
  experience: [
    {
      title: "Software Engineer",
      company: "jambit GmbH",
      projectName: "PCS Middleware",
      from: "04.2024",
      till: "04.2024",
      description: "",
      url: "https://www.jambit.com/",
      technologies: ["GO", "Kubernetes", "Angular"],
      roles: ["Fullstack"],
    },
    {
      title: "Fullstack Developer",
      company: "Bike24 GmbH",
      projectName: "OMS – Order Management Service",
      from: "08.2021",
      till: "11.2023",
      description:
        "A Bike shop, what are you Expecting? I'm a fullstack developer, I do everything from frontend to backend.",
      url: "https://www.bike24.de",
      technologies: [
        "React(Nextjs)",
        "Node.js(Nestjs)",
        "Tailwind CSS",
        "Docker",
        "Github",
        "GCloud",
        "Terraform",
        "Jest",
        "Playwright",
        "Cypress",
        "Jira",
        "Confluence",
        "Toggl Track",
        "MongoDB",
      ],
    },
    {
      title: "Software Developer",
      company: "CompuGroup Medical GmbH",
      projectName: "Clickdoc",
      from: "08.2019",
      till: "07.2021",
      description: `Patienten/Praxis-Verwaltung mit Kalender und Karteikarten und
      Erweiterung für Zahnärzte.`,
      url: "https://www.cgm.com/deu_de/loesungen/zahnarztpraxis.html",
      technologies: [
        "Angular",
        "Docker",
        "Jenkins",
        "Jest",
        "Jira",
        "Confluence",
        "Github",
      ],
      roles: ["Frontend"],
    },
  ],
  education: [
    {
      title: "Apprenticeship / Fullstack Developer",
      company: "Sowatech SoftwareTechnik GmbH",
      from: "08.2015",
      till: "07.2019",
      description: `Software, um den Gesundheitszustand von Mitarbeitern herauszufinden
      und gegebenenfalls Maßnahmen zu ergreifen. Anschließend konnten
      Folgegespräche per Videocall mit Ärzten durchgeführt werden, bei der
      eine Akte geführt wurde. Ein Online Shop in Angular. Eine App zur
      Erfassung/Instandhaltung von Windkraftanlagen. Eine Website & App zur
      Planung und Erfassung von Gebäudereinigung. Lernplattform und
      Management von Ressourcen/Kursen/Materialien und Zertifizierung. Eine
      Lernplattform zum Trainieren von Busfahrern. Eine App zur Erfassung
      vom aktuellen Zustand von Bus- und Bahnhaltestellen. Kalender Website
      zur Verwaltung einer Spedition (Urlaubsmanagement mit Antragstellung
      und Genehmigungsprozess).`,
      url: "https://www.sowatech.de",
      technologies: [
        "Entity Framework",
        "Angular",
        "Ionic",
        "WinForms",
        "Jest",
        "Karma",
        "Cypress",
        "Protractor",
        "SQL",
        "MSSQL",
        "PouchDB",
        "Github",
        "SVN",
        "Jira",
        "C#",
        "ASP.net",
      ],
    },
  ],
};

export default userData;
