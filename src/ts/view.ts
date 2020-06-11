import { Todo } from './helpers'

export const elements = {
  todoInputBox: document.querySelector('#inputText') as HTMLInputElement,
  submitButton: document.querySelector('#submit') as HTMLButtonElement,
  list: document.getElementsByTagName('ul')[0] as HTMLElement,
  listItemTemplate: document.querySelector(
    '#listItemTemplate'
  ) as HTMLTemplateElement,
}

export const clearTodos = () => {
  elements.list.innerHTML = ''
}

export const renderTodo = (todo: Todo) => {
  const { id, complete, text } = todo
  const listItemTemplate = document.importNode(
    elements.listItemTemplate.content,
    true
  )
  const listItemElement = listItemTemplate.querySelector(
    '.list-item'
  ) as HTMLElement
  const checkboxElement = listItemTemplate.querySelector(
    '.checkbox'
  ) as HTMLInputElement
  const textElement = listItemTemplate.querySelector('.editable') as HTMLElement

  listItemElement.id = id.toString()
  checkboxElement.checked = complete
  textElement.textContent = text

  elements.list.append(listItemTemplate)
}

export const renderTodos = (todos: Todo[]) => {
  todos.forEach(renderTodo)
}

export const removeTodo = (element: HTMLElement) => {
  element.parentElement.removeChild(element)
}

export const markSiblingComplete = (element: HTMLInputElement) => {
  element.parentElement.children[1].classList.toggle('complete')
}
