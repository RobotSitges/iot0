let Temperatura = 0
basic.showIcon(IconNames.No)
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    Temperatura = input.temperature()
    basic.showNumber(Temperatura)
    radio.sendValue("Temperatura", Temperatura)
    basic.pause(5000)
})
