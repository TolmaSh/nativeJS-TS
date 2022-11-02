const todoId_1 = '1'
const todoId_2 = '2'

const todoLists = [
    {
        id: todoId_1,
        title: 'What to buy',
    },
    {
        id: todoId_2,
        title: 'What to learn',
    },
    // {
    //     id: '3',
    //     title: 'What to read',
    //     tasks: [
    //         {},
    //         {},
    //         {},
    //     ],
    // },
    // {
    //     id: '4',
    //     title: 'What to drink',
    // },
]
const getPropName = (param) => `${param} name`

const tasks = {
    [todoId_1]: [
        {id: '11', title: 'HTML'},
        {id: '12', title: 'CSS'},
        {id: '13', title: 'JS & TS'},
    ],
    [todoId_2]: [
        {id: '21', title: 'Milk'},
        {id: '22', title: 'Beer'},
        {id: '23', title: 'Water'},
    ],
    "user name": "Bob",
    [getPropName("student")]: "Alex",

}


// CRUD

const newTask = {id: '14', title: 'React'}

const copyTasks = {...tasks, [todoId_1]: [...tasks[todoId_1], newTask]}
console.log(copyTasks)

// delete id='23'

console.log({...tasks, [todoId_2]: tasks[todoId_2].filter(t => t.id !== '23')})

//reduce

const nums = [1, 2, 3, 4, 5]

console.log(nums.reduce((acc, el) => {
   return acc + el
}, 0))

// acc = 0, el = 1 => 1
//acc = 1, el = 2 => 3
//acc = 3, el = 3 => 6
//acc = 6, el = 4 => 10
//acc = 10,el = 5 => 15
// => 15

console.log(nums.reduce((acc,el) => acc > el ? acc : el))
console.log(Math.max(...nums))

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 25,
        isMarried: false,
        scores: 100
    }
];

console.log(students.filter(s => s.name !== "Nick")) // Delete "Nick"
console.log(students.reduce((acc,st)=>{
    if (st.name !== "Nick") {
        acc.push(st)
    }
    return acc
},[]))


console.log(students.map(st => ({...st,scores: st.scores + 10}))) // Add +10 scores for all students
console.log(students.reduce((acc,st)=> {
    const copySt = {...st,scores: st.scores + 10}
    acc.push(copySt)
    return acc
}, []))  // Add +10 scores for all students

const sts = {
    Bob: { age: 22, isMarried: true, scores: 85 },
    Alex: { age: 21, isMarried: true, scores: 89 },
    Nick: { age: 20, isMarried: false, scores: 120 },
    John: { age: 25, isMarried: false, scores: 100 }

}

console.log(students.reduce((acc,st) => {
    acc[st.name] = {...st}
    delete acc[st.name].name
    return acc
}, {}))