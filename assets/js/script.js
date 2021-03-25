

//looking to find a way to display the current day and time 
//https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php
//used this following resource instead of moment.js 

var currentTime = function() {
var currDay = new Date();
var month = {month : 'long'};
var day = currDay.getDay(week);
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
    console.log(new Intl.DateTimeFormat('en-Us', month).format()  + ' ' + week[day] + ' ' + hour + ':' + minute + "AM");
}
else
{
    console.log(new Intl.DateTimeFormat('en-Us', month).format() + ' ' + week[day] + ' ' + hour + ':' + minute + "AM"); 
}

}

