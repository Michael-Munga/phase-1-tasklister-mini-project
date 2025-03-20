document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form");
  let taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let taskInput = document.getElementById("new-task-description");
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
      let newTask = document.createElement("li");
      newTask.textContent = taskText + " ";

      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => newTask.remove());

      newTask.appendChild(deleteButton);
      taskList.appendChild(newTask);

      taskInput.value = "";
    }
  });
});
