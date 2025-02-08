import { addNewTask } from "./addNewTask.js";
import { createNewTaskModal } from "./createNewTaskModal";

export const displayNewTaskModal = function () {
  const existingModal = document.querySelector("#new-task-dialog");
  if (existingModal) existingModal.remove();

  const newTaskModal = createNewTaskModal();
  const contentDiv = document
    .querySelector("#content")
    .appendChild(newTaskModal);
  newTaskModal.showModal();

  const cancelBtn = newTaskModal.querySelector(".cancel-btn");
  cancelBtn.addEventListener("click", () => newTaskModal.close());

  const submitBtn = newTaskModal.querySelector(".submit-btn");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addNewTask();
  });
};
