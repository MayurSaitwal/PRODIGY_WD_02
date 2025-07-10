window.onload = function () {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let tens = 0;

    let appendHours = document.getElementById("hours");
    let appendMinutes = document.getElementById("minutes");
    let appendSeconds = document.getElementById("seconds");
    let appendTens = document.getElementById("tens");

    let startBtn = document.querySelector(".start");
    let stopBtn = document.querySelector(".stop");
    let resetBtn = document.querySelector(".reset");

    let Interval;

    function startTimer() {
        tens++;

        if (tens > 99) {
            tens = 0;
            seconds++;
        }

        if (seconds > 59) {
            seconds = 0;
            minutes++;
        }

        if (minutes > 59) {
            minutes = 0;
            hours++;
        }

        appendTens.innerHTML = tens < 10 ? "0" + tens : tens;
        appendSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
        appendMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
        appendHours.innerHTML = hours < 10 ? "0" + hours : hours;
    }

    startBtn.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };

    stopBtn.onclick = function () {
        clearInterval(Interval);
    };

    resetBtn.onclick = function () {
        clearInterval(Interval);
        hours = 0;
        minutes = 0;
        seconds = 0;
        tens = 0;

        appendHours.innerHTML = "00";
        appendMinutes.innerHTML = "00";
        appendSeconds.innerHTML = "00";
        appendTens.innerHTML = "00";
    };
};

