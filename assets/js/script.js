
function currentTime() {
//looking to find a way to display the current day and time 
//https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php
//used this following resource instead of moment.js 
var currDay = new Date();
var month = {month : 'long'};
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
//reference above for month
var day = currDay.getDay(week);
var numDate = currDay.getUTCDate();
var numYear =currDay.getFullYear();
var hour = currDay.getHours();
var minute = currDay.getMinutes();
var week= ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

if(minute < 10) {
    var lead = 0+ '';
    minute = lead + minute;
}
else
{
    mintue = minute;
}
if(hour <= 12){
    var print = new Intl.DateTimeFormat('en-Us', month).format()  + ' ' + numDate + ' ' + numYear + ' '+ week[day] + ' ' + hour + ':' + minute + "AM";
}
else
{
    var print= new Intl.DateTimeFormat('en-Us', month).format() + ' ' + numDate + ' ' + numYear + ' ' + week[day] + ' ' + hour + ':' + minute + "AM"; 
}


var dateEl = document.getElementById('currentDay');
dateEl.innerHTML = print;

}

currentTime();