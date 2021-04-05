class fallingWords {
    constructor() {
        this.currentlyFalling = [];
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


}