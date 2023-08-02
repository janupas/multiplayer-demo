import { Game } from './Game'

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// Game constants
const FPS = 60

/**
 * This is the main game object
 *
 * This setups the whole game
 * Don't touch this unless something really bad happens
 *
 * @param canvas
 * @param context
 * @param FPS
 */
const game = new Game(canvas, context, FPS)

// Starts the whole game
game.start()
