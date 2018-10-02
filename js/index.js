// select all arms
const secondsArm = document.querySelector('.second-hand');
const minsArm = document.querySelector('.min-hand');
const hoursArm = document.querySelector('.hour-hand');
const allHands = document.querySelectorAll('.hand');

function setTime() {
    const date = new Date; // get current date
    const seconds = date.getSeconds(); // get current seconds
    const secondsDegree = ((seconds / 60) * 360) + 90; // convert second to relevant seconds arm degree
    // disable transition when seconds degree is at 90 degrees to avoid transition glitch
    if(secondsDegree === 90) {
        allHands.forEach(hand => hand.style.transition = 'none');
    } else {
        allHands.forEach(hand => hand.style.transition = '');
    }
    secondsArm.style.transform = `rotate(${secondsDegree}deg)`;

    const min = date.getMinutes();
    const minDegree = ((min / 60) * 360) + 90;
    minsArm.style.transform = `rotate(${minDegree}deg)`;

    const hour = date.getHours();
    const hourDegree = ((hour / 12) * 360) + 90;
    hoursArm.style.transform = `rotate(${hourDegree}deg)`;

}

setInterval(setTime, 1000);