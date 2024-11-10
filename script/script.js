const circle = document.getElementById('circle');
const youtube = document.getElementById('youtube');
const linkedin = document.getElementById('linkedin');
const faLinkedin = document.getElementById('fa-linkedin');
const twitter = document.getElementById('twitter');
const faTwitter = document.getElementById('fa-square-x-twitter');
const whatsapp = document.getElementById('whatsapp');
const faInstagram = document.getElementById('fa-square-instagram');
const notion = document.getElementById('duo-tone-graphic');
const gallery = document.getElementById('expand-arrow');
const contact = document.getElementById('contact-arrow');
const logo = document.getElementById('name');
const resume = document.getElementById('resume');
const about = document.getElementById('about');
const projects = document.getElementById('projects');

circle.addEventListener("click", function () {
    document.getElementById("main-container-2").scrollIntoView({ behavior: 'smooth' });
});

youtube.addEventListener("click", function () {
    window.open("https://www.youtube.com/@keepupwithpawan", "_blank");
});

linkedin.addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/pawankamat/", "_blank");
});

twitter.addEventListener("click", function () {
    window.open("https://x.com/keepupwithpa1", "_blank");
});

whatsapp.addEventListener("click", function () {
    window.open("https://wa.me/9324565729", "_blank");
});

notion.addEventListener("click", function () {
    window.open("https://heliotrope-steel-a31.notion.site/Pawan-Kamat-Portfolio-f18f0f0a11d74c538f5053fc9e5791a0?pvs=74", "_blank");
});

gallery.addEventListener("click", function () {
    window.open('gallery.html', '_blank');
});

contact.addEventListener("click", function () {
    window.open('contact.html', '_blank');
});

logo.addEventListener("click", function () {
    window.open('home.html', '_blank');
});

resume.addEventListener("click", function () {
    window.open("https://drive.google.com/file/d/1mLNzuuwm-Pr8Yk1gc2yt5tekozrhxrx3/view?usp=sharing", "_blank");
});

about.addEventListener("click", function () {
    window.open('about.html', '_blank');
});

projects.addEventListener("click", function () {
    window.open('projects.html', '_blank');
});

faLinkedin.addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/pawankamat/", "_blank");
});

faTwitter.addEventListener("click", function () {
    window.open("https://x.com/keepupwithpa1", "_blank");
});

faInstagram.addEventListener("click", function () {
    window.open("https://www.instagram.com/keepupwithpawan/", "_blank");
});

// Function to fetch user's system time
function getSystemTime() {
    const currentTime = new Date();
    return currentTime.toLocaleTimeString(); // returns time in HH:MM:SS AM/PM format
}

// Function to get user's location (country)
function getUserCountry(callback) {
    fetch("https://ipapi.co/json/")
        .then(response => response.json())
        .then(data => {
            callback(data.country_name); // gets country name from the API response
        })
        .catch(error => {
            console.error("Error fetching location:", error);
            callback("Unknown");
        });
}

// Function to fetch weather based on country using WeatherAPI
function getWeather(country, callback) {
    const apiKey = "8684fad529b1447fbba143744241609"; // Replace with your WeatherAPI key
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${country}`)
        .then(response => response.json())
        .then(data => {
            const weather = data.current.condition.text;
            const temp = data.current.temp_c;
            callback(`${weather}, ${temp}°C`);
        })
        .catch(error => {
            console.error("Error fetching weather:", error);
            callback("Weather data unavailable");
        });
}

// Function to update the time on the page
// Function to update the time on the page every second
function updateTime() {
    const timeElement = document.getElementById('dynamic-info');
    
    // Only update the time part dynamically
    const currentContent = timeElement.innerHTML;
    const timeContent = `Current time is <span class="bold-data">${getSystemTime()}</span>`;
    
    // Replace the time portion in the content
    const newContent = currentContent.replace(/Current time is <span class="bold-data">[^<]+<\/span>/, timeContent);
    timeElement.innerHTML = newContent;
}

function typeWriter(text, element, delay = 100) {
    let index = 0;

    function type() {
        if (index < text.length) {
            // If the current character is a line break
            if (text.startsWith('<br>', index)) {
                element.innerHTML += '<br>';
                index += 4; // Skip over the <br> tag
            }
            // If the current character is the start of a span
            else if (text.startsWith('<span', index)) {
                const endIndex = text.indexOf('</span>', index) + 7; // Find the end of the span
                const spanContent = text.substring(index, endIndex);
                element.innerHTML += spanContent; // Add the entire span
                index = endIndex; // Move the index past the span
            } else {
                element.innerHTML += text.charAt(index);
                index++;
            }
            setTimeout(type, delay);
        }
    }
    type();
}

// Function to fill the <p> tag dynamically with typewriter effect
function fillDynamicInfo() {
    const infoElement = document.getElementById('dynamic-info');

    getUserCountry((country) => {
        getWeather(country, (weather) => {
            const initialText = `You are in <span class="bold-data">${country}</span> <br>Current time is <span class="bold-data">${getSystemTime()}</span> <br>You are experiencing <span class="bold-data">${weather}</span>`;
            infoElement.innerHTML = ''; // Clear existing content
            typeWriter(initialText, infoElement, 80); // Add typewriter effect
        });
    });

    // Update only the time every second
    setInterval(updateTime, 1000); // 1000ms = 1 second
}

// Run the function on page load
window.onload = fillDynamicInfo;


// Function to handle smooth scrolling with a delay
function smoothScrollToMainContainer2() {
    document.getElementById('main-container-2').scrollIntoView({
        behavior: 'smooth'
    });
}

// Debounce function to limit the rate at which a function is executed
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Add event listener for scroll on main-container-1 with debounce
document.getElementById('main-container-1').addEventListener('scroll', debounce(() => {
    smoothScrollToMainContainer2();
}, 1000)); // 1000ms delay for debounce

// Run the function on page load
window.onload = fillDynamicInfo;

// Pop-out animation for Bento Grid Items
circle.addEventListener('click', function() {
    // Scroll to main-container-2 and show it
    document.getElementById('main-container-2').style.display = 'flex';
    document.getElementById('main-container-2').scrollIntoView({
        behavior: 'smooth'
    });

    let grids = document.querySelectorAll('.grid-item');

    // Remove existing animate class using animationend to ensure all animations are done
    grids.forEach(grid => {
        grid.classList.remove('animate'); 

        // Add event listener for when the animation ends
        grid.addEventListener('animationend', () => {
            grid.classList.remove('animate'); // Ensure the class is removed after the animation
        });
    });

    // Trigger the animation after a short delay to allow the scroll to finish
    setTimeout(function() {
        grids.forEach((grid, index) => {
            setTimeout(() => {
                grid.classList.add('animate'); // Add animation class with staggered delay
            }, index * 120); // Stagger each animation by 100ms
        });
    }, 500); // Start the animation 500ms after scroll finishes
});

// Custom Cursor
const cursor = document.getElementById("cursor");
const dotCount = 7;  // Number of trailing dots
const dotSize = 5;   // Size of the dots
let mousePosition = { x: 0, y: 0 };  // Mouse coordinates
let dots = [];  // Array to store dot instances
let isMouseInside = true; // Flag to track if the mouse is inside the window

// Dot class to create and manage individual dots
class Dot {
  constructor(index = 0) {
    this.index = index;
    this.x = 0;
    this.y = 0;
    this.element = document.createElement("span"); // Create a dot element
    this.element.style.width = `${dotSize}px`;
    this.element.style.height = `${dotSize}px`;
    this.element.style.position = 'absolute';
    this.element.style.borderRadius = '50%';
    this.element.style.backgroundColor = '#571F4E';
    this.element.style.opacity = 1;  // Initially visible
    cursor.appendChild(this.element);  // Append each dot to the cursor div
  }

  // Update the position of each dot
  updatePosition(x, y) {
    this.x = x;
    this.y = y;
    TweenMax.set(this.element, { x: this.x, y: this.y });
  }

  // Method to hide the dot
  hide() {
    TweenMax.to(this.element, 0.2, { opacity: 0 });
  }

  // Method to show the dot
  show() {
    TweenMax.to(this.element, 0.2, { opacity: 1 });
  }
}

// Function to create the dots and store them in the dots array
function createDots() {
  for (let i = 0; i < dotCount; i++) {
    let dot = new Dot(i);
    dots.push(dot);
  }
}

// Function to update the cursor trail with smooth transitions
function updateDots() {
  // We iterate through each dot and make it follow the next one smoothly
  dots.forEach((dot, index, dots) => {
    let nextDot = dots[index - 1] || mousePosition;  // Get the next dot or mouse position for the first dot
    dot.x += (nextDot.x - dot.x) * 0.8;  // Smooth movement for first dot
    dot.y += (nextDot.y - dot.y) * 0.8;
    dot.updatePosition(dot.x, dot.y);
  });
}

// Mousemove event to track and update cursor position
window.addEventListener("mousemove", (event) => {
  mousePosition.x = event.clientX;
  mousePosition.y = event.clientY;

  // Ensure dots are visible when the cursor is inside the window
  if (!isMouseInside) {
    dots.forEach(dot => dot.show());
    isMouseInside = true;
  }
});

// Mouseleave event to hide the cursor dots when the mouse leaves the window
window.addEventListener("mouseleave", () => {
  isMouseInside = false;
  dots.forEach(dot => dot.hide());  // Hide all dots when the cursor leaves the window
});

// Mouseenter event to show the cursor dots when the mouse re-enters the window
window.addEventListener("mouseenter", () => {
  if (!isMouseInside) {
    dots.forEach(dot => dot.show());  // Show all dots when the cursor re-enters the window
    isMouseInside = true;
  }
});

// Animation loop for smooth trailing effect
function animateDots() {
  updateDots();
  requestAnimationFrame(animateDots);
}

// Initialize the cursor trail effect
createDots();
animateDots();

