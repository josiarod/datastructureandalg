// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let counter = {};

    for(let char of str){
        if(!counter[char]){
            counter[char] = 1;
        }else{
            counter[char] += 1;
        }
    }

   
}

module.exports = maxChar;
