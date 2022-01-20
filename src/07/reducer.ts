export const addSellery = (salary: number, bonus: number) => salary + bonus
export const fallingSellery = (salary: number, minus: number) => salary - minus
export const multSellery = (salary: number, coefficient: number) => salary * coefficient
export const divSellery = (salary: number, coefficient: number) => salary * coefficient


//1. В параметрах у всех - salary (state)
//2. Название фу-кции отображает (type of action)
//3. Дополнительные значения для каждого типа действия

export type AddSalaryActionType = {
    type: 'ADD-SALARY',
    bonus: number
}
export type FallingSalaryActionType = {
    type: 'FALLING-SALARY',
    minus: number
}
export type MultSalaryActionType = {
    type: 'MULT-SALARY',
    coefficient: number
}
export type DivSalaryActionType = {
    type: 'DIV-SALARY',
    coefficient: number
}

type ActionType = AddSalaryActionType
    | FallingSalaryActionType
    | MultSalaryActionType
    | DivSalaryActionType

export const salaryReducer = (salary: number, action: ActionType) => {
    switch (action.type) {
        case 'ADD-SALARY':
            return salary + action.bonus

        case "FALLING-SALARY":
            return salary - action.minus
        case "DIV-SALARY":
        case "MULT-SALARY":
            return salary * action.coefficient
        default:
            return salary
    }
}
