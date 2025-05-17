export function createExperiencesSection(experiences) {
  // Section principale
  const section = document.createElement("section");
  section.classList.add("mysection");

  const title = document.createElement("h2");
  title.textContent = "Expérience";

  const experienceContainer = document.createElement("div");
  experienceContainer.classList.add("experience");

  experiences.forEach(exp => {
    const expItem = document.createElement("div");
    expItem.classList.add("experience-item");

    // Titre
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.textContent = `${exp.organisation} | ${exp.city}`;

    // Meta : date + durée
    const metaDiv = document.createElement("div");
    metaDiv.classList.add("experience-meta");

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date");
    dateDiv.innerHTML = `📅<span class="duration">Durée : ${exp.duration}</span>`;

    metaDiv.appendChild(dateDiv);

    // Rôle
    const roleDiv = document.createElement("div");
    roleDiv.classList.add("role");
    roleDiv.innerHTML = `<strong>Rôle :</strong> ${exp.title}`;

    // Description
    const descDiv = document.createElement("div");
    descDiv.classList.add("description");
    descDiv.textContent = exp.description;

    // Technologies
    const techDiv = document.createElement("div");
    techDiv.classList.add("technologies");
    techDiv.innerHTML = `<strong>Technologies :</strong> ${exp.technologies.join(", ")}`;

    // Assembler les blocs
    expItem.appendChild(titleDiv);
    expItem.appendChild(metaDiv);
    expItem.appendChild(roleDiv);
    expItem.appendChild(descDiv);
    expItem.appendChild(techDiv);

    experienceContainer.appendChild(expItem);
  });

  // Ajouter les éléments à la section
  section.appendChild(title);
  section.appendChild(experienceContainer);

  // Créer le séparateur après la section
  const separateur = document.createElement("div");
  separateur.classList.add("separateur");

  // Conteneur global
  const container = document.createElement("div");
  container.appendChild(section);
  container.appendChild(separateur);

  return container;
}
