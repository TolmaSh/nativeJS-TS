import {
    AddSalaryActionType,
    addSellery, DivSalaryActionType,
    FallingSalaryActionType,
    fallingSellery, MultSalaryActionType,
    multSellery,
    salaryReducer
} from "./reducer";

test("addSalary", () => {
    //1. Тестовые данные
    const salary: number = 700
    const bonus: number = 250

    //2. Выполнение тестируемого кода
    const result = addSellery(salary, bonus)

    //3. Проверка ожидаемого результата
    expect(result).toBe(950)
})
test("fallingSalary", () => {
    //1. Тестовые данные
    const salary: number = 900
    const minus: number = 100

    //2. Выполнение тестируемого кода
    const result = fallingSellery(salary, minus)

    //3. Проверка ожидаемого результата
    expect(result).toBe(800)
})
test("multSalary", () => {
    //1. Тестовые данные
    const salary: number = 900
    const coefficient: number = 1.2

    //2. Выполнение тестируемого кода
    const result = multSellery(salary, coefficient)

    //3. Проверка ожидаемого результата
    expect(result).toBe(1080)
})
test("divSalary", () => {
    //1. Тестовые данные
    const salary: number = 900
    const coefficient: number = 0.9

    //2. Выполнение тестируемого кода
    const result = fallingSellery(salary, coefficient)

    //3. Проверка ожидаемого результата
    expect(result).toBe(899.1)
})
test("case 'ADD_SALARY' of salaryReducer", () => {
    //1. Тестовые данные
    const salary: number = 700
    const action: AddSalaryActionType = {
        type: 'ADD-SALARY',
        bonus: 300
    }

    //2. Выполнение тестируемого кода
    const result = salaryReducer(salary,action)

    //3. Проверка ожидаемого результата
    expect(result).toBe(1000)
})
test("case 'FALLING_SALARY' of salaryReducer", () => {
    //1. Тестовые данные
    const salary: number = 1000
    const action: FallingSalaryActionType = {
        type: 'FALLING-SALARY',
        minus: 300
    }

    //2. Выполнение тестируемого кода
    const result = salaryReducer(salary,action)

    //3. Проверка ожидаемого результата
    expect(result).toBe(700)
})
test("case 'DIV_SALARY' of salaryReducer", () => {
    //1. Тестовые данные
    const salary: number = 1000
    const action: DivSalaryActionType = {
        type: 'DIV-SALARY',
        coefficient: 1.2
    }

    //2. Выполнение тестируемого кода
    const result = salaryReducer(salary,action)

    //3. Проверка ожидаемого результата
    expect(result).toBe(1200)
})
test("case 'MULT_SALARY' of salaryReducer", () => {
    //1. Тестовые данные
    const salary: number = 1000
    const action: MultSalaryActionType = {
        type: 'MULT-SALARY',
        coefficient: 0.9
    }

    //2. Выполнение тестируемого кода
    const result = salaryReducer(salary,action)

    //3. Проверка ожидаемого результата
    expect(result).toBe(900)
})

