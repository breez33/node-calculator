var rs = require('readline-sync');

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
