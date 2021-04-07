class welcomeScreen {
    
    draw() {
        this.drawMainBalloon();
    }

    drawMainBalloon() {
        image(game.welcomeBalloons[0], (width/2) - 250, 50, 450, 600);
        noStroke();
        circle(width/2 - 25, 260, 375)
        textSize(30);
        textAlign(CENTER);
        text("Welcome to the game!", 520, 140, 200, 100);
        textSize(20);
        text("Save the hot air balloons from sinking by typing in the correct translations! Good luck!", 450, 250, 360, 200);
        textSize(25);
        text("Press Enter to start.", 450, 360, 350, 200);
    }
}