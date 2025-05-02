/**
 * ============================================
 * Portfolio JS: Navigation, Scroll, Hero Effects
 * Author: Harsh
 * Description:
 * - Active nav highlight based on scroll
 * - Responsive mobile nav toggle
 * - Scroll animations and smooth scroll
 * - Particle background effect in hero
 * ============================================
 */

// ===============================
// NAVIGATION: Highlight Active Link on Scroll
// ===============================
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', function () {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
});

// ===============================
// DOM Content Loaded Actions
// ===============================
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const header = document.querySelector('.header');
  const overlay = document.querySelector('.overlay');

  // ========== MENU TOGGLE (Mobile Nav) ==========
  menuToggle?.addEventListener('click', function () {
    menuToggle.classList.toggle('active');
    nav?.classList.toggle('active');
    overlay?.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });

  // ========== CLICK OUTSIDE MENU TO CLOSE ==========
  overlay?.addEventListener('click', function () {
    menuToggle?.classList.remove('active');
    nav?.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });

  // ========== STICKY HEADER ON SCROLL ==========
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // ========== SMOOTH SCROLL FOR NAV LINKS ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========== SCROLL INDICATOR (Arrow Down in Hero) ==========
  const scrollIndicator = document.querySelector('.hero-scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const projectsSection = document.querySelector('#projects') || document.querySelector('section:nth-of-type(2)');
      if (projectsSection) {
        window.scrollTo({
          top: projectsSection.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  }

  // ========== PARTICLES.JS INIT (Only if Element Exists) ==========
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": { "value": "#64ffda" },
        "shape": {
          "type": "circle",
          "stroke": { "width": 0, "color": "#000" },
          "polygon": { "nb_sides": 5 }
        },
        "opacity": {
          "value": 0.3,
          "random": true,
          "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#64ffda",
          "opacity": 0.2,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": { "enable": true, "mode": "grab" },
          "onclick": { "enable": true, "mode": "push" },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": { "opacity": 0.5 }
          },
          "push": { "particles_nb": 4 }
        }
      },
      "retina_detect": true
    });
  }
});


 // Particles.js configuration
 document.addEventListener('DOMContentLoaded', function() {
  particlesJS('particles-js', {
      "particles": {
          "number": {
              "value": 40,
              "density": {
                  "enable": true,
                  "value_area": 800
              }
          },
          "color": {
              "value": "#64ffda"
          },
          "shape": {
              "type": "circle",
              "stroke": {
                  "width": 0,
                  "color": "#000000"
              },
              "polygon": {
                  "nb_sides": 5
              }
          },
          "opacity": {
              "value": 0.3,
              "random": true,
              "anim": {
                  "enable": true,
                  "speed": 0.2,
                  "opacity_min": 0.1,
                  "sync": false
              }
          },
          "size": {
              "value": 2,
              "random": true,
              "anim": {
                  "enable": true,
                  "speed": 2,
                  "size_min": 0.1,
                  "sync": false
              }
          },
          "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#64ffda",
              "opacity": 0.2,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 1,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
              }
          }
      },
      "interactivity": {
          "detect_on": "canvas",
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "grab"
              },
              "onclick": {
                  "enable": true,
                  "mode": "push"
              },
              "resize": true
          },
          "modes": {
              "grab": {
                  "distance": 140,
                  "line_linked": {
                      "opacity": 0.5
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 4,
                  "duration": 2,
                  "opacity": 0.8,
                  "speed": 3
              },
              "repulse": {
                  "distance": 200,
                  "duration": 0.4
              },
              "push": {
                  "particles_nb": 4
              },
              "remove": {
                  "particles_nb": 2
              }
          }
      },
      "retina_detect": true
  });
});

// Add scroll animation to project cards
document.addEventListener('DOMContentLoaded', function() {
  const projectCards = document.querySelectorAll('.project-card');
  
  // Initial state - slightly transparent and translated down
  projectCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(50px)';
      card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  });
  
  // Function to check if element is in viewport
  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
          rect.bottom >= 0
      );
  }
  
  // Function to show cards when in viewport
  function showCards() {
      projectCards.forEach(card => {
          if (isInViewport(card)) {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
          }
      });
  }
  
  // Run once on load
  setTimeout(showCards, 300);
  
  // Run on scroll
  window.addEventListener('scroll', showCards);
});

