const students = [
    {
        name: 'fahad',
        roll: 8,
    },
    {
        name: 'asif',
        roll: 5,
    },
    {
        name: 'enan',
        roll: 2,
    },
    {
        name: 'samiha',
        roll: 3,
    },
    {
        name: 'fardina',
        roll: 7
    },

    {
        name: 'rasik',
        roll: 6
    },

    {
        name: 'tanzina',
        roll: 4
    },

    {
        name: 'salman',
        roll: 1
    },
]
// console.log(students[0].roll);
const rollNumber =students.map(student =>student.roll);
rollNumber.sort();
console.log(rollNumber);




