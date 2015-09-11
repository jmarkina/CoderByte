//For this challenge you will be adding up all the numbers 
//from 1 to a certain argument.

function SimpleAdding(num) {
  var sum = 0;
  for (var i=0; i<=num; i++) {
	sum = sum + i;
  // code goes here  
  } 
  return sum;
} 
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleAdding(readline());           
