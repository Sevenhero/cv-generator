import { UserData } from "../app/interfaces/userData";

const userData: UserData = {
  firstName: "Sven",
  lastName: "Kernke",
  title: "Software Entwickler",
  description: `Ich liefere qualitativ hochwertige Software dank meiner umfassenden Erfahrung in Projekten unterschiedlicher Komplexitätsstufen. Mein Talent liegt darin, komplexe Probleme in einfache, bearbeitbare Aufgaben zu zerlegen und manuelle Prozesse effizient zu digitalisieren. Meine Expertise konzentriert sich auf die Entwicklung mobiler Web-Applikationen, wobei ich eng mit meinen Kunden zusammenarbeite, um tiefgehende IT-Herausforderungen zu meistern.
  
Bevor ich mit der Arbeit beginne, analysiere ich gründlich Ihre Gesamtsituation, um sicherzustellen, dass alle relevanten Aspekte berücksichtigt werden. Dies ermöglicht es mir, Ihnen frühzeitig fundiertes Feedback zur Realisierbarkeit Ihrer geplanten Ziele und Aufgaben zu geben. Durch die Entwicklung maßgeschneiderter Lösungen, die auf dem neuesten Stand der Technologie basieren, sichere ich eine nachhaltige Weiterentwicklung und langfristigen Erfolg für Ihr Unternehmen.

Ich digitalisiere zeitaufwendige oder manuelle Prozesse, um erhebliche Zeit- und Kostenersparnisse für meine Kunden zu gewährleisten. Darüber hinaus unterstütze ich Ihr Team bei der Entwicklung, um gemeinsam qualitativ hochwertige Ergebnisse zu erzielen.

- Von der Konzeption bis zur Fertigstellung Ihres Webauftritts stehe ich Ihnen zur Seite. 
Bei Interesse an einer Zusammenarbeit freue ich mich auf Ihre Kontaktaufnahme.`,
  contact: {
    email: "kernke.dev@gmail.com",
    // city: "Neuwied",
    phone: "+4917682949586",
    // street: "Bachstraße 102",
    // zip: "56566",
  },
  // image: "https://randomuser,//FIXME:
  topSkills: ["Typescript/JavaScript", "Nestjs", "Nextjs", "Angular"],
  skills: [
    "Nestjs",
    "Nextjs",
    "Angular",
    "React",
    "Ionic",
    "Typescript",
    "Javascript",
    "CSS3",
    "HTML5",
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
    {
      email: "kernke.dev@gmail.com",
      social: "email",
    },
    {
      phone: "+4917682949586",
      social: "phone",
    },
  ],
  experience: [
    {
      title: "Frontend Developer",
      projectName:"Immobilien-Genossenschaftsbank",
      projectUrl:"https://www.hausbank.de/startseite.html",
      company: "jambit GmbH",
      from: "06.2025",
      till: "bis heute",
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
      title: "Software Engineer",
      company: "jambit GmbH",
      projectName:"Ergoneers next",
      projectUrl:"https://ergoneers.com",
      from: "10.2024",
      till: "05.2025",
      description: `Es wird ein System bestehend aus zwei Anwendungen entwickelt, die zusammenarbeiten, um Sensordaten zu erfassen. Eine Anwendung integriert verschiedene Agents, die Informationen von Sensoren wie Motion-Eye-Kameras sowie Temperatur- und Luftfeuchtigkeitssensoren sammeln. Die zweite Anwendung ist für die Weiterverarbeitung und Analyse dieser gesammelten Daten verantwortlich, wodurch eine umfassende Auswertung ermöglicht wird. Im Rahmen dieser Weiterentwicklung werden beide Anwendungen kontinuierlich optimiert, um die Funktionalität und Effizienz zu steigern.`,
      companyUrl: "https://www.jambit.com/",
      addition: [
        "Implementierung von Kundenanforderungen",
        "Implementierung von neuen Features und Behebung von Bugs im WPF"
      ],
      technologies: ["C#", "WPF", "SQLite", "git", "CQRS"],
      roles: ["Fullstack", "Tester"],
    },
    {
      title: "Backend Developer",
      projectName:"Madsack Stellenmarkt JAMP",
      projectUrl:"https://www.madsack-karriere.de",
      company: "jambit GmbH",
      from: "06.2024",
      till: "09.2024",
      description: `Entwicklung eines PublishingService der Stellenanzeigen auf diversen anderen Plattformen veröffentlicht und bei Bedarf nachjustiert per AI.`,
      companyUrl: "https://www.jambit.com/",
      addition: [
        "Erstellung und testen der PublishingService und integration ins bestehende System"
      ],
      technologies: ["nextjs", "nestjs", "gcloud", "docker", "FacebookAPI", "joveo"],
      roles: ["Fullstack", "Tester"],
    },
    {
      title: "Software Engineer",
      company: "jambit GmbH",
      projectName:"Jarvis - AI Bot",
      from: "02.2024",
      till: "06.2024",
      description: `Entwicklung eines Prototyps für einen Chat Bot. Nachdem ein Handbuch vom Benutzer bereitgestellt wurde, können dem Bot fragen zu diesem gestellt werden.`,
      addition: ["Implementierung von Frontend und Backend", "Integration von OpenAI"],
      companyUrl: "https://www.jambit.com/",
      technologies: ["Python", "OpenAI", "ChatGPT", "Nextjs"],
      roles: ["Fullstack", "Tester"],
    },
    {
      title: "Software Engineer",
      projectName:"PCS Systemtechnik GmbH",
      company: "jambit GmbH",
      from: "12.2023",
      till: "01.2024",
      description: `Entwicklung eines neues Zeiterfassungsprodukt für Kleinbetriebe auf Basis der bestehenden Produkte welche auf Großkunden ausgelegt sowie ein damit verbundenes Refactoring als Vorbereitung um das neue System in die Cloud zu heben (Kubernetes)`,
      projectUrl:"https://www.pcs.com/",
      addition: [
        "Software Developer",
        "Tester",
        "CI & CD Einrichtung und Einbindung",
        "Einführung und Implementierung von Playwright"
      ],
      companyUrl: "https://www.jambit.com/",
      technologies: ["Python", "Jenkins", "Git", "Github", "Playwright"],
      roles: ["Fullstack"],
    },
    {
      title: "Fullstack Entwickler",
      company: "Bike24 GmbH",
      projectName: "Order Management Service",
      from: "08.2021",
      till: "11.2023",
      description:
        "Backend Service zur Verwaltung von Bestellungen und Kundeninformationen. - die komplette Logik ab dem Zeitpunkt der Bestellung bis zur Auslieferung. Außerdem Tools für den Kundensupport.",
      companyUrl: "https://www.bike24.de",
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
      title: "Software Entwickler",
      companyUrl: "https://www.cgm.com",
      company: "CompuGroup Medical GmbH",
      projectName: "Clickdoc",
      from: "08.2019",
      till: "07.2021",
      description: `Patienten/Praxis-Verwaltung mit Kalender und Karteikarten und
      Erweiterung für Zahnärzte.`,
      projectUrl: "https://www.cgm.com/deu_de/loesungen/zahnarztpraxis.html",
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
    {
      title: "Fullstack Entwickler",
      company: "Sowatech SoftwareTechnik GmbH",
      companyUrl: "https://www.sowatech.de/",
      projectName: "Leveso",
      from: "08.2016",
      till: "07.2018",
      description: `Angular SPA zur Verwaltung zur Erstellung von Prüfungen für Feuerwehrleute und Ionic App zur Prüfung. Außerdem eine SPA um den gesamten ablauf der praktischen Prüfungen zu überprüfen und verwalten.`,
      projectUrl: "https://leveso.de",
      technologies: [
        "Entity Framework",
        "Angular",
        "Ionic",
        "Jest",
        "Karma",
        "SQL",
        "MSSQL",
        "PouchDB",
        "Github",
        "C#",
      ],
    },
    {
      title: "Fullstack Entwickler",
      projectName: "Koveb",
      company: "Sowatech SoftwareTechnik GmbH",
      from: "08.2018",
      till: "07.2019",
      description:
        "SPA zur Erstellung und Auswertung von Benutzerdefinierten Fragebögen zu Bahnhöfen und Bushaltestellen. Außerdem eine App um die Umfrage durchzuführen. Außerdem ein SPA zur erstellung und Prüfung der Busfahrerlizenzen",
      projectUrl: "https://www.koveb.de/",
      companyUrl: "https://www.sowatech.de/",
      technologies: [
        "Entity Framework",
        "Angular",
        "Jest",
        "Karma",
        "Ionic",
        "SQL",
        "MSSQL",
        "Github",
        "C#",
      ],
    },
    {
      title: "Fullstack Entwickler",
      company: "Sowatech SoftwareTechnik GmbH",
      projectName: "Speditions Software",
      companyUrl: "https://www.sowatech.de/",
      from: "08.2017",
      till: "07.2018",
      description:
        "SPA für eine Spedition zur Verwaltung von Urlaub und Krankheit der Mitarbeiter mit integriertem Genehmigungsprozess.",
      technologies: [
        "Entity Framework",
        "Angular",
        "Jest",
        "Karma",
        "SQL",
        "MSSQL",
        "Github",
        "C#",
      ],
    },
    {
      title: "Fullstack Entwickler",
      projectName: "Preventiometer",
      company: "Sowatech SoftwareTechnik GmbH",
      from: "08.2017",
      till: "07.2018",
      description:
        "SPA zur Anbindung diverser Geräte zur Erfassung von Gesundheitsdaten. Außerdem eine Applikation um mit einem Patienten ein Video Call zu führen und die Daten der Befunde zu besprechen.",
      projectUrl:
        "https://www.futrex.eu/futrex-product-portfolio/ipex5-pr%C3%A4ventiometer/",
      companyUrl: "https://www.sowatech.de/",
      technologies: [
        "Entity Framework",
        "Angular",
        "Jest",
        "Karma",
        "SQL",
        "MSSQL",
        "Github",
        "C#",
      ],
    },
    {
      title: "Fullstack Entwickler",
      projectName: "medoco GmbH",
      company: "Sowatech SoftwareTechnik GmbH",
      from: "08.2016",
      till: "07.2017",
      description: `Angular SPA zur Verwaltung von Gebäudereinigung und Pflege und Ionic App zur Abarbeitung von 'Jobs'`,
      projectUrl: "http://medoco.de/",
      companyUrl: "https://www.sowatech.de/",
      technologies: [
        "Entity Framework",
        "Angular",
        "Ionic",
        "Jest",
        "Karma",
        "SQL",
        "MSSQL",
        "PouchDB",
        "Github",
        "C#",
      ],
    },
    {
      title: "Fullstack Entwickler",
      projectName: "Spranz GmbH",
      company: "Sowatech SoftwareTechnik GmbH",
      from: "08.2015",
      till: "07.2016",
      description: `Online Webshop entwickelt mit Angular und C#`,
      projectUrl: "https://spranz.de",
      companyUrl: "https://www.sowatech.de/",
      technologies: [
        "Entity Framework",
        "Angular",
        "Jest",
        "Karma",
        "SQL",
        "MSSQL",
        "Github",
        "C#",
      ],
    },
  ],
  testimonials: [
    {
      name: "Jan Sobotta",
      jobDescription: `Selbstständiger Berater 
      Senior Softwareentwickler`,
      testimonial: `In meiner langen Zusammenarbeit habe ich Sven Kernke als einen sehr lernfähigen und guten Entwickler kennengelernt.
Er arbeitet sich schnell und zuverlässig in Probleme ein und löst diese kompetent und zu voller Zufriedenheit.`,
      imgName: "/jan_sobotta.jpeg",
    },
    {
      name: "Noël Elias Schenk",
      jobDescription: "Senior Frontend Entwickler",
      testimonial: `Sven Kernke ist ein herausragender Fullstack-Entwickler. Seine JavaScript Fähigkeiten sind beeindruckend und seine Arbeit zeichnet sich durch die stetig hohe Qualität aus. Sven ist ein äußerst zuverlässiger und angenehmer Kollege. Es ist immer eine Freude, mit ihm zusammenzuarbeiten.`,
      imgName: "/noel_schenk.jpeg",
    },
    {
      name: "Sebastian Ulbricht",
      jobDescription: "Senior Softwareentwickler",
      testimonial: `Ich hatte das Vergnügen, etwa ein Jahr lang mit Sven zusammenzuarbeiten. Während dieser Zeit bewies er stets außergewöhnliche Fähigkeiten und Engagement als Softwareentwickler. Svens Expertise in TypeScript, React, NextJS, NestJS und Node war von Anfang an offensichtlich, da er Projekte nahtlos von Grund auf neu aufsetzte und sicherstellte, dass sie mit einem starken Fokus auf Wartbarkeit und Automatisierung gebaut wurden.

Einer von Svens herausragenden Beiträgen war seine Arbeit an der Verbesserung unserer CI/CD-Pipelines. Sein innovativer Ansatz und sein umfassendes Verständnis des Entwicklungslebenszyklus haben unsere Prozesse erheblich gestrafft, was zu schnelleren und zuverlässigeren Bereitstellungen führte. Svens Fähigkeit, potenzielle Probleme vorauszusehen und sie proaktiv anzugehen, war für unser Team von unschätzbarem Wert.

Neben seinen technischen Fähigkeiten war Sven auch ein bemerkenswertes Teammitglied. Er war immer bereit zu helfen, sei es bei der Bewältigung einer komplexen Programmieraufgabe oder bei der Diskussion von Ideen und Lösungen. Sein kooperativer Geist und seine Bereitschaft, seine Kollegen zu unterstützen, förderten ein positives und produktives Arbeitsumfeld.

Svens Engagement für hervorragende Leistungen in Kombination mit seiner freundlichen und zugänglichen Art machten ihn zu einem unverzichtbaren Teil unseres Teams. Ich bin zuversichtlich, dass er auch weiterhin hervorragende Leistungen erbringen und für jedes Unternehmen, dem er beitritt, von großem Wert sein wird.`,
      imgName: "/sebastian_ulbricht.jpeg",
    },
  ],
};

export default userData;
