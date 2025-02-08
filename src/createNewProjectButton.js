const createNewProjectButton = function () {
  const newProjectContainer = document.createElement("div");
  newProjectContainer.className = "new-project-container";

  const newProjectButton = document.createElement("button");
  newProjectButton.className = "new-project-button col";
  newProjectButton.textContent = "New Project";

  newProjectContainer.appendChild(newProjectButton);

  return newProjectContainer;
};

export { createNewProjectButton };
