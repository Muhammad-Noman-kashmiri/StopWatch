




var min=0;
var sec=0;
var msec=0;

var minHeading=document.getElementById("minutes");
var secHeading=document.getElementById("seconds");
var msecHeading=document.getElementById("miliseconds");
var interval;

function Timer(){
msec++;
msecHeading.innerHTML=msec;
if (msec>=100){
  sec++;
  secHeading.innerHTML=sec;
  msec=0;
}
else if(sec>=60)
{
  min++;
  sec=0;
  minHeading.innerHTML=min;
}
}

function start(){
interval=setInterval(Timer,10)
document.getElementById("start").disabled = true;
document.getElementById("stop").disabled = false;

}

function stop(){
  clearInterval(interval);
  document.getElementById("stop").disabled = true;
  document.getElementById("start").disabled = false;
}

function reset(){
  min=0;
   sec=0;
   msec=0;
  msecHeading.innerHTML=msec;
  secHeading.innerHTML=sec;
  minHeading.innerHTML=min;
  document.getElementById("stop").disabled = false;
  document.getElementById("start").disabled = false

  clearInterval(interval); 
}

