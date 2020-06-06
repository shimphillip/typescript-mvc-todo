interface Todos {
  id: number
  text: string
  complete: boolean
}

class Model {
  todos: Todos[]

  constructor() {
    this.todos = [
      { id: 1, text: 'Run a marathon', complete: false },
      { id: 2, text: 'Plant a garden', complete: false },
    ]
  }

  addTodo(newText: string) {
    this.todos.push({
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      text: newText,
      complete: false,
    })
  }

  deleteTodo(id: number) {
    const doesExist = this.todos.find((todo) => todo.id === id)
    if (!doesExist) {
      return
    }

    const newTodos = this.todos.filter((todo) => todo.id !== id)
    this.todos = newTodos
  }

  toggleTodo(id: number) {
    const newTodos = this.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete,
        }
      }
      return todo
    })
    this.todos = newTodos
  }

  editTodo(id: number, updatedText: string) {
    const newTodos = this.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text: updatedText,
        }
      }

      return todo
    })

    this.todos = newTodos
  }

  getTodos() {
    return this.todos
  }

  getLength() {
    return this.todos.length
  }
}

export default Model
