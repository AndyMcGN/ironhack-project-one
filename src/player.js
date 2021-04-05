class Player {
    constructor() {

        this.score = 0;
        this.lives = 3;

    }

    setup() {
        let scoreElem = createDiv("Score: <span id='score'>0</span>");
        scoreElem.position(100,50);
        scoreElem.class("player-info");

        let livesElem = createDiv("Lives: <span id='lives'>3</span>");
        livesElem.position(100, 100);
        livesElem.class("player-info");
    }


    draw() {

    }

    updateScore() {
        this.score++;
        console.log(this.score);
        document.querySelector("#score").innerText = this.score;
    };

    loseLife() {
        this.lives--;
        document.querySelector("#lives").innerText = this.lives;
        if (this.lives === 0) {
            game.gameOver();
        }
    }
}