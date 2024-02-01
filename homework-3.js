//* 1. Given an array. Determine whether it consists only from uniques or not.
function checkUniqueness(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++)
      if (arr[k] == arr[i]) {
        return "not unique";
      }
  }
  return "unique";
}

console.log(checkUniqueness([1, 3, 6, 8, 2, 3]))
// ====================================================================

//* 2. Given an array of numbers. Find the sum of prime numbers.
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function sumPrimeNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sumPrimeNumbers([3, 8, 7, 4, 5, 9, 12]));
// ====================================================================

//* 3. Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
function compareAdjacentProducts(arr) {
  if (arr.length < 3) {
    return "The array must consist of at least 3 figures.";
  }


  // Variant 1
  let biggest = arr[0] * arr[1];

  for (let i = 1; i < arr.length; i++) {
    let product = arr[i] * arr[i - 1];
    if (product > biggest) {
      biggest = product;
    }
  }
  
  // Variant 2 => find the biggest product of both adjacent integers
  
  // let biggest = arr[0] * arr[2];

  // for (let i = 1; i < arr.length - 1; i++) {
  //   let product = arr[i - 1] * arr[i + 1];
  //   if (product > biggest) {
  //     biggest = product;
  //   }
  // }

  return biggest;
}

console.log(compareAdjacentProducts([2, 3, 1, 4, 6, 5, 8]));
// ====================================================================

//* 4. Given a sorted array and an element from that array. Find the index of that element using binary search.
function binarySearch(arr, searchValue) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let centralValue = Math.floor((start + end) / 2);

    if (arr[centralValue] === searchValue) {
      return centralValue;
    } else if (arr[centralValue] < searchValue) {
      start = centralValue + 1;
    } else {
      end = centralValue - 1;
    }
  }
  return -1;
}

const sampleArray = [2, 4, 7, 9, 10, 17, 34, 29, 35]
console.log(binarySearch(sampleArray, 17));
