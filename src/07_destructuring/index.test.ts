import {manType} from './index';


let props: manType;
beforeEach(()=> {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'},{title: '3', name: 'Bob'}],
        address: {
            street: {
                title: 'New Street'
            }
        }
    }
})

test("Test object destructuring", ()=> {


    const {age,lessons} = props;
    // const age = props.age
    // const lessons = props.lessons
    const {title} = props.address.street

    expect(age).toBe(32);
    expect(lessons.length).toBe(3);
})

test("Test array destructuring", ()=> {
    // const l1 = props.lessons[0];
    // const l2 = props.lessons[1];

    const [l1,l2, ...restProps] = props.lessons;

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')
    expect(restProps.length).toBe(1)
    expect(restProps[0].name).toBe('Bob')
})