// Game class with attributes
class Game {
    // Private variables, defined with a '#', permitting only class access
    #platform;



    constructor(name, developer, genre, platform, imageFilePath) {
    // Properties that each object should have (properties are another term for key-value pairs in an object)
    this.name= name;
    this.developer= developer;
    this.genre= genre
    this.#platform= platform;
    this.image= imageFilePath;
    }
    //  Methods: the functions the object has access to in order to do tasks

    get Platform() {
        return this.#platform;
    }

    // Validation rule: checks if platform declared is within the validPlatforms (strict equality)
    set Platform(platform) {
        const validPlatforms= ["Xbox", "PS5", "Nintendo Switch", "Steam", "Nintendo Switch 2"];
        if (platform === validPlatforms) {
            this.#platform= platform;
        } else {
            throw new Error("Invalid platform! Platforms are: " + validPlatforms + "Platforms are case sensitive.");
        }
    }
    
    displayGame() {
        console.log(`${this.name} is a ${this.genre} on ${this.#platform}.`);
        return this.name + " is a " + this.genre + " on " + this.#platform + ".";
    };

    showGameOnPage() {
        const gameDisplayContainer= document.createElement("div");
        gameDisplayContainer.id="gameDisplayContainer";
        let gameName= this.name;
        let gameDeveloper= this.developer;
        let gameGenre= this.genre;
        let gamePlatform= this.#platform;
        let gameImage= this.image

        
        document.getElementById("gameDisplayContainer");
    }
}

// Setting up instances using an array of objects containing media items
const games= [
    {"name": "Diablo 4", "developer": "Blizzard", "genre": "action RPG", "platform": "Xbox", "imageFilePath": "../images/mediaCollectionImageFolder/xboxGames/D4_graphic.jpg"},
    {"name": "Demon Souls", "developer": "Japan Studio and Bluepoint Games", "genre": "action RPG", "platform": "PS5"},
    {"name": "Mario Kart World", "developer": "Nintendo", "genre": "racing", "platform": "Nintendo Switch 2"},
]
// console.log(games);
// // in order to access the values in the array; use the spread syntax (...) to pass the values as individual agruments
// let diablo4Game= new Game(...Object.values(games[0]));
// console.log(diablo4Game);
// diablo4Game.displayGame();


// Setting up instances individually
let diablo4= new Game("Diablo 4", "Blizzard", "action RPG", "Xbox", "../images/mediaCollectionImageFolder/xboxGames/D4_graphic.jpg");

let demonSouls= new Game("Demon Souls", "Japan Studio and Bluepoint Games", "action RPG", "PS5", "../images/mediaCollectionImageFolder/ps5Games/DemonSouls_graphic.jpg");

let marioKartWorld= new Game("Mario Kart World", "Nintendo", "racing", "Nintendo Switch 2", "../images/mediaCollectionImageFolder/nintendoSwitchGames/marioKartWorld_graphic.jpg");

console.log(diablo4);
diablo4.displayGame();


//console.log.displayItem(diablo4);
//let diablo4= new Games(games[0])
