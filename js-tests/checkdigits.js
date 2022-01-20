function createCheckDigit(membershipId) {
  const membersIDArray = membershipId.split('');
  const result = membersIDArray.reduce((acc, curr) => +acc + +curr).toString();
  if (result.length > 1) {
    result.split('').reduce((acc, curr) => +acc + +curr);
  }
  return result;
}

createCheckDigit('55555');

function newMessage(topicName) {
  // $('p[data-topic-name=' + topicName + ']').css('background-color', 'red');
  $(`p[data-topic-name=${topicName}]`).css('background-color', 'red');
  // document.querySelectorAll(
  //   `[data-topic-name=${topicName}]`
  // )[0].style.backgroundColor = 'red';
}
newMessage('discussion');

// const removeBtn = document.getElementsByClassName('remove');
// console.log(Array.from(removeBtn));
// Array.from(removeBtn).forEach(element => {
//   console.log(element);
//   element.addEventListener('click', function (e) {
//     e.target.parentNode.remove();
//   });
// });

// (function setup() {
// $('.remove').on('click', function (e) {
//   $(this).parent().remove();
// });
// })();

// function ensure(value) {
//   if (value === undefined) {
//     throw 'No value passed!';
//   } else {
//     return value;
//   }
// }
// try {
//   console.log(ensure());
// } catch (error) {
//   console.log(error);
//

// function counter(str) {
//   // const parsedStr = str.toLowerCase().split(' ').join(''); // handeled with regex in if below, plus only number and chars are allowed
//   const parsedStr = str.toLowerCase();
//   const result = {};
//   for (let char of parsedStr) {
//     //if is ensuring only numbers and chars are processed
//     if (/[a-z0-9]/.test(char)) {
//       // result[char] = result[char] > 0 ? result[char]++ : (result[char] = 1);
//       result[char] = ++result[char] || 1;
//     }
//   }
//   return result;
// }

// Frequency counter
// function freqCount(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   freqObject1 = {};
//   freqObject2 = {};
//   for (let elem of str1) {
//     freqObject1[elem] = (freqObject1[elem] || 0) + 1;
//   }
//   for (let elem of str2) {
//     freqObject2[elem] = (freqObject2[elem] || 0) + 1;
//   }
//   for (let key in freqObject1) {
//     if (freqObject2[key] !== freqObject1[key]) {
//       return false;
//     }
//   }
//   return true;
// }
