// src/View.js – UI mit Datenbindung zur ViewModel
import { ViewModel } from './ViewModel.js';

class View {
  constructor(viewModel) {
    this.viewModel = viewModel;
    this.input = document.createElement("input");
    this.button = document.createElement("button");
    this.list = document.createElement("ul");

    this.button.textContent = "Hinzufügen";

    document.body.appendChild(this.input);
    document.body.appendChild(this.button);
    document.body.appendChild(this.list);

    this.button.addEventListener("click", () => {
      const value = this.input.value.trim();
      if (value) {
        this.viewModel.addTodo(value);
        this.input.value = "";
      }
    });

    this.list.addEventListener("click", (event) => {
      const index = Array.from(this.list.children).indexOf(event.target.closest("li"));
      if (event.target.tagName === "LI") {
        this.viewModel.toggleTodo(index);
      }
      if (event.target.tagName === "BUTTON") {
        this.viewModel.deleteTodo(index);
      }
    });

    this.viewModel.subscribe(this.render.bind(this));
    this.render(this.viewModel.getTodos());
  }

  render(todos) {
    this.list.innerHTML = "";
    todos.forEach((todo) => {
      const li = document.createElement("li");
      li.textContent = todo.text;
      if (todo.done) {
        li.style.textDecoration = "line-through";
      }
      const delBtn = document.createElement("button");
      delBtn.textContent = "✖";
      li.appendChild(delBtn);
      this.list.appendChild(li);
    });
  }
}

// Einstiegspunkt
const app = new View(new ViewModel());
