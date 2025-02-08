import { projects } from "./project";

export const storageAvailable = function (type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
};

export const saveToLocalStorage = {
  tasks: function (tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },
  projects: function (projects) {
    const projectsData = projects.map((project) => ({
      name: project.getName(),
      childTasks: project.childTasks,
    }));
    localStorage.setItem("projects", JSON.stringify(projectsData));
  },
};

export const loadFromLocalStorage = {
  tasks: function () {
    const tasksData = localStorage.getItem("tasks");
    return tasksData ? JSON.parse(tasksData) : [];
  },
  projects: function () {
    const projectsData = localStorage.getItem("projects");
    return projectsData ? JSON.parse(projectsData) : [];
  },
};
