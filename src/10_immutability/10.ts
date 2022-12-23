export type userType = {
    name: string
    hair: number
    address: { title: string }
}
export type userWithLaptopType = {
    name: string
    hair: number
    address: { title: string, house: number }
    laptop: { title: string }
}
export type UserWithBooks = {
    books: string[]
}

export function makeHairStyle(u: userType, power: number) {

    return {...u, hair: u.hair / power}

}

export const changeUserAddress = (u: userType, newAddress: string) => {
    return {...u, address: {...u.address, title: newAddress}}
}
export const upgradeLaptop = (user: userWithLaptopType, newLaptop: string) => {
    return {...user, laptop: {...user.laptop, title: newLaptop}}
}
export const addNewBooksToUser = (user: userWithLaptopType & UserWithBooks, newBooks: string[]) => {
    // return {...user,books: [...user.books].concat(newBooks)}
    return {...user, books: [...user.books, ...newBooks]}
}
export const updateBook = (user: userWithLaptopType & UserWithBooks, oldBook: string, newBook: string) => {
    return {...user, books: user.books.map(b => b === oldBook ? newBook : b)}
}

export const removeBook = (user: userWithLaptopType & UserWithBooks, book: string) => {
    // return {...user,books: [...user.books].concat(newBooks)}
    return {...user, books: user.books.filter(b => b !== book)}
}