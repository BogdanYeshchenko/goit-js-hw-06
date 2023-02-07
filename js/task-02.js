const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const elList = document.querySelector("#ingredients");

const makeListOfItems = (ingredients) => {
  return ingredients.map((ingredient) => {
    const elTextLine = document.createElement("li");
    elTextLine.textContent = ingredient;

    return elTextLine;
  });
};

const listOfItems = makeListOfItems(ingredients);

elList.append(...listOfItems);
