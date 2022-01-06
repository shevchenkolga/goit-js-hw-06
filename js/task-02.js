const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients");
console.log(ingredientsList)


const listEl = ingredients.map(el => {
  const cteatedLi = document.createElement("li");
  cteatedLi.textContent = el;
  cteatedLi.classList.add("item");
  return cteatedLi;
}

)

ingredientsList.append(...listEl);
  
  


