class Stack {
    constructor() {
        this.items = []
    }
    push(item) {
        this.items.push(item)
    }
    pop() {
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    size() {
        return this.items.length
    }
    split() {
        return this.items.split(' ')
    }
}

// function Balance(str) {
//     let myString = str.split('')
//     let stack = new Stack()

//     if (myString.length % 2 !== 0) {
//         return false
//     } else if (myString.length % 2 === 0) {
        
//         for(let i = 0; i < myString.length; i++) {
//             const item = myString[i]

//             if(item === '(' || item === '{') {
//                 stack.push(item)
//             } else if (item === ')' || '}') {
//                 if(item === ')' && stack.peak() === '(') {
//                     stack.push(item)
//                 } else if (item === '}' && stack.peak() === '{') {
//                     stack.push(item)
//                 }
//             } else {
//                 return false
//             }

//             return stack
//         }
//     }
// }

// console.log(Balance('{}(){}()()()'))

// class Queue {
//     constructor() {
//         this.item = []
//     }
//     enqueue(item) {
//         return this.item.push(item)
//     }
//     peak() {
//         return this.item()
//     }
// }

// function Balance(str) {
//     let myString = str.split('')
//     let stack = new Stack()

//     if (myString.length % 2 !== 0) {
//         return false
//     } else if (myString.length % 2 === 0) {
        

//         for(let i = 0; i < myString.length; i++) {
//             const Item = myString[i]
//             const nextItem = myString[i + 1]

//             if (Item === '{' && nextItem === '}') {
//                 stack.push(Item)
//                 stack.push(nextItem)
//             } else if (Item === '(' && nextItem === ')') {
//                 stack.push(Item)
//                 stack.push(nextItem)
//             } else {
//                 errors++
//             }
//         }

//         if (errors === 0) {
//             return stack
//         } else {
//             return false
//         }
//     }
// }

// console.log(Balance('{}'))



function polishNotation(str) {
    const array = str.split(' ')
    const arrayStack = new Stack()

    for (let i = 0; i < array.length; i++) {
        const arrayItem = array[i]

        // Check if the item is an operator
        if (['+', '-', '*', '/'].includes(arrayItem)) {
            // Ensure there are at least two numbers in the stack
            if (arrayStack.size() < 2) {
                throw new Error('Insufficient values in the expression');
            }
            
            // Pop the last two items from the stack
            const secondLast = arrayStack.pop()
            const lastItem = arrayStack.pop()

            let result;
            // Perform the operation based on the operator
            if (arrayItem === '+') {
                result = parseFloat(lastItem) + parseFloat(secondLast);
            } else if (arrayItem === '-') {
                result = parseFloat(lastItem) - parseFloat(secondLast);
            } else if (arrayItem === '*') {
                result = parseFloat(lastItem) * parseFloat(secondLast);
            } else if (arrayItem === '/') {
                if (parseFloat(secondLast) === 0) {
                    throw new Error('Division by zero is not allowed');
                }
                result = parseFloat(lastItem) / parseFloat(secondLast);
            }

            // Push the result back onto the stack
            arrayStack.push(result);
        } else {
            // Push the number onto the stack
            arrayStack.push(arrayItem);
        }
    }

    // There should be exactly one item left in the stack, which is the result
    if (arrayStack.size() !== 1) {
        throw new Error('The user input has too many values.');
    }

    return arrayStack.pop(); // Return the final result
}

// Example usage:
console.log(polishNotation('3 5 10 + *')); // Output: 45
console.log(polishNotation('4 5 * 6 +'));  // Output: 26
console.log(polishNotation('3 2 -'));      // Output: 1
console.log(polishNotation('10 2 /'));     // Output: 5
 