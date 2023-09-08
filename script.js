const sections = document.querySelectorAll(".section");
let currentSection = 0;

// Disable manual scrolling by setting overflow-y to hidden
document.body.style.overflowY = "hidden";

document.addEventListener("keydown", (e) => {
    if (!e.repeat) {
        if (e.key === "ArrowDown") {
            scrollToSection((currentSection + 1) % sections.length); // Scroll to the next section
        } else if (e.key === "ArrowUp") {
            scrollToSection((currentSection - 1 + sections.length) % sections.length); // Scroll to the previous section
        }
    }
});

document.addEventListener("wheel", (e) => {
    e.preventDefault(); // Prevent default mouse wheel behavior
    if (e.deltaY > 0) {
        scrollToSection((currentSection + 1) % sections.length); // Scroll to the next section
    } else {
        scrollToSection((currentSection - 1 + sections.length) % sections.length); // Scroll to the previous section
    }
});

// Function to scroll to a specific section using scrollIntoView
function scrollToSection(index) {
    const section = sections[index];
    section.scrollIntoView({ behavior: "smooth" });
    currentSection = index;
}
