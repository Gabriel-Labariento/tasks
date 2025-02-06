import { Project, projects } from "./project.js";
import { saveToLocalStorage } from "./handleStorage.js";
export const addNewProject = function() {
        const modal = document.querySelector("#new-project-dialog")
        const form = document.querySelector("#new-project-form")

        const projectName = modal.querySelector("input[name='project-title']").value;
        const project = new Project(projectName);

        projects.push(project);
        form.reset();
        modal.close();

        saveToLocalStorage.projects(projects);
}