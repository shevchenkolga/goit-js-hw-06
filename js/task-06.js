const input = document.querySelector("#validation-input")
console.log(input)
const neededSymbol = input.dataset.length;
console.log(neededSymbol)

input.addEventListener("blur", onInputBlur)
function onInputBlur(event) {
    if (event.currentTarget.value.length == neededSymbol) {
        input.classList.add("valid")
        input.classList.remove("invalid")
    }
    else {
        input.classList.add("invalid")
        input.classList.remove("valid")
    }
}