/**
 * Shake to re-roll the dice
 */
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
