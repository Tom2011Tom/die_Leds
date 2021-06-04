let AnzahlLEDs = 0
let ZEIT = 0
input.onButtonPressed(Button.A, function () {
    AnzahlLEDs = randint(1, 12)
})
input.onButtonPressed(Button.AB, function () {
    ZEIT = randint(200, 5000)
})
input.onButtonPressed(Button.B, function () {
    CalliColor.ShowRainbowColorOnPixelbright(AnzahlLEDs)
    basic.pause(ZEIT)
    CalliColor.showCalliColor(CalliColor.CalliColorNumberPicker(0x000000))
})
