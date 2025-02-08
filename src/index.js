import "./styles.css";
import { displayNewTaskModal } from "./displayNewTaskModal.js";
import { displayNewProjectModal } from "./displayNewProjectModal.js";
import { createTaskTableHtml } from "./createTaskTableHtml.js";
import { projects } from "./project.js";
import { displayProjects } from "./displayProjects.js";
import { storageAvailable } from "./handleStorage.js";
import { initializeTasks } from "./task.js";
import { initializeProjects } from "./project.js";
import { displayTasks } from "./displayTasks.js";

initializeProjects();
initializeTasks();
createTaskTableHtml();

displayTasks();

if (!storageAvailable("localStorage")) {
  alert("We apologize. Tasks cannot be stored locally on this device.");
}

const newTaskButton = document.querySelector(".new-task-button");
newTaskButton.addEventListener("click", () => {
  displayNewTaskModal();
});

const newProjectButton = document.querySelector(".new-project-button");
newProjectButton.addEventListener("click", () => {
  displayNewProjectModal();
});

displayProjects();
