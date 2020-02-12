var ballCount = 5//amount of balls//
var xs = []//location on the x-axis//
var ys = []//location on the y-axis//
var speedX = []//speed along x-axis//
var speedY = []//speed along y-axis//

function setup() {
  createCanvas(400, 400)//create canvas//

  for (var i = 0; i < ballCount; i = i + 1) {//sets container walls//
    xs[i] = Math.random() * width
    ys[i] = Math.random() * height//sets directions for ball movements//
    speedX[i] = Math.random() * 3
    speedY[i] = Math.random() * 3
  }
}

function draw() {
  background(200)

  for (var i = 0; i < ballCount; i = i + 1) {//sets values for ball movement//
    xs[i] += speedX[i]
    ys[i] += speedY[i]

    if (xs[i] < 0 || xs[i] > width) {
      speedX[i] = speedX[i] * -1//lets ball know to rebound off x-axis//
    }
    if (ys[i] < 0 || ys[i] > height) {
      speedY[i] = speedY[i] * -1//lets ball know to rebound off y-axis//
    }

    ellipse(xs[i] - 5, ys[i] - 5, 20, 20)//sets parameters for ball size and generation//
  }
}