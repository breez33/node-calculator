var rs = require('readline-sync');

let operation = rs.question('What operation would you like to perform? ', { 
  limit: ['/', '*', '-', '+'],
  limitMessage: 'That is not a valid operation. Please choose from [ /, *, -, + ]'
});

const num1 = rs.questionInt('Please enter the first number: ', {
  limitMessage: 'This is not a number.'
});

const num2 = rs.questionInt('Please enter the second number: ', {
  limitMessage: 'This is not a number.'
});

const result = performOperation(operation, num1, num2)

console.log(`The result is ${result}!`)

function performOperation(operation, num1, num2) {
  if (operation === '/') {
    return num1 / num2
  } else if (operation === '*') {
    return num1 * num2
  } else if (operation === '-') {
    return num1 - num2
  } else {
    return num1 + num2
  }
}