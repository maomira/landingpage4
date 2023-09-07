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

// Function to scroll to a specific section
function scrollToSection(index) {
    const section = sections[index];
    const offsetTop = section.offsetTop;
    window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
    });
}

// Set an interval to trigger automatic scrolling every hour (adjust the interval as needed)
setInterval(scrollToNextSection, 3600000); // Scroll to next section every hour (3600000 milliseconds)

// Function to scroll to the next section automatically
function scrollToNextSection() {
    currentSection = (currentSection + 1) % sections.length;
    scrollToSection(currentSection);
}
