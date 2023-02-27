const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const secondsEl = document.getElementById('seconds');
const minutesEl = document.getElementById('minutes');

const newYear = '1 Jan 2024';

function countdown_to_newYear(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days1 = Math.floor(totalSeconds / 3600 / 24);
    const hours1 = Math.floor(totalSeconds / 3600) % 24;
    const minutes1 = Math.floor(totalSeconds / 60) % 60;
    const seconds1 = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days1;
    hoursEl.innerHTML = formatTime(hours1);
    secondsEl.innerHTML = formatTime(seconds1);
    minutesEl.innerHTML = formatTime(minutes1);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown_to_newYear();

setInterval(countdown_to_newYear,1000);