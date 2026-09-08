// ========================================
// SIDDESH PORTFOLIO — script.js
// ========================================

const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");
const reveals = document.querySelectorAll(".reveal");
const cursorGlow = document.querySelector(".cursor-glow");
const typingText = document.getElementById("typingText");
const year = document.getElementById("year");


// ========================================
// CURRENT YEAR
// ========================================

if (year) {
    year.textContent = new Date().getFullYear();
}


// ========================================
// MOBILE MENU
// ========================================

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        menuToggle.classList.toggle("active");
    });
}


// Close mobile menu when clicking a link

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuToggle.classList.remove("active");
    });
});


// ========================================
// NAVBAR ON SCROLL
// ========================================

function updateNavbar() {
    if (window.scrollY > 25) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", updateNavbar);

updateNavbar();


// ========================================
// ACTIVE NAVIGATION LINK
// ========================================

function updateActiveSection() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;
        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.id;
        }

    });

    navLinks.forEach(link => {

        const linkTarget = link.getAttribute("href");

        if (linkTarget === `#${currentSection}`) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }

    });
}

window.addEventListener("scroll", updateActiveSection);

updateActiveSection();


// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);

reveals.forEach(element => {
    revealObserver.observe(element);
});


// ========================================
// MOUSE CURSOR GLOW
// ========================================

if (
    cursorGlow &&
    window.matchMedia("(pointer:fine)").matches
) {

    window.addEventListener("pointermove", event => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    });

}


// ========================================
// TYPING EFFECT
// ========================================

const phrases = [
    "digital systems",
    "AI experiments",
    "developer tools",
    "computer vision",
    "automation"
];

let phraseIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentPhrase =
        phrases[phraseIndex];

    // Typing

    if (!deleting) {

        characterIndex++;

        typingText.textContent =
            currentPhrase.substring(
                0,
                characterIndex
            );

        // Finished typing

        if (
            characterIndex ===
            currentPhrase.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    }

    // Deleting

    else {

        characterIndex--;

        typingText.textContent =
            currentPhrase.substring(
                0,
                characterIndex
            );

        // Finished deleting

        if (characterIndex === 0) {

            deleting = false;

            phraseIndex =
                (phraseIndex + 1) %
                phrases.length;

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 80
    );
}

typeEffect();


// ========================================
// PROJECT PLACEHOLDER LINKS
// ========================================

const placeholderLinks =
    document.querySelectorAll(".placeholder");

placeholderLinks.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        alert(
            "Replace this # with your real GitHub or project URL."
        );

    });

});


// ========================================
// SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const targetId =
            link.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// ========================================
// PROJECT CARD TILT EFFECT
// ========================================

const projectCards =
    document.querySelectorAll(".project");

if (window.matchMedia("(pointer:fine)").matches) {

    projectCards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    ((y - centerY) / centerY) * -2;

                const rotateY =
                    ((x - centerX) / centerX) * 2;

                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-4px)`;

            }
        );

        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform = "";

            }
        );

    });

}


// ========================================
// SKILL CARD HOVER
// ========================================

const skillCards =
    document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.classList.add("hovered");

    });

    card.addEventListener("mouseleave", () => {

        card.classList.remove("hovered");

    });

});


// ========================================
// TERMINAL STATUS
// ========================================

const terminal =
    document.querySelector(".terminal-window");

if (terminal) {

    terminal.addEventListener(
        "mouseenter",
        () => {
            terminal.classList.add("active");
        }
    );

    terminal.addEventListener(
        "mouseleave",
        () => {
            terminal.classList.remove("active");
        }
    );

}


// ========================================
// REDUCE MOTION SUPPORT
// ========================================

const reducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

if (reducedMotion.matches) {

    document.documentElement.style.scrollBehavior =
        "auto";

}


// ========================================
// CONSOLE MESSAGE
// ========================================

console.log(
`
╔══════════════════════════════════╗
║        SIDDESH.DEV               ║
║                                  ║
║  Hello, developer 👋             ║
║  Thanks for checking the code.   ║
║                                  ║
║  Keep building. Keep learning.   ║
╚══════════════════════════════════╝
`
);
