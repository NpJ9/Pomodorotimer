const timer = document.getElementById("timer");
const start = document.getElementById("start");
const pause = document.getElementById("pause");

const pomodoro = document.getElementById("pomodoro");
const shortBreak = document.getElementById("shortBreak");
const longBreak = document.getElementById("longBreak");

let seconds = 60;
let minutes = 24;
let interval 
let timerOn = false;

// Set time buttons

pomodoro.addEventListener('click' , (e) =>{
    stopCounter();
    minutes = 24;
    seconds = 60
    timer.innerHTML = "25:00";
});

shortBreak.addEventListener('click' , (e) =>{
    stopCounter();
    minutes = 4;
    seconds = 60
    timer.innerHTML = "5:00";
});

longBreak.addEventListener('click' , (e) =>{
    stopCounter();
    minutes = 9;
    seconds = 60
    timer.innerHTML = "10:00";
});
// Start timer

start.addEventListener('click' , (e) =>{

clearInterval(interval); // Clears previous interval if already clicked

interval = setInterval(countDown, 1000); 
    

function countDown(){

    // If timer buttons clcik return the counter
     
    if (seconds === 0 && minutes === 0) { 
        stopCounter();
        return
    } 

    seconds = seconds - 1; // Decrement seconds

    if (seconds < 0){
        seconds = 59; 
        minutes -= 1;
    }

    if (seconds > 0 && seconds < 10){  // If seconds is below 10 add 0 before single digit
       timer.innerHTML = minutes + ":" + "0" + seconds;
    } else {
       timer.innerHTML = minutes + ":" + seconds; 
    }

    timerOn = true;
}});

// Pauses timer

pause.addEventListener('click', (e) =>{
    clearInterval(interval);
 
})

// Stops timer

function stopCounter (){ 
    clearInterval(interval);
    timer.innerHTML = "00:00";
    interval = null;
}

function reset () {
    
}