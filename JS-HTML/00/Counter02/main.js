const counterVal = document.querySelector(".counterValue")
const decrement = document.querySelector(`[data-action="decrement"]`)
const increment = document.querySelector(`[data-action="increment"]`)
const reset = document.querySelector(`[data-action="reset"]`)
let count = 0
counterVal.innerHTML = count

const counterUpdate = () => {
    counterVal.innerHTML = count
}

decrement.addEventListener('click', () => {
    count--
    counterUpdate()
})
increment.addEventListener('click', () => {
    count++
    counterUpdate()
})
reset.addEventListener('click', () => {
    count = 0
    counterUpdate()
})