class WelcomeScreen {
    constructor() {
        
    }

    setup() {
        let yPos = 100;

        for (let dictionary of game.dictionaryManager.prefilledDictOptions) {
            let button = createImg("assets/welcome-balloon.png")
            button.position(800, yPos);
            button.class("balloon-btn");
            text(dictionary.lang1, 800, yPos);

            yPos += 100;
        }
    }
    
    draw() {
        this.drawMainBalloon();
        this.drawDictionaryOptions();
    }

    drawMainBalloon() {
        image(game.welcomeBalloons[0], 100, 50, 450, 600);
        noStroke();
        circle(320, 260, 375)
        textSize(30);
        textAlign(CENTER);
        text("Welcome to the game!", 220, 140, 200, 100);
        textSize(20);
        text("Save the hot air balloons from sinking by typing in the correct translations! Good luck!", 150, 250, 360, 200);
        textSize(25);
        text("Press Enter to start.", 150, 360, 350, 200);
    }

    drawDictionaryOptions() {
        let yPos = 100;
        for (let dictionary of game.dictionaryManager.prefilledDictOptions) {
            rect(650, yPos-45, 500, 70 )
            text(dictionary.lang1, 800, yPos);
            text(dictionary.lang2, 1030, yPos)
            yPos += 100;
        }
    }

}