// Напиши скрипт, який змінює кольори фону елемента <body>
// через інлайн-стиль по кліку на button.change-color і
// виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію
// getRandomHexColor.

const el = {
  colorSpan: document.querySelector(".color"),
  btnChengeColor: document.querySelector(".change-color"),
  body: document.querySelector("body"),
};

el.btnChengeColor.addEventListener("click", onChengeColor);

function onChengeColor() {
  const color = getRandomHexColor();

  el.colorSpan.textContent = color;
  el.body.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
