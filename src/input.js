class Input {
    constructor() {
        this.input;
    };

    setup() {
        this.input = createInput();  
        this.input.position(300, 700);
    };

    draw() {
        // console.log(this.input.value());
    }

    isCorrectAnswer() {
        console.log(this.input.value());
        // console.log(game.word.lang2);
        
        for (let word of game.fallingWords)  {
            // console.log(word.lang2);
            
            if (this.input.value() === word.lang2) {
                this.input.value('');
                return word;
            }
        }
            return false;

    };
};


