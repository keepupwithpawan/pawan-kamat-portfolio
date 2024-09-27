const logo = document.getElementById('name');
const linkedin = document.getElementById('linkedin');
const twitter = document.getElementById('twitter');
const whatsapp = document.getElementById('whatsapp');
const resume = document.getElementById('resume');
const about = document.getElementById('about');
const projects = document.getElementById('projects');
const bridgeForBetter = document.getElementById('bridgeForBetter');
const breather = document.getElementById('breather');
const gitagpt = document.getElementById('gitagpt');
const myspace = document.getElementById('myspace');
const voting = document.getElementById('voting');
const sphere = document.getElementById('sphere');

logo.addEventListener("click", function () {
    window.open('home.html', '_blank');
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

resume.addEventListener("click", function () {
  window.open("https://drive.google.com/file/d/1mLNzuuwm-Pr8Yk1gc2yt5tekozrhxrx3/view?usp=sharing", "_blank");
});

about.addEventListener("click", function () {
  window.open('about.html', '_blank');
});

projects.addEventListener("click", function () {
  window.open('projects.html', '_blank');
});

breather.addEventListener("click", function () {
  window.open('breather.html', '_blank');
});

gitagpt.addEventListener("click", function () {
  window.open('gitagpt.html', '_blank');
});

myspace.addEventListener("click", function () {
  window.open('myspace.html', '_blank');
});

voting.addEventListener("click", function () {
  window.open('voting.html', '_blank');
});

sphere.addEventListener("click", function () {
  window.open('sphere.html', '_blank');
});

bridgeForBetter.addEventListener("click", function () {
  window.open('bridge-for-better.html', '_blank');
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
window.addEventListener("mouseout", (event) => {
  // Check if the mouse has left the window
  if (!event.relatedTarget || event.relatedTarget.nodeName === "HTML") {
    isMouseInside = false;
    dots.forEach(dot => dot.hide());  // Hide all dots when the cursor leaves the window
  }
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

