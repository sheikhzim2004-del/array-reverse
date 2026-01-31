// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

const newNumber = numbers.concat('tok', 'top');  //value add system
const result = newNumber.join('');   //.join diye avebe join kore
console.log(result);



// for of loop diye concat kora
let results = '';
for(let name of numbers){
  results = results + name;
}
console.log(results);


//for loop diye concat kora
let ans = '';
for (let i = 0; i<numbers.length; i++){
  ans = ans + numbers[i];
}
console.log(ans);


//while loop diye concat kora
let folafol = ''
let i = 0;
while(i<numbers.length){
  const nm = numbers[i];
  folafol = folafol + nm;
  i++
}
console.log(folafol);


