function toggleSection(sectionClass) {
    const sectionEl = document.querySelector(`.${sectionClass.split(' ').join('.')}`);
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
function addSkill() {
    const name = document.getElementById('skillName').value;
    const percent = document.getElementById('skillPercent').value;

    if (!name || percent < 0 || percent > 100) {
        alert("Düzgün məlumat daxil edin.");
        return;
    }

    const container = document.querySelector('.skills');
    const box = document.createElement('div');
    box.className = 'box';
    box.innerHTML = `
        <h4>${name}</h4>
        <div class="percent">
            <div style="width: ${percent}%"></div>
        </div>
    `;
    container.appendChild(box);
    document.getElementById('skillName').value = '';
    document.getElementById('skillPercent').value = '';
}
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("experience-form");
  
    form.addEventListener("submit", function(e) {
        e.preventDefault();
  
        const years = document.getElementById("years").value;
        const company = document.getElementById("company").value;
        const position = document.getElementById("position").value;
        const description = document.getElementById("description").value;
  
        const box = document.createElement("div");
        box.className = "box";
  
        const yearCompany = document.createElement("div");
        yearCompany.className = "year_Company";
        yearCompany.innerHTML = `<h5>${years}</h5><h5>${company}</h5>`;
  
        const text = document.createElement("div");
        text.className = "text";
        text.innerHTML = `<h4>${position}</h4><p>${description}</p>`;
  
        box.appendChild(yearCompany);
        box.appendChild(text);
  
        document.getElementById("experience-list").appendChild(box);
  
        form.reset();
    });
  });
  

function addEducation() {
    var title = document.getElementById("eduTitle").value;
    var school = document.getElementById("eduSchool").value;
    var year = document.getElementById("eduYear").value;

    var container = document.querySelector(".education");
    var newDiv = document.createElement("div");
    newDiv.className = "box";
    newDiv.innerHTML = `
        <div class="year_school">
            <h5>${year}</h5>
            <h5>${school}</h5>
        </div>
        <div class="text">
            <h4>${title}</h4>
        </div>
    `;
    container.appendChild(newDiv);

  
    document.getElementById("eduTitle").value = "";
    document.getElementById("eduSchool").value = "";
    document.getElementById("eduYear").value = "";
}
