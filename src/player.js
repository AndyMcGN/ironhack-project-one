class Player {
    constructor() {

        this.score = 0;
        this.lives = 3;

    }

    setup() {
        let scoreElem = createDiv("Score: <span id='score'>0</span>");
        scoreElem.position(150,50);
        scoreElem.class("player-info");

        let livesElem = createDiv("Lives: <span id='lives'>3</span>");
        livesElem.position(150, 100);
        livesElem.class("player-info");
    }




    updateScore() {
        this.score++;
        console.log(this.score);
        document.querySelector("#score").innerText = this.score;
        if (game.player.score % 3) {
            game.fallingWords.increaseDifficulty();
        }

    };

    loseLife() {
        this.lives--;
        document.querySelector("#lives").innerText = this.lives;
        if (this.lives === 0) {
            // mode = 'game-over';
            // game.gameOver();
        }
    }
}