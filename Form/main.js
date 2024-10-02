const button = document.getElementById('button')
const input = document.getElementById('input')


button.addEventListener('click', () => {
    const regex = /^\d{3}-\d{3}-\d{4}$/
    const inputValue = input.value
    if (inputValue.match(regex)) {
        alert('Thank you for entering your phone number')
    } else {
        alert('Please enter a valid phone number')
    }
    input.value = ''
})




