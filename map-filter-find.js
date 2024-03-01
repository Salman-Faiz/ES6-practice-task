const oddNumbers = [1, 3, 5, 7, 9, 11];
const evenNumbers = oddNumbers.map(num => num + 1);
console.log(evenNumbers);

// task-2
const numbers = [11, 44, 55, 20, 30, 50, 88, 4, 66];

const devisableNumber = numbers.filter(num => num % 10 === 0);
console.log("numbers are devisable by 10",devisableNumber)
const devisableNumber2 = numbers.find(num => num % 10 === 0);
console.log("number devisable by 10 using find()",devisableNumber2)