

export type UserType = {
    name: string
    age: number
}
const icreaseAge = (u: UserType) => {
    u.age += 1
}
test('big test', ()=> {

    let user: UserType = {
        name: 'Dimych',
        age: 32
    }
    icreaseAge(user)

    expect(user.age).toBe(33)
})