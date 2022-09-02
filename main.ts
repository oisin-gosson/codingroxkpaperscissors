let Player = 0
let Game = 0
let Rounds = 0
let Score = 0
input.onGesture(Gesture.TiltLeft, function () {
    Player = -2
})
input.onButtonPressed(Button.AB, function () {
    Player = -3
})
input.onGesture(Gesture.Shake, function () {
    Game = randint(1, 3)
    Rounds += 1
})
input.onGesture(Gesture.TiltRight, function () {
    Player = -1
})
basic.forever(function () {
    if (Player + Game == 0) {
        basic.showString("Draw")
    }
    if (Player - Game == -2 || Player - Game == 1) {
        basic.showString("Win")
        Score += 1
    }
    if (Game - Player >= 3 && Game + Player <= 5) {
        basic.showString("Lose")
    }
    if (Rounds == 3) {
        basic.showNumber(Score)
    }
})
