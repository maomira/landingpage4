// script.js

const sections = document.querySelectorAll(".section");
let currentSection = 0;
let isScrolling = false;

function scrollToSection(index) {
    if (!isScrolling) {
        isScrolling = true;
        sections[index].scrollIntoView({ behavior: "smooth" });
        // Remove the setTimeout block to make scrolling responsive
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
        e.preventDefault(); // Prevent default mouse wheel behavior
        if (e.deltaY > 0) {
            currentSection = (currentSection + 1) % sections.length;
        } else {
            currentSection = (currentSection - 1 + sections.length) % sections.length;
        }
    }
});
