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

function createlist(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const span = document.createElement('span');
  span.setAttribute('class', 'item__name');
  span.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
  deleteBtn.addEventListener('click', () => {
    container.removeChild(itemRow);
  });

  const divider = document.createElement('div');
  divider.setAttribute('class', 'item__divider');

  item.appendChild(span);
  item.appendChild(deleteBtn);
  itemRow.appendChild(item);
  itemRow.appendChild(divider);

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
