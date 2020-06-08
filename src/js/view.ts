import { Todos } from './helpers'

export const elements = {
  todoInputBox: document.querySelector('#inputText') as HTMLInputElement,
  submitButton: document.querySelector('#submit') as HTMLButtonElement,
  list: document.getElementsByTagName('ul')[0] as HTMLElement,
}

export const clearTodos = () => {
  elements.list.innerHTML = ''
}

const renderTodo = () => {
  const todo = `
  <li>
    <input type="checkbox" />
      <span contenteditable="true" class="editable">Check</span>
    <button class="delete">Delete</button>
  </li>
  `

  elements.list.insertAdjacentHTML('afterbegin', todo)
}

export const renderTodos = (todos: Todos[]) => {
  todos.forEach(renderTodo)
}
