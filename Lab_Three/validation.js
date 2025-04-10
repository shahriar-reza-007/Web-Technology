document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form elements
    const formElements = {
        fullname: document.getElementById('fullname'),
        email: document.getElementById('email'),
        password: document.getElementById('password'),
        confirmpassword: document.getElementById('confirmpassword'),
        location: document.getElementById('location'),
        zipcode: document.getElementById('zipcode'),
        terms: document.getElementById('terms')
    };

    // Validate Full Name
    if (!formElements.fullname.value.trim()) {
        alert("Please fill the Full Name field");
        return;
    }
    if (/\d/.test(formElements.fullname.value)) {
        alert("Name cannot contain numeric values");
        return;
    }

    // Validate Email
    const emailRegex = /^\d{2}-\d{5}-\d@student\.aiub\.edu$/;
    if (!formElements.email.value) {
        alert("Please fill the Email field");
        return;
    }
    if (!emailRegex.test(formElements.email.value)) {
        alert("Invalid email format. Correct format: XX-XXXXXX-X@student.aiub.edu (AIUB Student mail form)");
        return;
    }

    // Validate Password
    const password = formElements.password.value;
    if (!password) {
        alert("Please fill the Password field");
        return;
    }
    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return;
    }
    if (!/[A-Z]/.test(password)) {
        alert("Password must contain at least one capital letter");
        return;
    }
    if (!/\d/.test(password)) {
        alert("Password must contain at least one number");
        return;
    }
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        alert("Password must contain at least one special character");
        return;
    }

    // Validate Confirm Password
    if (formElements.password.value !== formElements.confirmpassword.value) {
        alert("Passwords do not match");
        return;
    }

    // Validate Location
    if (!formElements.location.value.trim()) {
        alert("Please fill the Location field");
        return;
    }

    // Validate Zip Code
    if (!formElements.zipcode.value.trim()) {
        alert("Please fill the Zip Code field");
        return;
    }

    // Validate Terms
    if (!formElements.terms.checked) {
        alert("You must agree to the terms and conditions");
        return;
    }

    // If all validations pass
    alert("Registration successful!");
    this.reset();
});