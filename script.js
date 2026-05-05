// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Simple form validation (if you add a contact form later)
function validateForm(formData) {
    if (formData.name === '' || formData.email === '') {
        console.log('Please fill out all fields');
        return false;
    }
    return true;
}

// Log page load
console.log('Portfolio loaded successfully!');