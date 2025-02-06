import { loadFromLocalStorage } from "./handleStorage.js";


export class Project {
    constructor(name) {
        this.name = name;
        this.childTasks = [];
    }

    getName() {return this.name};
    getChildTasks() {return this.childTasks}
}

export let projects = [];
let defaultProject = new Project("Default");
projects.push(defaultProject);


export const initializeProjects = () => {
    const savedProjects = loadFromLocalStorage.projects();
    projects = savedProjects.map(projectData => {
        const project = new Project(projectData.name);
        project.childTasks = projectData.childTasks;
        return project;
    });
};