const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listeners
loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addTask);
}

//Add Task
function addTask(e){
    if(taskInput.value === ''){
        alert("field cant be blank")//will update this later for a modern look 
    }

    //Create li element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //Create text node and append to li 
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append the link to li
    li.appendChild(link);
    //append li to ul
    taskList.appendChild(li);
    //clear input
    taskInput.value = '';
    e.preventDefault();
}