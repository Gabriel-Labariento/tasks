import { tasks } from "./task.js";

const createNewTaskRow = function(taskName, taskDue, taskStatus, taskPriority, parentProject) {
    const row = document.createElement("div")
    row.className = "tasks-row";

    const cols = [taskName, taskDue, taskStatus, taskPriority, parentProject];

    cols.forEach(col => {
        let column = document.createElement("div");
        column.className = "col";
        column.textContent = col;
        row.appendChild(column);
    });

    return row;
}

export const displayTasks = function() {
    const reference = document.querySelector(".new-task-container");
    const parent = document.querySelector(".tasks-container");

    tasks.forEach(task => {
        const newRow = createNewTaskRow(task.name, task.due, task.status, task.priority, task.parentProject);
        parent.insertBefore(newRow, reference);    
    });
}