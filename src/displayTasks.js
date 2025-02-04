import { tasks } from "./task.js";
import { editTask } from "./editTask.js";

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

    const existingRows = parent.querySelectorAll(".tasks-row");
    existingRows.forEach(row => row.remove());

    tasks.forEach(task => {
        const newRow = createNewTaskRow(task.name, task.due, task.status, task.priority, task.parentProject);
        newRow.id = `row-${tasks.indexOf(task)}`
        parent.insertBefore(newRow, reference);
        


        newRow.addEventListener("click", () => {
            const taskId = newRow.id
            editTask(taskId)
        });

    });
}