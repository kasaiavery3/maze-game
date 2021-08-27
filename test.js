// GLOBAL DOM / VARIABLES
let movementDisplay = document.getElementById('movement')
let game = document.getElementById('game')
let player;
let skullKid;
let dekuScrub;
let dekuBaba;
let greenSquare;
let brownBridge;
let blackBridge;
let redBridge;
let yellowBridge;
let blueCircle;
let boulder;
let bomb;
let triforcePiece;
let goronSpice;
let springWater;
let ocarina;
const ctx = game.getContext('2d')

ctx.fillStyle = 'white';
ctx.strokeStyle = 'red';
ctx.lineWidth = 5;

const squareCoordinates = [
    {
        square: 1,
        x: 95.5,
        y: 133,
    },
    {
        square: 2,
        x: 138,
        y: 133,
    },
    {
        square: 3,
        x: 95.5,
        y: 106,
    },
    {
        square: 4,
        x: 138,
        y: 106,
    },
    {
        square: 5,
        x: 180.5,
        y: 106,
    },
    {
        square: 6,
        x: 223,
        y: 106,
    },
    {
        square: 7,
        x: 95.5,
        y: 79,
    },
    {
        square: 8,
        x: 138,
        y: 79,
    },
    {
        square: 9,
        x: 180.5,
        y: 79,
    },
    {
        square: 10,
        x: 223,
        y: 79,
    },
    {
        square: 11,
        x: 95.5,
        y: 52,
    },
    {
        square: 12,
        x: 138,
        y: 52,
    },
    {
        square: 13,
        x: 180.5,
        y: 52,
    },
    {
        square: 14,
        x: 223,
        y: 52,
    },
    {
        square: 15,
        x: 95.5,
        y: 25,
    },
    {
        square: 16,
        x: 138,
        y: 25,
    },
    {
        square: 17,
        x: 180.5,
        y: 25,
    },
    {
        square: 18,
        x: 223,
        y: 25,
    },
    {
        square: 19,
        x: 53,
        y: 25,
    }
]

// ====================== ENTITIES ======================= //
class Player {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;
        this.alive = true;
        this.currentLocation = 2;
        this.previousLocation = null;
        this.triforcePiece = 0;
        this.reset = false;
        this.bomb = 0;
        this.ocarina = 0;
        this.goronSpice = 0;
        this.zoraSpringWater = 0;
        


        this.render = () => {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}

class GreenSquare {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;

        this.render = () => {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}

class BrownBridge {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;

        this.render = () => {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}

class BlackBridge {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;

        this.render = () => {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}

class YellowBridge {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;

        this.render = () => {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}

class RedBridge {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;

        this.render = () => {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}

class BlueCircle {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;

        this.render = () => {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}

class SkullKid {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;

        this.render = () => {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}

class DekuScrub {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;

        this.render = () => {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}

class DekuBaba {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;

        this.render = () => {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}

class Boulder {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;

        this.render = () => {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}

class Bomb {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;

        this.render = () => {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}

class Ocarina {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;

        this.render = () => {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}

class TriforcePiece {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;

        this.render = () => {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}

class SpringWater {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;

        this.render = () => {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}

class GoronSpice {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;

        this.render = () => {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}

// ====================== HELPER FUNCTIONS ======================= //
// SANDBOX FOR TESTING PAINTING TECHNIQUES
function testPaint(x, y, width, height) {
    ctx.fillRect(x, y, width, height);
    ctx.strokeRect(x, y, width, height);
    console.log('color:', ctx.color);
}

function drawBox(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x,y, size, size);
}

//  GUI
function addNewScrub() {
    dekuScrub.alive = false;
    setTimeout(() => {
      let x = Math.floor(Math.random() * game.width) - 40;
      let y = Math.floor(Math.random() * game.height) - 80;
      shrek = new DekuScrub(x, y, "#bada55", 40, 80);
    }, 1000);
    return true;
}

function renderSquares () {
    const greenSquares = [
    {
        x: 125,
        y: 125,
        color: '#367b35',
        width: 30,
        height: 20,
    },
    { 
        x: 82.5,
        y: 125,
        color: '#367b35',
        width: 30,
        height: 20
    },
    {
        x: 82.5,
        y: 97.5,
        color: '#367b35',
        width: 30,
        height: 20
    },
    {
        x: 82.5,
        y: 70,
        color: '#367b35',
        width: 30,
        height: 20
    },
    {
        x: 82.5,
        y: 42.5,
        color: '#367b35',
        width: 30,
        height: 20
    },
    {
        x: 82.5,
        y: 15,
        color: '#367b35',
        width: 30,
        height: 20
    },
    {
        x: 125,
        y: 97.5,
        color: '#367b35',
        width: 30,
        height: 20
    },
    {
        x: 125,
        y: 70,
        color: '#367b35',
        width: 30,
        height: 20
    },
    {
        x: 125,
        y: 42.5,
        color: '#367b35',
        width: 30,
        height: 20
    },
    {
        x: 125,
        y: 15,
        color: '#367b35',
        width: 30,
        height: 20
    },
    {
        x: 167.5,
        y: 97.5,
        color: '#367b35',
        width: 30,
        height: 20
    },
    {
        x: 167.5,
        y: 70,
        color: '#367b35',
        width: 30,
        height: 20
    },
    {
        x: 167.5,
        y: 42.5,
        color: '#367b35',
        width: 30,
        height: 20
    },
    {
        x: 167.5,
        y: 15,
        color: '#367b35',
        width: 30,
        height: 20
    },
    {
        x: 210,
        y: 97.5,
        color: '#367b35',
        width: 30,
        height: 20
    },
    {
        x: 210,
        y: 70,
        color: '#367b35',
        width: 30,
        height: 20
    },
    {
        x: 210,
        y: 42.5,
        color: '#367b35',
        width: 30,
        height: 20
    },
    {
        x: 210,
        y: 15,
        color: '#367b35',
        width: 30,
        height: 20
    },
    {
        x: 40,
        y: 15,
        color: "#367b35",
        width: 30,
        height: 20
    }
    ]

    let gSquare = 0;
    for (let i = 0; i < greenSquares.length; i++) {
        let object = greenSquares[i];
        let newSquare = new GreenSquare(object.x, object.y, object.color, object.width, object.height)
        // console.log(newSquare)
        newSquare.render();
    }

}

function renderBrownBridges () {
    const brownBridges = [
    {
        x: 131.5,
        y: 117.5,
        color: '#89683c',
        width: 17.5,
        height: 7.5,
    },
    {
        x: 89,
        y: 117.5,
        color: '#89683c',
        width: 17.5,
        height: 7.5,
    },    
    {
        x: 89,
        y: 62.5,
        color: '#89683c',
        width: 17.5,
        height: 7.5,
    },
    {
        x: 131.5,
        y: 62.5,
        color: '#89683c',
        width: 17.5,
        height: 7.5,
    },    
    {
        x: 216.5,
        y: 62.5,
        color: '#89683c',
        width: 17.5,
        height: 7.5,
    },    
    {
        x: 112,
        y: 19,
        color: '#89683c',
        width: 13.5,
        height: 12,
    },
    {
        x: 155,
        y: 19,
        color: '#89683c',
        width: 13.5,
        height: 12,
    },
    {
        x: 197,
        y: 19,
        color: '#89683c',
        width: 13.5,
        height: 12,
    },
    {
        x: 112,
        y: 47,
        color: '#89683c',
        width: 13.5,
        height: 12,
    },    
    {
        x: 197,
        y: 47,
        color: '#89683c',
        width: 13.5,
        height: 12,
    },
    {
        x: 155,
        y: 74.5,
        color: '#89683c',
        width: 13.5,
        height: 12,
    },    
    {
        x: 155,
        y: 102,
        color: '#89683c',
        width: 13.5,
        height: 12,
    },
    {
        x: 112,
        y: 102,
        color: '#89683c',
        width: 13.5,
        height: 12,
    },
    {
        x: 197,
        y: 102,
        color: '#89683c',
        width: 13.5,
        height: 12,
    },    {
        x: 174.5,
        y: 90,
        color: '#89683c',
        width: 17.5,
        height: 7.5,
    },
    ]

    // let brownBridge = 0;
    for (let i = 0; i < brownBridges.length; i++) {
        let object = brownBridges[i];
        let newBrownBridge = new BrownBridge(object.x, object.y, object.color, object.width, object.height)
        // console.log(newBrownBridge)
        newBrownBridge.render();
    }

}

function renderBlackBridges () {
    const blackBridges = [
    {
        x: 131.5, 
        y: 90, 
        color: 'black', 
        width: 17.5, 
        height: 7.5 
    },
    {
        x: 89, 
        y: 90, 
        color: 'black', 
        width: 17.5, 
        height: 7.5 
    },
    {
        x: 131.5, 
        y: 35, 
        color: 'black', 
        width: 17.5, 
        height: 7.5 
    },
    {
        x: 155, 
        y: 47, 
        color: 'black', 
        width: 13.5, 
        height: 12 
    },
    ]

    for (let i = 0; i < blackBridges.length; i++) {
        let object = blackBridges[i];
        let newBlackBridge = new BlackBridge(object.x, object.y, object.color, object.width, object.height)
        // console.log(newBlackBridge)
        newBlackBridge.render();
    }

}

function renderYellowBridges () {
    const yellowBridges = [
    {
        x: 197,
        y: 74.5,
        color: 'yellow',
        width: 13.5,
        height: 12
    },
    {
        x: 217,
        y: 35,
        color: 'yellow',
        width: 17.5,
        height: 7.5
    },    
    {
        x: 70,
        y: 19.25,
        color: 'yellow',
        width: 13.5,
        height: 12
    },
    ]

    for (let i = 0; i < yellowBridges.length; i++) {
    let object = yellowBridges[i];
    let newYellowBridge = new YellowBridge(object.x, object.y, object.color, object.width, object.height)
    // console.log(newYellowBridge)
    newYellowBridge.render();
    }

}

function renderBoulders () {
    const boulders = [
        {
            x: 115,
            y: 22,
            color: "#a6a6a6",
            width: 10,
            height: 7
        },
        {
            x: 93,
            y: 60,
            color: "#a6a6a6",
            width: 10,
            height: 7
        },
    ]

    for(let i = 0; i < boulders.length; i++) {
        let object = boulders[i];
        let newBoulder = new Boulder(object.x, object.y, object.color, object.width, object.height)
        // console.log(newBoulder)
        newBoulder.render();
    }

}

function renderTriforcePieces () {
    const triforcePieces = [
        {
            x: 95,
            y: 78,
            color: "#ffde59",
            width: 5,
            height: 3.5
        },        {
            x: 95,
            y: 24,
            color: "#ffde59",
            width: 5,
            height: 3.5
        },
        {
            x: 95,
            y: 106,
            color: "#ffde59",
            width: 5,
            height: 3.5
        },
    ]

    for(let i = 0; i < triforcePieces.length; i++) {
        let object = triforcePieces[i];
        let newTriforcePiece = new TriforcePiece(object.x, object.y, object.color, object.width, object.height)
        // console.log(newTriforcePiece)
       newTriforcePiece.render();
    }

}

function renderBombs () {
    const bombs = [
        {
            x: 223,
            y: 100,
            color: "#545454",
            width: 5,
            height: 3.5
        },
        {
            x: 223,
            y: 110,
            color: "#545454",
            width: 5,
            height: 3.5
        },
    ]

    for(let i = 0; i < bombs.length; i++) {
        let object = bombs[i];
        let newBomb = new Bomb(object.x, object.y, object.color, object.width, object.height)
        // console.log(newBomb)
       newBomb.render();
    }

}

function decideFate () {


    if (player.currentLocation === 7 && player.previousLocation === 3) {
        console.log('back to square 2')
        player.newLocation = 2
    } else if (player.currentLocation === 3 && player.previousLocation === 7) {
        console.log('back to square 2')
    } else if (player.currentLocation === 8 && player.previousLocation === 4) {
        console.log('back to square 2')
    } else if (player.currentLocation === 4 && player.previousLocation === 8) {
        console.log('back to square 2')
    } else if (player.currentLocation === 12 && player.previousLocation === 16) {
        console.log('back to square 2')
    } else if (player.currentLocation === 16 && player.previousLocation === 12) {
        console.log('back to square 2')
    } else if (player.currentLocation === 12 && player.previousLocation === 13) {
        console.log('back to square 2')
    } else if (player.currentLocation === 13 && player.previousLocation === 12) {
        console.log('back to square 2')
    } else if (player.currentLocation === 13 && player.previousLocation === 9) {
        console.log('Goron Spice', player.goronSpice)
        player.goronSpice = 1;
    } else if (player.currentLocation === 9 && player.previousLocation === 13) {
        console.log('Goron Spice', player.goronSpice)
        player.goronSpice = 1;
    } else if (player.currentLocation === 10 && player.previousLocation === 9) {
        console.log('you need a triforce piece')
    } else if (player.currentLocation === 9 && player.previousLocation === 10) {
        console.log('you need a triforce piece')
    } else if (player.currentLocation === 18 && player.previousLocation === 14) {
        console.log('you need a triforce piece')
    } else if (player.currentLocation === 14 && player.previousLocation === 18) {
        console.log('you need a triforce piece')
    } else if (player.currentLocation === 19 && player.previousLocation === 15) {
        console.log('you need a triforce piece')
        alert('WINNER')
        location.reload();
    } else if (player.currentLocation === 15 && player.previousLocation === 19) {
        console.log('you need a triforce piece')
    } else if (player.currentLocation === 10) {
        console.log('+1 Zora Spring Water')
    } else if (player.currentLocation === 7 && player.previousLocation === 11) {
        console.log('you need a bomb')
    } else if (player.currentLocation === 15 && player.previousLocation === 16) {
        console.log('you need a bomb')
    } else if (player.currentLocation === 7 || player.currentLocation === 15) {
        console.log('+1 Triforce Piece')
    } else if (player.currentLocation === 3 && player.ocarina === 1) {
        player.triforcePiece = 1;
    } else if (player.currentLocation === 6 && player.goronSpice === 1) {
        console.log('Bombs', player.bomb)
       player.bomb = 1;
    } else if (player.currentLocation === 18) {
        console.log('Ocarina', player.ocarina)
        player.ocarina = 1;
    } else {
        console.log()
    }

}

//  KEYBOARD INTERACTION LOGIC
// w - 87 - up
// a - 65 - left
// s - 83 - down
// d - 68 - right
function movementHandler (e) {
    console.log('movement', e.key);

    switch(e.which) {
        case 87:
            // move hero up
            player.y - 27 >= 0 ? player.y -= 27 : null;
            detectSquare();
            decideFate();
            break;
        case 65: 
            // move left
            player.x - 42.5 >= 0 ? player.x -= 42.5 : null;
            detectSquare();
            decideFate();
            break;
        case 83:
            // move down
            player.y + 27 <= game.height ? player.y += 27 : null;
            detectSquare();
            decideFate();
            break;
        case 68:
            // move right
            player.x + 42.5 <= game.width ? player.x += 42.5 : null;
            detectSquare();
            decideFate();
            break;
    }
    console.log(player.x);
    console.log(player.y);
}

// ====================== GAME PROCESSES ======================= //
/**
 * @function gameLoop
 * @todo clear the canvas
 * @todo display the x and y coords of our hero
 * @todo check if the shrek is alive. ( a ) render shrek ( b ) check for collision
 * @todo render the hero
*/

/**
 * @function renderSquares
 * @todo create an empty array - set to variable
 * @todo inside array, you want to put {object}
 * @todo each object will have { x: 74, y: 35, color, width, height }
 * array = [
 * {
 * },
 * 
 * ]
 * @todo iterate through the array ( using for loop )
 * @todo take each element and make a new instance of a square
 * @todo render the square using the render()
 * 
 * @todo run this function ( renderSquare ) inside of the gameloop
 * 
 * */ 


function gameLoop () {
    // clear the canvas
    ctx.clearRect(0, 0, game.width, game.height);
    renderSquares();
    renderBrownBridges();
    renderBlackBridges();
    renderYellowBridges();
    renderBoulders();
    redBridge.render();
    blueCircle.render();
    renderTriforcePieces();
    renderBombs();
    ocarina.render();
    if (player.alive) { // 
        // render shrek
        player.render();
        // @todo - check collision (detchHit -> f)
       // let hit = detectHit(dekuScrub, player);
    }
    // render hero
    // dekuScrub.render();
    // dekuBaba.render();
    // skullKid.render();
}

// ====================== COLLISION DETECTION ======================= //
/**
 * * @function detectHit
 * @param {object<Crawler>} p1 - hero.y + hero.hiehgt
 * @param {object<Crawler>} p2 - shrek.y
 * @todo if the bottom of one below is above the other
 * @todo if the top of one is above the bottom of another
 * @todo if the right of one is right of the others left
*/

function detectHit(enemy, player) {
    console.log(enemy)
    console.log(player)
}

function detectBridge(player, brownBridge) {
    console.log(player)
    console.log(brownBridge)
}

function detectSquare() {
    player.previousLocation = player.currentLocation
    console.log(squareCoordinates)
    console.log(player.x)
    console.log(player.y)
    let filterLocation = squareCoordinates.filter(s => {
        console.log(s)
        let x = player.x
        let y = player.y
        if (s.x === player.x && s.y === player.y) {
            return true;
        } else {
            return false;
        }
    })
    let newLocation = filterLocation[0].square
    player.currentLocation = newLocation;
    console.log('Previous Location', player.previousLocation)
    console.log('Current Location', player.currentLocation)
    console.log('New Location', newLocation)
    
}

// ====================== PAINT INTIAL SCREEN ======================= //

// EVENT LISTENERS
window.addEventListener("DOMContentLoaded", (e) => {
    player = new Player(138, 133, "white", 5, 3.5);
    dekuScrub = new DekuScrub(50, 50, 'red', 5, 3.5); 
    dekuBaba = new DekuBaba(100, 100, 'orange', 5, 3.5);
    skullKid = new SkullKid(175, 100, '#524031', 5, 3.5);
    triforcePiece = new TriforcePiece(75, 75, '#ffde59', 5, 3.5);
    bomb = new Bomb(200, 75, '#545454', 5, 3.5);
    ocarina = new Ocarina(223, 24, '#d6c27c', 5, 3.5);
    greenSquare = new GreenSquare(125, 125, '#367b35', 30, 20);
    brownBridge = new BrownBridge(131.5, 117.5, '#89683c', 17.5, 7.5);
    blackBridge = new BlackBridge(131.5, 92.5, 'black', 17.5, 7.5);
    yellowBridge = new YellowBridge(131.5, 67.5, 'yellow', 17.5, 7.5);
    redBridge = new RedBridge(174.5, 62.5, 'red', 17.5, 7.5);
    blueCircle = new BlueCircle(220, 75, '#1c85c8', 15, 10.5);
    boulder = new Boulder(50, 100, '#a6a6a6', 10, 7);

    const runGame = setInterval(gameLoop, 120);
});

document.addEventListener('keydown', movementHandler);

// CODE STASH FOR OLD CODE



// Start
// Move from one square to the next
    // If there's a brown bridge and you press the corresponding key to go in the direction of that bridge you can cross
    // If there's a black bridge and you press the corresponding key to go in the direction of that bridge you'll get sent back to start
    // If there's a yellow bridge and you have a triforce piece and you press the corresponding key to go in the direction of that bridge you can cross
    // If there's no bridge in the corresponding direction of the key you pressed you can not go that way
    // If there's a red bridge and you press the corresponding key to go in the direction of that bridge you'll get Goron Spice x1, but only for the first time you cross it
    // If you go into the square containing the blue circle you'll get Zora Spring Water x1, but only for the first time you enter it
    // If you are two squares away from a Deku Scrub enemy, it will pursue you
    // If you are three squares away from a Deku Baba enemy, it will shoot a projectile towards you
    // If you have a bomb item you can get into areas blocked by boulders
    // If you give the skull kid in the 4th row square of the 1st column a Fairy Ocarina he will give you a triforce piece
    // If you give the skull kid in the 4th row square of the 4th column some Goron Spice he will give you a bomb
    // If you give the skull kid in the 4th row square of the 4th column some Zora Spring Water he will give you a bomb
    // If you press the attack button you will shoot an arrow that has a range of two units, it will also automatically go in the direction of the nearest enemy
    // If you press the attack button near a Skull Kid entity and the arrow hits it, it will instantly kill you
    // If your arrow projectile and the Deku Baba enemy's projectile collide, they'll both disappear, dealing no damage
// Dialogue in the console when you press 'Q' in the same square as a Skull Kid entity
// Game Over screen
// Winner screen

// Variables and Conditions

/*
var brownBridge;
if (brownBridge === true) {
    // Can move
} else {
    // Can't Move
    console.log("Navi: You can't go any further.")
}

var blackBridge;
if (blackBridge === true) {
    // Warp to start
    console.log("Navi: Be more mindful of where you're going! Kids like you get lost in here forever you know.")
} else {
    // Don't warp
}

var yellowBridge;
if (yellowBridge === true) {
    // Can move
} else {
    // Can't move
    console.log("Navi: I'm sensing alot of malicious magic in this direction, we'll need something sacred to cleanse it.")
}

var redBridge;
if (redBridge === true) {
    // Can move
    // Give player Goron Spice x1 (If it's the first time crossing)
    console.log("Navi: You got some Goron Spice! Maybe you can finally fix your terrible cooking.")
}

var blueCircle;
if (blueCircle === true) {
    // Give player Zora Spring Water x1 (If it's the first time entering)
    console.log("Navi: You got some Zora Spring Water! We should give it to the Skull Kid.")
}
*/