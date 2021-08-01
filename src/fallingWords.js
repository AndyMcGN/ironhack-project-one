class fallingWords {
    constructor() {
        this.currentlyFalling = [];
        this.velocity = 0.5;
        this.framesTillNextWord = 150;

    }

    filterMissedWords() {
        this.currentlyFalling = this.currentlyFalling.filter (word => {
            if (word.y >= height) {
                game.player.loseLife();
                game.pauseScreen = new PauseScreen(word);
                crash.play();
                mode = 'pause';

                return false;
            }
            return true;
        })
    }

    addWordtoFalling() {
        let randomIndex = Math.floor(Math.random()* game.dictionaryManager.dictionary.length);
        let wordToAdd = game.dictionaryManager.dictionary[randomIndex];

        if (!this.currentlyFalling.includes(wordToAdd)) {
            

            wordToAdd.x = this.getSafeXValue();
             
            wordToAdd.y = -200;
            this.currentlyFalling.push(wordToAdd);
        }
    }

    getSafeXValue() {
        if (this.currentlyFalling.length === 0) return (Math.random() * width/1.5) + 100;
        
        let previousWord = this.currentlyFalling[this.currentlyFalling.length -1];
        console.log(previousWord)
        let x = previousWord.x;
        do {
            x = (Math.random() * width/1.5) + 150;
        }
        while (Math.abs(x - previousWord.x) < 300);

        return x;
    }

    increaseDifficulty() {
            this.velocity += 0.1;
            this.framesTillNextWord -= 4;
   }

}