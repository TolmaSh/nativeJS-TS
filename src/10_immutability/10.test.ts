import {
    addNewBooksToUser,
    changeUserAddress,
    makeHairStyle, removeBook, updateBook,
    upgradeLaptop,
    userType,
    UserWithBooks,
    userWithLaptopType
} from "./10";


test('reference type test', () => {
    let user: userType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Kiev'
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
})

test('change address', () => {
    let user: userType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Kiev'
        }
    }


    const awesomeUser = changeUserAddress(user, 'Lviv')

    expect(user.address.title).toBe('Kiev')
    expect(awesomeUser.address.title).toBe('Lviv')
    const stupidUser = user
    stupidUser.address.title = 'Lviv'
    expect(user.address.title).toBe('Lviv')
    expect(stupidUser.address.title).toBe('Lviv')

})

test('upgrade laptop', () => {
    let user: userWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Kiev',
            house: 12
        },
        laptop: {title: 'ZenBook'}
    }

    const userWithNewLaptop = upgradeLaptop(user, 'Macbook')

    expect(user).not.toBe(userWithNewLaptop)
    expect(user.address).toBe(userWithNewLaptop.address)
    expect(user.laptop).not.toBe(userWithNewLaptop.laptop)
    expect(userWithNewLaptop.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')

})

test('addNewBooks', () => {
    let user: userWithLaptopType & UserWithBooks = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Kiev',
            house: 12
        },
        laptop: {title: 'ZenBook'},
        books: ['css', 'html', 'js', 'react']
    }

    const userWithNewBooks = addNewBooksToUser(user, ['ts', 'rest api'])

    expect(user).not.toBe(userWithNewBooks)
    expect(user.address).toBe(userWithNewBooks.address)
    expect(user.books).not.toBe(userWithNewBooks.books)
    expect(userWithNewBooks.books[4]).toBe('ts')
    expect(userWithNewBooks.books[5]).toBe('rest api')

})

test('update book', () => {
    let user: userWithLaptopType & UserWithBooks = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Kiev',
            house: 12
        },
        laptop: {title: 'ZenBook'},
        books: ['css', 'html', 'js', 'react']
    }

    const userWithNewBook = updateBook(user, 'js' ,'ts')

    expect(userWithNewBook.books[2]).toBe('ts')
    expect(userWithNewBook.books[3]).toBe('react')

    const userWithNewBook2 = updateBook(user,'react','vue')
    expect(userWithNewBook2.books[3]).toBe('vue')
})

test('remove book', () => {
    let user: userWithLaptopType & UserWithBooks = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Kiev',
            house: 12
        },
        laptop: {title: 'ZenBook'},
        books: ['css', 'html', 'js', 'react']
    }

    const userWithNewBook = removeBook(user, 'js')

    expect(userWithNewBook.books[2]).toBe('react')

}