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

// Function to scroll to a specific section with custom animation
function scrollToSection(index) {
    const section = sections[index];
    const offsetTop = section.offsetTop;
    
    // Apply a custom scrolling animation with CSS transitions
    document.body.style.transition = "transform 2s ease-in-out";
    document.body.style.transform = `translateY(-${offsetTop}px)`;
    
    currentSection = index;
}
