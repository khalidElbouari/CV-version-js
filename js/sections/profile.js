export function createProfileSection(profile) {
  // Créer le conteneur principal
  const container = document.createElement("div");
  container.classList.add("container");

  // Créer l'en-tête du profil
  const header = document.createElement("header");
  header.classList.add("profile-header");

  // Image de profil
  const profileImage = document.createElement("img");
  profileImage.classList.add("profile-picture");
  profileImage.src = profile.photo;
  profileImage.alt = `Photo de profil de ${profile.firstName} ${profile.lastName}`;

  // Infos de profil
  const profileInfo = document.createElement("div");
  profileInfo.classList.add("profile-info");

  // Nom + statut
  const nameStatus = document.createElement("div");
  nameStatus.classList.add("name-status");

  const nameDiv = document.createElement("div");
  nameDiv.classList.add("name");
  nameDiv.textContent = `${profile.lastName.toUpperCase()} ${profile.firstName}`;

  const statusDiv = document.createElement("div");
  statusDiv.classList.add("status");
  statusDiv.textContent = profile.jobTitle || "Titre non défini";

  nameStatus.appendChild(nameDiv);
  nameStatus.appendChild(statusDiv);

  // Informations de contact
  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");

  // Ligne téléphone + email
  const line1 = document.createElement("div");
  line1.classList.add("line");

  const phoneLabel = document.createElement("span");
  phoneLabel.classList.add("label");
  phoneLabel.textContent = "Téléphone :";

  const phoneValue = document.createElement("span");
  phoneValue.classList.add("value");
  phoneValue.textContent = profile.phone;

  const emailLabel = document.createElement("span");
  emailLabel.classList.add("label");
  emailLabel.textContent = "Email :";

  const emailValue = document.createElement("span");
  emailValue.classList.add("value");
  emailValue.textContent = profile.email;

  line1.appendChild(phoneLabel);
  line1.appendChild(phoneValue);
  line1.appendChild(emailLabel);
  line1.appendChild(emailValue);

  // Ligne adresse
  const line2 = document.createElement("div");
  line2.classList.add("line");

  const addressLabel = document.createElement("span");
  addressLabel.classList.add("label");
  addressLabel.textContent = "Adresse :";

  const addressValue = document.createElement("span");
  addressValue.classList.add("value");
  addressValue.textContent = profile.address;

  line2.appendChild(addressLabel);
  line2.appendChild(addressValue);

  // Ajout des lignes à la section contact
  contactInfo.appendChild(line1);
  contactInfo.appendChild(line2);

  // Ajout des sections à profile-info
  profileInfo.appendChild(nameStatus);
  profileInfo.appendChild(contactInfo);

  // Ajout de l'image et du contenu au header
  header.appendChild(profileImage);
  header.appendChild(profileInfo);

  // Ajout du header au container
  container.appendChild(header);

  return container;
}
