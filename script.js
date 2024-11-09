function showError(inputId, message) {
    const errorElement = document.getElementById(inputId + 'Error');
    if (errorElement) {
        console.log('Showing error for ' + inputId);  
        errorElement.textContent = message;
        errorElement.style.display = 'block';  
    }
}

function hideError(inputId) {
    const errorElement = document.getElementById(inputId + 'Error');
    if (errorElement) {
        console.log('Hiding error for ' + inputId); 
        errorElement.style.display = 'none'; 
    }
}
function validateForm(event) {
    event.preventDefault(); 
    
    let isValid = true;
    
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        showError('name', 'Name is required.');
        isValid = false;
    } else {
        hideError('name');
    }
    
    const organisation = document.getElementById('organisation').value;
    if (organisation.trim() === '') {
        showError('organisation', 'Organisation name is required.');
        isValid = false;
    } else {
        hideError('organisation');
    }

    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        showError('email', 'Please enter a valid email address.');
        isValid = false;
    } else {
        hideError('email');
    }

    const contact = document.getElementById('contact').value;
    const contactPattern = /^[0-9]{10}$/; 
    if (!contactPattern.test(contact)) {
        showError('contact', 'Please enter a valid contact number (10 digits).');
        isValid = false;
    } else {
        hideError('contact');
    }

    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        showError('message', 'Message cannot be empty.');
        isValid = false;
    } else {
        hideError('message');
    }

    if (isValid) {
        showSuccessMessage(); 
        clearForm();           
    }
}

function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = 'Your form has been submitted successfully!';
    successMessage.style.display = 'block';  // Make success message visible
    
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);
}

function clearForm() {
    document.getElementById('contactForm').reset(); 
}

document.getElementById('contactForm').addEventListener('submit', validateForm);
