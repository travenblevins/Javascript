function searchData(data, target) {
    const newData = data.sort((a, b) => a - b);
    const arrayHalf = newData.length / 2
    const firstHalf = newData.slice(0, Math.floor(arrayHalf))
    const secondHalf = newData.slice(Math.floor(arrayHalf), newData.length)
    const lastOfFirstHalf = firstHalf[firstHalf.length - 1]

    if (target <= lastOfFirstHalf) {
        for(let i = 0; i < firstHalf.length; i++) {
            const half = Math.floor(firstHalf.length / 2)
            if (firstHalf[i] === target) {
                return 'Found at the ' + (i + 1) + ' position'
            } else if (target < half) {
                for(let j = 0; j < half; j++) {
                    if(firstHalf[j] === target) {
                        return 'Found at the ' + (j + 1) + ' position'
                    }
                }
            }
        }
    } else if (target > lastOfFirstHalf) {
        for(let i = 0; i < secondHalf.length; i++) {
            const half = Math.floor(secondHalf.length / 2)
            if(secondHalf[i] === target) {
                return 'Found at the ' + (i + firstHalf.length + 1) + ' position'
            } else if (target < half) {
                for(let j = 0; j < half; j++) {
                    if(secondHalf[j] === target) {
                        return 'Found at the ' + (j + firstHalf.length + 1) + ' position'
                    }
                }
            }
        }
    } else {
        return 'Not Found'
    }
}

function searchData(data, target) {
    const newData = data.sort((a, b) => a - b);
    let start = 0;
    let end = newData.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (newData[mid] === target) {
            return 'Found at the ' + (mid + 1) + ' position';
        } else if (newData[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return 'Not Found';
}

function search(data, target) {
    let start = 0;                          // Initialize start index
    let end = data.length - 1;              // Initialize end index

    while (start <= end) {                  // Continue while there are elements to check
        let mid = Math.floor((start + end) / 2);  // Calculate the middle index

        if (data[mid] === target) {         // Check if the middle element is the target
            return 'Found at the ' + mid + ' position';
        } else if (data[mid] < target) {    // If the target is greater, ignore left half
            start = mid + 1;
        } else {                             // If the target is smaller, ignore right half
            end = mid - 1;
        }
    }

    return 'Not Found';                     // Return if the target is not found
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // Output: Found at the 4 position


