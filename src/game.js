let mode = 'welcome';

let sound;
let crash;
class Game {
    
    preload() {
        this.welcomeBalloons = [
            loadImage("assets/welcome-balloon.png"),
            loadImage("assets/hotairballoon.png")
        ];

        this.scoreBalloon = loadImage("assets/hot-air-balloon.png");

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

        sound = loadSound("assets/music_david_gwyn_jones_the_moonpool_instrumental.mp3");
        crash = loadSound("assets/car-crash.mp3")

        }

    setup() {
        this.welcomeScreen = new WelcomeScreen();
        this.dictionaryManager = new DictionaryManager()
        this.welcomeScreen.setup();


        this.input = new Input();
        this.player = new Player();

        this.input.input.hide()
        
        this.fallingWords = new fallingWords();
        sound.play();

    }

 

    draw() {

        
        if (mode === 'welcome') {
            // this.showWelcomeScreen();
            this.welcomeScreen.draw();
        }

        if (mode === 'play') {
            if (frameCount % this.fallingWords.framesTillNextWord === 0) {
                this.fallingWords.addWordtoFalling();
            }

            this.fallingWords.filterMissedWords();        
        }



        if (mode === 'play' || mode === 'pause') {
        
            this.fallingWords.currentlyFalling.slice().reverse().forEach(function (word) {
                word.draw();
            });

            this.player.drawLives();
            this.player.drawScore();
        
        };

        if (mode === 'pause') {
            this.showPauseScreen();
        }

        if (mode === 'game-over') {

            this.gameOver();
        }

    }

    startGame() {
        mode = 'play';



        this.hideWelcomeScreen();
        if(!this.dictionaryManager.dictionary) {
            this.dictionaryManager.dictionaryChoice = dictionaryChoices[document.querySelector("input[name='dictOptions']:checked").value];

            this.dictionaryManager.dictionary = this.dictionaryManager.makeDictionary(game.dictionaryManager.dictionaryChoice);
           
        }
        this.dictionaryManager.necessaryChars = this.dictionaryManager.getSpecialChars();
        this.dictionaryManager.renderCharButtons();

        this.input.input.show();
        document.querySelector('#main-input').focus();
    }

   hideWelcomeScreen() {
        document.querySelector(".dict-choices").hidden = true;
        document.querySelector("#custom-set-btn").hidden = true;      
        if(document.querySelector("#custom-set-text-field")) {
            document.querySelector("#custom-set-text-field").hidden = true;
            document.querySelector("#custom-set-submit").hidden = true;
            document.querySelector("#cancel-Btn").hidden = true;
        }

   }

    checkInput() {

        let correctAnswer = this.input.isCorrectAnswer();

        if(correctAnswer) {
            console.log(correctAnswer);

            let answerIndex = this.fallingWords.currentlyFalling.indexOf(correctAnswer);

            this.fallingWords.currentlyFalling[answerIndex].stopFalling();
            this.player.updateScore();
            
        };
    };

    showPauseScreen() {
        this.pauseScreen.draw();
        this.input.input.hide()
        this.pauseScreen.input.elt.focus();
    }



    gameOver() {
        document.querySelectorAll(".special-char-btn").forEach(function (btn) {
            btn.hidden = true;
        })
        fill(255,255,255);
        image(this.welcomeBalloons[1], (width/2) - 250, 50, 450, 600)
        circle(width/2 - 25, 260, 340);
        fill(0,0,0);
        textSize(32);
        text("Game Over!", 620, 200)
        textSize(20);
        text(`Your final score was`, 450, 230, 350, 200);
        textSize(70);
        text(this.player.score, width/2 - 30, 320);
        textSize(20);
        text("Press Enter to start again!", 450, 355, 350, 200 )

    }

};

let words = 
"un burro,a donkey;un caballo,a horse;un canguro,a kangaroo;un cerdo,a pig;un chita (/guepardo),a cheetah;un chivo (/una cabra),a goat;un conejo,a rabbit;un delf??n,a dolphin;un elefante,a elephant;un gallo,a rooster;un gato,a cat;un le??n,a lion;un leopardo,a leopard;un lince,a lynx;un lobo,a wolf;un mono,a monkey;un oso perezoso,a sloth;un oso,a bear;un p??jaro,a bird;un pato,a duck;"


const dictionaryChoices = [
    "Los Animales,Animals;un burro,a donkey;un caballo,a horse;un canguro,a kangaroo;un cerdo,a pig;un chita (/guepardo),a cheetah;un chivo (/una cabra),a goat;un conejo,a rabbit;un delf??n,a dolphin;un elefante,a elephant;un gallo,a rooster;un gato,a cat;un le??n,a lion;un leopardo,a leopard;un lince,a lynx;un lobo,a wolf;un mono,a monkey;un oso perezoso,a sloth;un oso,a bear;un p??jaro,a bird;un pato,a duck;",
    "My Hobbies,Meine Hobbies;To do sport,Sport treiben;Fishing,das Angeln;Golf,das Golfspiel;Football,der Fu??ball;Basketball,der Basketball;Tennis,das Tennis;Table tennis,das Tischtennis;Bowling,das Bowling;Horse riding,das Reiten;Boxing,das Boxen;Cycling,das Radfahren;Skiing,das Skifahren;Swimming,das Schwimmen;Jogging,das Joggen;Hiking,das Wandern;Camping,das Camping;Gardening,die Gartenarbeit;To go out with friends,mit Freunden ausgehen;To be lazy,Faulenzen",
    "Les mati??res,Subjects;Les sciences,Science;L'informatique,Computing;L'histoire,History;L'allemand,German;L'espagnol,Spanish;Le dessin,Art;La biologie,Biology;La chimie,Chemistry;La physique,Physics;La chorale,Choir;Le latin,Latin;La musique,Music;Les devoirs,Homework;Le professeur,Teacher;L'EPS,PE;La g??ographie,geography;Le th????tre,Drama;La gymnastique,Gymnastics;Les langues vivantes,Modern languages;",

]

let hardWords =
    "un burro,a donkey;un caballo,a horse;un canguro,a kangaroo;un cerdo,a pig;un chita (/guepardo),a cheetah;un chivo (/una cabra),a goat;un conejo,a rabbit;un delf??n,a dolphin;un elefante,a elephant;un gallo,a rooster;un gato,a cat;un hipop??tamo,a hippopotamus;un hur??n,a ferret;un jabal??,a wild boar;un le??n,a lion;un leopardo,a leopard;un lince,a lynx;un lobo,a wolf;un mono,a monkey;un oso perezoso,a sloth;un oso,a bear;un p??jaro,a bird;un pato,a duck;un pavo real,a peacock;un pavo,a turkey;un perro,a dog;un pez,a fish;un puercoesp??n,a porcupine;un rat??n,a mouse;un rinoceronte,a rhinoceros;un tibur??n,a shark;un tigre,a tiger;un toro,a bull;un venado (/ciervo),a deer;un zorro,a fox;una abeja,a bee;una ara??a,a spider;una ardilla,a squirrel;una ballena,a whale;una cebra,a zebra;una cobaya (/cobayo/cuy/conejito/illo de indias),a guinea pig;una estrella de mar,a starfish;una gallina,a hen;una jirafa,a giraffe;una mofeta (/zorrillo),a skunk;una oveja,a sheep;una rana,a frog;una serpiente,a snake;una tortuga,a turtle;una vaca,a cow;";
