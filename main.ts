let Temperatura = 0
basic.showIcon(IconNames.No)
radio.setGroup(1)
radio.setTransmitSerialNumber(true)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    Temperatura = input.temperature()
    basic.showNumber(Temperatura)
    radio.sendValue("Temperatura", Temperatura)
    basic.pause(60000)
})
