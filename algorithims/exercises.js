// Challenge 1
// Given a list of numbers find the number of pairs that add to 0. Numbers are unique and will not repeat.
//
// Example: [-2, 1, 0, 2] => 1 pair since only -2 + 2 = 0


let arr = [-2, 1, 0, 2, -3, 4, 3, 5, 10, 0, 100, 5, 5, 2, 2]

// function checkPairs(array) {
//
//   let numberOfPairs = 0;
//   for (let i = 0; i < array.length; i ++) {
//     if (array.includes(array[i] * (-1)) && array[i] != 0 ) {
//             console.log(true, array[i])
//             numberOfPairs += 1;
//     }
//
//   }
//   console.log("number of pairs:", Math.floor(numberOfPairs / 2))
// }
// checkPairs(arr)

function isSorted(array) {
  arrayIsSorted = false;
  for (let i = 0; i < array.length; i++) {
    if ((array[i] < array[i + 1]) === false && array[i] !== (array[array.length - 1])) {
      arrayIsSorted = false;
      return arrayIsSorted;
    } else {
      arrayIsSorted = true;
    }
  }
  return arrayIsSorted;
}

// Challenge 2
// Write a Bozo sort algorithm, not to be confused with the slightly less efficient bogo sort, consists out of checking if the input sequence is sorted and if not swapping randomly two elements. This is repeated until eventually the sequence is sorted.


function bozoSort(arr) {
  arrayToBozoSort = arr;
  let j = 0;

  while(isSorted(arrayToBozoSort) === false) {
    let temp = 0;
    console.log(arrayToBozoSort)
    if (arrayToBozoSort[j] > arrayToBozoSort[j + 1]) {
      let randomIndex1  = Math.floor(Math.random() * (arrayToBozoSort.length - j));
      let randomIndex2  = Math.floor(Math.random() * (arrayToBozoSort.length - j))

      temp = arrayToBozoSort[randomIndex1];
      arrayToBozoSort[randomIndex1] = arrayToBozoSort[randomIndex2];
      arrayToBozoSort[randomIndex2] = temp;
  }
  j ++;
  if (j > arrayToBozoSort.length) {
    j = 0;
  }
  console.log(arrayToBozoSort)
}
}


bozoSort([-2, 1, 0, 2, -3])
