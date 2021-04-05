class Game {
    
    setup() {
        this.dictionary = this.makeDictionary(words);
        this.input = new Input();
        this.player = new Player();

        this.input.setup();
        this.player.setup();
        this.fallingWords = [];
        console.log(this.dictionary)
    }

    draw() {
        // this.input.draw();
        
        if (frameCount % 50 === 0) {
            let randomIndex = Math.floor(Math.random()* this.dictionary.length);
            let wordToAdd = this.dictionary[randomIndex];

            if (!this.fallingWords.includes(wordToAdd)) {
                wordToAdd.x = this.x = (Math.random() * width/1.3) + 100;
                wordToAdd.y = 0;
                this.fallingWords.push(wordToAdd);
                // console.log(this.fallingWords);
            }
        }

        this.fallingWords.forEach(function (word) {
            word.draw();
        })
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

            let answerIndex = this.fallingWords.indexOf(correctAnswer);

            this.fallingWords[answerIndex].stopFalling();
            this.player.updateScore();
            
        };
    };

};

let words = 
    "un burro,a donkey;un caballo,a horse;un canguro,a kangaroo;un cerdo,a pig;un chita (/guepardo),a cheetah;un chivo (/una cabra),a goat;un conejo,a rabbit;un delfín,a dolphin;un elefante,a elephant;un gallo,a rooster;un gato,a cat;un hipopótamo,a hippopotamus;un hurón,a ferret;un jabalí,a wild boar;un león,a lion;un leopardo,a leopard;un lince,a lynx;un lobo,a wolf;un mono,a monkey;un oso perezoso,a sloth;un oso,a bear;un pájaro,a bird;un pato,a duck;un pavo real,a peacock;un pavo,a turkey;un perro,a dog;un pez,a fish;un puercoespín,a porcupine;un ratón,a mouse;un rinoceronte,a rhinoceros;un tiburón,a shark;un tigre,a tiger;un toro,a bull;un venado (/ciervo),a deer;un zorro,a fox;una abeja,a bee;una araña,a spider;una ardilla,a squirrel;una ballena,a whale;una cebra,a zebra;una cobaya (/cobayo/cuy/conejito/illo de indias),a guinea pig;una estrella de mar,a starfish;una gallina,a hen;una jirafa,a giraffe;una mofeta (/zorrillo),a skunk;una oveja,a sheep;una rana,a frog;una serpiente,a snake;una tortuga,a turtle;una vaca,a cow;";
