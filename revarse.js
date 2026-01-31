// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: 


const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// colors.reverse();   //reverse methot
const revColors = [];
for (let name of colors) {  // for of diye reverse kora
  revColors.unshift(name);
}
// console.log(revColors);

const reversed = [];
for (i = 0; i < colors.length; i++) { //for loop diye avabe revarse kora jay
  let nam = colors[i];
  reversed.unshift(nam);
}
// console.log(reversed);














let numbers = [55, 66, 33, 88, 77, 44];
const rev_rev_numbers = [];
for(let i = numbers.length -1; i>=0; i-- ){
  const n = numbers[i];
  console.log(n);
  rev_rev_numbers.unshift(n);
}
console.log(rev_rev_numbers);






const revNumber = [];
for (number of numbers){    //for of loop reverse
  revNumber.unshift(number)
}
// console.log(revNumber);
const revNum = [];

for(i = 0; i<numbers.length; i++){  
  let numb = numbers[i];
  revNum.unshift(numb);
}
// console.log(revNum);




