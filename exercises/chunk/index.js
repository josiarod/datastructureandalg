// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while(index < array.length){
      chunked.push(array.slice(index, index + size));
      index += size;
  }
  return chunked;
}

module.exports = chunk;


/*
function chunk(array, size) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i++){
        const last = chunkedArray[chunkedArray.length - 1];
        if(!last || last.length === size){
        chunkedArray.push([array[i]]);
        }else {
            last.push(array[i]);
        }
    }
    return chunkedArray;
}

module.exports = chunk;

*/

/*
function chunk(array, size) {
    const chunkedArray = [];
    for (let element of array){
        const last = chunkedArray[chunkedArray.length - 1];
        if(!last || last.length === size){
        chunkedArray.push([element]);
        }else {
            last.push(element);
        }
    }
    return chunkedArray;
}

module.exports = chunk;
*/