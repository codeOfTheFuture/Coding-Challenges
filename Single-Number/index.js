// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// [2, 2, 1]
// Original array

// [1]
// Create a function that returns an array with the integer that only appears once.

// Examples

// singleNumber([2, 2, 1]) <<<< should return [1]

// singleNumber([4, 1, 2, 1, 2]) <<<<< should return [4]

// singleNumber([3, 7, 5, 7, 3]) <<<<< should return [5]

function singleNumber(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (result.includes(nums[i])) {
      result.splice(result.indexOf(nums[i]), 1);
    } else {
      result.push(nums[i]);
    }
  }
  return result;
}

console.log(singleNumber([2, 2, 1]));

console.log(singleNumber([4, 1, 2, 1, 2]));

console.log(singleNumber([3, 7, 5, 7, 3]));
