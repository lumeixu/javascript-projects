"use strict";
var $ = function(id) { return document.getElementById(id); };

var displayCurrentTime = function() {
    var now=new Date();
    var currentHour=now.getHours();
    var currentMinute=now.getMinutes();
    var CurrentSecond=now.getSeconds();
    
    currentHour=parseInt(currentHour);
    
    var value;
    if(currentHour>12 && currentHour<24)
    {
        currentHour=currentHour-12;
        
        value="PM";
    }
    else  if(currentHour==24)
            {
                currentHour=0;
                value="AM";
            }
    else
        value="AM";
    
    
    $("hours").firstChild.nodeValue=padSingleDigit(currentHour);
    $("minutes").firstChild.nodeValue=padSingleDigit(currentMinute);
    $("seconds").firstChild.nodeValue=padSingleDigit(CurrentSecond);
    $("ampm").firstChild.nodeValue=value;

};

var padSingleDigit = function(num) {
    return (num < 10) ? "0" + num : num;
};

window.onload = function() {
    
    $("hours").firstChild.nodeValue="00";
    $("minutes").firstChild.nodeValue="00";
    $("seconds").firstChild.nodeValue="00";
    $("ampm").firstChild.nodeValue="AM";
    
    setInterval(displayCurrentTime,1000);

    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
};
