import { Player } from '../Player'

/**
 * This is the game core class
 *
 * This is the actual heart of the game
 * This will handle the main game loop
 * This is where it will render stuff to the screen
 */
export class Core {
  constructor(cv, ctx) {
    this.cv = cv
    this.ctx = ctx
    this.player = new Player(this.cv.width / 2, this.cv.height / 2, this.ctx)
  }

  // This will run only once
  init() {
    this.player.draw()
  }

  // This is the main game loop
  update() {
    this.ctx.clearRect(0, 0, this.cv.width, this.cv.height)
    this.player.draw()
  }
}
