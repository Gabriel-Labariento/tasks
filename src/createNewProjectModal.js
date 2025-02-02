import { projects } from "./project.js";

const createNewProjectModal = function () {
    const newProjectDialog = document.createElement("dialog");
    newProjectDialog.id = "new-project-dialog";


    const newProjectForm = document.createElement("form");
    newProjectForm.formmethod = "dialog"

    const rowContainer = document.createElement("div");
    rowContainer.className = "project-row-container";


    const projectOptions = [];
    projects.forEach(project => {
        projectOptions.push(project.getName());    
    }); 

    const rows = [
        {labelText: "Project Name:", inputType: "text", name: "project-title", id: "project-title"},
    ]

    rows.forEach(row => {
        let createdRow = createFormRow(row.labelText, row.inputType, row.name, row.id, row.options);
        rowContainer.appendChild(createdRow);
    });

    const buttonRow = createButtonRow();

    rowContainer.appendChild(buttonRow);

    newProjectForm.appendChild(rowContainer);
    newProjectDialog.appendChild(newProjectForm);

    
    return newProjectDialog;
    
}


const createFormRow = function(labelText, inputType, name, id){
    const row = document.createElement("div");
    row.className = "form-row"

    const label = document.createElement("label");
    label.setAttribute("for", name)
    label.textContent = labelText;

    let input = document.createElement("input"); 
    input.type = inputType;
    input.name = name;
    input.id = id;

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
    submitBtn.textContent = "Add Project";

    buttonRow.appendChild(cancelBtn);
    buttonRow.appendChild(submitBtn);

    return buttonRow;
}

export {createNewProjectModal};