const refs = {
  span: document.querySelector(".color"),
  buttonChangeColor: document.querySelector(".change-color"),
  body: window.document.querySelector("body"),
};

refs.buttonChangeColor.addEventListener("click", () => {
  refs.span.textContent = refs.body.style.backgroundColor = getRandomHexColor();
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
