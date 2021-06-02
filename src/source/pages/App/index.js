import Todo from '../todo/index';

const modalWrapper = document.querySelector('.modal-wrapper');
const createTodo = document.querySelector('.create-todo');
const body = document.querySelector('body');


createTodo.addEventListener('click', () => {
  modalWrapper.classList.add('is-active');
});

body.addEventListener('click', (event) => {
  if (event.target === modalWrapper) {
    modalWrapper.classList.remove('is-active');
  }
});

const todo = new Todo();
