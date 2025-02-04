import { projects, Project } from "./project.js";

export const displayProjects = function() {
    const parentCol = document.querySelector(".parent-col");
    parentCol.addEventListener("mouseenter", () => parentCol.classList.add("switch-color"))
    parentCol.addEventListener("mouseleave", () => parentCol.classList.remove("switch-color"))


    parentCol.addEventListener("click", () => displayProjectsModal()); 
}

const displayProjectsModal = function() {
    const modal = createProjectsModal();
    document.querySelector("#content").appendChild(modal);
    modal.show();

    const confirmButton = document.querySelector(".confirm-btn");
    confirmButton.addEventListener("click", () => modal.close())



}

const createProjectCard = function(project) {
    const card = document.createElement("div");
    const name = document.createElement("div");
    name.textContent = project.name;

    const childTasksContainer = document.createElement("ul");
    const childTasks = project.childTasks;
 
   
    childTasks.forEach(childTask => {
        const child = document.createElement("li");
        child.textContent = childTask.name;
        childTasksContainer.appendChild(child);
    });
    
    card.appendChild(name);
    card.appendChild(childTasksContainer);

    const buttonRow = createButtonRow();

    card.appendChild(buttonRow)

    return card;
}

const createProjectsModal = function() {

    const existingModal = document.querySelector("#new-project-list");
    if (existingModal) existingModal.remove();

    const modal = document.createElement("dialog")
    modal.id = "new-project-list";

    const title = document.createElement("h1");
    title.textContent = "Projects List";
    modal.appendChild(title);

    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        modal.appendChild(projectCard);
    });

    return modal;
}

const createButtonRow = function(){
    const buttonRow = document.createElement("div");
    const confirmBtn = document.createElement("button")
    buttonRow.className = "button-row";

    confirmBtn.className = "confirm-btn"
    confirmBtn.type = "button";
    confirmBtn.value = "Confirm";
    confirmBtn.textContent = "confirm"
    confirmBtn.type = "button"

    buttonRow.appendChild(confirmBtn);

    return buttonRow;
}