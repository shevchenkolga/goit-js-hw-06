function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body")
console.log(body)
const btnChange = document.querySelector("button")
console.log(btnChange)
const span = document.querySelector(".color")
console.log(span)


btnChange.addEventListener("click", event => {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor
}
)

