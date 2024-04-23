var rs = require('readline-sync');

const objOperations = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
  '/': (num1, num2) => num1 / num2
}

const doMath = (operationsList, operation, num1, num2) => {
  const arrOperations = Object.keys(operationsList);
  
  if (arrOperations.includes(operation)) {
    return operationsList[operation](num1, num2);
  } else {
    console.log(`That is not a valid operation. Choose from [ ${arrOperations.join(', ')} ]`)
    return getOperationComponents(operationsList);
  }
}

const getOperationComponents = (operationsList) => {
  console.log('What operation would you like to perform?')

  const [num1, operation, num2] = rs.promptCL();
  const [intNum1, intNum2] = [num1, num2].map((num) => parseInt(num))

  if (!intNum1 || !intNum2) {
    console.log('Invalid numbers. Please format your request like this: 6 + 1');
    return getOperationComponents(operationsList);
  }

  return doMath(operationsList, operation, intNum1, intNum2);
}

const result = getOperationComponents(objOperations);
console.log(`The result is ${result}`)