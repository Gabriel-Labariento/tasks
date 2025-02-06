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
    card.className = "project-card"
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

    return card;
}

const createProjectsModal = function() {

    while (true) {
        let existingModal = document.querySelector("dialog");
        if (existingModal) existingModal.remove();
        else break;
    } 
    

    const modal = document.createElement("dialog")
    modal.id = "new-project-list";

    const title = document.createElement("h1");
    title.textContent = "Projects List";
    modal.appendChild(title);

    projects.forEach(project => {
        const projectCard = createProjectCard(project);

        modal.appendChild(projectCard);
    });

    const buttonRow = createButtonRow();

    modal.appendChild(buttonRow)


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