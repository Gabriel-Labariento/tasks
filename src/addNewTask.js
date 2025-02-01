export const addNewTask = function(e) {
    
    const modal = document.querySelector("dialog")

    const taskName = modal.querySelector("input[name='task-title']").value;
    const taskDue = modal.querySelector("input[name='task-due']").value;
    const taskStatus = modal.querySelector("select[name='task-status']").value
    const taskPriority = modal.querySelector("select[name='task-priority']").value
    const parentProject = modal.querySelector("select[name='parent-project']").value

    // console.log(taskName, taskDue, taskStatus, taskPriority, parentProject);
    const task = new Task(taskName, taskDue, taskStatus, taskPriority, parentProject);
}