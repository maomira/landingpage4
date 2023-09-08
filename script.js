const sections = document.querySelectorAll(".section");
let currentSection = 0;

// Disable manual scrolling by setting overflow-y to hidden
document.body.style.overflowY = "hidden";

// Function to scroll to a specific section
function scrollToSection(index) {
    const section = sections[index];
    const offsetTop = section.offsetTop;
    });
}

// Function to scroll to the next section automatically
function scrollToNextSection() {
    currentSection = (currentSection + 1) % sections.length;
    scrollToSection(currentSection);
}

// Function to scroll to the previous section automatically
function scrollToPrevSection() {
    currentSection = (currentSection - 1 + sections.length) % sections.length;
    scrollToSection(currentSection);
}


document.addEventListener("keydown", (e) => {
    if (!e.repeat) {
        if (e.key === "ArrowDown") {
            scrollToNextSection(); // Scroll to the next section
        } else if (e.key === "ArrowUp") {
            scrollToPrevSection(); // Scroll to the previous section
        }
    }
});

document.addEventListener("wheel", (e) => {
    e.preventDefault(); // Prevent default mouse wheel behavior
    if (e.deltaY > 0) {
        scrollToNextSection(); // Scroll to the next section
    } else {
        scrollToPrevSection(); // Scroll to the previous section
    }
});
