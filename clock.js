let a;
let min;
let sec;
let date;
let timer;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    min = a.getMinutes();
    if (min < 10)
        min = "0" + min;
    sec = a.getSeconds();
    if (sec < 10)
        sec = "0" + sec;
    timer = a.getHours() + ":" + min + ":" + sec;
    document.getElementById('time').innerHTML = timer + "<br> on " + date;
}, 1000);
