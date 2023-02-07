// Створи змінну counterValue, в якій буде зберігатися поточне
// значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або
// зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const el = {
  btnDecr: document.querySelector('[data-action="decrement"]'),
  btnIncr: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};

let counterValue = 0;

el.btnDecr.addEventListener("click", decrement);

el.btnIncr.addEventListener("click", increment);

function decrement() {
  el.value.textContent = counterValue -= 1;
}

function increment() {
  el.value.textContent = counterValue += 1;
}
