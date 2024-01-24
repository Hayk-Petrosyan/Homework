//* charCodeAt()

const charCodes = {
  a: { a: 97, A: 65 },
  b: { b: 98, B: 66 },
  c: { c: 99, C: 67 },
  d: { d: 100, D: 68 },
  e: { e: 101, E: 69 },
  f: { f: 102, F: 70 },
  g: { g: 103, G: 71 },
  h: { h: 104, H: 72 },
  i: { i: 105, I: 73 },
  j: { j: 106, J: 74 },
  k: { k: 107, K: 75 },
  l: { l: 108, L: 76 },
  m: { m: 109, M: 77 },
  n: { n: 110, N: 78 },
  o: { o: 111, O: 79 },
  p: { p: 112, P: 80 },
  q: { q: 113, Q: 81 },
  r: { r: 114, R: 82 },
  s: { s: 115, S: 83 },
  t: { t: 116, T: 84 },
  u: { u: 117, U: 85 },
  v: { v: 118, V: 86 },
  W: { w: 119, W: 87 },
  x: { x: 120, X: 88 },
  y: { y: 121, Y: 89 },
  z: { z: 122, Z: 90 },
};

function getCharCodes(obj, char) {
  for (let key in obj) {
    if (obj[key].hasOwnProperty(char)) return obj[key][char];
  }
  return false;
}

console.log(getCharCodes(charCodes, 'F'));
// =====================================================================

//* concat()
function repeatStr(str, concatValue) {
  
  if (typeof str !== 'string' || typeof concatValue !== 'string') {
    str = str.toString()
    concatValue = concatValue.toString()
  }
  
  let result = str;

  for (let i = 0; i < concatValue.length; i++) {
    result += concatValue[i]
  }
  return result 
}

console.log(repeatStr('Thank you ', 222));
// =====================================================================

//* repeat()
function repeatString(str, amount) {
  let result = "";

  if (
    amount === Number.POSITIVE_INFINITY ||
    amount === Number.NEGATIVE_INFINITY
  ) {
    return "invalid count";
  } else if (amount <= 0 || amount === undefined) {
    return "";
  }

  for (let i = 0; i < Number.parseInt(amount); i++) {
    result += str;
  }
  return result;
}

console.log(repeatString('Thanks', 3.7));
// =====================================================================

//* replace()

function replaceChars(str, search, replaceValue) {
  let result = "";
  let flag = true;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === search && flag) {
      result += replaceValue;
      flag = false;
    } else {
      result += str[i];
    }
  }

  return result;
}

console.log(replaceChars('blablabla', 'a', '*'));
// =====================================================================

//* split('') => split into characters

function splitCharacters(str, separator) {
  const splitArr = [];

  for (let i = 0; i < str.length; i++) {
     if (str[i] !== separator) {
      splitArr.push(str[i])
    } 
  }
  return splitArr;
}

console.log(splitCharacters('happy / birthday / to / you!', '/'));
// =====================================================================

//* split(' ') => split into words
function splitWords(str) {
  const space = " ";
  let indexOfSpace = str.indexOf(space);
  let strResult = "";
  const splitArray = [];

  while (str.includes(space)) {
    strResult = str.slice(0, indexOfSpace);
    splitArray.push(strResult);
    str = str.slice(indexOfSpace + 1);
    indexOfSpace = str.indexOf(space);
  }

  splitArray.push(str);

  return splitArray;
}

console.log(splitWords('happy birthday to you.'));
// =====================================================================

//* slice()
function sliceStr(str, indexStart = 0, indexEnd = str.length) {
  let result = "";

  for (let i = indexStart; i < indexEnd; i++) {
    result += str[i];
  }
  return result;
}

console.log(sliceStr('birthday', 2, 5));
// =====================================================================

//* endsWith()
function endsWith(str, searchString) {
  if (searchString.length > str.length) {
    return false;
  }

  let iterationStart = str.length - searchString.length;

  for (let i = iterationStart; i < str.length; i++) {
    let flag = true;
    for (let k = 0; k < searchString.length; k++) {
      if (str[i + k] !== searchString[k]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return true;
    }
  }
  return false;
}

console.log(endsWith('happy birthday to you', 'you'));
// =====================================================================

//* StartsWith()
function startsWith(str, searchString) {
  if (searchString.length > str.length) {
    return false;
  } else if (searchString.length === str.length) {
    return str;
  } else if (searchString.length === 0) {
    return true;
  }

  for (let i = 0; i < str.length; i++) {
    let flag = true;

    for (let k = 0; k < searchString.length; k++) {
      if (str[0] !== searchString[0]) {
        return false;
      } else if (str[i + k] !== searchString[k]) {
        flag = false;
        break;
      }
    }

    if (flag) {
      return true;
    }
  }

  return false;
}
console.log(startsWith('happy birthday to you', 'hap'));
// =====================================================================

//* substring()
function subString(str, startIndex = 0, endIndex = str.length) {

  let result = '';

  if (
    startIndex < 0 ||
    endIndex < 0 ||
    Number.isNaN(startIndex) ||
    Number.isNaN(endIndex)
  ) {
    return result;
  }

  if (startIndex > endIndex) {
    for (let i = endIndex; i < startIndex; i++) {
      result += str[i];
    }
  } else {
    for (let i = startIndex; i < endIndex; i++) {
      result += str[i];
    }
  }

  return result;
}

console.log(subString("birthday", 5, 2));
// =====================================================================

//* lastIndexOf()

function lastIndexOf(str, searchElem) {

  for (let i = str.length - 1; i > 0; i--) {
    let flag = true
    for (let k = searchElem.length - 1; k > 0; k--) {
      if (str[i + k] !== searchElem[k]) {
        flag = false
        break
      }
    }
    if (flag) {
      return i
    }
  }
  return false
}

const paragraph = `I think Ruth's dog is cuter than your dog!`;
const searchTerm = 'dog';
console.log(lastIndexOf(paragraph, searchTerm));
