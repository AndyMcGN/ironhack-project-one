class Word {
    constructor(lang1, lang2) {
        this.lang1 = lang1;
        this.lang2 = lang2;
        this.x = (Math.random() * width/1.3) + 100;
        this.y = -400; 
        // this.hotAirBalloon1 = game.gameBalloons[0];
        this.index = Math.floor(Math.random()* game.gameBalloons.length);
        this.rotation = 0;
        this.rotationSpeed = 0.2;
        this.baseRotationSpeed = 0.2;
        this.direction = 'left';
    }

    draw() {
        push();

        translate(this.x +100, this.y)

        if (mode === 'play') {

            this.rotateBalloons();
            this.y+= game.fallingWords.velocity;
            
        }

        if (mode === 'pause') {
            rotate(this.rotation);
        }
 
        this.drawBalloonWithWord();
       
        pop();
    }


    stopFalling() {

        console.log("Stoppping falling")
        console.log(this);
        
        game.fallingWords.currentlyFalling = game.fallingWords.currentlyFalling.filter(wordToCheck => {
            if (this.lang1 === wordToCheck.lang1) return false;
            return true;
        })
    }

    rotateBalloons() {

        if (Math.abs(this.rotation) > 20) {
            this.rotationSpeed = this.baseRotationSpeed/1.3;
        } else {
            this.rotationSpeed = this.baseRotationSpeed;
        }
        if (this.direction === 'left') {
            rotate(this.rotation -= this.rotationSpeed);
            if (this.rotation <= -25) {
                this.direction = 'right';
            }
        }
        else if (this.direction === 'right') {
            rotate(this.rotation += this.rotationSpeed);
            if (this.rotation >= 25){
                this.direction = 'left';
                
            }
        };
    }

    drawBalloonWithWord() {
        textSize(32);
        textStyle(BOLD)
        fill(149,20,169);
        // text(this.lang1, this.x, this.y);
        text(this.lang1, 0, 0);
        // image(game.gameBalloons[this.index], this.x-100, this.y-100, 200, 300);
        image(game.gameBalloons[this.index], -100, -100, 200, 300);
    }
}