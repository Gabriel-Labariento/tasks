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
}

const createProjectCard = function(project) {
    const card = document.createElement("div");
    const name = document.createElement("h2");
    name.textContent = project.name;

    // const childTasksContainer = document.createElement("div");
    // const childTasks = project;
    
    // console.log(childTasks);
    
    console.log(project)

    // childTasks.forEach(childTask => {
    //     const child = document.createElement("h6");
    //     child.textContent = childTask.name;
    //     childTasksContainer.appendChild(child);
    // });
    
    card.appendChild(name);
    // card.appendChild(childTasksContainer);

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
        const projectCard = createProjectCard(project.name);
        modal.appendChild(projectCard);
    });

    return modal;
}