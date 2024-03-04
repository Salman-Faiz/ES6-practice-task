 const numbers= [4, 2, 9, 8, 5];
let squares = numbers.map(number => number ** 2);
let sum=0;
let average;
for(let i=0; i<squares.length; i++){
    sum=sum+squares[i];
    average=sum/squares.length;

}

console.log(squares);
console.log(sum);
console.log(average);
