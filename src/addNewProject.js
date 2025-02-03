import { Project, projects } from "./project";

export const addNewProject = function() {
        const modal = document.querySelector("#new-project-dialog")
    
        const projectName = modal.querySelector("input[name='project-title']").value;
        const project = new Project(projectName);

        projects.push(project);

        console.log(projects)
        modal.close();
}