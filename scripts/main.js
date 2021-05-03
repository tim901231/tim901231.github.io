function updateClock() {
    var now = new Date(),

        time = ("0" + now.getHours()).slice(-2) + ':' + ("0" + now.getMinutes()).slice(-2) + ':' +  ("0" + now.getSeconds()).slice(-2),

        date = (now.getMonth()+1) + '-' + now.getDate() + '-' + now.getFullYear() + ' ';

    document.getElementById('time').innerHTML = date + time
}
updateClock();
setInterval(updateClock, 1000);
