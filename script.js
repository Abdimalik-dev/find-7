
let findSeven = number => {
    for (let i = 0; i < number.length; i++) {
      if (number[i] === 7) {
        return "Found";
      }
    }
    return "Not Found";
  }
  
  console.log(findSeven([1, 2, 3, 4, 5, 6,7]));