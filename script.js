// script.js

// Function to generate a random number within a range
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to randomly position quotes within the white section
function positionQuotes() {
    const quotes = document.querySelectorAll(".quote");

    quotes.forEach(function (quote) {
        const randomX = getRandomNumber(10, 90); // Adjust the range for horizontal placement
        const randomY = getRandomNumber(10, 90); // Adjust the range for vertical placement

        quote.style.left = `${randomX}%`;
        quote.style.top = `${randomY}%`;
    });
}

// Call the positionQuotes function when the page loads
window.addEventListener("load", function () {
    positionQuotes();
});

