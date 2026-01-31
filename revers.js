// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = 'I am a hard working person';
//example 01
let result = ''
let split = statement.split(' ')
for(let i = split.length -1; i>=0; i--){
  result=result+' '+split[i];
}
console.log(result);

//example 02
for(let n = 0; n<split.length; n++){
  result = result + split[n];
}
console.log(split);


