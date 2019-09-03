setInterval(configureClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function configureClock(){
    const dateToday = new Date()
    const seconds = dateToday.getSeconds()/ 60
    const minutes = (seconds + dateToday.getMinutes()) / 60
    const hours = (minutes + dateToday.getHours()) / 12

    setRotation(secondHand, seconds)
    setRotation(minuteHand, minutes)
    setRotation(hourHand, hours)
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

configureClock()