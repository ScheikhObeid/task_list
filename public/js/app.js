// Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector("#task-list");
const clearBtn = document.querySelector("#clear-button");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task-input");

// Load all eventlistener

loadEventListeners();

// Load all eventlistener

function loadEventListeners() {
  // Add task envent
  form.addEventListener("submit", addTask);
}

function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a Task");
  }
  // Create li element
  const li = document.createElement("li");
  // Create li class
  li.className = "px-5 py-3 hover:bg-blue-600 hover:text-blue-200";
  // Create the text node and append it to li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create a element
  const link = document.createElement("a");
  // Create a class
  link.className = "float-right";
  // Add icon
  link.innerHTML = "x";
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  //clear input
  taskInput.value = "";
  e.preventDefault();
}
