class Player {
    constructor() {

        this.score = 0;
        this.lives = 3;

    }

    setup() {
        let scoreElem = createDiv("Score: <span id='score'>0</span>");
        scoreElem.position(100,50);
        scoreElem.id("scoreDiv");
    }


    draw() {

    }

    updateScore() {
        this.score++;
        console.log(this.score);
        document.querySelector("#score").innerText = this.score;
    }
}