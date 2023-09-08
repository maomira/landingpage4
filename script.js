const sections = document.querySelectorAll(".section");
let currentSection = 0;
let isScrolling = false;

// Disable manual scrolling by setting overflow-y to hidden
document.body.style.overflowY = "hidden";

document.addEventListener("keydown", (e) => {
    if (!e.repeat) {
        if (e.key === "ArrowDown") {
            scrollToSection("next"); // Scroll to the next section
        } else if (e.key === "ArrowUp") {
            scrollToSection("prev"); // Scroll to the previous section
        }
    }
});

document.addEventListener("wheel", (e) => {
    e.preventDefault(); // Prevent default mouse wheel behavior
    if (!isScrolling) {
        isScrolling = true;
        if (e.deltaY > 0) {
            scrollToSection("next"); // Scroll to the next section
        } else {
            scrollToSection("prev"); // Scroll to the previous section
        }
        setTimeout(() => {
            isScrolling = false;
        }, 1000); // Adjust the delay as needed to match the scroll duration
    }
});

// Function to scroll to a specific section using scrollIntoView
function scrollToSection(direction) {
    if (!isScrolling) {
        isScrolling = true;
        const nextSection = (currentSection + 1) % sections.length;
        const prevSection = (currentSection - 1 + sections.length) % sections.length;

        if (direction === "next") {
            sections[nextSection].scrollIntoView({ behavior: "smooth" });
            currentSection = nextSection;
        } else if (direction === "prev") {
            sections[prevSection].scrollIntoView({ behavior: "smooth" });
            currentSection = prevSection;
        }
        setTimeout(() => {
            isScrolling = false;
        }, 1000); // Adjust the delay as needed to match the scroll duration
    }
}
