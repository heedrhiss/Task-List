const form= document.querySelector('.task_form')
const task= document.querySelector('#task');
const addtask= document.querySelector('.btn1');
const tasklist= document.querySelector('ul');
const clr= document.querySelector('.clear-tasks');
const filter= document.querySelector('#filter');


loadevent();
function loadevent(){
    form.addEventListener('submit', event1);
    tasklist.addEventListener('click', deltask);
    clr.addEventListener('click', clear);
    filter.addEventListener('keyup', filt);
};

// addtask.addEventListener('click', event1)
function event1(e){
    if(task.value==""){
        alert("Add a task");
    }
    else{
        const li= document.createElement('li');
li.className= 'task-collection'
let item= document.createTextNode(task.value);
li.appendChild(item);
tasklist.appendChild(li);
task.value="";
let del= document.createElement('a');
del.className= "delete-item";
del.innerHTML= "<i class='las la-times-circle'></i>"
li.appendChild(del);
    e.preventDefault();
    }
};
function deltask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
    }
}
function clear(){
    tasklist.innerHTML= "";
}
function filt(e){
    const text = e.target.value.toLowerCase();
    console.log(text);
    document.querySelectorAll('.task-collection').forEach( function(tasks){
        const item = tasks.firstElementChild.textContent.toLowerCase();
        if(item.indexOf(text) != -1){
        tasks.style.display= "block";
        // console.log(tasks)
    }
    else{
        tasks.style.display= "none";
    }
    });
}