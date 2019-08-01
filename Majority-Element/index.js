// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Examples

// majorityElement([3, 2, 3]); <<<<<< should return 3
// majorityElement([2, 2, 1, 1, 1, 2, 2]); <<<<<<< should return 2
// majorityElement([8, 4, 8, 8, 8, 5, 5, 4]) <<<<<< should return 8

function majorityElement(arr) {
  const testArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (testArr.includes(arr[i])) {
      let spliceNum = arr.splice(arr.indexOf(arr[i]), 1);
      testArr.push(spliceNum);
    }
  }

  if (testArr.length > arr.length) {
    return testArr[0];
  } else {
    return arr[0];
  }
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([8, 4, 8, 8, 8, 5, 5, 4]));
