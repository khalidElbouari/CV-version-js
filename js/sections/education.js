export function createEducationSection(education) {
  // Créer le séparateur
  const separateur = document.createElement("div");
  separateur.classList.add("separateur");

  // Créer la section principale
  const section = document.createElement("section");
  section.classList.add("mysection");

  // Créer le titre
  const title = document.createElement("h2");
  title.textContent = "Éducation";

  // Créer le conteneur des éléments éducatifs
  const educationContainer = document.createElement("div");
  educationContainer.classList.add("education");

  // Ajouter chaque élément d'éducation
  education.forEach(item => {
    const eduItem = document.createElement("div");
    eduItem.classList.add("education-item");

    const schoolDiv = document.createElement("div");
    schoolDiv.classList.add("school");
    schoolDiv.innerHTML = `${item.organisation} | <span class="year">${item.year}</span>`;

    const degreeDiv = document.createElement("div");
    degreeDiv.classList.add("degree");
    degreeDiv.textContent = item.diploma;

    eduItem.appendChild(schoolDiv);
    eduItem.appendChild(degreeDiv);
    educationContainer.appendChild(eduItem);
  });

  // Ajouter les éléments à la section
  section.appendChild(title);
  section.appendChild(educationContainer);

  // Retourner un conteneur complet avec séparateur + section
  const container = document.createElement("div");
  container.appendChild(separateur);
  container.appendChild(section);

  return container;
}
