// home.js

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    });
}

// Initialize by showing the first page
document.addEventListener('DOMContentLoaded', () => {
    showPage('list-of-tasks');
});

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const alertIcon = document.querySelector('.alert-icon');
    alertIcon.addEventListener('click', () => {
        alert('Alert icon clicked!');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const lightModeBtn = document.getElementById('light-mode-btn');
    const settingsBtn = document.getElementById('settings-btn');
    const profileBtn = document.getElementById('profile-btn');

    // Toggle light mode
    lightModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });

    // Handle settings button click
    settingsBtn.addEventListener('click', () => {
        alert('Settings button clicked');
        // Add settings functionality here
    });

    // Handle profile button click
    profileBtn.addEventListener('click', () => {
        alert('Profile button clicked');
        // Add profile functionality here
    });
});
