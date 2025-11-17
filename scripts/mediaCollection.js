console.log("The mediaCollection JS file will dynamically update the HTML");
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
    
    // Parse JSON string data in order to show in the console
    displayGameDataInConsole() {
        console.log(`${this.name} is a/an ${this.genre} game on ${this.#platform}.`);
        return this.name + " is a " + this.genre + " game on " + this.#platform + ".";
    };

    showGameOnPage() {
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


// Setting up instances individually
//let diablo4= new Game("Diablo 4", "Blizzard", "Action RPG", "Xbox", "../images/mediaCollectionImageFolder/xboxGames/D4_graphic.jpg");

//let demonSouls= new Game("Demon Souls", "Japan Studio and Bluepoint Games", "Action RPG", "PS5", "../images/mediaCollectionImageFolder/ps5Games/DemonSouls_graphic.jpg");

//let marioKartWorld= new Game("Mario Kart World", "Nintendo", "racing", "Nintendo Switch 2", "../images/mediaCollectionImageFolder/nintendoSwitchGames/marioKartWorld_graphic.jpg");

// Setting up instances using an array of objects containing media items
const games= [
    {"name": "Diablo 4", "developer": "Blizzard", "genre": "Action RPG", "platform": "Xbox", "imageFilePath": "../images/mediaCollectionImageFolder/xboxGames/D4_graphic.jpg"},
    {"name": "Demon Souls", "developer": "Japan Studio and Bluepoint Games", "genre": "Action RPG", "platform": "PS5", "imageFilePath": "../images/mediaCollectionImageFolder/ps5Games/DemonSouls_graphic.jpg"},
    {"name": "Mario Kart World", "developer": "Nintendo", "genre": "racing", "platform": "Nintendo Switch 2", "imageFilePath": "../images/mediaCollectionImageFolder/nintendoSwitchGames/marioKartWorld_graphic.jpg"},
]

// in order to access the values in the array; use the spread syntax (...) to pass the values as individual agruments to the class constructor
let diablo4= new Game(...Object.values(games[0]));
//console.log(diablo4);
let demonSouls= new Game(...Object.values(games[1]));
//console.log(demonSouls);
let marioKartWorld= new Game(...Object.values(games[2]));
//console.log(marioKartWorld);


// Assigning the body to variable in order to append child nodes to created div container
function buildDisplayContainer() {
    const body= document.getElementById("mediaCollection");
    let gameDisplayContainer= document.createElement("div");
    gameDisplayContainer.id="gameDisplayContainer";
    body.appendChild(gameDisplayContainer);
}
buildDisplayContainer();


// Adding instances to array in JSON format (key:value) pairs
let gameLibrary= [diablo4, demonSouls, marioKartWorld];
console.log(gameLibrary);

// Showcase game information in console and on page
function showGameLibrary() {
    for (Game of gameLibrary) {
        Game.showGameOnPage();
        Game.displayGameDataInConsole(); // invokes the method within the class to parse data as strings
        console.log(Game); 
    }
}
showGameLibrary();

