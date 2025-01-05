const display = document.getElementById("time-display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
       clearInterval(timer);
       elapsedTime = Date.now() - startTime;
       isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    startTime = 0;
    display.textContent = "00:00:00:00";
}

function update(){
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    let hr = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2,"0");
    let min = Math.floor((elapsedTime / (1000 * 60) % 60)).toString().padStart(2,"0");
    let sec = Math.floor(elapsedTime/(1000) % 60).toString().padStart(2,"0");
    let msec = Math.floor(elapsedTime % 1000 / 10).toString().padStart(2,"0");

    display.textContent = `${hr}:${min}:${sec}:${msec}`;
}