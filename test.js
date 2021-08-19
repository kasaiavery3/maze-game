const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fill()
    }
}

const player = new Player(550, 675, 10, 'white')
player.draw()

console.log(player)
// Start
// Move from one square to the next
    // If there's a brown bridge and you press the corresponding key to go in the direction of that bridge you can cross
    // If there's a black bridge and you press the corresponding key to go in the direction of that bridge you'll get sent back to start
    // If there's a yellow bridge and you have a triforce piece and you press the corresponding key to go in the direction of that bridge you can cross
    // If there's a red bridge and you press the corresponding key to go in the direction of that bridge you'll get Goron Spice x1, but only for the first time you cross it
    // If you go into the square containing the blue circle you'll get Zora Spring Water x1, but only for the first time you enter it
    // If you are two squares away from a Deku Scrub enemy, it will pursue you
    // If you are three squares away from a Deku Baba enemy, it will shoot a projectile towards you
    // If you have a bomb item you can get into areas blocked by boulders
    // If you give the skull kid in the 4th row square of the 1st column an Ocarina he will give you a triforce piece
    // If you give the skull kid in the 4th row square of the 4th column some Goron Spice he will give you a bomb
    // If you give the skull kid in the 4th row square of the 4th column some Zora Spring Water he will give you a bomb