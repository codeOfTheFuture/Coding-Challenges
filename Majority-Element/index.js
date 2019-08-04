// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Examples

// majorityElement([3, 2, 3]); <<<<<< should return 3
// majorityElement([2, 2, 1, 1, 1, 2, 2]); <<<<<<< should return 2
// majorityElement([8, 4, 8, 8, 8, 5, 5, 4]) <<<<<< should return 8

function majorityElement(nums) {
  let majElMap = {};
  let maxEl = nums[0],
    maxCount = 1;

  for (let i = 0; i < nums.length; i++) {
    let el = nums[i];
    if (!majElMap[el]) {
      majElMap[el] = 1;
    } else {
      majElMap[el]++;
    }
    if (majElMap[el] > maxCount) {
      maxEl = el;
      maxCount = majElMap[el];
    }
  }

  return maxEl;
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([6, 5, 5]));
console.log(majorityElement([3, 3, 4]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
