//clock.js
//element.style only works on inline style so <div class='.second-hand' style='transfrom: rotate(20deg)'>
window.onload = function() { 
    //get the current time
    let dateTime = new Date();
    let hourCurrent = dateTime.getHours();
    let minuteCurrent = dateTime.getMinutes();
    let secondCurrent = dateTime.getSeconds();
    
    let secondAngle = 90;
    let minuteAngle = 90;
    let hourAngle = 90;

    let secondHand = document.querySelector(".second-hand");
    let minuteHand = document.querySelector('.min-hand');
    let hourHand = document.querySelector('.hour-hand');

    initClock();
    //create a timeout that keeps updating every second
    window.setInterval(tick, 1000);

    function tick() {
        secondAngle += 6;
        minuteAngle += 0.1;
        hourAngle += 0.008333333333;

        secondHand.style.transform = `rotate(${secondAngle}deg)`;
        minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
        hourHand.style.transform = `rotate(${hourAngle}deg)`;
    //get each hand
    }

    function initClock() {
        hourAngle += hourCurrent * 30 + ((minuteCurrent / 60) + (secondCurrent / 3600)) * 30;
        minuteAngle += minuteCurrent * 6 + (secondCurrent / 60) * 6;
        secondAngle += secondCurrent * 6;
    }
};