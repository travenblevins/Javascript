const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const display = document.querySelector('.display')
const button = document.getElementById('button')
button.addEventListener('click', function Display() {
    const emailValue = emailInput.value
    const passwordValue = passwordInput.value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!emailRegex.test(emailValue)) {
        alert('Please enter a valid email address')
        return
    }
    if (!passwordRegex.test(passwordValue)) {
        alert('Password must be at least 8 characters long, include 1 uppercase, 1 lowercase, 1 number, and 1 special character')
        return
    }
    if (emailInput.value !== '' && passwordInput.value !== '') {
        const email = document.createElement('h4')
        const password = document.createElement('h4')
        const hiddenPassword = '*'.repeat(passwordValue.length)
        email.textContent = 'Username: ' + emailValue
        password.textContent = 'Password: '  + hiddenPassword
        display.appendChild(email)
        display.appendChild(password)
        display.innterHTML = ''
    }
})