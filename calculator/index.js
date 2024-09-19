//plus
const plusButton = document.getElementById('plus')
const Pnum1 = document.querySelector('.Pnumber1')
const Pnum2 = document.querySelector('.Pnumber2')
let Pvalue = document.querySelector('.Pvalue')

plusButton.addEventListener('click', () => {
    const number1 = parseFloat(Pnum1.value)
    const number2 = parseFloat(Pnum2.value)
    const sum = number1 + number2 
    Pvalue.textContent = sum
})
//subtract
const minusButton = document.getElementById('minus')
const Mnum1 = document.querySelector('.Mnumber1')
const Mnum2 = document.querySelector('.Mnumber2')
let Mvalue = document.querySelector('.Mvalue')

minusButton.addEventListener('click', () => {
    const number1 = parseFloat(Mnum1.value)
    const number2 = parseFloat(Mnum2.value)
    const sum = number1 - number2 
    Mvalue.textContent = sum
})
//multiply
const multiplyButton = document.getElementById('multiply')
const Munum1 = document.querySelector('.Munumber1')
const Munum2 = document.querySelector('.Munumber2')
let Muvalue = document.querySelector('.Muvalue')

multiplyButton.addEventListener('click', () => {
    const number1 = parseFloat(Munum1.value)
    const number2 = parseFloat(Munum2.value)
    const sum = number1 * number2 
    Muvalue.textContent = sum
})
//divide
const divideButton = document.getElementById('divide')
const Dnum1 = document.querySelector('.Dnumber1')
const Dnum2 = document.querySelector('.Dnumber2')
let Dvalue = document.querySelector('.Dvalue')

divideButton.addEventListener('click', () => {
    const number1 = parseFloat(Dnum1.value)
    const number2 = parseFloat(Dnum2.value)
    const sum = number1 / number2 
    Dvalue.textContent = sum
})