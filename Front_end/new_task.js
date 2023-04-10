// Create new Task
const createTaskEle = document.querySelector('.create-task-interface');
const btnCreateTask = document.getElementById('creat-task');
const closeDialogEle = document.getElementById('close-dialog');

btnCreateTask.addEventListener('click', () => {
    createTaskEle.style.display = "block";
})

closeDialogEle.addEventListener('click', () => {
    createTaskEle.style.display = "none";
})

// Save new task
const createMcpEle = document.querySelector('.create-mcp');
const createTaskDialogEle = document.querySelector('.create-task-dialog');
const btnBack = document.getElementById('back');
const btnSaveTask = document.getElementById('save-task');
const btnContinue = document.getElementById('btn-continue');
const saveNotice = document.querySelector('.successful-save');

btnContinue.addEventListener('click', () => {
    createMcpEle.style.display = "block";
    createTaskDialogEle.style.display = "none";
})

btnBack.addEventListener('click', () => {
    createMcpEle.style.display = "none";
    createTaskDialogEle.style.display = "block";
})

btnSaveTask.addEventListener('click', () => {
    createTaskEle.style.display = "none";
    saveNotice.style.display = "block";
    autoClose();
})

function autoClose(){
    timeout = setTimeout(() => {
        saveNotice.style.display = "none";
    }, 5000);
}

window.onclick = (event) => {
    if (event.target == createTaskEle){
        createTaskEle.style.display = "none";
    }
}