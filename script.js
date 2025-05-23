document.addEventListener('DOMContentLoaded', () => {
    const earlyAccessForm = document.getElementById('early-access-form');
    const creatorSignupForm = document.getElementById('creator-signup-form');

    if (earlyAccessForm) {
        earlyAccessForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const email = earlyAccessForm.elements['email'].value;

            if (validateEmail(email)) {
                console.log('Early Access Form Submitted:', { email });
                alert('Thank you for joining the early access program!');
                earlyAccessForm.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    if (creatorSignupForm) {
        creatorSignupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const name = creatorSignupForm.elements['name'].value;
            const email = creatorSignupForm.elements['email'].value;
            const portfolio = creatorSignupForm.elements['portfolio'].value;

            if (name.trim() === '') {
                alert('Please enter your name.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            console.log('Creator Signup Form Submitted:', { name, email, portfolio });
            alert('Thank you for expressing interest in becoming a creator!');
            creatorSignupForm.reset();
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
