export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}

type UsersType = {
    [key: string]: {id:number,  name:string}
}

const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '3232312': {id: 3232312, name: 'Natasha'},
    '1212': {id:1212, name:'Valera'},
    '1': {id: 1, name: 'Katya'}
}

const user = { id:  100500, name: 'Igor'}

users[user.id] = user
delete users[user.id]