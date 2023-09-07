const sections = document.querySelectorAll(".section");
let currentSection = 0;
let isScrolling = false;

// Disable manual scrolling by setting overflow-y to hidden
document.body.style.overflowY = "hidden";

function scrollToSection(direction) {
    if (!isScrolling) {
        isScrolling = true;
        if (direction === "next") {
            currentSection = (currentSection + 1) % sections.length;
        } else if (direction === "prev") {
            currentSection = (currentSection - 1 + sections.length) % sections.length;
        }
        sections[currentSection].scrollIntoView({ behavior: "smooth" });
    }
}

// Function to scroll to the next section automatically
function scrollToNextSection() {
    currentSection = (currentSection + 1) % sections.length;
    sections[currentSection].scrollIntoView({ behavior: "smooth" });
}

// Set an interval to trigger automatic scrolling (adjust the interval as needed)
setInterval(scrollToNextSection, 5000); // Scroll to next section every 5 seconds

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
