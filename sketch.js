let gridSize = 32
let grid

function setup() {
  makeGrid()
  createCanvas(512, 512)
  drawGrid()
}

function makeGrid() {
  grid = new Array(32)
  for (var i = 0; i < grid.length; i++) {
    grid[i] = new Array(32)
  }
}

function drawGrid() {
  tileSize = floor(width / gridSize)

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid.length; j++) {
      fill(random(51, 200))
      stroke(0)
      x = map(i, 0, 32, 0, 512)
      y = map(j, 0, 32, 0, 512)
      rect(x, y, tileSize, tileSize)
    }
  }
}

function draw() {

}
