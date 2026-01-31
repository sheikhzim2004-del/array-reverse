// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.


const numbers = [12, 98, 5, 41, 23, 78, 46];

const even = [];
for(let i = 0; i<numbers.length; i++){
  if(numbers[i] % 2 === 0){
    const num = numbers[i];
    even.push(num);
  }
}
console.log(even);