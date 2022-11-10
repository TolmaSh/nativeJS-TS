const strings = ['Alex', 'Donald', 'Bob'];

console.log(strings.sort())
// Sorted array from alphabet ( unicode table)
// work mutable
// usual work with .reverse method

const numbers = [1000, 99, 250, 8]
console.log(numbers.sort())

const compareNum = (a,b) => { // по збільшенню 0,1,2,3......
    if ( a <= b) {
        return -1 // return should be < 0 , if don`t need change position numbers
    } else {
        return 100 // return should be > 0 , if need change position
    }
}

const shortCompareFuncUp = (a, b) => a - b // сортування по збільшенню  0,1,2,3.....
const shortCompareFuncDown = (a, b) => b - a // сортування по зменшенню   3,2,1.....

console.log(numbers.sort(shortCompareFuncUp))


const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 24,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
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
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];

console.log(students.sort((a,b) => {
    if (a.scores < b.scores) {
        return a.scores - b.scores // -1
    } else if (a.scores > b.scores) {
        return  a.scores - b.scores // 1
    } else {
        if (a.age <= b.age) {
            return a.age - b.age
        } else {
            return  1
        }
    }
}))  // sort from score and age students


// bubble sort
const nums = [12,23,34,9,1,91,45,77] // по збільшенню

for (let j = 1; j < nums.length ; j++) {
    let isSorted = true

    for (let i = 0; i < nums.length - j; i++) {
        if (nums[i] > nums[i + 1]) {
            isSorted = false;
            // let temp = nums[i]
            // nums[i] = nums[i + 1]
            // nums[i + 1] = temp
            //
            [ nums[i], nums[i + 1] ] = [nums[i + 1], nums[i]]
        }
    }
    if  (isSorted) break
}



console.log(nums)
