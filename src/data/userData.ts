import { UserData } from "../app/interfaces/userData";

const userData: UserData = {
  firstName: "Sven",
  lastName: "Kernke",
  title: "Senior Fullstack Developer",
  description: `Senior Fullstack Developer mit 10+ Jahren Erfahrung in der Entwicklung skalierbarer Web-Applikationen. 
  Schwerpunkte: TypeScript, React, Angular, Ionic, NestJS. Erfahren in der Modernisierung von Legacy-Systemen, Aufbau von CI/CD-Pipelines und der Digitalisierung manueller Geschäftsprozesse. Pragmatischer Problemlöser mit starkem Fokus auf Code-Qualität, Wartbarkeit und enger Zusammenarbeit mit Stakeholdern.`,
  contact: {
    email: "kernke.dev@gmail.com",
    phone: "+4917682949586",
    city: "Neuwied",
  },
  skills: [
    "React",
    "Angular",
    "Ionic",
    "Nextjs",
    "Nestjs",
    "Typescript",
  ],
  languages: [
    { language: "Deutsch", level: "Muttersprache" },
    { language: "Englisch", level: "Fließend" },
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
    // {
    //   email: "kernke.dev@gmail.com",
    //   social: "email",
    // },
    // {
    //   phone: "+4917682949586",
    //   social: "phone",
    // },
  ],
  skillCategories: [
    {
      "key": "frontend",
      "label": "Frontend",
      "icon": "Monitor",
      "skills": [
        { "name": "React", "level": "expert", "yearsOfExperience": 5 },
        { "name": "Angular", "level": "expert", "yearsOfExperience": 7 },
        { "name": "Next.js", "level": "advanced", "yearsOfExperience": 3 },
        { "name": "Ionic", "level": "advanced", "yearsOfExperience": 4 },
        { "name": "Tailwind CSS", "level": "advanced", "yearsOfExperience": 3 },
        { "name": "Material UI", "level": "advanced", "yearsOfExperience": 3 }
      ]
    },
    {
      "key": "backend",
      "label": "Backend",
      "icon": "Server",
      "skills": [
        { "name": "NestJS", "level": "expert", "yearsOfExperience": 4 },
        { "name": "C#", "level": "advanced", "yearsOfExperience": 5 },
        { "name": "Entity Framework", "level": "advanced", "yearsOfExperience": 4 },
        { "name": "Python", "level": "beginner", "yearsOfExperience": 1 }
      ]
    },
    {
      "key": "devops",
      "label": "DevOps / Infra",
      "icon": "Container",
      "skills": [
        { "name": "Docker", "level": "advanced", "yearsOfExperience": 4 },
        { "name": "GCloud", "level": "advanced", "yearsOfExperience": 3 },
        { "name": "Terraform", "level": "intermediate", "yearsOfExperience": 2 },
        { "name": "Jenkins", "level": "advanced", "yearsOfExperience": 3 },
        { "name": "CI/CD", "level": "advanced", "yearsOfExperience": 5 }
      ]
    },
    {
      "key": "testing",
      "label": "Testing",
      "icon": "FlaskConical",
      "skills": [
        { "name": "Jest", "level": "expert", "yearsOfExperience": 4 },
        { "name": "Playwright", "level": "advanced", "yearsOfExperience": 2 },
        { "name": "Cypress", "level": "intermediate", "yearsOfExperience": 2 },
        { "name": "Karma", "level": "advanced", "yearsOfExperience": 3 }
      ]
    },
    {
      "key": "databases",
      "label": "Datenbanken",
      "icon": "Database",
      "skills": [
        { "name": "MongoDB", "level": "expert", "yearsOfExperience": 4 },
        { "name": "MSSQL", "level": "advanced", "yearsOfExperience": 5 },
        { "name": "SQLite", "level": "intermediate", "yearsOfExperience": 2 },
        { "name": "PouchDB", "level": "intermediate", "yearsOfExperience": 2 }
      ]
    }
  ],
  experience: [
    {
      title: "Frontend Developer",
      projectName: "Immobilien-Genossenschaftsbank",
      projectUrl: "https://www.hausbank.de/startseite.html",
      company: "jambit GmbH",
      workRange: "06.2025 bis heute",
      description: `Unser Kunde, ein bundesweit agierendes Unternehmen in der Immobilienwirtschaft, hat als Kernprodukt eine Software zur Abwicklung aller Geschäftsvorfälle einer Hausverwaltung. Diese ist seit mehr als 20 Jahren gewachsen und bietet eine allumfassende Lösung, inklusive direkte Anbindung an Bankkonten und diverse andere Dienstleister im Ökosystem. Im Rahmen dieses Projekts soll die Software, welche aktuell aus dem Rechenzentrum via Remote Desktop verteilt wird, modernisiert werden und den Hausverwaltungen im Browser zur Verfügung gestellt werden. Dazu wird die Business Logik gekapselt und als Backend Service gestaltet. Anschließend kann sie via REST abgefragt werden. Die grafische Oberfläche wird komplett neu konzeptioniert und entwickelt. Es entsteht eine moderne Web App als Single Page Application.`,
      addition: [
        "Analyse und Dokumentation der bestehenden Architektur",
        "Konzeption einer Soll-Architektur und Migration von der Ist-Architektur",
        "Definition neuer Schnittstellen mit den Stakeholdern und entsprechende Implementierung",
        "Implementierung neuer Funktionen gemäß den Anforderungen",
        "Konzeption, Realisierung und Qualitätssicherung neuer Features",
        "Wissensvermittlung und Einführung der React Best Practices",
        "Fehler analysieren, dokumentieren und beheben",
        "Typisierung und Stabilisierung von existierendem Code",
        "Überarbeitung und Optimierung der bestehende Prozesse",
      ],
      companyUrl: "https://www.jambit.com/",
      technologies: [
        "TypeScript", "JavaScript", "Zeplin", "React", "Redux", "RTK Query", "Material UI", "Gitlab", "Jira", "Confluence", "Mattermost"
      ],
      roles: ["Frontend"],
    },
    {
      title: "Software Developer",
      company: "jambit GmbH",
      projectName: "Ergoneers next",
      projectUrl: "https://ergoneers.com",
      workRange: "10.2024 - 05.2025",
      description: `Es wird ein System bestehend aus zwei Anwendungen entwickelt, die zusammenarbeiten, um Sensordaten zu erfassen. Eine Anwendung integriert verschiedene Agents, die Informationen von Sensoren wie Motion-Eye-Kameras sowie Temperatur- und Luftfeuchtigkeitssensoren sammeln. Die zweite Anwendung ist für die Weiterverarbeitung und Analyse dieser gesammelten Daten verantwortlich, wodurch eine umfassende Auswertung ermöglicht wird. Im Rahmen dieser Weiterentwicklung werden beide Anwendungen kontinuierlich optimiert, um die Funktionalität und Effizienz zu steigern.`,
      companyUrl: "https://www.jambit.com/",
      addition: [
        "Implementierung von Kundenanforderungen",
        "Implementierung von neuen Features und Behebung von Bugs im WPF"
      ],
      technologies: ["C#", "WPF", "SQLite", "Git", "CQRS"],
      roles: ["Fullstack", "Tester"],
    },
    {
      title: "Backend Developer",
      projectName: "Madsack Stellenmarkt JAMP",
      projectUrl: "https://madsack-recruiting-solutions.de",
      company: "jambit GmbH",
      workRange: "06.2024 - 09.2024",
      description: `Publishing-Service zur automatisierten Veröffentlichung von Stellenanzeigen auf externen Plattformen (Facebook, Joveo) mit KI-gestützter Optimierung.`,
      companyUrl: "https://www.jambit.com/",
      addition: [
        "Erstellung und testen der PublishingService und integration ins bestehende System"
      ],
      technologies: ["Nextjs", "Nestjs", "GCloud", "Docker", "FacebookAPI", "joveo"],
      roles: ["Fullstack", "Tester"],
    },
    {
      title: "Software Developer",
      company: "jambit GmbH",
      projectName: "Jarvis - AI Bot",
      workRange: "02.2024 - 06.2024",
      description: `Entwicklung eines Prototyps für einen Chat Bot. Nachdem ein Handbuch vom Benutzer bereitgestellt wurde, können dem Bot fragen zu diesem gestellt werden.`,
      addition: ["Implementierung von Frontend und Backend", "Integration von OpenAI"],
      companyUrl: "https://www.jambit.com/",
      technologies: ["Python", "OpenAI", "ChatGPT", "Nextjs"],
      roles: ["Fullstack", "Tester"],
    },
    {
      title: "Software Developer",
      projectName: "PCS Systemtechnik GmbH",
      company: "jambit GmbH",
      workRange: "12.2023 - 01.2024",
      description: `Entwicklung eines neues Zeiterfassungsprodukt für Kleinbetriebe auf Basis der bestehenden Produkte welche auf Großkunden ausgelegt sowie ein damit verbundenes Refactoring als Vorbereitung um das neue System in die Cloud zu heben (Kubernetes)`,
      projectUrl: "https://www.pcs.com/",
      addition: [
        "CI & CD Einrichtung und Einbindung",
        "Einführung und Implementierung von Playwright"
      ],
      companyUrl: "https://www.jambit.com/",
      technologies: ["Python", "Jenkins", "Git", "Github", "Playwright"],
      roles: ["Fullstack", "Tester"],
    },
    {
      title: "Fullstack Developer",
      company: "Bike24 GmbH",
      projectName: "Order Management Service",
      workRange: "08.2021 - 11.2023",
      description:
        "Entwicklung und Betrieb eines Order-Management-Service (NestJS, Nextjs, MongoDB, GCloud) für den gesamten Lifecycle von Bestellungen - von Eingang bis Auslieferung. Aufbau von internen Support-Tools (React, Tailwind) zur Reduktion manueller Prozesse im Kundensupport.",
      companyUrl: "https://www.bike24.de",
      roles: ["Fullstack", "Tester"],
      addition: [
        "neu Implementation eines Legacy-Systems mit NestJS und Nextjs in form einer Microservice-Architektur",
        "CI/CD-Pipelines mit Jenkins und Terraform Build aufbauen und optimieren",
        "Entwicklung von neuen Features gemäß den Anforderungen",
        "Konzeption, Realisierung und Qualitätssicherung neuer Features",
        "Wissensvermittlung und Einführung von Best Practices",
        "Fehler analysieren, dokumentieren und beheben",
      ],
      technologies: [
        "React",
        "Nestjs",
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
      companyUrl: "https://www.cgm.com",
      company: "CompuGroup Medical GmbH",
      projectName: "Clickdoc",
      workRange: "08.2019 - 07.2021",
      description: `Mitarbeit an CLICKDOC, der zentralen digitalen Kommunikationsplattform der CompuGroup Medical für Ärzte, Zahnärzte, Apotheken, Krankenhäuser und Patienten. Die Plattform umfasst u.a. Online-Terminbuchung, digitale Kalender mit Praxissoftware-Integration, Patientenverwaltung mit Karteikartensystem, Videosprechstunden und E-Rezept-Anbindung. Im Rahmen des Projekts wurde die Zahnarzt-Erweiterung (CGM Z1 Integration) mitentwickelt sowie bestehende Module der Praxis- und Patientenverwaltung weiterentwickelt.`,
      projectUrl: "https://www.cgm.com/deu_de/plattformen/clickdoc.html",
      addition: [
        "Entwicklung und Weiterentwicklung von UI-Komponenten für Kalender, Karteikarten und Praxisverwaltung in Angular",
        "Konzeption und Implementierung der Zahnarzt-Erweiterung mit spezifischen Anforderungen an Terminarten und Raumplanung",
        "Enge Zusammenarbeit mit UX/UI-Design und fachlichen Stakeholdern aus dem Gesundheitswesen",
        "Sicherstellung von Barrierefreiheit und Datenschutzkonformität (KBV/GKV-Vorgaben) im Frontend",
        "Unit- und Integrationstests mit Jest und Karma zur Qualitätssicherung",
        "Code Reviews und Wissenstransfer im Frontend-Team",
      ],
      technologies: [
        "Angular",
        "Docker",
        "Jenkins",
        "Jest",
        "Jira",
        "Confluence",
        "Github",
      ],
      roles: ["Frontend", "Tester"],
    },
    {
      title: "Fullstack Developer",
      company: "Sowatech SoftwareTechnik GmbH",
      workRange: "08.2015 - 07.2019",
      description:
        "Diverse Fullstack-Projekte (Angular, C#, Ionic, MSSQL) in den Bereichen eHealth, Spedition, ÖPNV, Fortbildungen, Gebäudereinigung ,Logistik und E-Commerce. Entwicklung von SPAs, hybriden Mobile Apps und REST-APIs.",
      companyUrl: "https://www.sowatech.de/",
      addition: [
        "Komplette Zuständigkeit von der Anforderungsanalyse über die Entwicklung bis zum Betrieb",
        "Analyse von Kundenanforderungen und Entwicklung von technischen Lösungen",
        "Implementierung von neuen Features und Behebung von Bugs",
      ],
      technologies: [
        "Entity Framework",
        "Angular",
        "Jest",
        "Karma",
        "Ionic",
        "SQL",
        "MSSQL",
        "PouchDB",
        "Github",
        "C#",
      ],
      roles: ["Fullstack", "Tester"],
    },
  ],
  testimonials: [
    {
      name: "Jan Sobotta",
      jobDescription: `Selbstständiger Berater 
      Senior SoftwareDeveloper`,
      testimonial: `In meiner langen Zusammenarbeit habe ich Sven Kernke als einen sehr lernfähigen und guten Developer kennengelernt.
Er arbeitet sich schnell und zuverlässig in Probleme ein und löst diese kompetent und zu voller Zufriedenheit.`,
      imgName: "/jan_sobotta.jpeg",
      company: "CompuGroup Medical GmbH",
    },
    {
      name: "Noël Elias Schenk",
      jobDescription: "Senior Frontend Developer",
      testimonial: `Sven Kernke ist ein herausragender Fullstack-Developer. Seine TypeScript Fähigkeiten sind beeindruckend und seine Arbeit zeichnet sich durch die stetig hohe Qualität aus. Sven ist ein äußerst zuverlässiger und angenehmer Kollege. Es ist immer eine Freude, mit ihm zusammenzuarbeiten.`,
      imgName: "/noel_schenk.jpeg",
      company: "CompuGroup Medical GmbH & jambit GmbH",
    },
    {
      name: "Sebastian Ulbricht",
      jobDescription: "Senior SoftwareDeveloper",
      testimonial: `Ich hatte das Vergnügen, etwa ein Jahr lang mit Sven zusammenzuarbeiten. Während dieser Zeit bewies er stets außergewöhnliche Fähigkeiten und Engagement als SoftwareDeveloper. Svens Expertise in TypeScript, React, NextJS, NestJS und Node war von Anfang an offensichtlich, da er Projekte nahtlos von Grund auf neu aufsetzte und sicherstellte, dass sie mit einem starken Fokus auf Wartbarkeit und Automatisierung gebaut wurden.

Einer von Svens herausragenden Beiträgen war seine Arbeit an der Verbesserung unserer CI/CD-Pipelines. Sein innovativer Ansatz und sein umfassendes Verständnis des Entwicklungslebenszyklus haben unsere Prozesse erheblich gestrafft, was zu schnelleren und zuverlässigeren Bereitstellungen führte. Svens Fähigkeit, potenzielle Probleme vorauszusehen und sie proaktiv anzugehen, war für unser Team von unschätzbarem Wert.

Neben seinen technischen Fähigkeiten war Sven auch ein bemerkenswertes Teammitglied. Er war immer bereit zu helfen, sei es bei der Bewältigung einer komplexen Programmieraufgabe oder bei der Diskussion von Ideen und Lösungen. Sein kooperativer Geist und seine Bereitschaft, seine Kollegen zu unterstützen, förderten ein positives und produktives Arbeitsumfeld.

Svens Engagement für hervorragende Leistungen in Kombination mit seiner freundlichen und zugänglichen Art machten ihn zu einem unverzichtbaren Teil unseres Teams. Ich bin zuversichtlich, dass er auch weiterhin hervorragende Leistungen erbringen und für jedes Unternehmen, dem er beitritt, von großem Wert sein wird.`,
      imgName: "/sebastian_ulbricht.jpeg",
      company: "Bike24 GmbH",
    },
  ],
};

export default userData;
