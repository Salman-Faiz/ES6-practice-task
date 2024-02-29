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
// console.log(students[2].roll);
const topStudent = []
const studentsOrder = []
let lowest = students[0].roll;
for (let i = 0; i < students.length; i++) {
    const rollNumber = students[i].roll;
    // console.log(rollNumber);
    topStudent.push(rollNumber);
    topStudent.sort();


    // console.log(topStudent);
   console.log(topStudent);
}



