// task-1 sopia er secondary school location
let data = {
    sopia: {
        id: 33,
        study: [
            {
                primary: [
                    { school_name: 'ABC Primary School' },
                    { location: 'peters Burg' }
                ]
            },
            {
                secondary: [
                    { school_name: 'bbc Primary School' },
                    { location: 'luxembourg' }
                ]
            },
        ]
    }
}
console.log('secondary school located at',data.sopia.study[1].secondary[1].location);

// task-2.. 1..access petersburg  2..find henry

let student = {
    2222: {
        name: 'samlan',
        section: 'c',
        class: 'xi',
        address: {
            "building no": 12,
            "street": "32 jackRoad",
            "city": "petersBurg",
            "country": "UK"
        }
    },
    3333: {
        name: 'henry',
        section: 'd',
        class: 'xii',
        address: {
            "building no": 15,
            "street": "32 helloRoad",
            "city": "NoBurg",
            "country": "USA"
        }
    }
}
console.log(student["2222"].address.city);
console.log(student["3333"].name);

// task-3.. 1 . a true story...2 find beginner

let data2 = {
    data: [
        {
            bookId: 32,
            bookDetails: {
                name: "a true story book",
                category: "kjhg",
                price: '$445'
            },
            

        },
        {
            bookId: 42,
            bookDetails: {
                name: "a false story book",
                category: "fjhg",
                price: '$255'
            },
            bookCategory:"beginner"

        },
    ]
}
console.log(data2.data[0].bookDetails.name);
console.log(data2.data[1].bookCategory);