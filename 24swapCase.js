//For this challenge you will be swapping the case 
//of each character in the string. Ignore symbols.


function SwapCase(str) { 
  	var modifiedStr = [];
	for (var i=0; i<str.length; i++) {
    	if (str[i] === str[i].toLowerCase()) {
        	modifiedStr.push(str[i].toUpperCase());
     	} else {
        	modifiedStr.push(str[i].toLowerCase());
        }
    }
  return modifiedStr.join("");
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwapCase(readline()); 