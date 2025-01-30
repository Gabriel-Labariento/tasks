import checkImgSrc from "./assets/check.png";
import calendarImgSrc from "./assets/calendar.svg";
import priorityImgSrc from "./assets/priority.svg"
import tasksImgSrc from "./assets/tasks.svg";
import statusImgSrc from "./assets/status.svg";
import projectImgSrc from "./assets/section.svg";
import { createNewTaskButton } from "./createNewTaskButton.js";
 
const createTaskTableHtml = function () {
    const mainContainer = document.createElement('div');
    mainContainer.className = 'main-container';

    const titleContainer = document.createElement('div');
    titleContainer.className = 'title-container';
    
    const titleIcon = document.createElement('div');
    titleIcon.className = 'title-icon';
    
    const checkImg = document.createElement('img');
    checkImg.className = 'check-icon';
    checkImg.src = checkImgSrc;
    checkImg.alt = 'Check Icon';
    
    const title = document.createElement('h1');
    title.className = 'title';
    title.textContent = 'Tasks';
    
    titleIcon.appendChild(checkImg);
    titleIcon.appendChild(title);
    
    const subtitle = document.createElement('p');
    subtitle.className = 'subtitle';
    subtitle.textContent = 'Inspired by Notion. A simple to-do system.';
    
    titleContainer.appendChild(titleIcon);
    titleContainer.appendChild(subtitle);

    const tasksContainer = document.createElement('div');
    tasksContainer.className = 'tasks-container';

    const tasksRow = document.createElement('div');
    tasksRow.className = 'tasks-row';
    
    const columns = [
        { class: 'title-col', src: tasksImgSrc, alt: 'Task Icon', text: 'Tasks' },
        { class: 'due-col', src: calendarImgSrc, alt: 'Deadline Icon', text: 'Deadline' },
        { class: 'status-col', src: statusImgSrc, alt: 'Status Icon', text: 'Status' },
        { class: 'priority-col', src: priorityImgSrc, alt: 'Priority Icon', text: 'Priority' },
        { class: 'parent-col', src: projectImgSrc, alt: 'Parent Project Icon', text: 'Parent Project'}
    ];
    
    columns.forEach(col => {
        const div = document.createElement('div');
        div.className = `col col-head ${col.class}`;

        const img = document.createElement('img');
        img.src = col.src;
        img.className = 'col-head-icon';
        img.alt = col.alt;
        
        div.appendChild(img);
        div.appendChild(document.createTextNode(col.text));
        tasksRow.appendChild(div);
    });
    
    const newTaskContainer = createNewTaskButton();

    tasksContainer.appendChild(tasksRow);
    tasksContainer.appendChild(newTaskContainer);

    mainContainer.appendChild(titleContainer);
    mainContainer.appendChild(tasksContainer);
    
    const content = document.querySelector("#content");
    content.appendChild(mainContainer);
}



export {createTaskTableHtml}