// Using the JavaScript language, have the function LongestWord(sen) 
// take the sen parameter being passed and return the largest word in 
// the string. If there are two or more words that are the same length, 
// return the first word from the string with that length. 
// Ignore punctuation and assume sen will not be empty. 

function LongestWord(sen) { 
	sen=sen.replace(/[^a-zA-Z ]/ig,'');
	var splitStr = sen.split(' ');
	var numArr = [];
	for (var i=0; i<splitStr.length; i++) {
		numArr.push(splitStr[i].length);
		}
		var maxNum = Math.max.apply(null, numArr);
	for (var i=0; i<splitStr.length; i++) {
		if (maxNum === splitStr[i].length) {
			return splitStr[i];
		}
	}
};
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());           



//FreeCodeCamp bonfire solution
function findLongestWord(str) {
  strArr = str.split(" ");
  numArr = [];
  for (var i=0; i<strArr.length; i++) {
    numArr.push(strArr[i].length);
  }
  MaxNum = Math.max.apply(Math, numArr);
  return MaxNum;
}

findLongestWord('What if we try a super-long word such as otorhinolaryngology');
