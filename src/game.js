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
        this.welcomeScreen = new WelcomeScreen();
        this.dictionaryManager = new DictionaryManager()
        // this.dictionary
        this.welcomeScreen.setup();
        this.input = new Input();
        this.player = new Player();
        this.input.setup();

        this.input.input.hide()

        this.player.setup();
        this.fallingWords = new fallingWords();
        console.log(this.dictionary)
        // this.word.setup();
    }

 

    draw() {

        
        if (mode === 'welcome') {
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
        
        };

        if (mode === 'pause') {
            this.showPauseScreen();
        }

        if (mode === 'game-over') {

            this.gameOver();
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
        // document.querySelector('#pause-input').focus();
        this.pauseScreen.input.elt.focus();
    }



    gameOver() {
        fill(255,255,255);
        rect(400, 155, 400, 100, 20);
        textSize(30);
        fill(0,0,0)
        text(`Your final score was ${this.player.score}`, 600, 215);

    }

};


const dictionaryChoices = [
    "Los Animales,Animals;un burro,a donkey;un caballo,a horse;un canguro,a kangaroo;un cerdo,a pig;un chita (/guepardo),a cheetah;un chivo (/una cabra),a goat;un conejo,a rabbit;un delfín,a dolphin;un elefante,a elephant;un gallo,a rooster;un gato,a cat;un león,a lion;un leopardo,a leopard;un lince,a lynx;un lobo,a wolf;un mono,a monkey;un oso perezoso,a sloth;un oso,a bear;un pájaro,a bird;un pato,a duck;",
    "Meine Hobbies, My Hobbies;To do sport,Sport treiben;Fishing,das Angeln;Golf,das Golfspiel;Football,der Fußball;Basketball,der Basketball;Tennis,das Tennis;Table tennis,das Tischtennis;Bowling,das Bowling;Horse riding,das Reiten;Boxing,das Boxen;Cycling,das Radfahren;Skiing,das Skifahren;Swimming,das Schwimmen;Jogging,das Joggen;Hiking,das Wandern;Camping,das Camping;Gardening,die Gartenarbeit;To go out with friends,mit Freunden ausgehen;To be lazy,Faulenzen",
    "Les matières,Subjects;Les sciences,Science;L'informatique,Computing;L'histoire,History;La geographie,Geography;L'allemand,German;L'espagnol,Spanish;Le dessin,Art;La biologie,Biology;La chimie,Chemistry;La physique,Physics;La chorale,Choir;Le latin,Latin;La musique,Music;Les devoirs,Homework;Le professeur,Teacher;L'EPS,PE;La géographie,geography;Le théâtre,Drama;La gymnastique,Gymnastics;Les langues vivantes,Modern languages;",

]

let hardWords =
    "un burro,a donkey;un caballo,a horse;un canguro,a kangaroo;un cerdo,a pig;un chita (/guepardo),a cheetah;un chivo (/una cabra),a goat;un conejo,a rabbit;un delfín,a dolphin;un elefante,a elephant;un gallo,a rooster;un gato,a cat;un hipopótamo,a hippopotamus;un hurón,a ferret;un jabalí,a wild boar;un león,a lion;un leopardo,a leopard;un lince,a lynx;un lobo,a wolf;un mono,a monkey;un oso perezoso,a sloth;un oso,a bear;un pájaro,a bird;un pato,a duck;un pavo real,a peacock;un pavo,a turkey;un perro,a dog;un pez,a fish;un puercoespín,a porcupine;un ratón,a mouse;un rinoceronte,a rhinoceros;un tiburón,a shark;un tigre,a tiger;un toro,a bull;un venado (/ciervo),a deer;un zorro,a fox;una abeja,a bee;una araña,a spider;una ardilla,a squirrel;una ballena,a whale;una cebra,a zebra;una cobaya (/cobayo/cuy/conejito/illo de indias),a guinea pig;una estrella de mar,a starfish;una gallina,a hen;una jirafa,a giraffe;una mofeta (/zorrillo),a skunk;una oveja,a sheep;una rana,a frog;una serpiente,a snake;una tortuga,a turtle;una vaca,a cow;";
