import { Core } from '../Core'

/**
 * This is the main game class
 */
export class Game {
  constructor(cv, ctx, fps) {
    this.cv = cv
    this.ctx = ctx
    this.fps = fps
    this.id = undefined
  }

  // Start the whole game
  start() {
    const core = new Core(this.cv, this.ctx)

    core.init()

    this.id = setInterval(() => {
      // Main game loop
      core.update()
    }, 1000 / this.fps)
  }
}
