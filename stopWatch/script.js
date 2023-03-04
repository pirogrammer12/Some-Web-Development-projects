var count = 0;
var sec = 0;
var min = 0;
var hr = 0;

let timer = false;

function start() {
  timer = true;
  stopWatch();
}
function stopp() {
  timer = false;
}
function reset() {
  timer = false;

  count = 0;
  hr = 0;
  min = 0;
  sec = 0;
  document.getElementById('count').innerHTML = "0";
  document.getElementById('min').innerHTML = "0";
  document.getElementById('hr').innerHTML = "0";
  document.getElementById('sec').innerHTML = "0";
}
function stopWatch() {
  if (timer == true) {
    count = count + 1;
    if (count == 100) {
      sec = sec + 1;
      count = 0;
    }
    if (sec == 100) {
      min = min + 1;
      sec = 0;
    }
    if (min == 100) {
      hr = hr + 1;
      min = 0;
    }
    document.getElementById("count").innerHTML = count;
    document.getElementById("hr").innerHTML = hr;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

    console.log(count)

    setTimeout("stopWatch()", 10);
  }
}
