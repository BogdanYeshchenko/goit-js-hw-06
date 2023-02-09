// Напиши скрипт, який під час набору тексту в
// інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name-output.
// Якщо інпут порожній, у спані повинен відображатися
// рядок "Anonymous".

const el = {
  inputName: document.querySelector("#name-input"),
  outputName: document.querySelector("#name-output"),
};

el.inputName.addEventListener("input", (event) => {
  el.outputName.textContent = event.currentTarget.value || "Anonymous";

  // if (!el.outputName.textContent) {
  //   el.outputName.textContent = "Anonymous";
  // }

  // console.log(el.outputName.textContent);
});
