document.addEventListener("DOMContentLoaded", () => {
    // === Dark Mode ===
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle Dark Mode";
    Object.assign(toggleBtn.style, {
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: "1000",
        padding: "10px 15px",
        backgroundColor: "#03a9f4",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    });
    document.body.appendChild(toggleBtn);
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // === Scroll to Top ===
    const scrollBtn = document.createElement("button");
    scrollBtn.textContent = "↑ Top";
    Object.assign(scrollBtn.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px 15px",
        backgroundColor: "#03a9f4",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        display: "none",
        zIndex: "1000",
    });
    document.body.appendChild(scrollBtn);
    window.addEventListener("scroll", () => {
        scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
    });
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // === Greeting and Typewriter ===
    const nameEl = document.querySelector(".ProfileText h2");
    const greetingEl = document.createElement("h3");
    greetingEl.style.color = "#03a9f4";
    greetingEl.style.textAlign = "center";
    greetingEl.style.marginBottom = "10px";

    const hour = new Date().getHours();
    let greeting = "Hello";
    if (hour < 12) greeting = "Good morning ☀️";
    else if (hour < 18) greeting = "Good afternoon ☕";
    else greeting = "Good evening 🌙";

    greetingEl.textContent = greeting;
    document.querySelector(".ProfileText").prepend(greetingEl);

    let index = 0;
    const fullText = "Alizada Ulvi";
    function typeWriter() {
        if (index <= fullText.length) {
            nameEl.innerHTML = fullText.substring(0, index) + "<br><span>Web Developer</span>";
            index++;
            setTimeout(typeWriter, 150);
        }
    }
    nameEl.innerHTML = "";
    typeWriter();

    // === Confetti on Name Click ===
    nameEl.addEventListener("click", () => {
        if (typeof confetti === "function") {
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.5 } });
        }
    });

    // === Coding Duration Display ===
    const startDate = new Date("2024-01-01");
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.44));
    const experienceLine = document.createElement("p");
    experienceLine.textContent = `You've been coding for ${Math.floor(diffMonths / 12)} year(s) and ${diffMonths % 12} month(s)!`;
    experienceLine.style.textAlign = "center";
    experienceLine.style.color = "#03a9f4";
    experienceLine.style.marginTop = "10px";
    document.querySelector(".about.skills").prepend(experienceLine);

    // === Animate Skills Progress ===
    const skillPercents = document.querySelectorAll(".skills .percent div");
    let skillsAnimated = false;
    const originalWidths = [];

    skillPercents.forEach(bar => {
        originalWidths.push(bar.style.width);
        bar.style.width = "0%";
    });

    function animateSkills() {
        const skillsSection = document.querySelector(".skills");
        const position = skillsSection.getBoundingClientRect().top;
        if (position < window.innerHeight && !skillsAnimated) {
            skillsAnimated = true;
            skillPercents.forEach((bar, index) => {
                setTimeout(() => {
                    bar.style.transition = "width 1.5s ease";
                    bar.style.width = originalWidths[index];
                }, 100);
            });
        }
    }
    window.addEventListener("scroll", animateSkills);

    // === Hover Effects for Languages ===
    document.querySelectorAll(".contactInfo.language li").forEach(li => {
        li.addEventListener("mouseenter", () => {
            li.style.backgroundColor = "#035d8f";
            li.style.color = "#fff";
        });
        li.addEventListener("mouseleave", () => {
            li.style.backgroundColor = "transparent";
            li.style.color = "#fff";
        });
    });

    // === Click-to-Copy Contact Info ===
    document.querySelectorAll(".contactInfo ul li").forEach(item => {
        item.title = "Click to copy";
        item.addEventListener("click", () => {
            navigator.clipboard.writeText(item.innerText.trim());
            item.title = "Copied!";
            setTimeout(() => item.title = "Click to copy", 1500);
        });
    });

    // === Skill Tooltip on Hover ===
    document.querySelectorAll(".skills .box").forEach(box => {
        box.addEventListener("mouseenter", () => {
            const tooltip = document.createElement("span");
            tooltip.className = "tooltip";
            tooltip.textContent = "Skill level: " + box.querySelector(".percent div").style.width;
            Object.assign(tooltip.style, {
                position: "absolute",
                background: "#03a9f4",
                color: "#fff",
                padding: "4px 8px",
                borderRadius: "5px",
                fontSize: "12px",
                top: "-25px",
                left: "160px",
                whiteSpace: "nowrap",
            });
            box.appendChild(tooltip);
        });
        box.addEventListener("mouseleave", () => {
            const tooltip = box.querySelector(".tooltip");
            if (tooltip) tooltip.remove();
        });
    });

    // === Auto Footer Year ===
    const footer = document.querySelector("footer");
    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML = `&copy; ${year} Alizada Ulvi. All rights reserved.`;
    }

    // === Easter Egg U Key ===
    document.addEventListener("keydown", (e) => {
        if (e.key.toLowerCase() === "u") {
            alert("👀 You just unlocked Ulvi's secret code mode!");
        }
    });

    // === Download CV Button ===
    const cvBtn = document.getElementById("downloadCV");
    if (cvBtn) {
        cvBtn.addEventListener("click", () => {
            window.open("cv.pdf", "_blank");
        });
    }

    // === Contact Form Validation ===
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const response = document.getElementById("formResponse");

            if (!name || !email || !message) {
                response.textContent = "All fields are required!";
                return;
            }

            response.textContent = "Message sent successfully! (Simulated)";
            form.reset();
        });
    }

    // === Business Stats Counters ===
    function animateCounter(id, target) {
        let count = 0;
        const speed = target / 100;
        const update = () => {
            if (count < target) {
                count += speed;
                document.getElementById(id).textContent = Math.ceil(count);
                requestAnimationFrame(update);
            } else {
                document.getElementById(id).textContent = target;
            }
        };
        update();
    }

    if (document.getElementById("clients")) {
        animateCounter("clients", 24);
        animateCounter("projects", 52);
        animateCounter("years", 3);
    }
});
