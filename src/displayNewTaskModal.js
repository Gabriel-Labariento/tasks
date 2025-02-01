import { createNewTaskModal } from "./createNewTaskModal";
import {Task} from "./addNewTask.js";


export const displayNewTaskModal = function() {
    const newTaskModal = createNewTaskModal();
    const contentDiv = document.querySelector("#content").appendChild(newTaskModal);
    newTaskModal.showModal(); 

    const cancelBtn = newTaskModal.querySelector(".cancel-btn");
    cancelBtn.addEventListener("click", () => newTaskModal.close());

    const submitBtn = newTaskModal.querySelector(".submit-btn");
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        addNewTask();
    });
}