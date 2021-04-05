class fallingWords {
    constructor() {
        this.currentlyFalling = [];
        this.velocity = 3; //change back to 0.5 after testing
        this.framesTillNextWord = 150;

    }

    filterMissedWords() {
        this.currentlyFalling = this.currentlyFalling.filter (word => {
            if (word.y >= height -100) {
                game.player.loseLife();
                return false;
            }
            return true;
        })
    }

    addWordtoFalling() {
        let randomIndex = Math.floor(Math.random()* game.dictionary.length);
        let wordToAdd = game.dictionary[randomIndex];

        if (!this.currentlyFalling.includes(wordToAdd)) {
            wordToAdd.x = (Math.random() * width/1.3) + 100;
            wordToAdd.y = 0;
            this.currentlyFalling.push(wordToAdd);
            // console.log(this.fallingWords);
        }
    }

    increaseDifficulty() {
            this.velocity += 0.1;
            this.framesTillNextWord -= 4;
            console.log(`frames till next word: ${game.fallingWords.framesTillNextWord}`);

            console.log('speed increasing');
            console.log(game.fallingWords.velocity);
        
    }

}