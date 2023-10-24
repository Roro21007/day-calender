//jQuery call
var rootEl = $('#root');

var today = dayjs();

var count = localStorage.getItem("count");

var time = document.createElement("div");

var currentTime = 

$('currentDay').text(today.format('MMM D, YYYY'));
 
$(function () {
//involve hour-x id
    saveBtn.addEventListener("click", localStorage.setItem);
//have result of the current time compare to time on calender to apply color
if (time == currentTime)
  turn color red // div.setAttribute("style", color:white; background: #ff6961);
else if (time == future)
  turn color green // div.setAttribut("style", color:white; background: #77dd77);
else turn color gray // div.setAttribut("style", color:white; background: #d3d3d3);


  });