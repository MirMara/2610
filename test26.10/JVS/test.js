const sum = (numOne, numTwo) => numOne + numTwo;

const mult = (numOne, numTwo) => numOne * numTwo;

const div = (numOne, numTwo)  => numOne / numTwo;

const sub = (numOne, numTwo)  => numOne - numTwo;

/*
'+' || 'sum'

'*' || 'multiplication'

'/' || 'division'

'-' || 'subtraction'
*/


function calculator (operation, numbers) {
    let totOperation = 0;
    totOperation = operation(...numbers);
    return totOperation;
}

//const numbers = [0, 11];

let operationChoice = prompt("Inserisci operazione: ");
let operation = prompt("Inserisci dei numeri: ");
const numbers = operation.split(",");
const parsedNumbers = [];

for (x of numbers) {
    parsedNumbers.push(parseInt(x));
}

if (operationChoice === "sum") {
    calculator(sum, parsedNumbers);
}

if (operationChoice === "mult") {
    calculator(mult, parsedNumbers);
}

if (operationChoice === "div") {
    calculator(div, parsedNumbers);
}

if (operationChoice === "sub") {
    calculator(sub, parsedNumbers);
}

