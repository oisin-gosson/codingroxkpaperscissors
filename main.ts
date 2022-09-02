let Player = 0
let Game = 0
let Rounds = 0
let Score = 0
input.onGesture(Gesture.TiltLeft, function () {
    Player = 2
})
input.onButtonPressed(Button.AB, function () {
    Player = 3
})
input.onGesture(Gesture.Shake, function () {
    Game = randint(1, 3)
    Rounds += 1
})
input.onGesture(Gesture.TiltRight, function () {
    Player = 1
})
basic.forever(function () {
    if (Player < 2) {
        Score += -1
    }
    if (Player < 3) {
        Score += 1
    }
    if (Player < 3) {
        Score += -1
    }
    if (Player < 4) {
        Score += 1
    }
    if (Rounds == 3) {
        basic.showNumber(Score)
    }
})
