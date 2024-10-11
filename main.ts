radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber >= Dist) {
        basic.showIcon(IconNames.Sad)
    }
})
input.onGesture(Gesture.Shake, function () {
    Dist = randint(0, 6)
    basic.showNumber(Dist)
    radio.sendNumber(Dist)
})
let Dist = 0
radio.setGroup(1)
basic.forever(function () {
	
})
