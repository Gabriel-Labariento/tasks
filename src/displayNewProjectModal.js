import { addNewProject } from "./addNewProject.js";
import { createNewProjectModal } from "./createNewProjectModal.js";

export const displayNewProjectModal = function () {
  const existingModal = document.querySelector("#new-project-dialog");
  if (existingModal) existingModal.remove();

  const newProjectModal = createNewProjectModal();
  const contentDiv = document
    .querySelector("#content")
    .appendChild(newProjectModal);
  newProjectModal.showModal();

  const cancelBtn = newProjectModal.querySelector(".cancel-btn");
  cancelBtn.addEventListener("click", () => newProjectModal.close());

  const submitBtn = newProjectModal.querySelector(".submit-btn");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addNewProject();
  });
};
