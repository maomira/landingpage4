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
    }
});

// Function to scroll to a specific section with custom animation
function scrollToSection(direction) {
    if (!isScrolling) {
        isScrolling = true;
        const section = sections[currentSection];
        const offsetTop = section.offsetTop;
        document.body.style.transition = "transform 0.5s ease-in-out";
        document.body.style.transform = `translateY(-${offsetTop}px)`;

        // Reset the transition when the transition ends
        document.body.addEventListener("transitionend", () => {
            document.body.style.transition = "";
            isScrolling = false;
        });

        if (direction === "next") {
            currentSection = (currentSection + 1) % sections.length;
        } else if (direction === "prev") {
            currentSection = (currentSection - 1 + sections.length) % sections.length;
        }
    }
}
