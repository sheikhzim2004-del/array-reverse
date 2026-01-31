// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.


const numbers = [12, 98, 5, 41, 23, 78, 46];

//while loop odd number
let n = 0;
const oddArray = [];
while(n<numbers.length){
  if(numbers[n]%2!=0){
    const addNumbers = numbers[n];
    oddArray.push(addNumbers);
  }
  n++;
}
console.log(oddArray);




//for loop even number
const even = [];
for(let i = 0; i<numbers.length; i++){  //for loop diye even number
  if(numbers[i] % 2 === 0){
    const num = numbers[i];
    even.push(num);
  }
}