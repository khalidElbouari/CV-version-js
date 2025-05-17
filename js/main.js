import { cv } from './cv.js';
import { createProfileSection } from './sections/profile.js';
import { createEducationSection } from './sections/education.js';
import { createTechnologySkillsSection } from './sections/technologySkills.js';
import { createExperiencesSection } from './sections/experiences.js';
import { createInfoSection } from './sections/infoSection.js';


const app = document.getElementById("app");

// Ajouter toutes les sections
app.appendChild(createProfileSection(cv.profile));
app.appendChild(createEducationSection(cv.education));
app.appendChild(createTechnologySkillsSection(cv.technologySkills));
app.appendChild(createExperiencesSection(cv.experiences));
app.appendChild(createInfoSection(cv.softSkills, cv.languages , cv.interests));


