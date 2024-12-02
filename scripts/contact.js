// When the page has fully loaded, apply the fade-in effect
window.addEventListener('load', () => {
    document.body.style.transition = 'opacity 0.5s ease'; // Set the transition for opacity
    document.body.style.opacity = 1; // Fade the body from opacity 0 to 1
});

window.addEventListener('beforeunload', () => {
    document.body.style.transition = 'opacity 0.5s ease'; // Smooth opacity transition
    document.body.style.opacity = 0; // Fade the body from opacity 1 to 0
});


document.querySelector('.send-button').addEventListener('click', () => {
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const message = document.getElementById('message-textarea').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    const subject = `Its ${encodeURIComponent(name)} from your portfolio website`;
    const body = `${encodeURIComponent(message)}`;

    // Gmail compose URL with parameters
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=pawankamatw@gmail.com&su=${subject}&body=${body}`;

    // Open Gmail compose in a new window
    window.open(gmailUrl, '_blank');
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
