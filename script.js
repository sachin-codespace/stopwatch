const minutesLabel = document.querySelector(".minutes");
const secondsLabel = document.querySelector(".seconds");
const millisecondsLabel = document.querySelector(".milliseconds");


let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;


const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
const pauseBtn = document.querySelector(".pauseBtn");
const resetBtn = document.querySelector(".resetBtn");

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);



stopBtn.disabled = true;
pauseBtn.disabled = true;

resetBtn.disabled = true;

function startTimer() {

    interval = setInterval(updateTimer, 10);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;

}

function stopTimer() {


    clearInterval(interval);
    stopBtn.disabled = true;
    pauseBtn.disabled = true;
    startBtn.disabled = true;
    resetBtn.disabled = false;
    // setTimeout(()=>{
    //     resetTimer();
    // },3000)
}


function pauseTimer() {

    clearInterval(interval);
    pauseBtn.disabled = true;
    startBtn.disabled = false;


    stopBtn.disabled = true;
    resetBtn.disabled = false;

}

function resetTimer() {

    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    displayTimer();
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    stopBtn.disabled = true;
}

function updateTimer() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }

    displayTimer();
}

function displayTimer() {
    millisecondsLabel.textContent = padTime(milliseconds);
    secondsLabel.textContent = padTime(seconds);
    minutesLabel.textContent = padTime(minutes);
}


function padTime(time) {
    return time.toString().padStart(2, '0');
}