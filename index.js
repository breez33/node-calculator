var rs = require('readline-sync');

const objOperations = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
  '/': (num1, num2) => num1 / num2
}

const getOperation = (operations) => {
  return rs.question('What operation would you like to perform? ', { 
    limit: operations,
    limitMessage: `That is not a valid operation. Please choose from [ ${operations.join(', ')} ]`
  });
}

const getNumber = (order) => {
  return rs.questionInt(`Please enter the ${order} number: `, {
    limitMessage: 'This is not a number.'
  });
}

const performOperation = (operationObj, operation, num1, num2) => {
  return operationObj[operation](num1, num2);
}

const calculate = (operationsObj) => {
  const arrOperations = Object.keys(objOperations);
  const operation = getOperation(arrOperations);
  const [num1, num2] = ['first', 'second'].map((order) => getNumber(order));
  const result = performOperation(operationsObj, operation, num1, num2)
  console.log(`The result is ${result}!`)
}

calculate(objOperations);