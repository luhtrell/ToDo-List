import addTask from './initialPage';
import tasks from './initialPage';
const overlay = document.querySelector(".overlay");

export function addTasks (e) {
    const addBtn = document.querySelector(".addBtn")
    addBtn.addEventListener("click", (e) =>
    overlay.classList.add('active'))
}

export function revealForm (e) {
    const addBtn = document.querySelector(".addBtn");
    const form = document.querySelector(".taskForm");
    addBtn.addEventListener("click", (e) => form.classList.add('active'))
    
}

// export function removeForm (e) {
    //     const saveBtn = document.querySelector(".saveBtn");
    //     saveBtn.addEventListener("click", (e) => form.classList.remove('active'))
    // }
    export function clickOut (e) {
    const form = document.querySelector(".taskForm");
    if (!Event.target == form | overlay) {
        form.classList.remove('active'),
        overlay.classList.remove('active')
    }
}



