import "./styles.css";
import { displayNewTaskModal } from "./displayNewTaskModal.js";
import { displayNewProjectModal } from "./displayNewProjectModal.js";
import { createTaskTableHtml } from "./createTaskTableHtml.js";
import {projects} from "./project.js"; 


createTaskTableHtml();

const newTaskButton = document.querySelector(".new-task-button");
newTaskButton.addEventListener("click", () => {
    displayNewTaskModal();
});

const newProjectButton = document.querySelector(".new-project-button");
newProjectButton.addEventListener("click", () => {
    displayNewProjectModal();
});









