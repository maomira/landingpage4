window.addEventListener("scroll", function () {
    const yOffset = window.pageYOffset;
    const parallaxElements = document.querySelectorAll(".parallax");

    parallaxElements.forEach(function (element) {
        const speed = element.getAttribute("data-speed");
        element.style.transform = `translateY(${yOffset * speed}px)`;
    });

    const imageElement = document.querySelector(".parallax-image");
    const imageSpeed = imageElement.getAttribute("data-speed");
    imageElement.style.transform = `translateY(${yOffset * imageSpeed}px)`;
});
