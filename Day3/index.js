
function fizzBuzz(number) {
    if (number % 5 === 0 && number % 3 === 0) {
        console.log('FizzBuzz');
    } else if (number % 3 === 0) {
            console.log('Fizz')
        }
    else if (number % 5 === 0) {
            console.log('Buzz')
    }
    else {
        console.log(number)
    }
}


function price(size) {
    switch(size) {
        case 'Small':
            console.log('$2.00 is your total')
            break;
        case 'Medium':
            console.log('3.50 is your total')
            break;
        case 'Large':
            console.log('$4.50 is your total')
            break;
        case 'X-Large':
            console.log('$6.00 is your total')
            break;
        default:
            console.log('select a size')
    }
}



function palindrome(input) {
    const inputArray = input.split('')
    const reversedArray = inputArray.reverse()
    const reverse = reversedArray.join('')
    if (input === reverse) {
        console.log('True')
    }
    else {
        console.log('False')
    }
}
palindrome('tacocat')
