const game = new Game();

function setup() {
    let canvas = createCanvas(1200,800);
    
    game.setup();
}

function draw() {
    clear();
    game.draw();
}

function keyReleased() {
    game.checkInput();
}