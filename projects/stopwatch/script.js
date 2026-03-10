let start_btn = document.querySelector('.sw-btn.start');
let stop_btn = document.querySelector('.sw-btn.stop');
let reset_btn = document.querySelector('.sw-btn.reset');

let hourEl = document.querySelector('.hours');
let minuteEl = document.querySelector('.minutes');
let secondEl = document.querySelector('.seconds');

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

function updateTime() {
    seconds++;

    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }

    if (minutes === 60) {
        hours++;
        minutes = 0;
    }
    hourEl.textContent = String(hours).padStart(2, '0');
    minuteEl.textContent = String(minutes).padStart(2, '0');
    secondEl.textContent = String(seconds).padStart(2, '0');
}

start_btn.addEventListener('click', () => {
    if (!interval) {
        interval = setInterval(updateTime, 1000);
    }
});

stop_btn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
});

reset_btn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;

    seconds = 0;
    minutes = 0;
    hours   = 0;

    hourEl.textContent = '00';
    minuteEl.textContent = '00';
    secondEl.textContent = '00';
});