let startBut = document.querySelector('.js-start');
let stopBut = document.querySelector('.js-stop');
let resetBut = document.querySelector('.js-reset');
let time = document.querySelector('.devtime');

let hour = '0';
let minute = '0';
let second = '0';
let count = '0';

function start(){
  time = true;
  stopWatch();
};
function stop(){
  time = false;
};
function reset(){
  hour = 0;
  second = 0;
  minute = 0;
  count = 0;
  document.getElementById('hr').innerHTML ='00';
  document.getElementById('min').innerHTML ='00';
  document.getElementById('sec').innerHTML ='00';
  document.getElementById('count').innerHTML ='00';
};
function stopWatch(){

  if(time){
    count++;
    if(count == 100){
      second++;
      count = 0;
    }
    if(second == 60){
      minute++;
      second = 0;
    }
    if(minute == 60){
      hour++;
      minute = 0;
      second = 0;
    }
    let hrString = hour;
    let minString = minute;
    let secString = second;
    let countString = count;

    if (hour < 10) {
      hrString = "0" + hrString;
  }

  if (minute < 10) {
      minString = "0" + minString;
  }

  if (second < 10) {
      secString = "0" + secString;
  }

  if (count < 10) {
      countString = "0" + countString;
  }

  document.getElementById('hr').innerHTML = hrString;
  document.getElementById('min').innerHTML = minString;
  document.getElementById('sec').innerHTML = secString;

  setTimeout(stopWatch, 10);
  }
};