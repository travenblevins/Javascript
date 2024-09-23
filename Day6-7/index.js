const nine = document.querySelector('.nine')
nine.value = 9


const eight = document.querySelector('.eight')
eight.value = 8

const seven = document.querySelector('.seven')
seven.value = 7

const six = document.querySelector('.six')
six.value = 6

const five = document.querySelector('.five')
five.value = 5

const four = document.querySelector('.four')
four.value = 4

const three = document.querySelector('.three')
three.value = 3

const two = document.querySelector('.two')
two.value = 2

const one = document.querySelector('.one')
one.value = 1

const output = document.querySelector('.output')

const third1 = document.querySelector('.third1')

const third2 = document.querySelector('.third2')

const third3 = document.querySelector('.third3')

const divide = document.querySelector('.divide')

const multiply = document.querySelector('.multiply')

const minus = document.querySelector('.minus')

const add = document.querySelector('.add')

const equal = document.querySelector('.equal')

nine.addEventListener ('click', function() {
    if (third1.textContent === '') 
        {third1.textContent = nine.value}
    else {
        third3.textContent = nine.value
    }
})

eight.addEventListener ('click', function() {
    if (third1.textContent === '') 
        {third1.textContent = eight.value}
    else {
        third3.textContent = eight.value
    }
})

seven.addEventListener ('click', function() {
    if (third1.textContent === '') 
        {third1.textContent = seven.value}
    else {
        third3.textContent = seven.value
    }
})

six.addEventListener ('click', function() {
    if (third1.textContent === '') 
        {third1.textContent = six.value}
    else {
        third3.textContent = six.value
    }
})

five.addEventListener ('click', function() {
    if (third1.textContent === '') 
        {third1.textContent = five.value}
    else {
        third3.textContent = five.value
    }
})

four.addEventListener ('click', function() {
    if (third1.textContent === '') 
        {third1.textContent = four.value}
    else {
        third3.textContent = four.value
    }
})

three.addEventListener ('click', function() {
    if (third1.textContent === '') 
        {third1.textContent = three.value}
    else {
        third3.textContent = three.value
    }
})

two.addEventListener ('click', function() {
    if (third1.textContent === '') 
        {third1.textContent = two.value}
    else {
        third3.textContent = two.value
    }
})

one.addEventListener ('click', function() {
    if (third1.textContent === '') 
        {third1.textContent = one.value}
    else {
        third3.textContent = one.value
    }
})

divide.addEventListener ('click', function() {
    third2.textContent = divide.textContent
})

multiply.addEventListener ('click', function() {
    third2.textContent = multiply.textContent
})

minus.addEventListener ('click', function() {
    third2.textContent = minus.textContent
})

add.addEventListener ('click', function() {
    third2.textContent = add.textContent
})

equal.addEventListener('click', function() {
    if (third1.textContent !== '' && third2.textContent!== '' && third3.textContent !== '') {
        if(third2.textContent === '+') {
            const num1 = Number(third1.textContent)
            const num2 = Number(third3.textContent)
            output.textContent = num1 + num2
        }
    }
})
