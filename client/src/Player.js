/**
 *  Player class implementation
 */
export class Player {
  constructor(x, y, ctx) {
    this.x = x
    this.y = y
    this.ctx = ctx
    this.radius = 30
    this.color = 'red'
    this.v = 10
  }

  draw() {
    this.ctx.fillStyle = this.color
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    this.ctx.fill()
  }

  update(x, y) {
    this.x = x
    this.y = y
  }
}
