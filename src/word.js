class Word {
    constructor(lang1, lang2) {
        this.lang1 = lang1;
        this.lang2 = lang2;
        this.x = (Math.random() * width/1.3) + 100;
        this.y = -400; 
        // this.hotAirBalloon1 = game.gameBalloons[0];
        this.index = Math.floor(Math.random()* game.gameBalloons.length)
    }
    // setup() {


    // }

    draw() {

        textSize(32);
        textStyle(BOLD)
        fill(149,20,169);
        text(this.lang1, this.x, this.y);
        this.y+= game.fallingWords.velocity;
        image(game.gameBalloons[this.index], this.x-100, this.y-100, 200, 300);

    }


    stopFalling() {

        console.log("Stoppping falling")
        console.log(this);
        
        game.fallingWords.currentlyFalling = game.fallingWords.currentlyFalling.filter(wordToCheck => {
            if (this.lang1 === wordToCheck.lang1) return false;
            return true;
        })
    }
}