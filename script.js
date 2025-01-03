// Sélecteurs pour les éléments
const words = [" Back view ", " Everything ", " Bobody ", " Allllllllllllioehfuheuofhziefhiehfpozehfiheifhzeiphf "];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const hamburgerMenu = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const themeToggle = document.getElementById('theme-toggle');

// Sidebar functionality
function openSidebar() {
  sidebar.style.left = '0px';
}

function closeSidebar() {
  sidebar.style.left = '-250px';
}

function closeSidebarOnClickOutside(event) {
  const isClickInside = sidebar.contains(event.target) || hamburgerMenu.contains(event.target);
  if (!isClickInside) {
    closeSidebar();
  }
}

// Theme functionality
function setThemeBasedOnTime() {
  const currentHour = new Date().getHours();
  const body = document.body;

  if (currentHour >= 5 && currentHour < 17) {
    body.setAttribute('data-theme', 'light');
    themeToggle.checked = false;
  } else {
    body.setAttribute('data-theme', 'dark');
    themeToggle.checked = true;
  }
}

function toggleTheme() {
  const body = document.body;
  if (themeToggle.checked) {
    body.setAttribute('data-theme', 'dark');
  } else {
    body.setAttribute('data-theme', 'light');
  }
}

// Typing effect functionality
function typeEffect() {
  const fullText = words[wordIndex];
  const displayText = isDeleting 
      ? fullText.substring(0, charIndex--) 
      : fullText.substring(0, charIndex++);

  document.getElementById("changing-text").textContent = displayText;

  const typingSpeed = isDeleting ? 100 : 150; // Adjust speed for typing and deleting

  if (!isDeleting && charIndex === fullText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // Wait before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // Move to the next word
    setTimeout(typeEffect, 500); // Wait before typing the next word
  } else {
    setTimeout(typeEffect, typingSpeed);
  }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Initial setup for theme
  setThemeBasedOnTime();

  // Event listener for sidebar interactions
  hamburgerMenu.addEventListener('click', openSidebar);
  closeBtn.addEventListener('click', closeSidebar);
  document.addEventListener('click', closeSidebarOnClickOutside);

  // Event listener for sidebar links
  const links = document.querySelectorAll('.sidebar ul li a');
  links.forEach((link) => {
    link.addEventListener('click', closeSidebar);
  });

  // Event listener for theme toggle
  themeToggle.addEventListener('change', toggleTheme);

  // Start the typing effect
  typeEffect();
});
