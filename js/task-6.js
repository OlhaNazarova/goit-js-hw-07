const refs = {
  div: document.querySelector("#controls"),
  input: document.querySelector("input"),
  divBoxes: document.querySelector("#boxes"),
};

refs.div.addEventListener("click", onClickDivConteiner);

function onClickDivConteiner(evt) {
  const button = evt.target.textContent;
  if (button === "Create") {
    const userInput = Number(refs.input.value);
    createBoxes(userInput);
  } else if (button === "Destroy") {
    reset();
  }
}

function createBoxes(amount) {
  const elemtsDiv = [];
  for (let i = 0; i < amount; i += 1) {
    const elem = document.createElement("div");
    elem.style.width = `${30 + i * 10}px`;
    elem.style.height = `${30 + i * 10}px`;
    elem.style.backgroundColor = getRandomHexColor();
    elemtsDiv.push(elem);
  }
  refs.divBoxes.append(...elemtsDiv);
}

function reset() {
  refs.divBoxes.innerHTML = "";
  refs.input.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
