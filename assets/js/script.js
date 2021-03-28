
//used moment.js to display current time
//decided to switch from js to moment

var currTime = moment().format("MMMM Do YYYY hh:mm a");
var dateEl = document.getElementById('currentDay');
dateEl.innerHTML = currTime;

//saving to-do task on a page 
//https://www.youtube.com/watch?v=rVyTjFofok0 used as reference
const userInput = document.querySelector('.userInput');
const btn = document.querySelector('.button');
const storageDisplay = localStorage.getItem('userToDo');

//https://www.youtube.com/watch?v=NxVCq4p0Kb0&t=400s
//using this as reference to make an object for the tasks added to the form
//I want to be able to assign each task a date in a object

//an empty array to push the object into
let taskToDo = [];

var addTask = function(event) {
    event.preventDefault();

    let task = {
        date: moment(),
        task: document.querySelector('.userInput').value

    };

    //this will push the newly created task in to the task object
    taskToDo.push(task);
    console.log(taskToDo);


    //localStorage
    localStorage.setItem('userInput', JSON.stringify(taskToDo));
}

//adding an event listener for when user enters text 
document.querySelector('.button').addEventListener('click', addTask);




