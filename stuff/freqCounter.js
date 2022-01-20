// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};
//   for (let val of arr1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }
//   for (let val of arr2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }
//   for (let key in frequencyCounter1) {
//     if (!(key ** 2 in frequencyCounter2)) {
//       return false;
//     }
//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]);

function generateNewFolderName(existingFolders) {
  const index = existingFolders.reduce((idx, name) => {
    if (name === 'New Folder') {
      return +0;
    } else {
      const [, match] = name.match(/^New Folder \((\d+)\)$/) || [];
      return match ? Math.max(+match, idx) : idx;
    }
  }, -1);

  return `New Folder${index === -1 ? '' : ` (${index === 0 ? 2 : index + 1})`}`;
}

console.log(generateNewFolderName(['New Folder']));
console.log(generateNewFolderName(['New Folder (2)']));
console.log(generateNewFolderName(['New Folder (41)']));
console.log(generateNewFolderName(['Test']));
console.log(
  generateNewFolderName(['Test', 'New Folder', 'A', 'New Folder 9000'])
);

// function changeDateFormat(dates) {
//   const numbersReg = /^\d{2,4}(\/|-)\d{2}(\/|-)\d{2,4}$/;
//   const dividersReg = /(-|\/)/;
//   const dateArray = [];

//   for (let date of dates) {
//     if (date.match(numbersReg) === null) {
//       sanitizedDate = date.replace(/(-|\/)/g, '');
//       dateArray.push(sanitizedDate);
//     } else {
//       dateArray.push(
//         formatDate(
//           date,
//           dividersReg.exec(date)[0],
//           dividersReg.exec(date).index
//         )
//       );
//     }
//   }

//   function formatDate(date, splitter, firstPos) {
//     const spl = date.split(splitter);
//     if (splitter === '-' && firstPos === 2) {
//       return `${spl[2]}${spl[0]}${spl[1]}`;
//     } else if (splitter === '/' && firstPos === 2) {
//       return `${spl[2]}${spl[1]}${spl[0]}`;
//     } else if (splitter === '/' && firstPos === 4) {
//       return spl.join('');
//     }
//   }
//   return dateArray;
// }

// var dates = changeDateFormat([
//   '2010/03/30',
//   '15/12/2016',
//   '11-15-2012',
//   '20130720',
// ]);
// for (index = 0; index < dates.length; ++index) {
//   console.log(dates[index]);
// }

// function changeDateFormat(dates) {
//   // Write the code that goes here
// }

// var dates = changeDateFormat(["2010/03/30", "15/12/2016", "11-15-2012", "20130720"]);
// for (index = 0; index < dates.length; ++index) {
//   console.log(dates[index]);
// }

// So according to the requirements, I should only prevent a rerun of the execute function if it failed,
// and without that `return function () {...}` I prevent it also if it succeeded, which is not what we want.
// Also, I run the function when someone calls my `wrap` function and not when someone calls the wrapped function.

// function wrap(execute) {
//   let result = false;
//   return function () {
//     if (result) return null;
//     try {
//       return execute();
//     } catch {
//       result = true;
//       return null;
//     }
//   };
// }

// var errorExec = wrap(function () {
//   throw new Error('Error');
// });
// var resultExec = wrap(function () {
//   return 'Result';
// });
// console.log(errorExec && errorExec()); // Should output null
// console.log(errorExec && resultExec()); // Should output "Result"

// Prototype vs Class
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.print = function () {
//     console.log(`${this.name} is ${this.age} years old`);
//   };
// }

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   print = function () {
//     console.log(`${this.name} is ${this.age} years old`);
//   };
// }

// let srki = new Person('Serhio', 44);
// srki.print();
