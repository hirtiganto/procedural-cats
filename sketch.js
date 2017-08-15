let gridSize = 32
let grid

function setup() {
  grid = makeGrid(32, 32)
  createCanvas(512, 512)
  drawGrid()
}

function makeGrid(x, y) {
  let g = new Array(x)
  for (var i = 0; i < g.length; i++) {
    g[i] = new Array(y)
  }

  return g
}

function drawGrid() {
  tileSize = floor(width / gridSize)

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid.length; j++) {
      if (grid[x][y] === undefined) {
        fill(51)
        stroke(0)
      }
      x = map(i, 0, 32, 0, 512)
      y = map(j, 0, 32, 0, 512)
      rect(x, y, tileSize, tileSize)
    }
  }
}
