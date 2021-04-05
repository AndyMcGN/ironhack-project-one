const game = new Game();
let mode = 'welcome';

function setup() {
    let canvas = createCanvas(1200,800);
    
    game.setup();
}

function draw() {
    clear();
    // if (mode == 'welcome') {
    //     text("hello, welcome", 100, 100)
    // };
    // if (mode === 'play') {
        game.draw();
    // }
}

function keyReleased() {
    game.checkInput();
}