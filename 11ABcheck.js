// Using the JavaScript language, have the function ABCheck(str) 
// take the str parameter being passed and return the string true if 
// the characters a and b are separated by exactly 3 places anywhere
// in the string at least once (ie. "lane borrowed" would result in true 
// because there is exactly three characters between a and b). 
// Otherwise return the string false. 

function ABCheck(str) {
	var ABIndexArr = [];
	for (var i=0; i<str.length; i++) {
		if (str[i] === "a" || str[i] === "b") {
			ABIndexArr.push(i); 
		}
	}
	for (var j=0; j<ABIndexArr.length; j++) {
		if (ABIndexArr[j+1] - ABIndexArr[j] === 4) {
          	
			return true;
		}
	}
	return false;
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ABCheck("abccccazzzb");           
