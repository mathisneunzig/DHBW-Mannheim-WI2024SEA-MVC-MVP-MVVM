// src/ViewModel.js – Bindeglied zwischen Model und View
import { Model } from './Model.js';

export class ViewModel {
  constructor() {
    this.todos = [];
    this.subscribers = [];
  }

  subscribe(callback) {
    this.subscribers.push(callback);
  }

  notify() {
    this.subscribers.forEach(cb => cb(this.todos));
  }

  addTodo(text) {
    this.todos.push(new Model(text));
    this.notify();
  }

  toggleTodo(index) {
    this.todos[index].done = !this.todos[index].done;
    this.notify();
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
    this.notify();
  }

  getTodos() {
    return this.todos;
  }
}
