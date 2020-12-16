// Starting with a 1-indexed array of zeroes and a list of operations, for each operation add a value to each of the array element between two given indices, inclusive.  Once all operations have been performed, return the maximum value in the array.

//// Example /////

// n = 10

// queries = [[1,5,3],[4,8,7],[6,9,1]]

// Queries ar interpreted as follows:

/* 

a b k
1 5 3
4 8 7
6 9 1

*/

// Add the values of k bewteen the indices a and b inclusive:

/*
index -> 1 2 3 4 5 6 7 8  9  10
        [0,0,0,0,0,0,0,0, 0, 0]
        [3,3,3,3,0,0,0,0, 0, 0]
        [3,3,3,10,10,7,7,7,0,0]
*/

// Returns
// Int - the maximum value in the resultant array

// Input Format
// The first line contains two space-space

const arg1 = 5,
  arg2 = [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
  ];

const arrayManipulation = (n, queries) => {
  const arr = [0 * n];
  let largestVal = 0,
    current = 0;

  for (let i = 0; i < queries.length; i++) {
    const [start, end, val] = queries[i];

    arr[start] = arr[start] || { s: 0, e: 0 };

    arr[end] = arr[end] || { s: 0, e: 0 };

    arr[start].s += val;
    arr[end].e += val;
  }

  for (let j = 0; j < arr.length; j++) {
    if (arr[j]) {
      current += arr[j].s;

      if (current > largestVal) {
        largestVal = current;
      }

      current -= arr[j].e;
    }
  }

  return largestVal;
};

const output = arrayManipulation(arg1, arg2);
console.log("Output: ", output);
