interface Todos {
  id: number;
  text: string;
  complete: boolean;
}

class Model {
  todos: Todos[];

  constructor() {
    this.todos = [
      { id: 1, text: 'Run a marathon', complete: false },
      { id: 2, text: 'Plant a garden', complete: false },
    ];
  }

  addTodo(text: string) {
    this.todos.push({
      id: this.todos[this.todos.length - 1].id + 1,
      text,
      complete: false,
    });
  }
}
