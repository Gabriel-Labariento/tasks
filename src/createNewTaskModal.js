import { projects } from "./project.js";

const createNewTaskModal = function () {
    const newTaskDialog = document.createElement("dialog");
    newTaskDialog.id = "new-task-dialog";


    const newTaskForm = document.createElement("form");
    newTaskForm.formmethod = "dialog"

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

    newTaskForm.appendChild(rowContainer);
    newTaskDialog.appendChild(newTaskForm);

    
    return newTaskDialog;
    
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
            // if (option.value === "medium" || option.value === "to-do") option.selected = true;
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
    const cancelBtn = document.createElement("button")
    const submitBtn = document.createElement("button");

    cancelBtn.className = "cancel-btn"
    cancelBtn.type = "button";
    cancelBtn.value = "cancel";
    cancelBtn.textContent = "Cancel"

    submitBtn.className = "submit-btn";
    submitBtn.value = "default"
    submitBtn.textContent = "Add task";

    buttonRow.appendChild(cancelBtn);
    buttonRow.appendChild(submitBtn);

    return buttonRow;
}

export {createNewTaskModal};