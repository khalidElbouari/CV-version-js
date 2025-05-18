import { cv } from "../model/cv.js";
import { createProfileSection } from './profile.js';
import { createEducationSection } from './education.js';
import { createTechnologySkillsSection } from './technologySkills.js';
import { createExperiencesSection } from './experiences.js';
import { createInfoSection } from './infoSection.js';

// Fonction principale pour générer le CV
export function generateCV() {
  const app = document.getElementById('app');
  
  // Créer le conteneur principal
  const container = document.createElement('div');
  container.className = 'container';
  
container.appendChild(createProfileSection(cv.profile));
container.appendChild(createEducationSection(cv.education));
container.appendChild(createExperiencesSection(cv.experiences));
container.appendChild(createTechnologySkillsSection(cv.technologySkills));

container.appendChild(createInfoSection(cv.softSkills, cv.languages , cv.interests));
  
  // Ajouter le conteneur au point d'entrée de l'application
  app.appendChild(container);
}
