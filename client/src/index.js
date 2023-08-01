import { Game } from './Game'

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const game = new Game(canvas, context, 60)
game.start()
