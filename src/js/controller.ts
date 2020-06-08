// import view from './view'
import Model from './Model'
import { elements, renderTodos, clearTodos } from './view'

/**
 * Initialization
 */

const Todo = new Model()
const todos = Todo.getTodos()
renderTodos(todos)

/**
 * Submit button handloer
 */

elements.submitButton.addEventListener('click', (e) => {
  e.preventDefault()

  const newText = elements.todoInputBox.value

  Todo.addTodo(newText)
  const todos = Todo.getTodos()

  // clean up and render
  clearTodos()
  renderTodos(todos)
})
