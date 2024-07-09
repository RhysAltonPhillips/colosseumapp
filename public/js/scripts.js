document.addEventListener('DOMContentLoaded', function() {
    // Fade-in animation for sections
    const sections = document.querySelectorAll('section');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
        }
      });
    }, {
      threshold: 0.1
    });
  
    sections.forEach(section => {
      section.classList.add('fade-out');
      observer.observe(section);
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      scrollToSection(targetId);
  });
});

function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      scrollToSection(targetId);
  });
});

function openEmail() {
  window.location.href = 'mailto:rhysap@gmail.com';
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      scrollToSection(targetId);
  });
});

function openEmail() {
  window.location.href = 'mailto:rhysap@gmail.com';
}

// Countdown clock
function countdown() {
  const countDownDate = new Date("july 16, 2024 23:59:59").getTime();
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days + "d";
  document.getElementById("hours").innerText = hours + "h";
  document.getElementById("minutes").innerText = minutes + "m";
  document.getElementById("seconds").innerText = seconds + "s";

  if (distance < 0) {
      document.getElementById("countdown-clock").innerHTML = "EXPIRED";
  }
}

setInterval(countdown, 1000);

// Function to check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
      if (isInViewport(section)) {
          section.classList.add('animated');
      } else {
          section.classList.remove('animated');
      }
  });
}

// Event listener for scroll
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // Trigger on page load


// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  const waitlistSection = document.querySelector('#waitlist-section');
  if (isInViewport(waitlistSection)) {
      waitlistSection.classList.add('buzz-animation');
  } else {
      waitlistSection.classList.remove('buzz-animation');
  }
}

// Event listener for scroll
document.addEventListener('scroll', handleScroll);

/*
// Toggle navigation menu on mobile
const toggleNav = document.getElementById('toggle-nav');
const navLinks = document.querySelector('.nav-links');

toggleNav.addEventListener('change', function() {
    navLinks.classList.toggle('active');
});*/
