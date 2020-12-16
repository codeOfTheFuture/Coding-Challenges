const reverseParentheses = (s) => {
  const openers = [];
  s = s.split("");
  console.log(s);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      openers.push(i);
    } else if (s[i] === ")") {
      index = openers.pop();
      substring = s
        .splice(index + 1, i + 1)
        .reverse()
        .join("");
      s.splice(index, 0, substring);
      console.log(substring);
    }
  }
  console.log(s.join(""));
};

const testCase1 = reverseParentheses("(abcd)");
const testCase2 = reverseParentheses("(u(love)I)");
const testCase3 = reverseParentheses("1(2(321)1)0");

console.log(testCase1);
console.log(testCase2);
console.log(testCase3);

// Create a var to keep track of index of open parentheses
// Base case for recursion will be if the string no longer has any parentheses
// For loop to iterate over string
// Check for a open parentheses and store the index in the var
// Continue loop until we get a closing parentheses
// Reverse the substring between those two indexes
// Remove parentheses around reversed substring
// Recursively call function until all parentheses have been removed
