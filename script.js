// Hamburger Menu Toggle [cite: 89]
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Contact Form Validation [cite: 91]
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
    } else if (!email.includes("@")) {
        alert("Please enter a valid email address.");
    } else {
        alert("Message sent successfully, Jehann!");
        contactForm.reset();
    }
});