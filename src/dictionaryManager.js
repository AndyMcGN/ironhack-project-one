class DictionaryManager {
    constructor() {
        this.prefilledDictOptions = this.getDictionaryOptions(); 
        this.dictionaryChoice;
        this.fallingLang = 'lang1'; 
        this.typedLang = "lang2";
        this.necessaryChars;
    }

    
    getDictionaryOptions() {
        let options = []
        for (let words of dictionaryChoices){
            let dict = this.makeDictionary(words)
            options.push(dict[0]);
          } 
          return options;
    }

    makeDictionary(stringOfWords) {

        const dict = [];
        stringOfWords = stringOfWords.substring(0,stringOfWords.length-1);
        if (stringOfWords[stringOfWords.length-1] !== ';') stringOfWords += ';';
        
        const arrayOfPairs = stringOfWords.split(";");
    
        for (let pair = 0; pair <= arrayOfPairs.length-2; pair++) {

            let splitWords = arrayOfPairs[pair].split(',');
            
            let lang1 = splitWords[0].trim();
            let lang2 = splitWords[1].trim();

            let word = new Word(lang1, lang2);
            
            dict.push(word);
        };
        this.dictionary = dict;
        return dict;
    };

    getSpecialChars() {
        const specialChars = "äöüâêîôûçàèìòùñáéíóú";
        const necessaryChars = [];
        for (let [index, word] of this.dictionary.entries()) {

            for (let i = 0; i < word[this.typedLang].length; i++) {
                
                if (specialChars.includes(word[this.typedLang][i].toLowerCase()) && !necessaryChars.includes(word[this.typedLang][i].toLowerCase())) {
                    
                    necessaryChars.push(word[this.typedLang][i]);
                } 
            }
        }      
        return necessaryChars;
    }

    renderCharButtons() {
        let charDiv = createDiv();
        charDiv.id("char-div");
        container.appendChild(charDiv.elt);

        for (char of this.necessaryChars) {
            let button = createButton(char, char);  
            button.class("special-char-btn");
            document.querySelector("#char-div").appendChild(button.elt);
            xPos += 70
        }

        document.querySelectorAll(".special-char-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                if (mode === 'play') {
                    document.querySelector("#main-input").value += btn.value;
                    document.querySelector("#main-input").focus();
                } 
                if (mode === 'pause') {
                    document.querySelector("#pause-input").value += btn.value;
                    document.querySelector("#pause-input").focus();
                }
            })
        }) 
    }

    typeChar(char) {
        document.querySelector("#main-input").value += char;
    }


    // updateDictionaryAndStartGame(input) {

    //     this.dictionary = this.makeDictionary(input);
    //     game.startGame();
    // }
}

