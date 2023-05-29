import { add } from "lodash";

export default function initialPage() {
    const container = document.querySelector("#content");
    const headerContainer = document.createElement("div");
    const header = document.createElement("h1");
    const sidebar = document.createElement("nav");
    const sideContainer = document.createElement("div");
    const projectsTitle = document.createElement("h2");
    const tasksBtn = document.createElement("button");
    const homeSection = document.createElement("div");
    const homeTitle = document.createElement("h2")
    const projectSection = document.createElement("div")
    const allTasks = document.createElement("div")
    const todayTasks = document.createElement("div")
    const thisWeek = document.createElement("div")
    const important = document.createElement("div")
    const rightContainer = document.createElement("div")
    const tasks = document.createElement('div')
    const addTask = document.createElement('button')
    const formContainer = document.querySelector(".formContainer");
    const overlay = document.querySelector(".overlay");


headerContainer.id = "headerContainer";
header.id = "title"
header.innerText = "ToDo List !"
sidebar.id = "sidebar"
sideContainer.id = "sideContainer";
projectSection.id = "projectContainer"
projectsTitle.id = "projectsTitle";
projectsTitle.innerText = "Projects";
tasksBtn.id = "taskBtn";
tasksBtn.innerText = "Create Project"
homeSection.id = "homeContainer";
homeTitle.id = "homeTitle";
homeTitle.innerText= "Home";
allTasks.className = "tile";
allTasks.innerText = 'All Tasks'
thisWeek.className = "tile";
thisWeek.innerText = "This Week"
todayTasks.className = "tile";
todayTasks.innerText = "Today"
important.className = "tile";
important.innerText = "Important"
rightContainer.id = "rightContainer"
tasks.id = "tasksContainer"
addTask.className = "addBtn"
addTask.innerText = "Add Task"

container.appendChild(headerContainer);
container.appendChild(sideContainer);
sidebar.appendChild(homeSection);
headerContainer.appendChild(header);
sideContainer.appendChild(sidebar);
sidebar.appendChild(projectSection)
projectSection.appendChild(projectsTitle);
projectSection.appendChild(tasksBtn);
homeSection.appendChild(homeTitle);
homeSection.appendChild(allTasks);
homeSection.appendChild(todayTasks);
homeSection.appendChild(thisWeek);
homeSection.appendChild(important);
container.appendChild(rightContainer);
rightContainer.appendChild(tasks)
tasks.appendChild(addTask)
tasks.appendChild(formContainer)
}


