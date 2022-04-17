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
  // Remove task event
  taskList.addEventListener("click", removeTask);
  // Clear all tasks
  clearBtn.addEventListener("click", clearTasks);
  // Filter
  filter.addEventListener("keyup", filterTasks);
}

function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a Task");
  }
  // Create li element
  const li = document.createElement("li");
  // Create li class
  li.className = "px-5 py-3 hover:bg-blue-600 hover:text-blue-200";
  // Create li id
  li.id = "item";
  // Create the text node and append it to li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create a element
  const link = document.createElement("a");
  // Create a class
  link.className = "float-right";
  // Add icon
  link.innerHTML = '<h4 class="text-xl cursor-pointer" >x</h4>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  //clear input
  taskInput.value = "";
  e.preventDefault();
}

//Remove task function
function removeTask(e) {
  if (e.target.parentElement.classList.contains("float-right")) {
    if (confirm("Are you sure, you want to delete this task?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear Tasks
function clearTasks() {
  //   taskList.innerHTML = "";
  // Faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}
// Function task filter
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll("#item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
