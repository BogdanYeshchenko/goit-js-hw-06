// Напиши скрипт, який під час втрати фокусу на
// інпуті (подія blur), перевіряє його вміст щодо
// правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті,
// зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то
// border інпуту стає зеленим, якщо неправильна
// кількість - червоним.
// Для додавання стилів використовуй CSS-класи
// valid і invalid, які ми вже додали у вихідні
// файли завдання.

const elInput = document.querySelector("#validation-input");

const needLength = Number(elInput.dataset.length);

elInput.addEventListener("blur", (valueLength) => {
  const haveLength = valueLength.currentTarget.value.length;

  elInput.classList.remove("valid");
  elInput.classList.remove("invalid");

  if (haveLength !== needLength) {
    elInput.classList.add("invalid");
    return;
  }
  elInput.classList.add("valid");
});
