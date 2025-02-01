import "./styles.css";
import { displayNewTaskModal } from "./displayNewTaskModal.js";
import { createTaskTableHtml } from "./createTaskTableHtml.js";

createTaskTableHtml();

const newTaskButton = document.querySelector(".new-task-button");
newTaskButton.addEventListener("click", () => {
    displayNewTaskModal();
    
});





