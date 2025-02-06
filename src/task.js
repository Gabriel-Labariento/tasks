import { loadFromLocalStorage } from "./handleStorage.js";

export let tasks = [];

export class Task {
    constructor(name, due, status, priority, parentProject = "Default") {
        this.name = name;
        this.due = due;
        this.status = status;
        this.priority = priority;
        this.parentProject = parentProject;
    }
}

export const initializeTasks = () => {
    const savedTasks = loadFromLocalStorage.tasks();
    tasks = savedTasks.map(taskData => 
        new Task(
            taskData.name,
            taskData.due,
            taskData.status,
            taskData.priority,
            taskData.parentProject
        )
    );
};