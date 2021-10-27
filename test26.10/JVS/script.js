/*const sum = (numOne, numTwo) => numOne + numTwo;

const mult = (numOne, numTwo) => numOne + numTwo;

const div = (numOne, numTwo)  => numOne + numTwo;

const sub = (numOne, numTwo)  => numOne + numTwo;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

'+' || 'sum'

'*' || 'multiplication'

'/' || 'division'

'-' || 'subtraction'

 function calculator (operation,numbers){
    const OperationChoice = prompt("Scegli un'operazione");
    let totOperations = 0;

    if (OperationChoice === '+' || OperationChoice === 'sum') {
        totOperations = sum(...numbers);
        return totOperations;
    }
     else if (OperationChoice === '*' || OperationChoice === 'mult') {
        totOperations = mult(...numbers);
        return totOperations;
    }
    else if (OperationChoice === '/' || OperationChoice === 'div') {
       totOperations = div(...numbers);
       return totOperations;
   }
    else (OperationChoice === '-' || OperationChoice === 'sub') {
        totOperations = sub(...numbers);
    }
    return totOperations;
}
console.log(OperationChoice('operation', numbers));





    let OperationChoice = prompt("Scegli un'operazione");
    let numberChoice = prompt("Inserisci numeri");
    const numbers = numberChoice.split('.');
    const parsedNumbers = [];

for (x of numbers) {
    parsedNumbers.push(parseInt(x));
}

if (OperationChoice === 'sum') {
calculator (sum,numbers);
}
if (OperationChoice === 'mult') {
    calculator(mult,numbers);
}
if (OperationChoice === 'div') {
    calculator(div,numbers);
}
if (OperationChoice === 'sub') {
    calculator(sub,numbers);
}
console.log('OperationChoice');