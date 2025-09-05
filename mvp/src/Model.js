// src/Model.js – Verwalten der To-Do-Daten
export class Model {
    constructor() {
      this.todos = [];
    }
  
    getTodos() {
      return this.todos;
    }
  
    addTodo(text) {
      this.todos.push({ text, done: false });
    }
  
    toggleTodo(index) {
      this.todos[index].done = !this.todos[index].done;
    }
  
    deleteTodo(index) {
      this.todos.splice(index, 1);
    }
  }
  