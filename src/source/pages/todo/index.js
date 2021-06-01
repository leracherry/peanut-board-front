let state = {
  list: [
    {
      id: '1',
      title: 'Finish todo task',
      description: 'Ciklum internship',
      done: false,
      priority: 'high',
    },
    {
      id: '2',
      title: 'Master JS and React',
      description: 'finish Udemy courses',
      done: false,
      priority: 'normal',
    },
    {
      id: '3',
      title: 'Hello world 101',
      description: 'normal todo',
      done: false,
      priority: 'normal',
    },
    {
      id: '4',
      title: 'Hello world',
      description: 'low priority todo',
      done: false,
      priority: 'low',
    },
  ],
};


export default class Todo {
  constructor() {
    const self = this;

    this.list = document.querySelector('.todo-list');
    this.todoStatus = false;


    const save = document.querySelector('.save-todo');
    const cancel = document.querySelector('.cancel-todo');
    const update = document.querySelector('.update-todo');
    const searchTodo = document.querySelector('.searchTodo');
    const handleStatus = document.querySelector('.status');
    const handlePriority = document.querySelector('.priority');

    save.addEventListener('click', this.addTodo.bind(this));
    cancel.addEventListener('click', this.cancelTodo.bind(this));
    update.addEventListener('click', this.updateTodo.bind(this));
    searchTodo.addEventListener('input', this.handleSearch.bind(this));
    handleStatus.addEventListener('change', this.handleStatus.bind(this));
    handlePriority.addEventListener('change', this.handlePriority.bind(this));

    document.addEventListener('click', (event) => {
      if (!event.target) {
        return;
      }

      if (event.target.classList.contains('button--delete')) {
        self.removeTodo(event);
      }
      if (event.target.classList.contains('button--done')) {
        self.doneTodo(event);
      }
      if (event.target.classList.contains('button--edit')) {
        self.showEditModal(event);

        save.style.display = 'none';
        update.style.display = 'block';
      }
      if (event.target.classList.contains('create-todo')) {
        update.style.display = 'none';
        save.style.display = 'block';
      }
    });

    this.render();
  }

  render() {
    this.list.innerHTML = '';

    if (localStorage.getItem('state') !== null) {
      const updatedStateJson = localStorage.getItem('state');
      state = JSON.parse(updatedStateJson);
    }

    const completed = (a, b) => (a > b) - (a < b);


    state.list.sort((a, b) => completed(a.done, b.done)).map((todo) => {
      this.createDomElements(todo.id);
      this.title.insertAdjacentHTML('afterbegin', todo.title);
      this.description.insertAdjacentHTML('afterbegin', todo.description);
      this.priority.insertAdjacentHTML('afterbegin', todo.priority);


      if (todo.done) {
        this.li.classList.add('is-done');
      }

      this.list.appendChild(this.li);
      return todo;
    });
  }

  renderSearch() {
    this.list.innerHTML = '';

    if (localStorage.getItem('searchState') !== null) {
      const updatedStateJson = localStorage.getItem('searchState');
      const searchState = JSON.parse(updatedStateJson);

      searchState.forEach((todo) => {
        this.createDomElements(todo.id);
        this.title.insertAdjacentHTML('afterbegin', todo.title);
        this.description.insertAdjacentHTML('afterbegin', todo.description);
        this.priority.insertAdjacentHTML('afterbegin', todo.priority);


        if (todo.done) {
          this.li.classList.add('is-done');
        }

        this.list.appendChild(this.li);
      });
    }
  }

  createDomElements(id) {
    this.li = document.createElement('li');
    this.li.classList.add('todo-item');

    this.title = document.createElement('h4');
    this.title.classList.add('title');

    this.description = document.createElement('div');
    this.description.classList.add('description');


    this.footer = document.createElement('div');
    this.footer.classList.add('todo-item__footer');
    this.li.appendChild(this.title);
    this.li.appendChild(this.description);
    this.li.appendChild(this.footer);

    this.priority = document.createElement('div');
    this.priority.classList.add('priority-box');

    this.actionBox = document.createElement('div');
    this.actionBox.classList.add('action-box');

    this.footer.appendChild(this.priority);
    this.footer.appendChild(this.actionBox);

    this.actionBoxMenu = document.createElement('div');
    this.actionBoxMenu.classList.add('action-box__menu');
    this.actionBoxMenu.innerHTML = '...';

    this.actions = document.createElement('div');
    this.actions.classList.add('actions');

    this.actionBox.appendChild(this.actionBoxMenu);
    this.actionBox.appendChild(this.actions);


    this.done = document.createElement('button');
    this.edit = document.createElement('button');
    this.delete = document.createElement('button');

    this.done.classList.add('button--done', 'button');
    this.edit.classList.add('button--edit', 'button');
    this.delete.classList.add('button--delete', 'button');

    this.done.setAttribute('data-id', id);
    this.delete.setAttribute('data-id', id);
    this.edit.setAttribute('data-id', id);

    this.done.innerHTML = 'Done';
    this.edit.innerHTML = 'Edit';
    this.delete.innerHTML = 'Delete';

    this.actions.appendChild(this.done);
    this.actions.appendChild(this.edit);
    this.actions.appendChild(this.delete);
  }

  addTodo() {
    const modalWrapper = document.querySelector('.modal-wrapper');

    const todoTitle = document.querySelector('.create-input').value;
    const todoDescription = document.querySelector('.create-description').value;
    const todoPriority = document.querySelector('.create-priority').value;

    if (!todoTitle.trim()) {
      return null;
    }

    const newItem = {
      id: Date.now().toString(),
      title: todoTitle,
      description: todoDescription,
      done: false,
      priority: todoPriority,
    };

    state.list.push(newItem);

    document.querySelector('.create-input').value = '';
    document.querySelector('.create-description').value = '';

    modalWrapper.classList.remove('is-active');

    // eslint-disable-next-line no-undef
    localStorage.setItem('state', JSON.stringify(state));

    return this.render();
  }

  removeTodo(event) {
    const id = event.target.getAttribute('data-id');

    state.list = state.list.filter((todo) => todo.id !== id);

    localStorage.setItem('state', JSON.stringify(state));

    this.render();
  }

  cancelTodo() {
    const modalWrapper = document.querySelector('.modal-wrapper');
    modalWrapper.classList.remove('is-active');

    document.querySelector('.create-input').value = '';
    document.querySelector('.create-description').value = '';

    this.render();
  }

  doneTodo(event) {
    const id = event.target.getAttribute('data-id');

    state.list = state.list.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });

    localStorage.setItem('state', JSON.stringify(state));

    document.querySelector('.status').getElementsByTagName('option')[0].selected = 'selected';
    document.querySelector('.priority').getElementsByTagName('option')[1].selected = 'selected';

    this.render();
  }

  showEditModal(event) {
    const modalWrapper = document.querySelector('.modal-wrapper');
    const updateTaskId = event.target.getAttribute('data-id');

    modalWrapper.classList.add('is-active');

    state.list = state.list.map((todo) => {
      if (todo.id === updateTaskId) {
        document.querySelector('.create-input').value = todo.title;
        document.querySelector('.create-description').value = todo.description;
        document.querySelector('.update-todo').setAttribute('data-id', updateTaskId);
      }

      return todo;
    });

    this.render();
  }

  updateTodo(event) {
    const modalWrapper = document.querySelector('.modal-wrapper');

    const updateTaskId = event.target.getAttribute('data-id');

    const todoTitle = document.querySelector('.create-input').value;
    const todoDescription = document.querySelector('.create-description').value;
    const todoPriority = document.querySelector('.create-priority').value;

    state.list = state.list.map((todo) => {
      if (todo.id === updateTaskId) {
        todo.title = todoTitle;
        todo.description = todoDescription;
        todo.priority = todoPriority;
      }

      return todo;
    });

    localStorage.setItem('state', JSON.stringify(state));
    modalWrapper.classList.remove('is-active');


    this.render();
  }

  handleSearch(event) {
    const todoFilter = event.target.value.toLocaleLowerCase();
    document.querySelector('.priority').getElementsByTagName('option')[1].selected = 'selected';


    const filteredTodos = state.list.filter((todo) => todo.title.toLowerCase().includes(todoFilter)).map((todo) => todo);

    localStorage.setItem('searchState', JSON.stringify(filteredTodos));

    this.renderSearch();
  }

  handleStatus(event) {
    const status = event.target.value;

    document.querySelector('.priority').getElementsByTagName('option')[1].selected = 'selected';

    if (status === 'done') {
      const doneTodos = state.list.filter((todo) => (todo.done === true)).map((todo) => todo);

      this.todoStatus = true;


      localStorage.setItem('searchState', JSON.stringify(doneTodos));


      this.renderSearch();
    }

    if (status === 'open') {
      this.todoStatus = false;

      this.render();
    }
  }

  handlePriority(event) {
    const priority = event.target.value;

    let filteredTodos;


    if (this.todoStatus) {
      filteredTodos = state.list.filter((todo) => todo.priority === priority && todo.done === true).map((todo) => todo);
    } else {
      filteredTodos = state.list.filter((todo) => {
        switch (priority) {
          case 'high':
            // eslint-disable-next-line no-unused-expressions
            return todo.priority === priority;

          case 'normal':
            // eslint-disable-next-line no-unused-expressions
            return todo;

          case 'low':
            // eslint-disable-next-line no-unused-expressions
            return todo.priority === priority;

          default:
            return todo;
        }
      }).map((todo) => todo);
    }


    localStorage.setItem('searchState', JSON.stringify(filteredTodos));

    this.renderSearch();
  }
}
