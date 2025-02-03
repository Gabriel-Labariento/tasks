import { projects } from "./project.js";

export const displayProjects = function() {
    const parentCol = document.querySelector(".parent-col");
    parentCol.addEventListener("mouseenter", () => parentCol.classList.add("switch-color"))
    parentCol.addEventListener("mouseleave", () => parentCol.classList.remove("switch-color"))


    parentCol.addEventListener("click", () => displayProjectsModal()); 
}

const displayProjectsModal = function() {

}

const createProjectCard = function(projectName, childTasks) {
    const card = document.createElement("div");
    const name = document.createElement("h2");
    name.textContent = projectName;

    const childTasksContainer = document.createElement("div");
    
    childTasks.forEach(childTask => {
        const child = document.createElement("h6");
        child.textContent = childTask.name;
        childTasksContainer.appendChild(child);
    });
    
    card.appendChild(name);
    card.appendChild(childTasksContainer);

    return card;
}

const createProjectsModal = function(projects) {

    const existingModal = document.querySelector("#new-project-dialog");
    if (existingModal) existingModal.remove();

    const modal = document.createElement("dialog")
    modal.id = "new-project-list";

    
}