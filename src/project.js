export class Project {
    constructor(name) {
        this.name = name;
        this.childTasks = [];
    }

    getName() {return this.name};
}

export let projects = [];
let defaultProject = new Project("Default");
projects.push(defaultProject);