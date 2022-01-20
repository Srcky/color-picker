const inputField = document.getElementsByTagName('input')[0];
const button = document.getElementsByTagName('button')[0];
let h3 = document.getElementsByTagName('h3')[0];
// if (inputField.value.length > 0) {
//   inputField.value = '';
// }
// button.addEventListener('click', () => {
//   const inputArr = inputField.value.split(' ');
//   h3.innerText = inputArr.map(num =>
//     num
//       .split('')
//       .map(Number) // this is shorthand for map((str, ind, arr) => Number(str, ind, arr))
//       //The reason Number works despite passing extra arguments in is because it ignores everything but the first argument.
//       .reduce((a, b) => a + b)
//   );

// Determine if a given string is a palindrome.
//   const inputArr = inputField.value.split('');
//   const inputStr = inputField.value.toString();
//   const reverseStr = inputArr.reverse().join('');
//   if (inputStr === reverseStr) {
//     console.log(inputStr);
//     console.log(reverseStr);
//   }
// });

// Write a function that takes two sorted lists of numbers and merges them into a single sorted list.

// const firstList = [3, 4, 2, 5];
// const secondList = [1, 4, 9, 10];

// function sortStuff(list1, list2) {
//   const merged = [...list1, ...list2].sort((a, b) => a - b);
//   console.log(merged);
// }
// sortStuff(firstList, secondList);

// PROMISE

// 1.Create a promise
function timer() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('before position data');
    }, 2000);
  });
  return promise;
}

const getPosition = () => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(positionData => {
      resolve(positionData);
    });
  });
  return promise;
};

// 2. Use the promise
function fireEvent() {
  timer()
    .then(data => {
      console.log(data); // kad god se promise resolve-uje dobijaju se podaci is resolve metode promisa - logicno :)
      //getPosition(); // Posto se vraca opet promise, moze da se chain-uje sa then u sledecem koraku
    })
    .then(() => {
      // a moze i da se napise i vrati u posebnom then bloku
      return getPosition();
    })
    .then(info => console.log(info)); // dobija podatke od getPosistion()
}

// 2. Use the promise
// Promise with async/await
async function fireAsync() {
  await timer().then(data => console.log(data));
  await getPosition().then(pos => console.log(pos));
}

button.addEventListener('click', fireAsync);

// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
function compareArrays(array1, array2) {
  const arr = [...new Set(array1), ...new Set(array2)];
  const finalArray = [];
  const freqCounter = {};
  for (let num of arr) {
    freqCounter[num] = freqCounter[num] + 1 || 1;
  }
  for (const [key, value] of Object.entries(freqCounter)) {
    if (value === 1) {
      finalArray.push(+key);
    }
  }
  return finalArray;
}

function sym() {
  const arrOfArrs = [...arguments];
  let output = arrOfArrs[0];
  for (let i = 1; i < arrOfArrs.length; i++) {
    output = compareArrays(output, arrOfArrs[i]);
  }

  return output;
}
