let gridSize = 64
let grid

function setup() {
  grid = makeGrid(gridSize, gridSize)
  createCanvas(512, 512)
  drawGrid(grid)

  let cat = new Cat()
  drawGrid(cat.makePaw())
}

function makeGrid(x, y) {
  let g = new Array(x)
  for (var i = 0; i < g.length; i++) {
    g[i] = new Array(y)
  }

  return g
}

function drawGrid(grid, xoff = 0, yoff = 0) {
  if (xoff >= gridSize) {
    xoff = gridSize
  } else if (yoff >= gridSize) {
    yoff = gridSize
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
      x = map(i + xoff, 0, gridSize, 0, width)
      y = map(j + yoff, 0, gridSize, 0, height)
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
    let length = parseInt(random(6, 24))
    let thickness = parseInt(random(2, 6))
    let pawHeight = parseInt(random(1, 4))

    // make grid that will contain paw infos
    let paw = makeGrid(thickness + 2, length)

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
