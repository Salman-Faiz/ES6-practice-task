const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [7, 8, 9, 10, 11, 12];

const concatArray = (array1, array2) => {
    const newArray = [...array1,...array2];
   const maxNum=Math.max(...newArray)
    
    console.log(newArray);
    console.log(maxNum);
 
};
concatArray(array1, array2);


// normal conact
// const array3 = array1.concat(array2);
// console.log(array3);
// const array4=Math.max(...array3)
// console.log(array4);