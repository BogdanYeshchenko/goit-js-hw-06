const elFather = document.querySelector("#categories");
const elOllTitle = document.querySelectorAll(".item");

const elOllItem = document.querySelectorAll(".item ul");

console.log("Number of categories: ", elFather.children.length);

console.log("Category: ", elOllTitle[0].firstElementChild.textContent);
console.log("Elements: ", elOllItem[0].children.length);

console.log("Category: ", elOllTitle[1].firstElementChild.textContent);
console.log("Elements: ", elOllItem[1].children.length);

console.log("Category: ", elOllTitle[2].firstElementChild.textContent);
console.log("Elements: ", elOllItem[2].children.length);
