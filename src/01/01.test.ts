import {mult, splitIntoWords, sum} from "./01";

let a: number,
    b: number,
    c: number

beforeEach( () => {
    a = 1
    b = 2
    c = 3
})

test('Sum should be a correct', () => {
    //data
    //     const a = 1
    //     const b = 2
    //     const c = 3
    //action
    const result = sum(a,b);
    const result2 = sum(a,c)

    //expect result
    expect(result).toBe(3);
    expect(result2).toBe(4);
})

test('Should be a correct multiply', () => {
    //data
    // const a = 2
    // const b = 4
    // const c = 3

    //action
    const result1 = mult(a,b)
    const result2 = mult(a,c)

    //expect result
    expect(result1).toBe(2)
    expect(result2).toBe(3)
})

test('splitting into words should be a correct', () => {
    //data
    const split1 = "Hello my friend!"
    const split2 = "Js - is the best programming language"

    //action
    const result1 = splitIntoWords(split1)
    const result2 = splitIntoWords(split2)

    //expect result
        //FIRST TEST
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe("Hello")
    expect(result1[1]).toBe("my")
    expect(result1[2]).toBe("friend")

        //SECOND TEST
    expect(result2.length).toBe(6)
    expect(result2[0]).toBe("Js")
    expect(result2[1]).toBe("is")
    expect(result2[2]).toBe("the")
    expect(result2[3]).toBe("best")
    expect(result2[4]).toBe("programming")
    expect(result2[5]).toBe("language")

})