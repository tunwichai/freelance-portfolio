document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    // Scroll-based header effect
    const header = document.querySelector('header');
    if (menuToggle && header) {
      menuToggle.addEventListener('click', () => {
        header.classList.toggle('nav-active');
        // Toggle aria-expanded attribute for accessibility
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !isExpanded);
      });
    }
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    // Reveal animations for cards
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 150;
  
        if (elementTop < windowHeight - revealPoint) {
          el.classList.add('active');
        }
      });
    };
  
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load
  });