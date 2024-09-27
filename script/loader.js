// Function to start the loading counter
function startLoading(url) {
    const hundredsElement = document.getElementById('hundreds');
    const tensElement = document.getElementById('tens');
    const unitsElement = document.getElementById('units');
    const loadingScreen = document.getElementById('loading-screen');

    let increments = getRandomIncrements();
    let currentIndex = 0;

    function getRandomIncrements() {
        let steps = [];
        let current = 0;

        // Random increments between 10 and 20 to make the counter faster
        while (current < 100) {
            let randomIncrement = Math.floor(Math.random() * 11) + 10; // Random 10 to 20
            current += randomIncrement;
            if (current <= 100) steps.push(current);
        }

        // Ensure that the final number is 100
        if (steps[steps.length - 1] !== 100) {
            steps.push(100);
        }

        return steps;
    }

    function updateCounter() {
        if (currentIndex < increments.length) {
            let number = increments[currentIndex];
            let hundreds = Math.floor(number / 100);
            let tens = Math.floor((number % 100) / 10);
            let units = number % 10;

            // Update width and height of the loading screen
            let widthPercentage = 20 + (78 * (number / 100)); // Increase width from 20% to 98%
            let heightPercentage = 50 + (48 * (number / 100)); // Increase height from 50vh to 98vh
            loadingScreen.style.width = `${widthPercentage}%`;
            loadingScreen.style.height = `${heightPercentage}vh`;

            // Update hundreds, tens, and units place
            hundredsElement.style.top = `${-hundreds * 1}em`;  // Scroll hundreds place
            tensElement.style.top = `${-tens * 1}em`;         // Scroll tens place
            unitsElement.style.top = `${-units * 1}em`;       // Scroll units place

            currentIndex++;
            setTimeout(updateCounter, 550); // Delay for counter
        } else {
            // Redirect to the specified URL
            window.location.href = url; // Redirect to the specified URL
        }
    }

    updateCounter();
}

// Start loading when the page loads
window.onload = function() {
    startLoading('home.html'); // Replace with your desired URL
};
