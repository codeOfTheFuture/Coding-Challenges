// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

// Examples
// reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"

// reverseCase("MANY THANKS") ➞ "many thanks"

// reverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS"

function reverseCase(string) {
  let reversed = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      reversed += string[i].toLowerCase();
    } else {
      reversed += string[i].toUpperCase();
    }
  }
  return reversed;
}

const reverseCase = string => {
  return string
    .split('')
    .map(char =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase(),
    )
    .join('');
};

// if(){

// }else {

// }

// condition ? true : false

// condition ? true: (conditon ? true : false)

// condition && true

// console.log(((true && false) && "yes"))

console.log(reverseCase('Happy Birthday'));

console.log(reverseCase('MANY THANKS'));

console.log(reverseCase('sPoNtAnEoUs'));
