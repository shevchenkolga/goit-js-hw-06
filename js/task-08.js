const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault()
    const FormEl = event.currentTarget.elements;
    const mail = FormEl.email.value;
    const password = FormEl.password.value;
    const FormData = {
        mail,
        password,
    };

    if (mail === "" || password === "") {
        return window.alert("Please, fill in all the fields!")
    }
    else {
        console.log(FormData)
        form.reset()
    }
}