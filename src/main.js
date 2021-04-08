const game = new Game();

function preload() {
        game.preload();
    }

function setup() {

    let canvas = createCanvas(1300,700);
    angleMode(DEGREES);
    game.setup();
}

function draw() {
    clear();

    game.draw();

}

function keyReleased(key) {
    if (mode === 'welcome' && keyCode === ENTER) {
        // sound.play();
        mode = 'play';
        document.querySelector(".dict-choices").hidden = true;
        // dictionaryChoice will get the string at the chosen index (needs refactoring the shit out of)
        game.dictionaryManager.dictionaryChoice = dictionaryChoices[document.querySelector("input[name='dictOptions']:checked").value];

        game.dictionaryManager.dictionary = game.dictionaryManager.makeDictionary(game.dictionaryManager.dictionaryChoice);
        console.log(game.dictionaryManager.dictionary);
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