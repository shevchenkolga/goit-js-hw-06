const allCategories = document.querySelectorAll(".item")
console.log(`Number of categories:`, allCategories.length)

allCategories.forEach(element => {
    const titleEl = element.querySelector("h2")
    
    const listEl = element.querySelectorAll("li");

    console.log(`Category:`, titleEl.textContent)
    console.log(`Elements:`, listEl.length)


});