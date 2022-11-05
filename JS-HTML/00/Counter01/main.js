
const refs = {
    counter: document.querySelector (`#counter`),
    valueEl: document.querySelector (`#value`),
    incrementBtn: document.querySelector(`[data-action="increment"]`),
    decrementBtn: document.querySelector(`[data-action="decrement"]`),
};
const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};
refs.incrementBtn.addEventListener(`click`, function () {
    console.log(counter.value)
    counter.increment ();
    console.log(counter.value)
    refs.valueEl.textContent = counter.value;
});
refs.decrementBtn.addEventListener(`click`, function () {
    counter.decrement ();
    refs.valueEl.textContent = counter.value;
});
