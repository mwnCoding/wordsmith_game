class Entity {
    constructor(gameScreen, posX, posY, height, width, sprite, health, dictionary) {
        this.gameScreen = gameScreen;
        this.positionX = posX;
        this.positionY = posY;
        this.width = width;
        this.height = height;
        this.state;
        this.sprite = sprite;
        this.health = health;
        this.maxhealth = health;
<<<<<<< HEAD
        this.dictionaryPath = dictionaryPath;
        this.dictionary;
=======
        this.dictionary = dictionary;
>>>>>>> cleanup

        this.element = document.createElement("img");
        this.element.src = `${this.sprite}`;
        this.element.style.position = "absolute";

        this.element.style.left = `${this.positionX}px`;
        this.element.style.top = `${this.positionY}px`;
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        this.gameScreen.appendChild(this.element);
    }


    receiveDamage(damage) {
<<<<<<< HEAD
        if (typeof damage === "number") {
            this.health -= damage;
        }
        else {
            throw new Error("Error: Damage is not a number");
        }
    }

    //TODO: Do something with returned meaning
    meldWords(word1, word2) {
            const match = this.dictionary.getMeaning(word1, word2);
            return match;
        }


    createDictionary(words) {
            
=======
        this.health -= damage;
>>>>>>> cleanup
    }


    changeState(state) {
        if (state === "idle" || state === "damage" || state === "attack") {
            this.state = state;
            this.changeSprite();
        }
        else {
            throw new Error("Error: State is not a valid state");
        }
    }

    changeSprite() {
        //TODO: Set correct paths and set timeout function for attack and damage state
        switch(this.state) {
            case "idle":
                this.sprite = "idle/sprite/path";
                break;
            case "damage":
                this.sprite = "damage/sprite/path";
                break;
            case "attack":
                this.sprite = "attack/sprite/path";
                break;
            default:
                throw new Error("Error: State should not be undefined");
        }
    }
}