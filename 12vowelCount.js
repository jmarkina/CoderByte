//For this challenge you will be counting all the vowels in a string.

function VowelCount(str) { 
  	str = str.toLowerCase();
	var vowelsNum = [];
  	var vowels = ['a', 'e', 'i', 'o', 'u'];
  	for (var i=0; i<vowels.length; i++) {
      for (var j=0; j<str.length; j++)
    	if (str[j] === vowels[i]) {
        	vowelsNum.push(str[j]);
        }
    }
  // code goes here  
  return vowelsNum.length; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());           
