const game = new Game();

function preload() {
        game.preload();
    }

function setup() {
    let canvas = createCanvas(1200,800);
    angleMode(DEGREES);
    game.setup();
}

function draw() {
    clear();

    game.draw();

}

function keyReleased(key) {
    if (mode === 'welcome' && keyCode === ENTER) {
        mode = 'play';
        game.input.input.show();
        document.querySelector('#main-input').focus();

    }
    else if (mode === 'play'){
        game.checkInput();
    }
    else if (mode === 'pause') {

        if(game.pauseScreen.isCorrectPauseInput()) {
            
            if (game.player.lives > 0) {
                mode = 'play';
                document.querySelector('#main-input').value = '';
                document.querySelector('#main-input').focus();


            } else {
                game.input.input.hide()

                mode = 'game-over';
            };

        }
    }
}