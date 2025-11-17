console.log("The mediaCollection JS file will dynamically update the HTML");
// Game class with attributes
class Game {
    // Private variables, defined with a '#', permitting only class access
    #platform;

    constructor(name, developer, genre, platform, imageFilePath) {
    
    const data= this.#parseGameString(JSON.stringify({name, developer, genre, platform, imageFilePath})); // combines data into object and converts to JSON string for parsing

    // Properties that each object should have (properties are another term for key-value pairs in an object). Assigned after parsing.
    this.name= data.name;
    this.developer= data.developer;
    this.genre= data.genre
    this.#platform= data.platform;
    this.image= data.imageFilePath;
    }

    //  Methods: the functions the object has access to in order to do tasks

    // Private method to parse JSON string data back to objects (abstraction)
    #parseGameString(gameToString) {
        return JSON.parse(gameToString);
    }

    get Platform() {
        return this.#platform;
    }

    // Validation rule: checks if platform declared is within the validPlatforms
    set Platform(platform) {
        const validPlatforms= ["Xbox", "PS5", "Nintendo Switch", "Steam", "Nintendo Switch 2"];
        if (validPlatforms.includes(platform)) {
            this.#platform= platform;
        } else {
            throw new Error("Invalid platform! Platforms are: " + validPlatforms + "Platforms are case sensitive.");
        }
    }        

    displayGameDataInConsole() {
        console.log(`${this.name} is a/an ${this.genre} game on ${this.#platform}.`);
        return this.name + " is a " + this.genre + " game on " + this.#platform + ".";
    }

    // DOM manipulation (passing in div container in order to append other elements for display)
    showGamesOnPage(gameDisplayContainer) {
        // Child node game title inside gameDisplay container
        const gameTitleHeading= document.createElement("p");
        gameTitleHeading.classList.add("gameTitleHeadings");
        gameTitleHeading.innerHTML= "<strong>Title:</strong> " + this.name;
        //console.log(gameTitleHeading.textContent);
        gameDisplayContainer.appendChild(gameTitleHeading);

        // Child node game developer inside gameDisplay container
        const gameDeveloper= document.createElement("p");
        gameDeveloper.classList.add("gameDeveloperText");
        gameDeveloper.textContent= "Developer: " + this.developer;
        //console.log(gameDeveloper.textContent);
        gameDisplayContainer.appendChild(gameDeveloper);

        // Child node game genre inside gameDisplay container
        const gameGenre= document.createElement("p");
        gameGenre.textContent= "Genre: " + this.genre;
        //console.log(gameGenre.outerText);
        gameDisplayContainer.appendChild(gameGenre);

        // Child node game platform inside gameDisplay container
        const gamePlatform= document.createElement("p");
        gamePlatform.textContent= "Platform: " + this.#platform;
        //console.log(gamePlatform.outerText);
        gameDisplayContainer.appendChild(gamePlatform);

        // Child node game thumbnail image inside gameDisplay container
        let gameImage= document.createElement("img");
        gameImage.classList.add("gameThumbnails");
        gameImage.src= this.image;
        let lineBreak= document.createElement("hr");
        lineBreak.classList.add("gradient");
        //console.log(gameImage.src);
        gameDisplayContainer.appendChild(gameImage);
        gameDisplayContainer.appendChild(lineBreak);        
        
        // Checks for html elements
        //console.log(gameDisplayContainer.innerHTML);
    }
}

// Setting up instances using an array of objects containing media items
const games= [
    {"name": "Diablo 4", "developer": "Blizzard", "genre": "Action RPG", "platform": "Xbox", "imageFilePath": "../images/mediaCollectionImageFolder/xboxGames/D4_graphic.jpg"},
    {"name": "Demon Souls", "developer": "Japan Studio and Bluepoint Games", "genre": "Action RPG", "platform": "PS5", "imageFilePath": "../images/mediaCollectionImageFolder/ps5Games/DemonSouls_graphic.jpg"},
    {"name": "Mario Kart World", "developer": "Nintendo", "genre": "racing", "platform": "Nintendo Switch 2", "imageFilePath": "../images/mediaCollectionImageFolder/nintendoSwitchGames/marioKartWorld_graphic.jpg"},
]


// Assigning the body to variable in order to append child nodes to created div container
function buildDisplayContainer() {
    const body= document.getElementById("mediaCollection");
    let gameDisplayContainer= document.createElement("div");
    gameDisplayContainer.id="gameDisplayContainer";
    body.appendChild(gameDisplayContainer);
    return gameDisplayContainer;
}
const gameDisplay= buildDisplayContainer();


// Will create game instances from JS objects
let gameInstances= [];
for (let i=0; i <games.length; i++) {
    let game= games[i];
    let gameInstace= new Game(game.name, game.developer, game.genre, game.platform, game.imageFilePath);
    gameInstances.push(gameInstace);
}
console.log(gameInstances);

// This will display each game in the array to the console and on the page
for (let i= 0; i < gameInstances.length; i++) {
    gameInstances[i].displayGameDataInConsole();
    gameInstances[i].showGamesOnPage(gameDisplay); // pass in the display container to class method to show games
}


