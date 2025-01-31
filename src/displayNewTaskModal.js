import { createNewTaskModal } from "./createNewTaskModal";

export const displayNewTaskModal = function() {
    const newTaskModal = createNewTaskModal();
    const contentDiv = document.querySelector("#content").appendChild(newTaskModal);
    newTaskModal.showModal(); 
}