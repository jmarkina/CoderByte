//TODO: continue looping even first index is true
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
	console.log(indexOfStrToCheck);
	for (var k=0; k<indexOfStrToCheck.length; k++) {
		var charIndex = indexOfStrToCheck[k];
		if (str[charIndex] !== "+") {
			return false;
		} 
	}
	return true;
}
CheckPlus("+a+b=");	