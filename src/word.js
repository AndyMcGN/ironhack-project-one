class Word {
    constructor(lang1, lang2) {
        this.lang1 = lang1;
        this.lang2 = lang2;
        this.x = (Math.random() * width/1.3) + 100;
        this.y = 0;
        this.velocity = 0.5
        
        
    }


    draw() {
        
        textSize(32);
        fill(255,0,0);
        text(this.lang1, this.x, this.y);
        this.y+= this.velocity;


        game.fallingWords = game.fallingWords.filter (word => {
            if (word.y >= height -100) {
                game.player.loseLife();
                return false;
            }
            return true;
        })

        
    
    }
    stopFalling() {

        console.log("Stoppping falling")
        console.log(this);
        
        game.fallingWords = game.fallingWords.filter(wordToCheck => {
            if (this.lang1 === wordToCheck.lang1) return false;
            return true;
        })
    }
}