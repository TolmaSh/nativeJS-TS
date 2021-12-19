
 export type studentsType = {
    name: string
    age: number
    isMarried: boolean
    scores: number
}
const students: Array<studentsType> = [
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
        age: 19,
        isMarried: false,
        scores: 100
    }
]

function getName(item:any, i:number) {
    return `Index ${i}, My name is ${item.name}`
}




const mapIt = (array: Array<any>, callback: Function) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i], i)
    }
    return newArray
}

console.log(mapIt(students, getName))
console.log(students.map(s => s)) /// Поверхностная копия
console.log(students.map(s => ({...s}))) /// Глубокая копия
console.log(students.map(s => s.name === "Bob" ? {...s, s: s.scores + 10} : s))


const filterIt = (array: Array<any>, callback: Function ) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i]) === true) {
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log(students.filter(s => s.scores >= 100))
console.log(filterIt(students, (s: studentsType) => s.scores >= 100))

const findIt = (array: Array<any>, callback: Function) => {
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i])) return array[i]
    }
}

console.log(students.find(s => s.name === "Bob"))
console.log(findIt(students, (s: studentsType) => s.name === "Bob"))