//* 1. Given an object. Invert it (keys become values and values become keys). If there is more than key for that given value create an array. 

function replacePropAndValue(obj) {
  let resultObj = {};

  for (let elem in obj) {
    if (resultObj.hasOwnProperty([obj[elem]])) {
      if (Array.isArray(resultObj[obj[elem]])) {
        resultObj[obj[elem]].push(elem);
      } else {
        resultObj[obj[elem]] = [resultObj[obj[elem]], elem];
      }
    } else {
      resultObj[obj[elem]] = elem;
    }
  }

  return resultObj;
}

const sampleObj = {
  a: "1",
  b: "2",
  c: "2",
  d: "2",
};

const result = replacePropAndValue(sampleObj);
console.log(result);

// =====================================================================================

//* 2. Given two objects. Write a function that performs shallow compare.

const shallowCompare = (obj1, obj2) => {
  for (let prop in obj1) {
    if (!obj2.hasOwnProperty(prop) || obj1[prop] !== obj2[prop]) {
      return false
    }
  }

  for (let key in obj2) {
    if(!obj1.hasOwnProperty(key) || obj2[key] !== obj1[key]) {
      return false 
    }
  }

  return true
}

const a = { a: '1'};
const b = { a: '1', b: '2 '};
console.log(shallowCompare(a, b));
// =====================================================================================

//* 3. Check whether string is palindrome, or not. 
function checkPalindrome(str) {
  if (str.length < 2) {
    return "Insufficient length of string. Provide a string with a length of more than 2 characters.";
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[str.length - 1 - i]) {
      return "Palindrome";
    } else {
      return "Oops!!! No match!";
    }
  }
}

const output = checkPalindrome('anna')
console.log(output);
// =====================================================================================

//* 4. Given an array of integers. All numbers are unique. Find the count of missing numbers between minimum and maximum elements to make integers sequence.

function countMissingNumbers (arr) {

  let sortedArr = arr.sort((a, b) => a - b) 

  let count = 0
 
  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i + 1] - sortedArr[i] == 2) {
      count++
      
    } else {
      count += sortedArr[i + 1] - sortedArr[i] - 1
    }
  }

  return count
}

const count = countMissingNumbers([1, 5, 3, 7, 9, 11]) 
console.log(count);
// =====================================================================================

//* 5. Given an array and element. Check if that element exists in array. 
function checkElem(arr, elem) {

  if (arr.length < 1) {
    return "Insufficient length of array. Provide an array with at least 2 elements.";
  } 

  for (let item of arr) {
    if (item === elem) {
      return `'${elem}' exists in the array.`;
    }
  }
  return `Oops!! No match`
}

const outcome = checkElem([6, null, "hello", NaN, undefined], NaN);
console.log(outcome);
