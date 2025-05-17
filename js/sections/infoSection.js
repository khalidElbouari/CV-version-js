export function createInfoSection(softSkills, languages, interests) {
    // Créer la section principale
    const section = document.createElement("section");
    section.classList.add("info-section");

    // Créer le bloc de soft skills
    const softSkillsBlock = document.createElement("div");
    softSkillsBlock.classList.add("info-block");
    
    const softSkillsTitle = document.createElement("div");
    softSkillsTitle.classList.add("section-title");
    softSkillsTitle.textContent = "Soft Skills:";
    softSkillsBlock.appendChild(softSkillsTitle);
    
    softSkills.forEach(skill => {
        const item = document.createElement("div");
        item.classList.add("item");
        item.textContent = skill;
        softSkillsBlock.appendChild(item);
    });
    
    section.appendChild(softSkillsBlock);
    
    // Ajouter une ligne verticale entre les blocs
    const verticalLine1 = document.createElement("div");
    verticalLine1.classList.add("vertical-line");
    section.appendChild(verticalLine1);
    
    // Créer le bloc des langues
    const languagesBlock = document.createElement("div");
    languagesBlock.classList.add("info-block");
    
    const languagesTitle = document.createElement("div");
    languagesTitle.classList.add("section-title");
    languagesTitle.textContent = "Langues:";
    languagesBlock.appendChild(languagesTitle);
    
    // Ajouter les langues
    languages.forEach(lang => {
        const item = document.createElement("div");
        item.classList.add("item");
        item.textContent = lang.language;
        languagesBlock.appendChild(item);
    });
    
    section.appendChild(languagesBlock);
    
    // Ajouter une ligne verticale entre les blocs
    const verticalLine2 = document.createElement("div");
    verticalLine2.classList.add("vertical-line");
    section.appendChild(verticalLine2);
    
    // Créer le bloc des loisirs
    const interestsBlock = document.createElement("div");
    interestsBlock.classList.add("info-block");
    
    const interestsTitle = document.createElement("div");
    interestsTitle.classList.add("section-title");
    interestsTitle.textContent = "Loisirs:";
    interestsBlock.appendChild(interestsTitle);
    
    interests.forEach(interest => {
        const item = document.createElement("div");
        item.classList.add("item");
        item.textContent = interest;
        interestsBlock.appendChild(item);
    });
    
    section.appendChild(interestsBlock);
    
    return section;
}
