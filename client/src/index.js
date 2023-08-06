const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// Game constants
const FPS = 60

const start = () => {
  console.log('game init')
}
const update = () => {
  console.log('game loop')
}

start()
setInterval(() => {
  update()
}, 1000 / FPS)
