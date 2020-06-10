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
 * Submit button handler
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
  if ((<HTMLElement>event.target).classList[0] === 'delete') {
    const todo = (<HTMLElement>event.target).parentElement
    Todo.deleteTodo(Number(todo.id))
    todo.parentElement.removeChild(todo)
  }
})
