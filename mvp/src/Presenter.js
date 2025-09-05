// src/Presenter.js – Steuerung von View & Model
import { Model } from "./Model.js";
import { View } from "./View.js";

export class Presenter {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindAdd(this.handleAdd.bind(this));
    this.view.bindToggle(this.handleToggle.bind(this));
    this.view.bindDelete(this.handleDelete.bind(this));

    this.updateView();
  }

  handleAdd(text) {
    this.model.addTodo(text);
    this.updateView();
  }

  handleToggle(index) {
    this.model.toggleTodo(index);
    this.updateView();
  }

  handleDelete(index) {
    this.model.deleteTodo(index);
    this.updateView();
  }

  updateView() {
    const todos = this.model.getTodos();
    this.view.render(todos);
  }
}

// Einstiegspunkt
const app = new Presenter(new Model(), new View());
