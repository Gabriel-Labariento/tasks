export const tasks = [];

export class Task {
    constructor(name, due, status, priority, parentProject = "Default") {
        this.name = name;
        this.due = due;
        this.status = status;
        this.priority = priority;
        this.parentProject = parentProject;
    }
}