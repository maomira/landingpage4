// script.js

// Function to handle parallax scrolling effect
function parallaxScroll() {
    const parallaxSections = document.querySelectorAll(".parallax");

    window.addEventListener("scroll", function () {
        parallaxSections.forEach(function (section) {
            const speed = parseFloat(section.getAttribute("data-speed"));
            const yOffset = window.pageYOffset;
            const translateValue = yOffset * speed;
            section.querySelector(".background-image").style.transform = `translateY(${translateValue}px)`;
        });
    });
}

// Call the parallaxScroll function when the page loads
window.addEventListener("load", function () {
    parallaxScroll();
});

