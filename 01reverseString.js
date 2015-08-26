function FirstReverse(str) { 			
  var arr = str.split("");
  var reversedArr = [];
 	for (var i=arr.length-1; i>=0; i--) {
       reversedArr.push(arr[i]);  	
    }
 
   	return reversedArr.join('');
         
}
  
FirstReverse("Reverse me");           

//Another way to reverse string 

function FirstReverse(str) {
	reversedStr = str.split('').reverse().join('');
	return reversedStr;
}