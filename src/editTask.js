import { displayTasks } from "./displayTasks.js";
import { projects } from "./project.js";
import { tasks } from "./task.js";
import { saveToLocalStorage } from "./handleStorage.js";

export const editTask = function(taskId) {
    const taskToEdit = tasks[taskId];

    const createEditTaskModal = function() {
        const editTaskDialog = document.createElement("dialog");
        editTaskDialog.id = "edit-task-dialog";
    
        const editTaskForm = document.createElement("form");
        editTaskForm.id = "edit-task-form"
        editTaskForm.formmethod = "dialog"
    
        const rowContainer = document.createElement("div");
        rowContainer.className = "row-container";
    
    
        const projectOptions = [];
        projects.forEach(project => {
            projectOptions.push(project.getName());    
        }); 
    
        const rows = [
            {labelText: "Task Name:", inputType: "text", name: "task-title", id: "task-title"},
            {labelText: "Due Date:", inputType: "date", name: "task-due", id: "task-due"},
            {labelText: "Status:", inputType: "select", name: "task-status", id: "task-status",
                options: ["to do", "in progress", "done"]
            },
            {labelText: "Priority:", inputType: "select", name: "task-priority", id: "task-priority",
                options: ["low", "medium", "high"]
            },
            {labelText: "Parent Project:", inputType: "select", name: "parent-project", id: "parent-project",
                options: projectOptions
            }
        ]
    
        rows.forEach(row => {
            let createdRow = createFormRow(row.labelText, row.inputType, row.name, row.id, row.options);
            rowContainer.appendChild(createdRow);
        });
    
        const buttonRow = createButtonRow();
    
        rowContainer.appendChild(buttonRow);
        
        editTaskForm.appendChild(rowContainer);
        editTaskDialog.appendChild(editTaskForm);
        

        return editTaskDialog;
    }
    
    const createFormRow = function(labelText, inputType, name, id, options = null){
        const row = document.createElement("div");
        row.className = "form-row"
    
        const label = document.createElement("label");
        label.setAttribute("for", name)
        label.textContent = labelText;
    
        let input;
        if (inputType === "select"){
            input = document.createElement("select");
            input.name = name;
            input.id = id;
            for (let opt of options){
                let option = document.createElement("option");
                option.value = opt;
                option.textContent = `${opt[0].toUpperCase()}` + `${opt.substring(1)}`
                input.appendChild(option);
            }
        } else {
            input = document.createElement("input");
            input.type = inputType;
            input.name = name;
            input.id = id;
            
        }
    
        row.appendChild(label);
        row.appendChild(input);
    
        return row;    
    }
    
    const createButtonRow = function(){
        const buttonRow = document.createElement("div");
        const deleteBtn = document.createElement("button")
        const confirmBtn = document.createElement("button");
    
        deleteBtn.className = "delete-btn"
        deleteBtn.type = "button";
        deleteBtn.value = "delete";
        deleteBtn.textContent = "Delete"
        deleteBtn.type = "button"
    
        confirmBtn.className = "confirm-btn";
        confirmBtn.value = "default"
        confirmBtn.textContent = "Confirm Changes";
        confirmBtn.type = "submit"
    
        buttonRow.appendChild(deleteBtn);
        buttonRow.appendChild(confirmBtn);
    
        return buttonRow;
    }

    const displayEditTaskModal = function() {

        const existingModal = document.querySelector("#edit-task-dialog");
        if (existingModal) existingModal.remove();
        
        const editTaskModal = createEditTaskModal();
        document.querySelector("#content").appendChild(editTaskModal);

        editTaskModal.querySelector("#task-title").value = `${taskToEdit.name}`;
        editTaskModal.querySelector("#task-due").value = `${taskToEdit.due}`;
        editTaskModal.querySelector("#task-status").value = `${taskToEdit.status}`;
        editTaskModal.querySelector("#task-priority").value = `${taskToEdit.priority}`;
        editTaskModal.querySelector("#parent-project").value = `${taskToEdit.parentProject}`;

        editTaskModal.showModal(); 
    
        const deleteBtn = editTaskModal.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {
            tasks.splice(tasks.indexOf(taskToEdit), 1);
            saveToLocalStorage.tasks(tasks);
            saveToLocalStorage.projects(projects);
            editTaskModal.close()
            displayTasks();
        });
    
        const submitBtn = editTaskModal.querySelector(".confirm-btn");
        submitBtn.addEventListener("click", (e) => {
            e.preventDefault();
            edit();
        });
    }

    const edit = function() {
        const modal = document.querySelector("#edit-task-dialog")

        taskToEdit.name = modal.querySelector("input[name='task-title']").value;
        taskToEdit.due = modal.querySelector("input[name='task-due']").value;
        taskToEdit.status = modal.querySelector("select[name='task-status']").value
        taskToEdit.priority = modal.querySelector("select[name='task-priority']").value
        taskToEdit.parentProject = modal.querySelector("select[name='parent-project']").value

        saveToLocalStorage.tasks(tasks);
        saveToLocalStorage.projects(projects);
        
        modal.close();
        displayTasks();
    }
    
    displayEditTaskModal();

}


