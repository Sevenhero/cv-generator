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
      title: "Software Engineer",
      company: "jambit GmbH",
      from: "10.2024",
      till: "bis heute",
      description: `Eine Software, die Daten verschiedener Sensoren, wie etwa Kameras und Eyetracking-Brillen, aufzeichnet und für die anschließende Analyse mit einem weiteren Tool bereitstellt.`,
      projectUrl: "https://www.jambit.com/",
      technologies: ["c#", "wpf"],
      roles: ["Fullstack"],
    },
    {
      title: "Software Engineer",
      company: "jambit GmbH",
      from: "05.2024",
      till: "09.2024",
      description: `Im Projekt ging es um die API-Anbindung mehrerer Anbieter, die das Veröffentlichen von Stellenanzeigen ermöglichen. Zusätzlich wurde ein Bewerberportal bereitgestellt. Mein Aufgabenbereich umfasste die Weiterleitung der Stellenanzeigen entsprechend der Workflows der verschiedenen Anbieter.

Darüber hinaus wurden Analytics-Daten abgerufen, um Kunden und deren Partnern Einblick in Leistungskennzahlen wie CPC, CPA und weitere Performance-Daten zu bieten. So konnten wir eine transparente Übersicht zur Kampagnenleistung gewährleisten und datenbasierte Optimierungen unterstützen.`,
      projectUrl: "https://www.jambit.com/",
      technologies: ["nextjs", "nestjs", "gcloud", "docker"],
      roles: ["Fullstack"],
    },
    {
      title: "Software Engineer",
      company: "jambit GmbH",
      from: "02.2024",
      till: "04.2024",
      description: `Das Projekt drehte sich um die Entwicklung einer Middleware, die als Bindeglied zwischen Terminals und der Buchungssoftware fungiert. Die Middleware ermöglichte die Kommunikation zwischen verschiedenen Terminals – etwa für das Scannen von NFC-Chips oder Karten – und der Buchungssoftware. Durch diese flexible Architektur können beliebige Terminals und Softwarelösungen miteinander verbunden und ausgetauscht werden, ohne dass die Kompatibilität beeinträchtigt wird.
Mein Hauptfokus in der Projektarbeit lag auf der Einrichtung einer Testumgebung. Diese Testumgebung ermöglicht es, automatisierte, physische Tests durchzuführen, um die Middleware und deren reibungslose Funktionalität in unterschiedlichen Szenarien zu überprüfen.`,
      projectUrl: "https://www.jambit.com/",
      technologies: ["playwright", "python"],
      roles: ["Fullstack"],
    },
    {
      title: "Software Engineer",
      company: "jambit GmbH",
      from: "01.2024",
      till: "02.2024",
      description: `Ein Proof of Concept (POC) zur Integration eines Handbuchs in ChatGPT, mit dem Ziel, fundierte Antworten mit entsprechenden Verweisen zu liefern. Dieses System soll zukünftig den Support oder direkt die Kunden effizient unterstützen.`,
      projectUrl: "https://www.jambit.com/",
      technologies: ["nextjs", "python"],
      roles: ["Fullstack"],
    },
    {
      title: "Fullstack Entwickler",
      company: "Bike24 GmbH",
      projectName: "OMS – Order Management Service",
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
