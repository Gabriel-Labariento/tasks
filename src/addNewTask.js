import { tasks, Task } from "./task.js"
import { projects } from "./project.js";
import { displayTasks } from "./displayTasks.js";


export const addNewTask = function() {
        const modal = document.querySelector("#new-task-dialog")
        const form = modal.querySelector("#new-task-form");

        const taskName = modal.querySelector("input[name='task-title']").value;
        const taskDue = modal.querySelector("input[name='task-due']").value;
        const taskStatus = modal.querySelector("select[name='task-status']").value
        const taskPriority = modal.querySelector("select[name='task-priority']").value
        const parentProject = modal.querySelector("select[name='parent-project']").value
    
        console.log(modal, taskName, taskDue, taskStatus, taskPriority, parentProject);


        const task = new Task(taskName, taskDue, taskStatus, taskPriority, parentProject);

        tasks.push(task);

        for (const project of projects) {
            if (project.getName() === parentProject){
                project.childTasks.push(task);
            }
        }

        
        form.reset();
        modal.close();
        displayTasks();

}