// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і
// натискає кнопку Створити, після чого рендериться
// колекція. Натисненням на кнопку Очистити, колекція
// елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один
// параметр - число. Функція створює стільки <div>,
// скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим
// від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у
// форматі HEX. Використовуй готову функцію
// getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст
// div#boxes, у такий спосіб видаляючи всі створені
// елементи.

const el = {
  inputNamber: document.querySelector('input[type="number"]'),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxPush: document.querySelector("#boxes"),
};

let quantityBox = 0;

el.inputNamber.addEventListener("input", (vel) => {
  quantityBox = Number(vel.currentTarget.value);
});

el.btnDestroy.addEventListener("click", () => (el.boxPush.innerHTML = ""));

el.btnCreate.addEventListener("click", () => {
  el.boxPush.innerHTML = "";

  const htmlOfBoxes = document.createElement("div");
  htmlOfBoxes.classList.add("create-boxes");

  for (let i = 0; i < quantityBox; i += 1) {
    const htmlOfBox = document.createElement("div");

    htmlOfBox.style.width = 30 + 10 * i + "px";
    htmlOfBox.style.height = "30px";
    htmlOfBox.style.backgroundColor = getRandomHexColor();

    htmlOfBoxes.append(htmlOfBox);
  }

  el.boxPush.append(htmlOfBoxes);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
