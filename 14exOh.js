// Using the JavaScript language, have the function ExOh(str) 
// take the str parameter being passed and return the string 
// true if there is an equal number of x's and o's, otherwise
// return the string false. Only these two letters will be 
// entered in the string, no punctuation or numbers. 
// For example: if str is "xooxxxxooxo" then the output should 
// return false because there are 6 x's and 5 o's. 

function ExOh(str) { 
    str = str.toLowerCase();
  var xNum = 0;
    var oNum = 0;
  for (var i=0; i<str.length; i++) {
    if (str[i] === "x") {
      xNum++;
    } if (str[i] === "o") {
      oNum++;
    }
  }
  return xNum === oNum;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());           
