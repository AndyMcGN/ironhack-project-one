const game = new Game();
const container = document.querySelector(".canvas-container")
function preload() {
        game.preload();
    }

function setup() {

    let canvas = createCanvas(1300,700);
    container.appendChild(canvas.elt);
    angleMode(DEGREES);
    game.setup();
}

function draw() {
    clear();

    game.draw();

}

function keyReleased(key) {
    if (mode === 'welcome' && keyCode === ENTER) {
        let input = document.querySelector("#custom-set-text-field");
        console.log(document.activeElement)
        if(input == document.activeElement) {
            console.log(input.value)
            game.dictionaryManager.updateDictionaryAndStartGame(input.value);
        } else {
            game.startGame();

        }
        // // sound.play();
       
        
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