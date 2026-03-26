window.addEventListener("load", () => {
    const animations = [
        { selector: ".top-tags", class: "from-top", delay: 0 },
        { selector: ".left h1", class: "from-left", delay: 0.3 },
        { selector: ".desc", class: "from-left", delay: 0.6 },
        { selector: ".live-line", class: "from-bottom", delay: 0.9 },
        { selector: ".buttons", class: "zoom-in", delay: 1.2 },
        { selector: ".site-link", class: "from-bottom", delay: 1.5 },
        { selector: ".right", class: "from-right", delay: 0.6 },
        { selector: ".stats", class: "from-bottom", delay: 1.8 },
    ];

    animations.forEach((item) => {
        const el = document.querySelector(item.selector);
        if (el) {
            el.style.animationDelay = `${item.delay}s`;
            el.classList.add(item.class);
        }
    });

    setTimeout(() => {
        const intro = document.getElementById("intro");
        const site = document.getElementById("real-site");

        intro.classList.add("smooth-out");

        setTimeout(() => {
            intro.style.display = "none";
            site.style.display = "block";
            initScrollAnimations();
            cacheSections();
            onScroll();
        }, 1200);
    }, 3800);
});

function initScrollAnimations() {
    const elements = document.querySelectorAll(
        ".slide-in-left, .slide-in-right, .slide-in-up"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translate(0)";
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
}

const sections = Array.from(document.querySelectorAll("section"));
const navItems = Array.from(document.querySelectorAll(".ul-list li"));
const scrollTopBtn = document.getElementById("scrollTopBtn");
const projectCards = Array.from(document.querySelectorAll(".project-card"));
const projectModal = document.getElementById("projectModal");
const projectModalImage = document.getElementById("projectModalImage");
const projectModalDots = document.getElementById("projectModalDots");
const projectModalTitle = document.getElementById("projectModalTitle");
const projectModalSummary = document.getElementById("projectModalSummary");
const projectModalRole = document.getElementById("projectModalRole");
const projectModalStatus = document.getElementById("projectModalStatus");
const projectModalHighlights = document.getElementById("projectModalHighlights");
const projectModalStack = document.getElementById("projectModalStack");
const projectModalLinks = document.getElementById("projectModalLinks");
const projectModalClose = document.querySelector(".project-modal-close");
const projectSlideButtons = document.querySelectorAll("[data-slide]");
const projectModalCloseTriggers = document.querySelectorAll("[data-modal-close]");
const assetPath = (path) => new URL(path, import.meta.url).href;

const projectData = {
    cricketverse: {
        title: "CricketVerse",
        summary:
            "A full-stack cricket analytics platform designed to combine match data, interactive views, and a polished fan-facing experience in one product.",
        role: "Full-Stack Project",
        status: "Live Demo Available",
        highlights: [
            "Built an interactive cricket-focused experience around analytics, match visibility, and user-friendly dashboards.",
            "Combined frontend development with backend and ML-oriented integration thinking for a richer product flow.",
            "Focused on making data-heavy content feel accessible and engaging through a modern UI.",
        ],
        stack: ["React.js", "Node.js", "MongoDB", "Flask ML"],
        links: [
            {
                label: "GitHub",
                href: "https://github.com/asrafaligit",
                icon: "fa-brands fa-github",
            },
            {
                label: "Live Demo",
                href: "https://cricket-verse.vercel.app/",
                icon: "fa-solid fa-arrow-up-right-from-square",
            },
        ],
        images: [
            {
                src: assetPath("./src/assets/Images/CricketVerse_Dashboard.png"),
                alt: "CricketVerse dashboard overview",
            },
            {
                src: assetPath("./src/assets/Images/CricketVerse_Dashboard2.png"),
                alt: "CricketVerse match and analytics interface",
            },
            {
                src: assetPath("./src/assets/Images/CricketVerse_Dashboard3.png"),
                alt: "CricketVerse data-driven feature preview",
            },
        ],
    },
    snakegame: {
        title: "Snake Game",
        summary:
            "A browser-based Snake Game built with Angular and TypeScript, structured to keep gameplay logic and UI flow cleanly separated.",
        role: "Frontend Project",
        status: "Source Available",
        highlights: [
            "Implemented the classic Snake gameplay experience with a maintainable Angular and TypeScript codebase.",
            "Kept UI behavior and game logic decoupled to support cleaner updates and easier debugging.",
            "Used the project to strengthen frontend architecture and data-structure-driven problem solving.",
        ],
        stack: ["Angular", "TypeScript", "Game Logic", "Data Structures"],
        links: [
            {
                label: "GitHub",
                href: "https://github.com/asrafaligit/snake-game",
                icon: "fa-brands fa-github",
            },
        ],
        images: [
            {
                src: assetPath("./src/assets/Images/snake-game1.png"),
                alt: "Snake Game start screen",
            },
            {
                src: assetPath("./src/assets/Images/snake-game2.png"),
                alt: "Snake Game in progress",
            },
            {
                src: assetPath("./src/assets/Images/snake-game3.png"),
                alt: "Snake Game gameplay view",
            },
        ],
    },
    personaldiary: {
        title: "Personal Diary",
        summary:
            "A full-stack personal diary application for secure note keeping, user authentication, and a clean everyday writing experience.",
        role: "Full-Stack Project",
        status: "Source Available",
        highlights: [
            "Created a diary workflow centered around secure note management and user authentication.",
            "Built responsive pages to keep the experience usable across desktop and mobile layouts.",
            "Used PHP and database fundamentals to shape a complete CRUD-style application flow.",
        ],
        stack: ["HTML", "CSS", "PHP", "DBMS"],
        links: [
            {
                label: "GitHub",
                href: "https://github.com/asrafaligit/personalDiary",
                icon: "fa-brands fa-github",
            },
        ],
        images: [
            {
                src: assetPath("./src/assets/Images/personDiary (1).png"),
                alt: "Personal Diary dashboard preview",
            },
            {
                src: assetPath("./src/assets/Images/personDiary (2).png"),
                alt: "Personal Diary note interface",
            },
            {
                src: assetPath("./src/assets/Images/personDiary (3).png"),
                alt: "Personal Diary responsive layout",
            },
        ],
    },
};

let cachedSections = [];
let scrollTicking = false;
let activeProjectKey = null;
let activeSlideIndex = 0;
let lastFocusedElement = null;

function cacheSections() {
    cachedSections = sections.map((section) => ({
        id: section.getAttribute("id"),
        top: section.offsetTop,
        height: section.offsetHeight,
    }));
}

function onScroll() {
    if (scrollTicking) {
        return;
    }

    scrollTicking = true;
    window.requestAnimationFrame(() => {
        const y = window.scrollY || window.pageYOffset;
        let current = "";

        cachedSections.forEach((section) => {
            const sectionTop = section.top - 200;
            const sectionBottom = section.top + section.height;

            if (y >= sectionTop && y < sectionBottom) {
                current = section.id;
            }
        });

        navItems.forEach((item) => {
            item.classList.remove("active");

            const link = item.querySelector("a");
            if (link && link.getAttribute("href") === `#${current}`) {
                item.classList.add("active");
            }
        });

        if (scrollTopBtn) {
            scrollTopBtn.classList.toggle("visible", y > 450);
        }

        scrollTicking = false;
    });
}

function renderProjectDetails(project) {
    projectModalTitle.textContent = project.title;
    projectModalSummary.textContent = project.summary;
    projectModalRole.textContent = project.role;
    projectModalStatus.textContent = project.status;

    projectModalHighlights.innerHTML = "";
    project.highlights.forEach((highlight) => {
        const item = document.createElement("li");
        item.textContent = highlight;
        projectModalHighlights.appendChild(item);
    });

    projectModalStack.innerHTML = "";
    project.stack.forEach((tech) => {
        const tag = document.createElement("span");
        tag.textContent = tech;
        projectModalStack.appendChild(tag);
    });

    projectModalLinks.innerHTML = "";
    project.links.forEach((link) => {
        const anchor = document.createElement("a");
        anchor.href = link.href;
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";

        const icon = document.createElement("i");
        icon.className = link.icon;

        const text = document.createElement("span");
        text.textContent = link.label;

        anchor.append(icon, text);
        projectModalLinks.appendChild(anchor);
    });
}

function renderProjectSlide() {
    const project = projectData[activeProjectKey];
    if (!project) {
        return;
    }

    const currentImage = project.images[activeSlideIndex];
    projectModalImage.src = currentImage.src;
    projectModalImage.alt = currentImage.alt;

    projectModalDots.innerHTML = "";
    project.images.forEach((image, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "project-slider-dot";
        dot.dataset.index = `${index}`;
        dot.setAttribute("aria-label", `Show slide ${index + 1} for ${project.title}`);
        dot.setAttribute("aria-pressed", index === activeSlideIndex ? "true" : "false");

        if (index === activeSlideIndex) {
            dot.classList.add("active");
        }

        projectModalDots.appendChild(dot);
    });
}

function openProjectModal(projectKey) {
    const project = projectData[projectKey];

    if (!project || !projectModal) {
        return;
    }

    activeProjectKey = projectKey;
    activeSlideIndex = 0;
    lastFocusedElement = document.activeElement;

    renderProjectDetails(project);
    renderProjectSlide();

    projectModal.classList.add("open");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    if (projectModalClose) {
        projectModalClose.focus();
    }
}

function closeProjectModal() {
    if (!projectModal || !projectModal.classList.contains("open")) {
        return;
    }

    projectModal.classList.remove("open");
    projectModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    activeProjectKey = null;

    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
        lastFocusedElement.focus();
    }
}

function changeProjectSlide(step) {
    const project = projectData[activeProjectKey];
    if (!project) {
        return;
    }

    activeSlideIndex =
        (activeSlideIndex + step + project.images.length) % project.images.length;
    renderProjectSlide();
}

function setProjectSlide(index) {
    const project = projectData[activeProjectKey];
    if (!project || index < 0 || index >= project.images.length) {
        return;
    }

    activeSlideIndex = index;
    renderProjectSlide();
}

function initProjectModal() {
    projectCards.forEach((card) => {
        const projectKey = card.dataset.project;

        card.addEventListener("click", () => openProjectModal(projectKey));
        card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openProjectModal(projectKey);
            }
        });
    });

    projectModalCloseTriggers.forEach((trigger) => {
        trigger.addEventListener("click", closeProjectModal);
    });

    projectSlideButtons.forEach((button) => {
        button.addEventListener("click", () => {
            changeProjectSlide(button.dataset.slide === "next" ? 1 : -1);
        });
    });

    if (projectModalDots) {
        projectModalDots.addEventListener("click", (event) => {
            const dot = event.target.closest(".project-slider-dot");
            if (!dot) {
                return;
            }

            setProjectSlide(Number(dot.dataset.index));
        });
    }
}

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", () => {
    cacheSections();
    onScroll();
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
        const href = this.getAttribute("href");
        if (!href || href === "#") {
            return;
        }

        event.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 120,
                behavior: "smooth",
            });
        }
    });
});

document.addEventListener("keydown", (event) => {
    if (!projectModal || !projectModal.classList.contains("open")) {
        return;
    }

    if (event.key === "Escape") {
        closeProjectModal();
    }

    if (event.key === "ArrowRight") {
        changeProjectSlide(1);
    }

    if (event.key === "ArrowLeft") {
        changeProjectSlide(-1);
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}

initProjectModal();
