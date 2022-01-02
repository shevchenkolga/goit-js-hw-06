const input = document.querySelector("#font-size-control")
console.log(input);
const title = document.querySelector("#text");
console.log(title)
input.addEventListener("input", onFontSizeChange) 

function onFontSizeChange(e) {
    title.style.fontSize = `${input.value}px`
}

