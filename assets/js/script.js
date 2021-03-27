
//used moment.js to display current time
//decided to switch from js to moment

var currTime = moment().format("MMMM Do YYYY hh:mm a");
var dateEl = document.getElementById('currentDay');
dateEl.innerHTML = currTime;



//adding to-do task on a page 
var text = document.querySelector(".text");
var textEl = document.createElement('textarea');
text.appendChild(textEl);
textEl.setAttribute('class', 'textBox');
textEl.style.width = "100%";
textEl.style.height = "100%";

var saveText = document.querySelector(".saveText");
var textBox = document.querySelector(".textBox");

saveText.addEventListener("click", function(){
    var pEl = document.createElement('p');
    pEl.innerHTML = textBox.value;
    textEl.replaceWith(pEl);
    console.log(pEl);
});


