// Initialize EmailJS with your public key
(function() {
    emailjs.init("ikc4MI_rSHQ6948Z9"); // Your public key
})();

// Form validation functions
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateForm() {
    let isValid = true;
    
    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    // Get error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');
    
    // Reset error messages
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    subjectError.style.display = 'none';
    messageError.style.display = 'none';
    
    // Remove error classes
    name.classList.remove('error');
    email.classList.remove('error');
    subject.classList.remove('error');
    message.classList.remove('error');
    
    // Validate name
    if (!name.value.trim()) {
        nameError.style.display = 'block';
        name.classList.add('error');
        isValid = false;
    }
    
    // Validate email
    if (!email.value.trim()) {
        emailError.textContent = 'Please enter your email address';
        emailError.style.display = 'block';
        email.classList.add('error');
        isValid = false;
    } else if (!validateEmail(email.value)) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.display = 'block';
        email.classList.add('error');
        isValid = false;
    }
    
    // Validate subject
    if (!subject.value.trim()) {
        subjectError.style.display = 'block';
        subject.classList.add('error');
        isValid = false;
    }
    
    // Validate message
    if (!message.value.trim()) {
        messageError.style.display = 'block';
        message.classList.add('error');
        isValid = false;
    }
    
    return isValid;
}

// Show loading state
function showLoading() {
    const submitBtn = document.getElementById('submitBtn');
    const spinner = submitBtn.querySelector('.spinner');
    const btnText = submitBtn.querySelector('span');
    
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    spinner.style.display = 'block';
    btnText.textContent = 'Sending...';
}

// Hide loading state
function hideLoading() {
    const submitBtn = document.getElementById('submitBtn');
    const spinner = submitBtn.querySelector('.spinner');
    const btnText = submitBtn.querySelector('span');
    
    submitBtn.disabled = false;
    submitBtn.classList.remove('loading');
    spinner.style.display = 'none';
    btnText.textContent = 'Send Message';
}

// Show success message
function showSuccess() {
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    successMessage.style.opacity = '1';
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        successMessage.style.opacity = '0';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 300);
    }, 5000);
}

// Show error message
function showError(message) {
    // You can create a custom error message element or use alert
    alert('Error: ' + message);
}

// Reset form
function resetForm() {
    document.getElementById('contactForm').reset();
    
    // Remove any error states
    const formControls = document.querySelectorAll('.form-control');
    formControls.forEach(control => {
        control.classList.remove('error');
    });
    
    // Hide error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.style.display = 'none';
    });
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    // Validate form
    if (!validateForm()) {
        return;
    }
    
    // Show loading state
    showLoading();
    
    // Get form data
    const formData = {
        from_name: document.getElementById('name').value.trim(),
        from_email: document.getElementById('email').value.trim(),
        subject: document.getElementById('subject').value.trim(),
        message: document.getElementById('message').value.trim(),
        to_email: 'harshgaliyawala63@gmail.com' // Your email
    };
    
    // Send email using EmailJS
    emailjs.send('service_qgusj9k', 'template_p60bgbo', formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            hideLoading();
            showSuccess();
            resetForm();
        }, function(error) {
            console.log('FAILED...', error);
            hideLoading();
            showError('Failed to send message. Please try again later.');
        });
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add form submit event listener
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', handleSubmit);
    
    // Add real-time validation
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            // Remove error state when user starts typing
            this.classList.remove('error');
            const errorId = this.id + 'Error';
            const errorElement = document.getElementById(errorId);
            if (errorElement) {
                errorElement.style.display = 'none';
            }
        });
        
        input.addEventListener('focus', function() {
            // Add focus effect
            this.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            // Remove focus effect if empty
            if (!this.value.trim()) {
                this.classList.remove('focused');
            }
        });
    });
    
    // Add button hover effects
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('mouseenter', function() {
        if (!this.disabled) {
            this.classList.add('hover');
        }
    });
    
    submitBtn.addEventListener('mouseleave', function() {
        this.classList.remove('hover');
    });
});