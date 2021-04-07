class PauseScreen {
    constructor(missedWord) {
        this.missedWord = missedWord;

        this.input = createInput();
        this.input.id("pause-input")

    }


    draw() {
        push();

        // console.log(this.missedWord)
        this.input.position(width /2 -50, height/3 * 2);
        this.input.size(300);
        textStyle(BOLD)

        textSize(25);
        text("Prompt:", width/2,100);
        textSize(40)
        text(this.missedWord.lang1, width/2, 200);
        textSize(25);
        text("Correct Answer:", width/2,300);
        textSize(40);
        text(this.missedWord.lang2, width/2, 400);

        pop();
    }

    isCorrectPauseInput() {
        console.log(this.input.value());
        if (this.input.value() === this.missedWord.lang2) {
            this.input.hide();
            game.input.input.show();
            return true;
        }
    }

}