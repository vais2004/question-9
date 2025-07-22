const data = [
    {
        roll: "1",
        name: "Niraj",
        maths: 86,
        science: 90,
        english: 75,
        computer: 85,
    },

    {
        roll: "2",
        name: "Pari",
        maths: 27,
        science: 30,
        english: 35,
        computer: 30, 
    },
                     
    {
        roll: "3",
        name: "Shivansh",
        maths: 75,
        science: 69,
        english: 40,
        computer: 75,
    },
    {
        roll: "4",
        name: "Shrinay",
        maths: 28,
        science: 31,
        english: 45,
        computer: 80,
    },

    {
        roll: "5",
        name: "Tejas",
        maths: 75,
        science: 85,
        english: 95,
        computer: 35,
    },
];

data.map((item) => {
    let marks = item.computer + item.english + item.science + item.maths;
    console.log('Roll ${item.roll} : ${marks}');
});                                                             