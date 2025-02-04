export const editTask = function(targetId) {

    const createEditTaskModal = function () {
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
    
        return editTaskFormTaskDialog;
    }
}