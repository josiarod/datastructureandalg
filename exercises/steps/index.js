// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
   
    
}

module.exports = steps;

/*
function steps(n) {
   
    for(let rows = 0; rows < n ; rows += 1){
        let stair = '';
    
        for(let colums = 0; colums < n; colums += 1){
         if(colums <= rows){
             stair += '#';
         }else {
             stair += ' ';
         }
     }

     console.log(stair);
    }
}

*/