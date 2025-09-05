// src/View.js – Nur UI, keine Logik. Übergibt Events an Presenter.
export class View {
    constructor() {
      this.input = document.createElement("input");
      this.button = document.createElement("button");
      this.list = document.createElement("ul");
  
      this.button.textContent = "Hinzufügen";
  
      document.body.appendChild(this.input);
      document.body.appendChild(this.button);
      document.body.appendChild(this.list);
    }
  
    bindAdd(handler) {
      this.button.addEventListener("click", () => {
        const value = this.input.value.trim();
        if (value) {
          handler(value);
          this.input.value = "";
        }
      });
    }
  
    bindToggle(handler) {
      this.list.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
          const index = Array.from(this.list.children).indexOf(event.target);
          handler(index);
        }
      });
    }
  
    bindDelete(handler) {
      this.list.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
          const index = Array.from(this.list.children).indexOf(event.target.parentElement);
          handler(index);
        }
      });
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
  