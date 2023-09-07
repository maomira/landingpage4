// script.js

const sections = document.querySelectorAll(".section");
let currentSection = 0;
let isScrolling = false;

function scrollToSection(direction) {
    if (!isScrolling) {
        isScrolling = true;
        if (direction === "next") {
            currentSection = (currentSection + 1) % sections.length;
        } else if (direction === "prev") {
            currentSection = (currentSection - 1 + sections.length) % sections.length;
        }
        sections[currentSection].scrollIntoView({ behavior: "smooth" });
        isScrolling = false;
    }
}

document.addEventListener("keydown", (e) => {
    if ((e.key === "ArrowDown" || e.key === "ArrowUp") && !isScrolling) {
        e.preventDefault();
        if (e.key === "ArrowDown") {
            scrollToSection("next"); // Scroll to the next section
        } else if (e.key === "ArrowUp") {
            scrollToSection("prev"); // Scroll to the previous section
        }
    }
});

document.addEventListener("wheel", (e) => {
    if (!isScrolling) {
        isScrolling = true;
        e.preventDefault(); // Prevent default mouse wheel behavior
        if (e.deltaY > 0) {
            scrollToSection("next"); // Scroll to the next section
        } else {
            scrollToSection("prev"); // Scroll to the previous section
        }
    }
});
