// ================== Typed.js Animation ==================
var typed = new Typed('#typed-text', {
  strings: ["Java Developer", "Full Stack Enthusiast", "Problem Solver"],
  typeSpeed: 50,   // Speed of typing
  backSpeed: 30,   // Speed of deleting
  loop: true       // Loop the animation
});

// ================== Navbar Toggle ==================
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Toggle open/close on hamburger click
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a nav link is clicked (for mobile)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});
<script>
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        // Toggle 'active' class on hamburger and nav menu
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
</script>