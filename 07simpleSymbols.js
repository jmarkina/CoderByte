// Using the JavaScript language, have the function SimpleSymbols(str) 
// take the str parameter being passed and determine if it is an 
// acceptable sequence by either returning the string true or false. 
// The str parameter will be composed of + and = symbols with several 
// letters between them (ie. ++d+===+c++==a) and for the string to be true 
// each letter must be surrounded by a + symbol. So the string to the 
// left would be false. The string will not be empty and will have at 
// least one letter. 


function CheckPlus(str) {
	var indexOfStrToCheck = '';
	var alphabet = 'abcdefghijklmnopqrstuvwxyz';
	for (var i=0; i<str.length; i++) {
		for (var j=0; j<alphabet.length; j++) {
			if (str[i] === alphabet[j]) {
				indexOfStrToCheck += i-1;
				indexOfStrToCheck += i+1;
			}
		}
	}
	for (var k=0; k<indexOfStrToCheck.length; k++) {
		var charIndex = indexOfStrToCheck[k];
		if (str[charIndex] !== "+") {
			return false;
		} 
	}
	return true;
}
CheckPlus("+a+b=");	