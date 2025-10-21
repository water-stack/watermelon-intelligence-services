// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Clear previous errors
            clearErrors();

            // Validate form
            if (validateForm()) {
                // Show success message
                successMessage.classList.remove('hidden');

                // Reset form
                contactForm.reset();

                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 5000);
            }
        });
    }

    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            // Clear error when user starts typing
            const errorElement = document.getElementById(`error-${this.name}`);
            if (errorElement) {
                errorElement.classList.add('hidden');
                errorElement.textContent = '';
            }
        });
    });
});

function validateForm() {
    const fullName = document.getElementById('full-name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    let isValid = true;

    if (!validateField(fullName)) isValid = false;
    if (!validateField(email)) isValid = false;
    if (!validateField(subject)) isValid = false;
    if (!validateField(message)) isValid = false;

    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    const errorElement = document.getElementById(`error-${fieldName}`);

    let isValid = true;
    let errorMessage = '';

    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required.';
    }

    // Email validation
    if (fieldName === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address.';
        }
    }

    // Message length validation
    if (fieldName === 'message' && value) {
        if (value.length < 10) {
            isValid = false;
            errorMessage = 'Message must be at least 10 characters long.';
        }
    }

    // Subject validation
    if (fieldName === 'subject' && (!value || value === '')) {
        isValid = false;
        errorMessage = 'Please select a classification level.';
    }

    if (!isValid && errorElement) {
        errorElement.classList.remove('hidden');
        errorElement.textContent = errorMessage;
        field.classList.add('border-red-500');
    } else if (errorElement) {
        errorElement.classList.add('hidden');
        errorElement.textContent = '';
        field.classList.remove('border-red-500');
        field.classList.add('border-green-500');
    }

    return isValid;
}

function clearErrors() {
    const errorElements = document.querySelectorAll('[id^="error-"]');
    errorElements.forEach(element => {
        element.classList.add('hidden');
        element.textContent = '';
    });

    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.classList.remove('border-red-500', 'border-green-500');
    });
}

// Mobile menu functionality (placeholder)
function toggleMobileMenu() {
    console.log('Mobile menu toggle clicked');
    // Add mobile menu implementation here if needed
}