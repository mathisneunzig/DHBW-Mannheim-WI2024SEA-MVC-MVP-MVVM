// Model.js – verwaltet die Liste und Benachrichtigungen
export class Model {
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
      this.todos.push({ text, done: false });
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
  }
  