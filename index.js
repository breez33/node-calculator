var rs = require('readline-sync');

// **This section is single line operation (example: 1 + 4)**
//
let result = performOperation();
console.log(`The result is ${result}!`)

function performOperation() {
  let result = 0;

  const executeOperation = () => {
    console.log('What operation would you like to perform?')
  
    rs.promptCL(function(num1, operation, num2) {
      let number1 = parseInt(num1);
      let number2 = parseInt(num2);
  
      if (!number1 || !number2) {
        console.log('Invalid numbers. Please format your request like this: 6 + 1');
        executeOperation();
        return;
      }
  
      if (operation === '/') {
        result = number1 / number2
      } else if (operation === '*') {
        result = number1 * number2
      } else if (operation === '-') {
        result = number1 - number2
      } else if (operation === '+'){
        result = number1 + number2
      } else {
        console.log('That is not a valid operation. Choose from [ /, *, -, + ]');
        executeOperation();
        return;
      }
    });
  }
  executeOperation();

  return result;
}

// **Commented code below is for step-by-step operation**
//
// let operation = rs.question('What operation would you like to perform? ', { 
//   limit: ['/', '*', '-', '+'],
//   limitMessage: 'That is not a valid operation. Please choose from [ /, *, -, + ]'
// });

// const num1 = rs.questionInt('Please enter the first number: ', {
//   limitMessage: 'This is not a number.'
// });

// const num2 = rs.questionInt('Please enter the second number: ', {
//   limitMessage: 'This is not a number.'
// });

// const result = performOperation(operation, num1, num2)

// console.log(`The result is ${result}!`)

// function performOperation(operation, num1, num2) {
//   if (operation === '/') {
//     return num1 / num2
//   } else if (operation === '*') {
//     return num1 * num2
//   } else if (operation === '-') {
//     return num1 - num2
//   } else {
//     return num1 + num2
//   }
// }