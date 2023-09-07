// script.js

const sections = document.querySelectorAll(".section");

function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
        e.preventDefault();
        const currentIndex = Array.from(sections).findIndex((section) => section.getBoundingClientRect().top >= 0);
        const nextIndex = (currentIndex + 1) % sections.length;
        scrollToSection(nextIndex);
    }
});

document.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
        const currentIndex = Array.from(sections).findIndex((section) => section.getBoundingClientRect().top >= 0);
        const nextIndex = (currentIndex + 1) % sections.length;
        scrollToSection(nextIndex);
    }
});
