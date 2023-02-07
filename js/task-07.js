// Напиши скрипт, який реагує на зміну значення
// input#font-size-control (подія input) і змінює
// інлайн-стиль span#text, оновлюючи властивість
// font-size. В результаті, перетягуючи повзунок,
// буде змінюватися розмір тексту.

const el = {
  sizeControl: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

el.sizeControl.addEventListener("input", (vel) => {
  el.text.style.fontSize = vel.currentTarget.value + "px";
});
