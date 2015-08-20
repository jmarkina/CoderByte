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
