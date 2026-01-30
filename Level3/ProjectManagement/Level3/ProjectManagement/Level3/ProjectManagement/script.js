function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value;

  if (taskText === "") return;

  let li = document.createElement("li");
  li.innerHTML = `
    ${taskText}
    <button onclick="completeTask(this)">Done</button>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function completeTask(btn) {
  btn.parentElement.style.textDecoration = "line-through";
}

function deleteTask(btn) {
  btn.parentElement.remove();
}
