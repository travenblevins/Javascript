const emailInput = document.getElementById('email') // Get the email input element by its ID
const passwordInput = document.getElementById('password') // Get the password input element by its ID
const display = document.querySelector('.display') // Get the element where the email and password will be displayed
const button = document.getElementById('button') // Get the button element by its ID

// Add a click event listener to the button that triggers the 'Display' function when clicked
button.addEventListener('click', function Display() {

    const emailValue = emailInput.value // Get the value entered in the email input field
    const passwordValue = passwordInput.value // Get the value entered in the password input field

    // Regular expression pattern to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regular expression pattern to validate password: 
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Check if the entered email does not match the valid format
    if (!emailRegex.test(emailValue)) {
        alert('Please enter a valid email address') // Show an alert if the email is invalid
        return // Stop further execution if the email is invalid
    }

    // Check if the entered password does not match the required criteria
    if (!passwordRegex.test(passwordValue)) {
        alert('Password must be at least 8 characters long, include 1 uppercase, 1 lowercase, 1 number, and 1 special character') 
        return // Stop further execution if the password is invalid
    }

    // If both the email and password fields are not empty
    if (emailInput.value !== '' && passwordInput.value !== '') {
        display.innerHTML = '' // Clear the previous username and Password

        const email = document.createElement('h4') // Create a new <h4> element to display the email
        const password = document.createElement('h4') // Create a new <h4> element to display the password

        // Create a hidden password with asterisks, based on the length of the entered password
        const hiddenPassword = '*'.repeat(passwordValue.length)

        email.textContent = 'Username: ' + emailValue // Set the text content of the email element with the entered email
        password.textContent = 'Password: ' + hiddenPassword // Set the text content of the password element with asterisks

        display.appendChild(email) // Append the email element to the display area
        display.appendChild(password) // Append the password element to the display area

       
    }
})