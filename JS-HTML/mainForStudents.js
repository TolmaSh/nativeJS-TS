const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
        // friends: ["Alex", "Nick", "John", "Helen", "Ann"]
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        id: 5,
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        id: 6,
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

const superUser = {
    name: "Bob",
    age: 23,
    friends: [
        {
            id: 1,
            name: "Bob",
            age: 22,
            isMarried: true,
            scores: 85
        },
        {
            id: 2,
            name: "Alex",
            age: 21,
            isMarried: true,
            scores: 90,
        },
        {
            id: 4,
            name: "John",
            age: 19,
            isMarried: false,
            scores: 100
        }
    ]
}


//1. Создайте поверхностную копию объекта user
let copyUser = {...user}
//Проверка:
// console.log(user===copyUser)- что должно быть в консоли? false
// console.log(user.friends===copyUser.friends)- что должно быть в консоли? true

//2. Полная (глубокая) копия объекта user
let deepCopyUser = JSON.parse(JSON.stringify(user))

//Проверка:
// console.log(user===deepCopyUser) - что должно быть в консоли? false
// console.log(user.friends===deepCopyUser.friends) - что должно быть в консоли? false

//3. Поверхностная копия массива students
let copyStudents = [...students]
// copyStudents[0].age = 14
// copyStudents[2].name = 'Jack'
//Проверка:
// console.log( copyStudents===students ) - что должно быть в консоли? false
// console.log(copyStudents[0].age===students[0].age) - что должно быть в консоли? true
// console.log(copyStudents[2]===students[2]) - что должно быть в консоли? true
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(e => ({...e}))
// deepCopyStudents[0].age = 9
// deepCopyStudents[2].name = 'Nick'
// console.log(deepCopyStudents[2]===students[2])

//Проверка:
// console.log(deepCopyStudents===students) - что должно быть в консоли? false
// console.log(deepCopyStudents[0].age===students[0].age) - что должно быть в консоли? false
// console.log(deepCopyStudents[2]===students[2]) - что должно быть в консоли? false
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
// console.log(deepCopyStudents)
let sortedByName = [...deepCopyStudents].sort((a, b) => a.name > b.name ? 1 : -1)
// console.log(sortedByName);

//5a. Отсортируйте deepCopyStudents по успеваемости (лучший идёт первым)(sort)
// console.log(deepCopyStudents);
let sortedByScores = [...deepCopyStudents].sort((a, b) => a.scores > b.scores ? -1 : 1)
// console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = deepCopyStudents.filter( s => s.scores >= 100)
// console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = [...sortedByScores].slice(0,3)
// console.log(topStudents)
// console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents = [...deepCopyStudents].concat(topStudents).sort((a, b) => a.scores > b.scores ? -1 : 1)
// console.log(newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = students.filter( s => s.isMarried === false)
// console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = students.map( s => s.name)
// console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let namesWithSpace = [...studentsNames].join(' ')
// console.log(namesWithSpace)
let namesWithComma = [...studentsNames].join()
// console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map( s => ({...s,isMarried: true}))
// console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map(s => s.name === 'Nick' ? {...s,isMarried: true} : s)
// console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = students.find( s => s.name === 'Ann')
// console.log(ann)

// И поднимаем руку!!!!

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
let bestStudent = students.reduce( (sum,current) => sum.scores < current.scores ? current : sum)
// console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)
let scoresSum = students.reduce((acc,currentValue) => {
    return acc + currentValue.scores
},0)
// console.log(scoresSum)


// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
    //..............................
}
console.log(addFriends(students));

// 15. Д.З.: Напишите функцию getBestStudents, которая принимает параметром
// массив
// students  и количество лучших студентов, которое надо получить в
// новом массиве.
// getBestStudents(students) => [{name: "Nick", age: 20, isMarried: false, scores: 120}]
// getBestStudents(students, 3)
// getBestStudents(students, 10) => [{}, {}, ...., {}, null, null, null, null ]








