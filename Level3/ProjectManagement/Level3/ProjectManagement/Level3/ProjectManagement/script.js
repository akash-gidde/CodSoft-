function addTask() {
  let input = document.getElementById("taskInput");
  let taskValue = input.value;

  if (taskValue === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");
  li.innerText = taskValue;

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";

  delBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
