const refs = {
  amountEl: document.querySelector('#controls input'),
  buttonCreateEl: document.querySelector('button[data-create]'),
  buttonDesrtoyEl: document.querySelector('button[data-destroy]'),
  addEl: document.querySelector('#boxes'),
};

refs.amountEl.addEventListener('blur', event => {
  let amount = event.currentTarget.value;
  refs.buttonCreateEl.addEventListener('click', () => {
    refs.amountEl.value = '';
    createBoxes(amount);
    amount = '';
  });
});

refs.buttonDesrtoyEl.addEventListener('click', () => {
  refs.addEl.innerHTML = '';
  size = 20;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let size = 20;
function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const divboxEl = document.createElement('div');
    divboxEl.style.width = `${size}px`;
    divboxEl.style.height = `${size}px`;
    divboxEl.style.backgroundColor = getRandomHexColor();
    refs.addEl.append(divboxEl);
  }
}
