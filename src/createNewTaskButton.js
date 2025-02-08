const createNewTaskButton = function () {
  const newTaskContainer = document.createElement("div");
  newTaskContainer.className = "new-task-container";

  const newTaskButton = document.createElement("button");
  newTaskButton.className = "new-task-button col";
  newTaskButton.textContent = "+ New";

  newTaskContainer.appendChild(newTaskButton);

  return newTaskContainer;
};

export { createNewTaskButton };
