document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let form = document.getElementById("create-task-form");
  let taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    addTask();
  });

  function addTask() {
    let taskInput = document.getElementById("new-task-description");
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
      let newTask = document.createElement("li");
      newTask.textContent = taskText + " ";

      // Create the priority dropdown
      let priorityDropdown = document.createElement("select");
      ["High", "Medium", "Low"].forEach((priority) => {
        let option = document.createElement("option");
        option.value = priority.toLowerCase();
        option.textContent = priority;
        priorityDropdown.appendChild(option);
      });

      let deleteButton = createDeleteButton();

      newTask.appendChild(priorityDropdown);
      newTask.appendChild(deleteButton);
      taskList.appendChild(newTask);

      taskInput.value = ""; // Clear input field
    }
  }

  function createDeleteButton() {
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", (event) =>
      event.target.parentElement.remove()
    );
    return deleteButton;
  }
});
