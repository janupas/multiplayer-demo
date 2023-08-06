import { Player } from './Player'

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// Game constants
const FPS = 60
let ANIMATION_ID = undefined

// Player constants
let PLAYER_X = canvas.width / 2
let PLAYER_Y = canvas.height / 2

const player = new Player(PLAYER_X, PLAYER_Y, context)

const start = () => {
  player.draw()
}

// Game loop
const update = () => {
  context.clearRect(0, 0, canvas.width, canvas.height)

  player.update(PLAYER_X, PLAYER_Y)
  player.draw()
}

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'a':
      PLAYER_X -= player.v
      break
    case 'd':
      PLAYER_X += player.v
      break
    case 'w':
      PLAYER_Y -= player.v
      break
    case 's':
      PLAYER_Y += player.v
      break
    default:
      break
  }
})

start()
ANIMATION_ID = setInterval(() => {
  update()
}, 1000 / FPS)
