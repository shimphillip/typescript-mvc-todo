class View {
  constructor() {}

  getTodoText() {
    const text = document.getElementById('inputText')
    return text.textContent
  }
}
