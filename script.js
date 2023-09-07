// script.js

const sections = document.querySelectorAll(".section");
let currentSection = 0;
let isScrolling = false;

function scrollToSection(index) {
    if (!isScrolling) {
        isScrolling = true;
        sections[index].scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
            isScrolling = false;
        }, 0); // Remove the delay
    }
}

document.addEventListener("keydown", (e) => {
    if ((e.key === "ArrowDown" || e.key === "ArrowUp") && !isScrolling) {
        e.preventDefault();
        if (e.key === "ArrowDown") {
            currentSection = (currentSection + 1) % sections.length;
        } else if (e.key === "ArrowUp") {
            currentSection = (currentSection - 1 + sections.length) % sections.length;
        }
        scrollToSection(currentSection);
    }
});

document.addEventListener("wheel", (e) => {
    if (!isScrolling) {
        isScrolling = true;
        const scrollDirection = e.deltaY > 0 ? 1 : -1;
        currentSection = (currentSection + scrollDirection + sections.length) % sections.length;
        scrollToSection(currentSection);
    }
});
