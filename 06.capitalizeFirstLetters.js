
//For this challenge you will be capitalizing first characters in a string.

function LetterCapitalize(str) {
   var wordsArr = str.split(" ");
   var finalArr = Array();
   for (i in wordsArr) {
      tempArr = wordsArr[i].toLowerCase();
      tempArr = tempArr.charAt(0).toUpperCase() + tempArr.substring(1);
      finalArr.push(tempArr);
   }
   return finalArr.join(" ");
}

LetterCapitalize(readline());    