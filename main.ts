basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P0,
    true,
    false,
    false
    )
    serial.writeValue("%", dht11_dht22.readData(dataType.humidity))
    serial.writeValue("C", dht11_dht22.readData(dataType.temperature))
    control.waitMicros(3000000)
})
