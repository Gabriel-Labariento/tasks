const createNewTaskModal = function () {
    const newTaskDialog = document.createElement("dialog");
    
    const newTaskForm = document.createElement("form");
    newTaskForm.setAttribute(formmethod, "dialog")
    newTaskForm.setAttribute(action, "");

    const rowContainer = document.createElement("div");
    rowContainer.className = "row-container";

    
}


const createFormRow = function(labelText, inputType, name, id, options = null, required = false){
    const row = document.createElement("div");
    row.className = "form-row"

    const label = document.createElement("label");
    label.setAttribute("for", name)
    label.textContent = labelText;

    let input;
    if (inputType === "select"){
        input = document.createElement("select");
    }
    
}