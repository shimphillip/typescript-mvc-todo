// import view from './view'
import Model from './Model'
import * as view from './view'

/**
 * Initialization
 */
const Todo = new Model()
const todos = Todo.getTodos()
view.renderTodos(todos)

/**
 * Add todo
 */
view.elements.submitButton.addEventListener('click', (event) => {
  event.preventDefault()
  const newText = view.elements.todoInputBox.value

  Todo.addTodo(newText)
  const todos = Todo.getTodos()
  const newTodo = todos[todos.length - 1]

  // append new todo
  view.renderTodo(newTodo)
})

/**
 * Remove todo
 */
view.elements.list.addEventListener('click', (event) => {
  const element = event.target as HTMLElement

  if (element.classList[0] === 'delete') {
    const todo = element.parentElement
    Todo.deleteTodo(Number(todo.id))
    view.removeTodo(todo)
  }
})

/**
 * Toggle todo
 */
view.elements.list.addEventListener('click', (event) => {
  const element = event.target as HTMLInputElement

  if (element.closest('.checkbox')) {
    const todo = element.parentElement
    Todo.toggleTodo(Number(todo.id))
    view.markSiblingComplete(element)
  }
})

/**
 * Update todo
 */
view.elements.list.addEventListener('focusout', (event) => {
  const element = event.target as HTMLElement

  if (element.classList[0] === 'editable') {
    const todo = element.parentElement
    const updatedText = element.textContent
    Todo.editTodo(Number(todo.id), updatedText)
  }
})
