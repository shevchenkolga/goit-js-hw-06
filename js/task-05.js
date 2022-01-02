const refs = {
    formInput: document.querySelector("#name-input"),
    nameOutput: document.querySelector("#name-output")
}
refs.formInput.addEventListener("input", onInputChange)

function onInputChange(event) {
    if (refs.formInput.value === "") {
        refs.nameOutput.textContent = "Anonymous";
    }
    else {
        refs.nameOutput.textContent = event.currentTarget.value;
    }
}