// Controller.js – koordiniert Model und View
import { Model } from "./Model.js";
import { View } from "./View.js";

const model = new Model();
const view = new View();

model.subscribe((todos) => view.render(todos));

view.bindAdd((text) => model.addTodo(text));
view.bindToggle((index) => model.toggleTodo(index));
view.bindDelete((index) => model.deleteTodo(index));

// Initialer Zustand
view.render(model.todos);
