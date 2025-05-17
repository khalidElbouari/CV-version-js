export const cv = {
    profile : {
		photo: "photos/khalid-picture.jpeg",
		firstName: "Khalid",
		lastName: "EL Bouari",
		birthday: {
            day: 1,
            month: 2,
            year: 2001
        },
        phone: "+212 624 44 78 61",
        email: "khalid.fati7i.hb@gmail.com",
        address: "65 Rue Sebta, Hay Kifah, Salé",
        professionalSummary: `Ingénieur en informatique avec une bonne expérience 
            sur les architectures logicielles et les nouvelles technologies informatique, 
            en l'occurence Jakarta EE, Spring Boot, React et Angular. 
            Expérimenté dans la gestion de projets agiles, planification, exécution et coordination des tâches 
            avec des équipes multifonctionnelles. Disposant des compétences requises en communication et 
            en résolution de problèmes avec un esprit ouvert en collaboration efficace avec les parties prenantes 
            et les membres de l'équipe.
        `,
        links: ["", "", ""]
    },
    
	education: [
		{
			diploma: "Master MQL",
			organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
            year: 2026
        },
        {
            diploma: "Licence en Génie Informatique et Gouvernance Digitale",
            organisation: "EST, Université Ibn Tofail, Kénitra",
            year: 2024
        },
        {
            diploma: "BTS en Développement des Systèmes d'Information",
            organisation: "BTS Ibn Sina, Kénitra",
            year: 2023
        }
    ],
    technologySkills: [
		{
            skill: "Jakarta Entreprise Edition (JEE)",
			details: ["Architecture 3 tiers", "Modèle MVC2", "Servlets et JSP",
				"modèle DAO", "Framework Spring / Spring Boot", "JPA", "Hibernate",
                "Administration Tomcat"
            ]
        },
        {
            skill: "Ingénierie du Web",
			details: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Angular" ]
        },		
        {
            skill: "Ingénierie DevOps",
			details: ["Maven", "Git", "GitHub", "GitLab", "Jira", "Jenkins", "JUnit", "Selenuim"]
        },
		{
            skill: "Technologie XML",
			details: ["Standard XML", "Bases de données XML", "Parseurs XML (DOM, SAX)",
				"DTD", "XSD (XML Schema)", "XSLT", "XPath", "XQuery"]
        }
    ],
    experiences: [
        {
            type: "Stage",
            organisation: "LaboControl - Fès",
            title: "Développeur logiciel stagiaire",
            technologies: ["Spring Boot", "Angular", "TypeScript", "HTML/CSS", "MySQL"],
            year: 2024,
            duration: "3 mois"
        },
        {
            type: "Stage",
            organisation: "Copref - Kénitra",
            title: "Développeur VB.NET stagiaire",
            technologies: ["VB.NET", "SQL Server"],
            year: 2023,
            duration: "1 mois"
        },
        {
            type: "Stage",
            organisation: "Université Ibn Tofail - Kénitra",
            title: "Développeur Web stagiaire",
            technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
            year: 2022,
            duration: "1 mois"
        },
		{
			type: "Projet",
			organisation: "FSDM",
			title: "Réalisation d'une application de Gestion de CVs",
			technologies: ["HTML", "CSS", "JavaScript"],
			year: 2023,
			duration: "1 mois"
        }
    ],
    softSkills: [ "Esprit d'équipe", 
                    "Créativité", "Adaptabilité"
    ],
    languages: [
		{
            language: "Français",
            level: "A1|A2|B1|B2|C1|C2", // voir le "Common European Framework of Reference for Languages" (CEFR)
            certification: "DELF|DALF|TCF|TEF",
            experience: ""
        },
		{
            language: "Anglais",
            level: "A1|A2|B1|B2|C1|C2",
            certification: "TOEFL|TOEIC|...",
            experience: "" 
        }
	],
    interests: ["Natation", "Football", "Design"]
};