
//used moment.js to display current time
//decided to switch from js to moment

var currTime = moment().format("MMMM Do YYYY hh:mm a");
var dateEl = document.getElementById('currentDay');
dateEl.innerHTML = currTime;

//create variables to store input values 
//user text saved for each time block
var emptyList = [];
var button = document.querySelector('.button');


var saveTask = function(emptyList){
    localStorage.setItem('tasks', JSON.stringify(emptyList));
}

function buttonClick(button){
//issue here is that when the user edits the text, the local storage does not remove the previous value 

switch(button.id) {
    case '1':
        var text = document.getElementById('text1').value;
        emptyList.push(text);
        saveTask(emptyList);
        break;
    case '2':
        var text = document.getElementById('text2').value;
        emptyList.push(text);
        saveTask(emptyList);
        break;
    case '3':
        var text = document.getElementById('text3').value;
        emptyList.push(text);
        saveTask(emptyList);
        break;
    case '4':
        var text = document.getElementById('text4').value;
        emptyList.push(text);
        saveTask(emptyList);
        break;
    case '5':
        var text = document.getElementById('text5').value;
        emptyList.push(text);
        saveTask(emptyList);
        break;
    case '6':
        var text = document.getElementById('text6').value;
        emptyList.push(text);
        saveTask(emptyList);
        break;
    case '7':
        var text = document.getElementById('text7').value;
        emptyList.push(text);
        saveTask(emptyList);
        break;
    case '8':
        var text = document.getElementById('text8').value;
        emptyList.push(text);
        saveTask(emptyList);
        break;
    case '9':
        var text = document.getElementById('text9').value;
        emptyList.push(text);
        saveTask(emptyList);
        break;
    default:
        console.log('nothing');
}
}






  
  