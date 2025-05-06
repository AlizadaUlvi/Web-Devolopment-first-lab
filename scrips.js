function toggleSection(section) {
    const sectionEl = document.querySelector(`.${section}`);
    if (sectionEl) {
        sectionEl.style.display = sectionEl.style.display === 'none' ? 'block' : 'none';
    }
}

function addEducation() {
    const container = document.querySelector('.contactInfo.education ul');
    const li = document.createElement('li');
    li.innerHTML = `
        <h5>YYYY - YYYY</h5>
        <h4>Degree Title</h4>
        <h4>University Name</h4>
    `;
    container.appendChild(li);
}

function addExperience() {
    const container = document.querySelector('.about:nth-of-type(2)');
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.innerHTML = `
        <div class="year_Company">
            <h5>YYYY - YYYY</h5>
            <h5>Company Name</h5>
        </div>
        <div class="text">
            <h4>Job Title</h4>
            <p>Description goes here...</p>
        </div>
    `;
    container.appendChild(newBox);
}

function addSkill() {
    const container = document.querySelector('.about.skills');
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.innerHTML = `
        <h4>New Skill</h4>
        <div class="percent">
            <div style="width: 50%;"></div>
        </div>
    `;
    container.appendChild(newBox);
}
