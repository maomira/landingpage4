// script.js

const sections = document.querySelectorAll(".section");
let scrolling = false;

function scrollToSection(index) {
    if (!scrolling) {
        scrolling = true;
        sections[index].scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
            scrolling = false;
        }, 1000); // Adjust the delay as needed to match the scroll duration
    }
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
