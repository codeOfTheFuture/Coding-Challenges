// Good morning, computer scientists! Your mission, if you choose to accept it, is to write a top secret program that, given a string containing just the characters '(', ')', '{', '}','[' and ']', determines if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Note: an empty string is also considered valid. <- This would be a great question to ask in an interview if they didn't cover it. What are other good cases you can think of

// Example 1:
// Input: "()"
// Output: true

// Example 2:
// Input: "()[]{}"
// Output: true

// Example 3:
// Input: "(]"
// Output: false

// Example 4:
// Input: "([)]"
// Output: false

// Example 5:
// Input: "{[]}"
// Output: true

const isValid = (str) => {
  const chars = {
      open: { "(": ")", "{": "}", "[": "]" },
      close: { ")": "", "}": "", "]": "" },
      pipe: { "|": "|" },
    },
    stack = [];

  if (str === "") return true;
  if (str.charAt(0) in chars.close || str.length % 2 !== 0) return false;

  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) in chars.open ||
      (str.charAt(i) in chars.pipe && str.charAt(i + 1) in chars.pipe) ||
      str.charAt(i + 1) in chars.open ||
      str.charAt(i + 1) === null
    )
      stack.push(str.charAt(i));

    let current = stack.pop(),
      next = str.charAt(i + 1);

    if (
      (current in chars.open &&
        next in chars.close &&
        chars["open"][current] !== next) ||
      (current in chars.pipe && next in chars.close)
    )
      return false;

    if (
      (current in chars.open && (next in chars.open || next in chars.pipe)) ||
      (current in chars.pipe && (next in chars.open || next === ""))
    )
      stack.push(current);
  }
  return stack.length === 0;
};

console.log(isValid("")); // True
console.log(isValid("()")); // True
console.log(isValid("()[]{}")); // True
console.log(isValid("{[]}")); // True
console.log(isValid("(]")); // False
console.log(isValid("([)]")); // False
console.log(isValid("|")); // False
console.log(isValid("{||")); // False
console.log(isValid("|[|]")); // False
console.log(isValid("(||)")); // True
console.log(isValid("|{}|")); // True
