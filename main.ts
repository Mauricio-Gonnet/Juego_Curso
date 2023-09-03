/**
 * Juego el pescador:
 * 
 * El pez, para mover el pez hacia la derecha debes precionar el botón B y para moverlo hacia la izquierda el botón A
 * 
 * Para ganar puntos debes tocar los bordes del panel led y si  la red atrapa al pez, perderás.
 */
input.onButtonPressed(Button.A, function () {
    Pez.move(-1)
})
input.onButtonPressed(Button.B, function () {
    Pez.move(1)
})
let Pez: game.LedSprite = null
basic.showNumber(3)
basic.pause(1000)
basic.showNumber(2)
basic.pause(1000)
basic.showNumber(1)
basic.pause(1000)
Pez = game.createSprite(3, 2)
let Red = game.createSprite(2, 4)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        Red.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    for (let index = 0; index < 4; index++) {
        Red.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
})
basic.forever(function () {
    if (Pez.isTouching(Red)) {
        game.gameOver()
        basic.showNumber(game.score())
        basic.pause(100)
    }
})
basic.forever(function () {
    if (Pez.get(LedSpriteProperty.X) == 4) {
        game.addScore(1)
        basic.pause(1000)
        Pez.set(LedSpriteProperty.X, 3)
    }
})
basic.forever(function () {
    if (Pez.get(LedSpriteProperty.X) == 0) {
        game.addScore(1)
        basic.pause(1000)
        Pez.set(LedSpriteProperty.X, 1)
    }
})
