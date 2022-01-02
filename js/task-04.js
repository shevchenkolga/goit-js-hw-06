const counter = {
    initialValue: 0,
    increment() {
        this.initialValue += 1;
    },
    decrement() {
       this.initialValue -= 1; 
    },

}

const BtnDecrement = document.querySelector(`[data-action="decrement"]`)

const BtnIncrement = document.querySelector(`[data-action="increment"]`)

const valeuEl = document.querySelector("#value")
BtnDecrement.addEventListener("click", function () {
    counter.decrement();
    valeuEl.textContent = counter.initialValue;
})

BtnIncrement.addEventListener("click", function () {
    counter.increment();
     valeuEl.textContent = counter.initialValue;
})