let TemperaturaBME280 = 0
let Temperatura = 0
basic.showIcon(IconNames.No)
radio.setGroup(1)
radio.setTransmitSerialNumber(true)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    Temperatura = input.temperature()
    TemperaturaBME280 = Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C)
    basic.showString("T1:")
    basic.showNumber(Temperatura)
    basic.showString("T2:")
    basic.showNumber(TemperaturaBME280)
    radio.sendValue("Temperatura", Temperatura)
    radio.sendValue("BME280", TemperaturaBME280)
    basic.showIcon(IconNames.House)
    basic.pause(1000)
})
