//* find()
function findElem(arr, fn) {
  for (let elem of arr) {
    if (fn(elem)) {
      return elem;
    }
  }
}
const findArray = [1, 4, "hello", 7, 4, "hi"];
const findCallBack = item => typeof item === "string";
console.log(findElem(findArray, findCallBack));
// ================================================================

//* filter()
const filter = function (arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (fn(elem)) {
      newArray.push(elem);
    }
  }
  return newArray;
};

const filterArray = [undefined, 1, NaN, 5, true, 0, [2, 3, 4], 6, "hello"];
const filterCallBack = item => typeof item === 'number';
console.log(filter(filterArray, filterCallBack));
// ================================================================

//* map()
function map (arr, fn) {
  const newArr = []
  for (let item of arr) {
    newArr.push(fn(item));
  }
  return newArr;
}

const mapArray = [2, 4, 6];
const mapCallBack = elem => Math.pow(elem, 2);
console.log(map(mapArray, mapCallBack));
// ================================================================

//* every()
function isEvery(arr, fn) {
  for (let item of arr) {
    if (fn(item)) {
      return false;
    }
  }
  return true;
}

const everyArray = [3, 5, 1, -8, 9, 2];
const everyCallBack = elem => elem < 0;
console.log(isEvery(everyArray, everyCallBack));
// ================================================================

//* some()
function some(arr, fn) {
  for (let item of arr) {
    if (fn(item)) {
      return true;
    }
  }
  return false;
}
const someArray = [49, 16, 4, 25, 9];
const someCallBack = elem => Math.sqrt(elem) % 2 === 0;
console.log(some(someArray, someCallBack));
// ================================================================

//* findIndex()
function findIndex(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      return i;
    }
  }
  return -1;
}

const findIndexArray = [24, 46, 8, 80, 3];
const findIndexCallback = elem => elem < 10 && elem > 0;
console.log(findIndex(findIndexArray, findIndexCallback));
// ================================================================

//* forEach()
function customizeForEach(arr, fn) {
  const product = []
  for (let i = 0; i < arr.length; i++) {
    product.push(fn(arr[i]));
  }
  // return product;
  return product.join('\n');
}

const numbers = [1, 2, 3, 4, 5];
const forEachCallback = element => `${element} x ${element} = ${Math.pow(element, 2)}`;
console.log(customizeForEach(numbers, forEachCallback));

//* reduce() 
function customizeReduce(arr, fn) {
  const accumulator = [];
  for (let i = 0; i < arr.length; i++) {
    let split = arr[i].name.split(" ");
    accumulator.push(fn(accumulator, split));
  }

  return accumulator;
}

const people = [
  { name: "Mike Smith" },
  { name: "Jack Walter" },
  { name: "Alice Simpson" },
  { name: "Lily Carter" },
];

const reduceCallback = (acc, elem) => {
  acc = ''
  acc += `${elem[0][0]}${elem[1][0]}`;
  return acc;
};
console.log(customizeReduce(people, reduceCallback));
