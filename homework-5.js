// 1. Given a number. Write a recursive function that reverse the number. Return the new
// number.

// Variant 1 => with recursion 
function reverseNumber(number, reversed = 0) {
  if (number === 0) {
    return reversed;
  } else {

    const cypher = number % 10;
    const newReversed = reversed * 10 + cypher;
    const newNumber = (number - cypher) / 10;
    return reverseNumber(newNumber, newReversed);
  }
}
console.log(reverseNumber(123456789));

// Variant 2 => without recursion 
function reverseNumber(number) {
  let res = 0

  while (number) {
    let cypher = number % 10
    res = res * 10 + cypher
    number = (number - cypher) / 10
  }

  return res
}

console.log(reverseNumber(123456789));
// ======================================================================

// 2. Given a number and an array. Find the second occurrence of the number in the array.
// Consider that the occurrence of each element in the array is at least two.

function findSecondElement(arr, elem) {
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {

      count++

      if (count === 2 && arr[i] === elem) {
        return i
      }
    }
  }
}
console.log(findSecondElement([0, -1, 0, 5, 6, 6, 5, -1, 0, 5, 6], 5));
// ======================================================================

// 3. Given a substring and a string. Find how many times the substring occurred in the string.
// (For getting substring of the string use str.substring(startIndex, endIndex),
// str.substr(startIndex, length) )

function countSubString(str, substr) {
  let newStr = str.toLowerCase()
  let indexOfSub = newStr.indexOf(substr)
  let count = 0

  while (indexOfSub !== -1) {
    count++
    newStr = newStr.slice(indexOfSub + 1)
    indexOfSub = newStr.indexOf(substr)
  }

  return count
}

console.log(countSubString('Are var far shared?', 'ar'));
// ======================================================================

// 4. Given a string, compute recursively (no loops) a new string where all appearances of "pi";
// have been replaced by "pi";

function replacePs(str, index = 0) {
  const string = str.toLowerCase()
  let res = ''

  if (index === string.length) {
    return res
  }

  if (string[index] === 'p') {
    res += '3.14'
  } else {
    res += str[index]
  }

  return res + replacePs(str, index + 1)
}

const strP = 'Picsart pipelines'
console.log(replacePs(strP));
// ======================================================================

// 5. Given an array of nested arrays. Write a recursive function that flattens it. 
// (Hint create function that concats arrays).

function flatArray(arr) {

  let flatenedArray = []

  for (let elem of arr) {
    if (Array.isArray(elem)) {
      flatenedArray = flatenedArray.concat(flatArray(elem))
    } else {
      flatenedArray.push(elem)
    }
  }

  return flatenedArray
}

console.log(flatArray([14, [1, [[[3, []]], 1], 0]]));
// ======================================================================

// 6. Given a number. Write a function that calculates its sum of the digits and if that sum has
// more than 1 digit find the sum of digits of that number. Repeat that process if needed
// and return the result.

function sumDigits(number) {

  let singleDigitSum = 0

  while (number) {
    const cypher = number % 10
    singleDigitSum += cypher
    number = (number - cypher) / 10
  }


  if (singleDigitSum > 9) {

    let doubleDigitSum = 0

    while (singleDigitSum) {
      const figure = singleDigitSum % 10
      doubleDigitSum += figure
      singleDigitSum = (singleDigitSum - figure) / 10
    }

    return doubleDigitSum
  }

  return singleDigitSum
}

console.log(sumDigits(999999999999));