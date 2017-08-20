let gridSize = 64
let grid

function setup() {
  grid = makeGrid(gridSize, gridSize)
  createCanvas(512, 512)
  drawGrid(grid)

  frameRate(4)
}

function draw() {
  drawGrid(grid)
  let cat = new Cat()
  drawGrid(cat.makeBody())
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

  let tileSize = floor(width / gridSize)

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
  makePaw() {
    // generate variables that describe the paw
    let length = parseInt(random(6, 20))
    let thickness = parseInt(random(1, 6))
    let pawHeight = parseInt(random(1, 4))

    // make grid that will contain paw infos
    let paw = makeGrid(thickness + 2, length)

    // fill the grid with paw
    for (var x = 0; x < paw.length; x++) {
      for (var y = 0; y < paw[x].length; y++) {

        // checking if we're on the part that's ought to be skipped
        if (x === 0 && y < paw[x].length - pawHeight) {
          if (paw[x].length >= 12) {
            if (y <= parseInt(paw[x].length / 4)) {
              // plot twist if we're here we actually fill the cell
              // it was just easier to make it this way
              paw[x][y] = color(255)
              continue
            }
            continue
          }
          continue
        } else if (x === paw.length - 1 && y >= parseInt(paw[x].length / 2)) {
          continue
        } else if (thickness > 3) {
          if (x === paw.length - 2 && y === paw[x].length - 1){
            continue
          }
        }

        paw[x][y] = color(255)
      }
    }

    return paw
  }

  makeBody() {
    let length = parseInt(random (20, 35))
    let height = parseInt(random(10, 15))
    let belly = random(0, 1)

    let body = makeGrid(length, height)

    for (var x = 0; x < body.length; x++) {
      for (var y = 0; y < body[x].length; y++) {

        if (y === 0 && x > body.length / 4 && x < (2 * (body.length / 3))) {
          continue
        } else if (y > 2 * body[x].length / 3) {
          if (x === 0 || x === body.length - 1) {
            continue
          }
          if (belly <= 0.4) {
            if (y === body[x].length - 1 && x <= body.length / 2) {
              continue
            }
          }
        }

        body[x][y] = color(255)
      }
    }

    return body
  }
}
