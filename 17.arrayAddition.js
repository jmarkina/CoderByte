// Using the JavaScript language, have the function ArrayAdditionI(arr) 
// take the array of numbers stored in arr and return the string 
// true if any combination of numbers in the array can be added
// up to equal the largest number in the array, otherwise return 
// the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] 
// the output should return true because 4 + 6 + 10 + 3 = 23. 
// The array will not be empty, will not contain all the same elements, 
// and may contain negative numbers. 

//Currently this function sums up all the numbers except the largests 
//and compares it with the sum

function ArrayAddition(arr) {
	var sortedArr = arr.sort(function(a,b) { return a - b; });
	var sum = 0;
	var biggestNum = sortedArr.slice(-1)[0];
	for (var i=0; i<sortedArr.length - 1; i++) {
		sum = sum + arr[i]; 
	}
	return sum === biggestNum;
}

ArrayAddition([3,5,-1,8,12]);
