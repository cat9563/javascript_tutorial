const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listeners
loadEventListeners();

function loadEventListeners() {
    //Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear tasks
    clearBtn.addEventListener('click', clearTasks);
    //filter tasks
    filter.addEventListener('keyup', filterTasks);
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

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?'))
        e.target.parentElement.parentElement.remove();
    }
}

function clearTasks(){
    //two ways of doing this the first way 
    // taskList.innerHTML = '';
    //https://jsperf.com/innerhtml-vs-removechild

    //faster way
   while(taskList.firstChild){
       taskList.removeChild(taskList.firstChild);
   }
}

function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach
    (function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) !== -1){
            task.style.display = 'block';
        }else {
            task.style.display = 'none';
        }
    });
}