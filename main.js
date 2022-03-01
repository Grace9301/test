'use strict';

const container = document.querySelector('.items');
const userInput = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');
const deleteBtn = document.querySelector('.item__delete');

function onAdd() {
  const text = userInput.value;
  if (text === '') {
    userInput.focus();
    return;
  }
  const list = createlist(text);
  container.appendChild(list);
  list.scrollIntoView({ block: 'center' });
  userInput.value = '';
  userInput.focus();
}
let id = 0; //UUID
function createlist(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
  <div class="item">
    <span class="item__name">${text}</span>
    <button class="item__delete">
      <i class="far fa-trash-alt" data-id=${id}></i>
    </button>
  </div>
  <div class="item__divider"></div>
  `;
  id++;
  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

userInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
});

container.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id='${id}']`);
    toBeDeleted.remove();
  }
});
