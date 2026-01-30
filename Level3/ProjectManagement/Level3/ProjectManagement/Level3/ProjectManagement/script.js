function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;

  if (task === "") {
    alert("Enter task");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `
    ${task}
    <button onclick="completeTask(this)">Done</button>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function completeTask(btn) {
  btn.parentElement.style.textDecoration = "line-through";
}

function deleteTask(btn) {
  btn.parentElement.remove();
}
