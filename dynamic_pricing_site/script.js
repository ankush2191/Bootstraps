document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Navigation Toggle ---
    const navUl = document.querySelector('header nav ul');
    const navToggle = document.createElement('div'); // Create toggle if not in HTML

    // Check if a toggle element already exists (e.g. if added via HTML)
    let existingToggle = document.querySelector('.nav-toggle');
    if (!existingToggle) {
        navToggle.classList.add('nav-toggle');
        navToggle.innerHTML = '&#9776;'; // Hamburger icon
        if (navUl && navUl.parentNode) { // Ensure navUl and its parent exist
             navUl.parentNode.insertBefore(navToggle, navUl);
        } else if (document.querySelector('header nav')) { // Fallback if ul has no parent but nav exists
            document.querySelector('header nav').appendChild(navToggle);
        }
        existingToggle = navToggle; // Use the newly created toggle
    }


    if (existingToggle && navUl) { // Check both exist
        existingToggle.addEventListener('click', () => {
            navUl.classList.toggle('active');
        });
    } else {
        if (!existingToggle) console.error("Navigation toggle element not found or created.");
        if (!navUl) console.error("Navigation list (ul) not found.");
    }

    // --- Signup Form Handling ---
    const signupForm = document.getElementById('join-waitlist-form');

    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const name = signupForm.elements['name'] ? signupForm.elements['name'].value : '';
            const email = signupForm.elements['email'] ? signupForm.elements['email'].value : '';
            const interest = signupForm.elements['interest'] ? signupForm.elements['interest'].value : '';

            // Basic validation
            if (name.trim() === '') {
                alert('Please enter your name.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            console.log('Signup Form Submitted:', { name, email, interest });
            alert('Thank you for your interest! We will be in touch.');
            signupForm.reset();
        });
    }
});

function validateEmail(email) {
    if (!email) return false;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
