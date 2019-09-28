// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let counter = {};
    let max = 0;
    let maxChar = '';
    for(let char of str){
        if(!counter[char]){
            counter[char] = 1;
        }else{
            counter[char]++;
        }
        
    }
   
    for (let char in counter){
        if(counter[char] > max){
            max = counter[char];
        maxChar = char;
        }
    }
 return maxChar;
}

module.exports = maxChar;
