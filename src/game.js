let mode = 'welcome';

class Game {
    
    preload() {
        this.welcomeBalloons = [
            loadImage("assets/welcome-balloon.png"),
        ];

        this.gameBalloons = [
            loadImage("assets/hotairballoon2.png"),
            loadImage("assets/hotairballoon3.png"),
            loadImage("assets/hotairballoon4.png"),
            loadImage("assets/hotairballoon6.png"),
            loadImage("assets/hotairballoon7.png"),
            loadImage("assets/hotairballoon8.png"),
            loadImage("assets/hotairballoon9.png"),
            loadImage("assets/hotairballoon10.png"),
            loadImage("assets/hotairballoon11.png"),
        ]

        }

    setup() {
        this.dictionary = this.makeDictionary(words);
        this.input = new Input();
        this.player = new Player();

        this.input.setup();
        this.player.setup();
        this.fallingWords = new fallingWords();
        console.log(this.dictionary)
        // this.word.setup();
    }

 

    draw() {

        
        if (mode === 'welcome') {
            this.showWelcomeScreen();

        }

        if (mode === 'play') {

            if (frameCount % this.fallingWords.framesTillNextWord === 0) {
                this.fallingWords.addWordtoFalling();
            }

            this.fallingWords.filterMissedWords();
        
            this.fallingWords.currentlyFalling.slice().reverse().forEach(function (word) {
                word.draw();
            });
        
        };

        if (mode === 'game-over') {

            this.gameOver();
        }

    }

    showWelcomeScreen() {

        image(this.welcomeBalloons[0], 300, 50, 550, 700);
        noStroke();
        circle(575, 300, 400)
        textSize(30);
        textAlign(CENTER);
        text("Welcome to the game!", 380, 190, 400, 200);
        textSize(20);
        text("Save the hot air balloons from sinking by typing in the correct translations! Good luck!", 400, 250, 360, 200);
        textSize(25);
        text("Press Enter to start.", 400, 360, 350, 200);

    }

    makeDictionary(stringOfWords) {

        const dict = [];
        const arrayOfPairs = stringOfWords.split(";");
    
        for (let pair = 0; pair <= arrayOfPairs.length-2; pair++) {

            let splitWords = arrayOfPairs[pair].split(',');
            let lang1 = splitWords[0].trim();
            let lang2 = splitWords[1].trim()

            let word = new Word(lang1, lang2);
            
            dict.push(word);
        };
        return dict;
    };

    checkInput() {

        let correctAnswer = this.input.isCorrectAnswer();

        if(correctAnswer) {
            console.log(correctAnswer);

            let answerIndex = this.fallingWords.currentlyFalling.indexOf(correctAnswer);

            this.fallingWords.currentlyFalling[answerIndex].stopFalling();
            this.player.updateScore();
            
        };
    };

    gameOver() {
        fill(255,255,255);
        rect(400, 155, 400, 100, 20);
        textSize(30);
        fill(0,0,0)
        text(`Your final score was ${this.player.score}`, 600, 215);

    }

};

let words = 
"un burro,a donkey;un caballo,a horse;un canguro,a kangaroo;un cerdo,a pig;un chita (/guepardo),a cheetah;un chivo (/una cabra),a goat;un conejo,a rabbit;un delfín,a dolphin;un elefante,a elephant;un gallo,a rooster;un gato,a cat;un león,a lion;un leopardo,a leopard;un lince,a lynx;un lobo,a wolf;un mono,a monkey;un oso perezoso,a sloth;un oso,a bear;un pájaro,a bird;un pato,a duck;"


let hardWords =
    "un burro,a donkey;un caballo,a horse;un canguro,a kangaroo;un cerdo,a pig;un chita (/guepardo),a cheetah;un chivo (/una cabra),a goat;un conejo,a rabbit;un delfín,a dolphin;un elefante,a elephant;un gallo,a rooster;un gato,a cat;un hipopótamo,a hippopotamus;un hurón,a ferret;un jabalí,a wild boar;un león,a lion;un leopardo,a leopard;un lince,a lynx;un lobo,a wolf;un mono,a monkey;un oso perezoso,a sloth;un oso,a bear;un pájaro,a bird;un pato,a duck;un pavo real,a peacock;un pavo,a turkey;un perro,a dog;un pez,a fish;un puercoespín,a porcupine;un ratón,a mouse;un rinoceronte,a rhinoceros;un tiburón,a shark;un tigre,a tiger;un toro,a bull;un venado (/ciervo),a deer;un zorro,a fox;una abeja,a bee;una araña,a spider;una ardilla,a squirrel;una ballena,a whale;una cebra,a zebra;una cobaya (/cobayo/cuy/conejito/illo de indias),a guinea pig;una estrella de mar,a starfish;una gallina,a hen;una jirafa,a giraffe;una mofeta (/zorrillo),a skunk;una oveja,a sheep;una rana,a frog;una serpiente,a snake;una tortuga,a turtle;una vaca,a cow;";
