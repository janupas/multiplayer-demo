import { Player } from '../Player'

/**
 * This is the game core class
 *
 * This is where it will render stuff to the screen
 */
export class Core {
  constructor(cv, ctx) {
    this.cv = cv
    this.ctx = ctx
  }

  init() {
    const player = new Player(this.cv.width / 2, this.cv.height / 2, this.ctx)
    player.draw()
  }

  update() {
    console.log('GAME LOOP')
  }
}
