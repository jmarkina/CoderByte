//Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 
//Use the Parameter Testing feature in the box below to test your code with different arguments.
//TODO: if string contains characters, leave them as it is.
//var alphabet 
var LetterChanges = function(str) { 
var alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split(''); //Aplhabet array
var strArr = str.split(''); //Given string array
	for(var i=0; i<strArr.length; i++) {
		var letter = strArr[i]; //iterating trough given array to get letters
			for (j=0; j<alphabetArr.length; i++) {
				if (letter === alphabetArr[j]) {
					var modifiedArr = [];
					var modifiedLetter = String.fromCharCode(letter.charCodeAt(alphabetArr[j]) + 1);
					modifiedArr = modifiedArr.push(modifiedLetter);
					console.log(modifiedArr);
				}
			}	//find each letter in alphabet array
	}
};
LetterChanges("String");

var LetterChanges = function(str) { 
	var alphaMap = {}; //create key/value pair for alphabet letters
	//split string 
	//bind key and letter in the string


	function LetterChanges(str) { 
  var newStr = '';
  for (var i=0; i < str.length; i++) {
    var newChar;
    if (str[i] >= 'a' && str[i] <= 'z') {
      var charCode = str.charCodeAt(i);
      charCode+=1;
      if (charCode > 122) charCode = 97;
      newChar = String.fromCharCode(charCode);
    } else {
      newChar = str[i];
    }
    if (['a','e','i','o','u'].indexOf(newChar) > -1) {
      newChar = newChar.toUpperCase();
    }
    newStr += newChar;
  }
  // code goes here  
  return newStr; 
         
}



function LetterChanges(str) { 
  var res ="";
  var rev;
  for(var i=0; i<str.length; i++){
    if(str[i].search(/[a-z]|[A-Z]/)!=-1){
      if(str[i]!="z"&&"Z"){
      rev = String.fromCharCode(str[i].charCodeAt(0)+1);
      }else{
         rev = "a";
      }
      if(rev.search(/[aeiou]/gi)!=-1){
        rev = rev.toUpperCase();
      }
      res = res + rev;      
      
    }else{
      res = res + str[i];      
    }
    
    
  }
 
  return res; 
         
}
function LetterChanges(str) { 
  return str.replace(/[a-z]/ig,function(c){
    var next = String.fromCharCode(c.charCodeAt() + 1);
    if(/[aeiou]/g.test(next)){
      next = next.toUpperCase(); 
    }
    return c == 'z' ? 'A' : c == 'Z' ? 'A' : next;
  });    
}
   

