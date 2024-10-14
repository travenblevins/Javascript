// function isPalindrome(x) {
//   const word = x.toLowerCase()
//   const array = word.split('')
//   const reverseArray = array.reverse()
//   const reverseWord = reverseArray.join('')
  
//   if (word === reverseWord) {
//     return true
//   } else {
//     return false
//   }
// }


// function nbYear(p0, percent, aug, p) {
//     let realPercent = percent * 0.01
//     let years = 0

//     for(i = 0; p0 < p; i++) {
//         p0 += p0 * realPercent + aug
//         p0 = Math.floor(p0)
//         years++
//     }
//     return years
// }

// console.log(nbYear(1000, 2.0, 50, 1214)) 


function noBoringZeros(n) {
    let numString = n.toString()
    let num = numString.split('')
    while(num[num.length -1] === '0') {
        num.pop()   
    } return Number(num.join(''))
}

console.log(noBoringZeros(1450))







