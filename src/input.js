class Input {
    constructor() {
        this.input = createInput();
        this.input.id("main-input");
        container.appendChild(this.input.elt);
    };

    

    isCorrectAnswer() {
        console.log(this.input.value());
        // console.log(game.word.lang2);
        
        for (let word of game.fallingWords.currentlyFalling)  {
            // console.log(word.lang2);
            
            if (this.input.value().trim().toLowerCase() === word[game.dictionaryManager.typedLang].toLowerCase()) {
                this.input.value('');
                return word;
            }
        }
            return false;

    };
};


