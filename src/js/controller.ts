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

  // Grab the text
  const newText = elements.todoInputBox.value

  // instantiate an object
  Todo.addTodo(newText)
  const todos = Todo.getTodos()

  // render todos
  renderTodos(todos)
})
