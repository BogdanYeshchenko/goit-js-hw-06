const elFather = document.querySelector("#categories");
const elOllTitle = document.querySelectorAll(".item");

const elOllItem = document.querySelectorAll(".item ul");

console.log("Number of categories: ", elFather.children.length);

// console.log("Category: ", elOllTitle[0].firstElementChild.textContent);
// console.log("Elements: ", elOllItem[0].children.length);

// console.log("Category: ", elOllTitle[1].firstElementChild.textContent);
// console.log("Elements: ", elOllItem[1].children.length);

for (let i = 0; i <= elOllItem.length - 1; i++) {
  console.log("Category: ", elOllTitle[i].firstElementChild.textContent);
  console.log("Elements: ", elOllItem[i].children.length);
}
