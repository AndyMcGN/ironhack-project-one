let choices;
let makingNewSet;
class WelcomeScreen {
    constructor() {
    }
    
    setup() {
        let yPos = 100;
        choices = createDiv(addDictChoices());
        choices.class("dict-choices")
        container.appendChild(choices.elt);
        document.querySelector("input[name='dictOptions']").checked = true;
        document.querySelectorAll(".arrow").forEach(function (arrow) {
            arrow.addEventListener("click", switchLangDirection)
        });

        let customBtn = createButton("Create");
        container.appendChild(customBtn.elt);
        customBtn.id("custom-set-btn");
        customBtn.elt.addEventListener('click', game.welcomeScreen.makeCustomTextBox)

        
    }
    


    draw() {

        this.drawMainBalloon();
        if (!makingNewSet) {
            push()
            textSize(18)
            text("Click the arrows to change the direction of translation!", 820, 170, 300, 100)
            
            textSize(24)
            text("Or enter your own words to make a new set!", 980, 400)
            pop()        
        }


        if(makingNewSet) {
            push();
            let shade = color(82, 52, 235)
            shade.setAlpha(90)
            push()
            fill(shade)
            rect(0,0, width, height);
            pop()

            circle(320, 260, 375);
            textSize(18)
            text("Enter your own words into the text box. Please make sure you separate each word from its translation by a comma. Separate the translation pairs by a semi-colon", 140, 180, 360, 200);
            text("E.g.\n hot air balloon, la montgolfière;\n un gioco, un juego;", 320, 320);

        }
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

    makeCustomTextBox() {
        makingNewSet = true;
        

        const inp = createElement("textarea", '');
        container.appendChild(inp.elt);
        inp.id("custom-set-text-field")

        const submitBtn = createButton('Create your set!');
        container.appendChild(submitBtn.elt);
        submitBtn.id("custom-set-submit")
        submitBtn.elt.addEventListener("click", function () {
            game.dictionaryManager.makeDictionary(inp.elt.value);
            game.startGame();
        });

        const backBtn = createButton('Cancel');
        container.appendChild(backBtn.elt);
        backBtn.id("cancel-Btn");
        backBtn.elt.addEventListener("click", function () {
            document.querySelector("#custom-set-text-field").remove()
            document.querySelector("#custom-set-submit").remove()
            this.remove()
            makingNewSet = false;
        });
    }
}

function switchLangDirection() {

    if(game.dictionaryManager.fallingLang === "lang1") {
        document.querySelectorAll(".arrow").forEach(function (arrow) {
            
            game.dictionaryManager.fallingLang = "lang2";
            game.dictionaryManager.typedLang = "lang1"
            arrow.innerHTML = "&#10229";
        });
    } else {
        document.querySelectorAll(".arrow").forEach(function (arrow) {
            game.dictionaryManager.fallingLang = "lang1";
            game.dictionaryManager.typedLang = "lang2"
            arrow.innerHTML = "&#10230;";
        })
    }

    this.addEventListener("click", switchLangDirection);        
}

function addDictChoices() {
    let optionsDiv = document.createElement('div');
    for (let [index, dictionary] of game.dictionaryManager.prefilledDictOptions.entries()) {
        let dictOption = document.createElement("div");
        dictOption.innerHTML = `<input type="radio" name="dictOptions" value="${index}" id="${dictionary.lang1}"></input>
            <label for="${dictionary.lang1}">${dictionary.lang1}</label>
            <span class="arrow">&#10230;</span>
            <span class="secondLang">${dictionary.lang2}</span>`;
        optionsDiv.appendChild(dictOption);
    }
    return optionsDiv.innerHTML;
}