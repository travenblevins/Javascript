function sumArray(array) {
    if(array !== '') {
      const highValue = Math.max(...array);
      const lowValue = Math.min(...array);
      const newArray = array.filter((value) => value !== highValue && value !== lowValue);
      return newArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  } else {
    return null
  }
}

console.log(sumArray([1, 2, 3, 4, 5]))