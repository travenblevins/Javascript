// const sort = (array) => {
//     if (array.length !== 0 && Array.isArray(array)) {
//         // Use a loop to continue sorting until no swaps are made
//         let swapped;
//         do {
//             swapped = false; // Track whether any swaps were made in this pass
//             for (let i = 0; i < array.length - 1; i++) {
//                 let item = array[i];
//                 let next = array[i + 1];
//                 if (item > next) {
//                     // Swap directly in the array
//                     array[i] = next;
//                     array[i + 1] = item;
//                     swapped = true; // A swap was made
//                 }
//             }
//         } while (swapped); // Repeat until no swaps are made
//         return array; // Return the sorted array
//     }
//     return 'Invalid input'; // Handle invalid input
// };

// console.log(sort([5, 4, 2])); // Output: [2, 4, 5]

const sort = (array) => {
    if (array.length !== 0 && Array.isArray(array)) {
        let swap = true;
        while(swap === true) {
            swap = false
            for(let i = 0; i < array.length - 1; i++) {
                let item = array[i]
                let nextItem = array[i + 1]
                if (item > nextItem && nextItem !== undefined) {

                    let temp = item
                    array[i] = nextItem
                    array[i + 1] = temp
                    swap = true
                }
            }
        } return array
    }
}

console.log(sort([5, 4, 2])) // Output: [2, 4, 5]