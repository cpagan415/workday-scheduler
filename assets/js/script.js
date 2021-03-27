
//used moment.js to display current time
//decided to switch from js to moment
var currentTime = function(){
var currTime = moment().format("MMMM Do, YYYY, hh:mm:ss a");
var dateEl = document.getElementById('currentDay');
dateEl.innerHTML = currTime;
}

currentTime();