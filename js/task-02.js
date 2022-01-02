const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl1 = document.createElement("li")
listEl1.classList.add("item")
listEl1.textContent = "Potatoes"
const listEl2 = document.createElement("li")
listEl2.classList.add("item")
listEl2.textContent = "Mushroom"
const listEl3 = document.createElement("li")
listEl3.classList.add("item")
listEl3.textContent = "Garlic"
const listEl4 = document.createElement("li")
listEl4.classList.add("item")
listEl4.textContent = "Tomatos"
const listEl5 = document.createElement("li")
listEl5.classList.add("item")
listEl5.textContent = "Herbs"
const listEl6 = document.createElement("li")
listEl6.classList.add("item")
listEl6.textContent = "Condiments"

const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(listEl1, listEl2, listEl3, listEl4, listEl5, listEl6)