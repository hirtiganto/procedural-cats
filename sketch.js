let gridSize = 32
let grid

function setup() {
  grid = makeGrid(32, 32)
  createCanvas(512, 512)
  drawGrid(grid)
}

function makeGrid(x, y) {
  let g = new Array(x)
  for (var i = 0; i < g.length; i++) {
    g[i] = new Array(y)
  }

  return g
}

function drawGrid(grid, xoff = 0, yoff = 0) {
  if (xoff >= 32) {
    xoff = 32
  } else if (yoff >= 32) {
    yoff = 32
  }

  tileSize = floor(width / gridSize)

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === undefined) {
        fill(51)
        stroke(0)
      } else {
        noStroke()
        fill(grid[i][j])
      }
      x = map(i + xoff, 0, 32, 0, 512)
      y = map(j + yoff, 0, 32, 0, 512)
      rect(x, y, tileSize, tileSize)
    }
  }
}

class Cat {
  constructor() {
    console.log("Everything is under control")
  }

  makePaw() {
    // generate variables that describe the paw
    let length = parseInt(random(5, 14))
    let thickness = parseInt(random(1, 3))
    let pawHeight = parseInt(random(1, 2))

    // make grid that will contain paw infos
    let paw = makeGrid(thickness + 1, length)

    // fill the grid with paw
    for (var x = 0; x < paw.length; x++) {
      for (var y = 0; y < paw[x].length; y++) {
        if (x === 0 && y < paw[x].length - pawHeight) {
          continue
        }
        paw[x][y] = color(255)
      }
    }

    return paw
  }
}
