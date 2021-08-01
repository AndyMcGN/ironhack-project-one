class Input {
    constructor() {
        this.input = createInput();
        this.input.id("main-input");
        container.appendChild(this.input.elt);
    };

    

    isCorrectAnswer() {
        
        for (let word of game.fallingWords.currentlyFalling)  {
            
            if (this.input.value().trim().toLowerCase() === word[game.dictionaryManager.typedLang].toLowerCase()) {
                this.input.value('');
                return word;
            }
        }
            return false;

    };
};


