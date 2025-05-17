export function createTechnologySkillsSection(technologySkills) {
  // Créer la section principale
  const section = document.createElement("section");
  section.classList.add("mysection");

  // Titre de la section
  const title = document.createElement("h2");
  title.textContent = "Technologies";

  // Conteneur de compétences
  const competenceDiv = document.createElement("div");
  competenceDiv.classList.add("competence");

  technologySkills.forEach(skill => {
    const skillGroup = document.createElement("div");
    skillGroup.classList.add("skill-group");

    const skillTitle = document.createElement("span");
    skillTitle.classList.add("skill-title");
    skillTitle.textContent = `${skill.skill} :`;

    const skillDetails = document.createElement("span");
    skillDetails.classList.add("skill-details");
    skillDetails.textContent = skill.details.join(", ");

    skillGroup.appendChild(skillTitle);
    skillGroup.appendChild(skillDetails);
    competenceDiv.appendChild(skillGroup);
  });

  // Assembler tous les éléments
  section.appendChild(title);
  section.appendChild(competenceDiv);

  return section;
}
