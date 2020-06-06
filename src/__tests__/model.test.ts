import Model from '../js/model'

describe('Testing Model', () => {
  const todos = new Model()

  test('addTodo method adds an extra todo item at the end of todos list', () => {
    const originalLength = todos.getLength()
    todos.addTodo('Hello World!')

    expect(originalLength + 1).toBe(todos.getLength())
  })
})
