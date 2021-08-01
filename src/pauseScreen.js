class PauseScreen {
    constructor(missedWord) {
        this.missedWord = missedWord;

        this.input = createInput();
        this.input.id("pause-input");
        container.appendChild(this.input.elt);

    }


    draw() {

        this.fadeEverythingPink();
        this.drawPromptAndAnswer();
        pop();
    }

    isCorrectPauseInput() {
        if (this.input.value().trim().toLowerCase() === this.missedWord[game.dictionaryManager.typedLang].toLowerCase()) {
            this.input.hide();
            game.input.input.show();
            return true;
        }
    }

    fadeEverythingPink() {
        push();
            let shade = color(250,40,130)
            shade.setAlpha(70)
            push()
            fill(shade)
            rect(0,0, width, height);
        pop()

    }
    
    drawPromptAndAnswer() {
        textStyle(BOLD);
        textSize(25);
        text("Prompt:", width/2,100);
        textSize(40);
        text(this.missedWord[game.dictionaryManager.fallingLang], width/2, 200);
        textSize(25);
        text("Correct Answer:", width/2,300);
        textSize(40);
        text(this.missedWord[game.dictionaryManager.typedLang], width/2, 400);
    }

}