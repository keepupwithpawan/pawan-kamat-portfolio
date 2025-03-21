const gitaGpt = document.getElementById('gita-gpt');
const vetra = document.getElementById('vetra');
const breather = document.getElementById('breather');
const researchPaper = document.getElementById('research-paper');
const github = document.getElementById('github');

// When the page has fully loaded, apply the fade-in effect
window.addEventListener('load', () => {
    document.body.style.transition = 'opacity 0.5s ease'; // Set the transition for opacity
    document.body.style.opacity = 1; // Fade the body from opacity 0 to 1
});

// Reset opacity when the page becomes visible after switching tabs or re-focusing
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = 1; // Reset opacity to 1 when the tab is visible
    }
});

// Smooth opacity fade-out effect before unloading
window.addEventListener('beforeunload', () => {
    document.body.style.transition = 'opacity 0.5s ease'; // Smooth opacity transition
    document.body.style.opacity = 0; // Fade the body from opacity 1 to 0
    setTimeout(() => {
        document.body.style.opacity = 1; // Fade the body from opacity 1 to 0
    }, 500);
});

gitaGpt.addEventListener('click', () => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = 0;

    setTimeout(() => {
        window.open("https://gita-gpt-gold.vercel.app/", "_blank");
    }, 500);
});

vetra.addEventListener('click', () => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = 0;

    setTimeout(() => {
        window.open("https://www.vetra.co.in", "_blank");
    }, 500);
});

breather.addEventListener('click', () => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = 0;

    setTimeout(() => {
        window.open("https://breather-29161.web.app/", "_blank");
    }, 500);
});

researchPaper.addEventListener('click', () => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = 0;

    setTimeout(() => {
        window.open("https://ijsrem.com/download/from-traditional-to-digital-evaluating-the-role-of-spirituality-in-mental-health-and-therapy/", "_blank");
    }, 500);
});

github.addEventListener('click', () => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = 0;

    setTimeout(() => {
        window.open("https://github.com/keepupwithpawan", "_blank");
    }, 500);
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


