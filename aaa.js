// reverse করো (reverse() ব্যবহার না করে)
let colors = ["red", "green", "blue", "yellow"];

//system no 01
 r_colours = []
for(i = 0; i<colors.length; i++){  // for loop reverse (1st index to last)
  const nam = colors[i];
  r_colours.unshift(nam);
}
// console.log(r_colours);

//system no 02
re_colors =[];
for(i = colors.length -1; i>=0; i--){//for loop reverse(last indext to 1st)
  const name = colors[i];
  re_colors.push(name);
}
// console.log(re_colors);

//system no 03
const rev_colors =[];
for(const n of colors){  //for of loop diye avabe kora jay
  rev_colors.unshift(n);
}
// console.log(rev_colors)
;

let n = 0;
const reve_colors =[];
while(n<colors.length){   // while loop e avabe reverse kora jay
  const color_name = colors[n];
  reve_colors.unshift(color_name);
  n++;
}
// console.log(reve_colors);


// tacharaw shohoje reverse methot use kore reverse kora jay
// example for 01
// colors.reverse();
// console.log(colors); // but avabe reverse korle main array change hoy

// example for 02
console.log(colors);
const reversedColor = colors.slice().reverse()
// avabe korle main array change hoy na
console.log(reversedColor);  
