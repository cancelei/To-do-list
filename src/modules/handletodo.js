import Todo from './todolist.js';
import Task from './lists.js';

const container = document.createElement('div');
const input = document.createElement('input');
const tasklist = document.createElement('ul');
const btnclear = document.createElement('button');
// toDoLists data
let toDoLists = [];

// Main component that holds all the elements
export const render = () => {
  toDoLists = JSON.parse(localStorage.getItem('toDoLists')) || [];
  // Adding classes and attributes to DOM elements
  container.classList.add('listparent');
  input.classList.add('task-desc');
  input.placeholder = 'Add to your list...';
  btnclear.textContent = 'Clear all completed';
  btnclear.classList.add('btnclear');
  container.append(input);
  // Mapping through toDoLists array
  tasklist.innerHTML = '';
  toDoLists.map((toDoList) => {
    tasklist.appendChild(Todo(toDoList));
    return 'completed';
  });
  container.append(tasklist);
  // Appending DOM elements to parent container
  container.append(btnclear);
  const mainContainer = document.querySelector('.main');
  mainContainer.appendChild(container);
};

export const addTostorage = () => {
  localStorage.setItem('toDoLists', JSON.stringify(toDoLists));
  // window.location.reload();
};
// adding tasks to the todolist array
export const addTask = (description) => {
  const newTask = new Task();
  newTask.description = description;
  newTask.completed = false;
  newTask.taskindex = toDoLists.length + 1;
  toDoLists.push(newTask);
  addTostorage();
  window.location.reload();
};
// adding to local storage

export const editTask = (newDescription, editindex) => {
  toDoLists[editindex - 1].description = newDescription;
  addTostorage();
};

export const removeTask = (delteIndex) => {
  // remove object from array
  const newindex = Number(delteIndex);
  toDoLists.splice(newindex - 1, 1);
  // reset indexes of all array values
  const maxIndex = toDoLists.length;
  for (let i = 0; i < maxIndex; i += 1) {
    toDoLists[i].taskindex = i + 1;
  }
  addTostorage();
};