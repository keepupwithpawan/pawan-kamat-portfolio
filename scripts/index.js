const resume = document.getElementById('resume');
const linkedin = document.getElementById('linkedin');
const twitter = document.getElementById('twitter');
const instagram = document.getElementById('instagram');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');
const experience = document.getElementById('experience');

// Ensure smooth fade-in on page load (when the page is loaded directly)
window.addEventListener('load', () => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = 1; // Fade the body from opacity 0 to 1
});

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = 1; // Reset opacity to 1 when the tab is visible
    }
});

// Ensure smooth fade-in when navigating back to the page (using the back button)
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {  // Check if the page is loaded from cache
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = 1;
    }
});

resume.addEventListener('click', () => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = 0;

    setTimeout(() => {
        location.href = 'https://drive.google.com/file/d/1n0jaT7JcZGt3aWJdhuFFGIKgzpkG-U0-/view?usp=sharing';
    }, 500);
});

linkedin.addEventListener('click', () => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = 0;

    setTimeout(() => {
        location.href = 'https://www.linkedin.com/in/pawankamat/';
    }, 500);
});

twitter.addEventListener('click', () => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = 0;

    setTimeout(() => {
        location.href = 'https://x.com/keepupwithpa1';
    }, 500);
});

instagram.addEventListener('click', () => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = 0;

    setTimeout(() => {
        location.href = 'https://www.instagram.com/keepupwithpawan/';
    }, 500);
});

projects.addEventListener('click', () => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = 0;

    setTimeout(() => {
        location.href = 'projects.html';
    }, 500);
});

experience.addEventListener('click', () => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = 0;

    setTimeout(() => {
        location.href = 'experience.html';
    }, 500);
});

contact.addEventListener('click', () => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = 0;

    setTimeout(() => {
        location.href = 'contact.html';
    }, 500);
});

//Card Tilt Lader
// JavaScript to make the div tilt towards the mouse on the entire container
const landerContainer = document.getElementById('lander-container');
const landerContent = document.getElementById('lander-content');

landerContainer.addEventListener('mousemove', (e) => {
    const rect = landerContainer.getBoundingClientRect();  // Get the container's position and size
    const x = e.clientX - rect.left;  // Mouse position relative to the container
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;  // Center of the container
    const centerY = rect.height / 2;

    // Calculate the angles for the tilt based on mouse position
    const angleX = (y - centerY) / centerY * 4; // Max tilt of 10 degrees on X-axis
    const angleY = (x - centerX) / centerX * -4; // Max tilt of 10 degrees on Y-axis

    // Apply the transform to the lander-content (tilt effect)
    landerContent.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});

// Reset the rotation when the mouse leaves the container
landerContainer.addEventListener('mouseleave', () => {
    landerContent.style.transform = 'rotateX(0deg) rotateY(0deg)';
});


//Grid Items Image Trail
const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((gridItem) => {
    const trails = gridItem.querySelectorAll(".trail");

    let positions = Array.from({ length: trails.length }).map(() => ({
        x: 0,
        y: 0,
    }));

    let mouseX = 0;
    let mouseY = 0;
    let isMoving = false;
    let fadeOutTimeout;

    // Add event listeners to handle mouse movement inside each grid item
    gridItem.addEventListener("mousemove", (event) => {
        const rect = gridItem.getBoundingClientRect();
        mouseX = event.clientX - rect.left; // Get relative X position
        mouseY = event.clientY - rect.top; // Get relative Y position
        isMoving = true;

        // Clear fade-out timeout and ensure trails are visible
        if (fadeOutTimeout) clearTimeout(fadeOutTimeout);
        trails.forEach((trail) => (trail.style.opacity = 1));

        // Set a timeout to fade out the trails after movement stops
        fadeOutTimeout = setTimeout(() => {
            isMoving = false;
            fadeOutImages();
        }, 500);
    });

    // Fade out trails
    function fadeOutImages() {
        trails.forEach((trail) => (trail.style.opacity = 0));
    }

    // Animate the trail for this grid item
    const spacingFactor = 1; // Adjust this value to increase or decrease spacing

    function animateTrail() {
        positions[0].x = mouseX; // First trail follows mouse closely
        positions[0].y = mouseY;

        for (let i = 1; i < trails.length; i++) {
            // Add spacing factor to the interpolation for greater distance
            positions[i].x +=
                (positions[i - 1].x - positions[i].x) * 0.1 + spacingFactor;
            positions[i].y +=
                (positions[i - 1].y - positions[i].y) * 0.1 + spacingFactor;
        }

        trails.forEach((trail, index) => {
            trail.style.transform = `translate(${positions[index].x}px, ${positions[index].y}px)`;
        });

        requestAnimationFrame(animateTrail);
    }

    // Start the animation for this grid item when hovered
    gridItem.addEventListener("mouseenter", () => {
        animateTrail();
    });

    // Stop the animation and hide trails when leaving the grid item
    gridItem.addEventListener("mouseleave", () => {
        isMoving = false;
        fadeOutImages();
        clearTimeout(fadeOutTimeout); // Clear any existing fade-out timeout
    });
});

//Scroll Down to Next Column
let currentSection = 0; // Keep track of the current section

// Select all sections
const sections = document.querySelectorAll(".section");

// Function to scroll to a specific section
function scrollToSection(index) {
    const top = sections[index].offsetTop; // Get the top offset of the section
    window.scrollTo({
        top: top,
        behavior: "smooth", // Smooth scrolling
    });
}

// Listen for scroll events
document.addEventListener("wheel", (event) => {
    // If scrolling down
    if (event.deltaY > 0 && currentSection < sections.length - 1) {
        currentSection++;
    }
    // If scrolling up
    else if (event.deltaY < 0 && currentSection > 0) {
        currentSection--;
    }

    // Scroll to the determined section
    scrollToSection(currentSection);
});

//Footer Time
async function fetchLocation() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) throw new Error('Failed to fetch location');
        const data = await response.json();
        return data.country_name; // Get country name
    } catch (error) {
        console.error(error);
        return 'Unknown'; // Fallback in case of an error
    }
}

function updateTime(country) {
    const timeElement = document.getElementById('time');
    const now = new Date();

    // Format the time as HH:MM:SS
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Display country and time together
    timeElement.textContent = `${country} - ${hours}:${minutes}:${seconds}`;
}

async function initialize() {
    const country = await fetchLocation(); // Fetch user's country
    updateTime(country); // Update time with the country immediately
    setInterval(() => updateTime(country), 1000); // Update every second
}

// Initialize the location and time update
initialize();

// Array of image URLs
const images = [
    '/images/pa1-profile-1.jpg',
    '/images/about-img.jpeg',
    '/images/pawan-3.jpg',
    '/images/pawan-4.jpg',
    '/images/pawan-5.jpg'
];

// Get the div element
const pawan = document.getElementById('pawan');

// Preload images to ensure they are loaded and available
function preloadImages() {
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Function to change the background image
function changeBackgroundImage() {
    // Generate a random index within the bounds of the images array
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex]; // Get the image URL

    // Set the div's background image to the randomly selected image
    pawan.style.backgroundImage = `url(${randomImage})`;
}

// Add click event listener to the div to change the image on click
pawan.addEventListener('click', changeBackgroundImage);

// Preload the images when the page loads
preloadImages();
