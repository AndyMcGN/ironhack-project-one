class DictionaryManager {
    constructor() {
        this.prefilledDictOptions = this.getDictionaryOptions(); 
        this.dictionaryChoice;
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
}