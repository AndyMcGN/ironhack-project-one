const game = new Game();

function preload() {
        game.preload();
    }

function setup() {
    let canvas = createCanvas(1200,800);
    
    game.setup();
}

function draw() {
    clear();

    game.draw();

}

function keyReleased(key) {
    if (mode === 'welcome' && keyCode === ENTER) {
        mode = 'play';
        document.querySelector("input").focus();
    }
    else {
        game.checkInput();
    };
}