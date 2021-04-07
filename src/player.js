class Player {
    constructor() {

        this.score = 0;
        this.lives = 1;

    }


    drawLives() {
        let xPos = 50;

        text("Lives:",130, 146)
        for (let i = 0; i < this.lives; i++) {
            image(game.welcomeBalloons[0], xPos, 160, 45,70);
            xPos += 60;
        }
    }

    drawScore() {
        image(game.scoreBalloon, 90, 20, 90,90);
        text(this.score, 135, 60)

    }


    updateScore() {
        this.score++;
        console.log(this.score);
        if (game.player.score % 3) {
            game.fallingWords.increaseDifficulty();
            console.log(game.fallingWords.velocity)
        }

    };

    loseLife() {
        this.lives--;
        if (this.lives === 0) {
            // mode = 'game-over';
            // game.gameOver();
        }
    }
}