var hourSpan = document.querySelector('.hour')
var minuteSpan = document.querySelector('.minute')
var secondSpan = document.querySelector('.second')
var hour = 00;
var minute = 00;
var second = 00;
var interval
function start(){
    createNewTime()

    handleStartWatch()
    handleResetWatch()
    handlePauseWatch()
}

start()

function createNewTime(){
    hourSpan.innerHTML = '00'
    minuteSpan.innerHTML = '00'
    secondSpan.innerHTML = '00'
}

function startTime(){
    second++

    if(second < 10){
        secondSpan.innerHTML = '0' + second
    }else if(second < 60){
        secondSpan.innerHTML = second;
    }else if(second == 60){
        minute++;
        second = 0;
        secondSpan.innerHTML = "00";
        if(minute < 10){
            minuteSpan.innerHTML = '0' + minute;
        }else if(minute < 60){
            minuteSpan.innerHTML = minute;
        }else if(minute == 60){
            hour++
            minute = 0
            minuteSpan.innerHTML = '00'
            if(hour < 10){
                hourSpan.innerHTML = '0' + hour
            }else if(hour < 60){
                hourSpan.innerHTML = hour;
            }
        }
    }
}

function handleStartWatch(){
    var nextBtn = document.querySelector('.btn-next')
    
    nextBtn.onclick = function(){

        createNewTime()
        
        interval = setInterval(startTime)

    }
}

function handleResetWatch(){
    var resetBtn = document.querySelector('.btn-reset')

    resetBtn.onclick = function(){
        clearInterval(interval)
        second = 0
        minute = 0
        hour = 0
        createNewTime();
        
    }
}

function handlePauseWatch(){
    var pauseBtn = document.querySelector('.btn-pause')

    pauseBtn.onclick = function(){
        clearInterval(interval)
    }
}