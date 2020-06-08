import { Todo } from './helpers'

export const elements = {
  todoInputBox: document.querySelector('#inputText') as HTMLInputElement,
  submitButton: document.querySelector('#submit') as HTMLButtonElement,
  list: document.getElementsByTagName('ul')[0] as HTMLElement,
}

export const clearTodos = () => {
  elements.list.innerHTML = ''
}

const renderTodo = (todo: Todo) => {
  const html = `
  <li>
    <input type="checkbox" ${todo.complete ? 'checked' : ''}/>
      <span contenteditable="true" class="editable">${todo.text}</span>
    <button class="delete">Delete</button>
  </li>
  `

  elements.list.insertAdjacentHTML('beforeend', html)
}

export const renderTodos = (todos: Todo[]) => {
  todos.forEach(renderTodo)
}
