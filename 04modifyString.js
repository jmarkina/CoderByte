//TODO: white spaces get removed;
//symbols and numbers should be ignored;

var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var alphaMap = {};
var vowels = "aeiouy";
var output = [];
var LetterChanges = function(str) {
  str = str.replace(/[^a-zA-Z ]/ig,'');
for (var i=0; i<alphabet.length; i++) {
    alphaMap[alphabet[i]] = i; 
};
for (var j=0; j<str.length; j++) {
    var char = str[j].toLowerCase();
    var mapIndex = alphaMap[char];
    var replacement = alphabet[mapIndex+1];
    if (replacement === undefined)
        replacement = alphabet[0];
    
    if (vowels.indexOf(replacement) !== -1)
        replacement = replacement.toUpperCase();
    output[j] = replacement;
    
};
  return result = output.join(" ");
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());                            