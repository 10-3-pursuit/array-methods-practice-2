const videoGames = [
  {
    id: 1,
    name: "Space Adventure",
    description: "Explore distant galaxies",
    consoles: ["PlayStation", "Xbox"],
    releaseYear: 2020,
    numPlayers: 1,
  },
  {
    id: 2,
    name: "Mystery Island",
    description: "Solve puzzles on an island",
    consoles: ["PC", "Xbox"],
    releaseYear: 2021,
    numPlayers: 1,
  },
  {
    id: 3,
    name: "Racers Unleashed",
    description: "High-speed racing action",
    consoles: ["PlayStation", "Xbox", "PC"],
    releaseYear: 2019,
    numPlayers: 4,
  },
  {
    id: 4,
    name: "Alien Invasion",
    description: "Defend Earth from aliens",
    consoles: ["PlayStation"],
    releaseYear: 2018,
    numPlayers: 2,
  },
  {
    id: 5,
    name: "Zombie World",
    description: "Survive in a zombie apocalypse",
    consoles: ["PC"],
    releaseYear: 2022,
    numPlayers: 5,
  },
];

/**
 * Finds a game by its name.
 * Use the .find() array method to locate the game.
 * @param {string} name - The name of the game to find.
 * @returns {Object | undefined} The game object if found, otherwise undefined.
 */
function findGameByName(name) { // step 1: modify fx to accept name as param (will be used inside .find() callback fx because must iterate first to get to name value)
// step 2: since array of objects containing data is declared in global scope I can use .find method inside fx block
// step 2a: define condition to check each element against so it knows how to search for the videoGame by name
  return videoGames.find(videoGame => videoGame.name === name); // output should be object that contains name key/value pair that matches input bc .find() immediately returns the element that satisfies condition and stops searching through the rest of the array. Element is an object bc .find() iterates through array that has objects with .name key value pair and videoGames data is an array of objects. The || is not needed because if no elements satisfy the testing function, .find() returns undefined already
}
//console.log(findGameByName("Space Adventure"));

/**
 * Retrieves all games available on PlayStation.
 * Use the .filter() array method to filter the games.
 * @returns {Object[]} An array of game objects available on PlayStation.
 */
function gamesOnPlayStation() {
  return videoGames.filter(game => game.consoles.includes("PlayStation")); // step 1: set up .filter() which iterates through array and puts elements in new array. Used when you want to select a subset of elements from an array based on some criteria.
  // step 2: the critera (boolean) set by using includes() method which returns true if an array contains a specified value; returns false if the value is not found; is case sensitive.
}
//console.log(gamesOnPlayStation(videoGames));
/**
 * Gets the names of all games in the dataset.
 * Use the .map() array method to create an array of names.
 * @returns {string[]} An array of names of all games.
 */
function getAllGameNames() {
  return videoGames.map(game => game.name); // step 1: create .map syntax - creates a new array from calling a function for every array element. Fx will iterate through array and turn element which is an object containing name key into string of value key contained and put it into an array.
}
// console.log(getAllGameNames(videoGames));

/**
 * Calculates the total number of players across all games.
 * Use the .reduce() array method to sum up the players.
 * @returns {number} The total number of players.
 */
function totalNumberOfPlayers() {
  return videoGames.reduce((sumPlayers, game) => sumPlayers + game.numPlayers, 0); // callback function takes two parameters: sumPlayers (the accumulator) and game (the current element). 0 indicates the index it starts at. Returns The accumulated result from the last call of the callback function which will be total number of players
}

/**
 * Retrieves all games released after the year 2019.
 * Use the .filter() array method to filter the games.
 * @returns {Object[]} An array of game objects released after 2019.
 */
function gamesReleasedAfter2019() {
  return videoGames.filter(game => game.releaseYear > 2019); // filter() method creates a new array filled with elements (objects in this case) that pass a test provided by a function (the test is game objects since iterating through array of objects that contain game.releaseYear > 2019)
}

// ------ NOTES about fx updateGameDescription ------
/*The function `updateGameDescription` works without a return statement because it performs an operation that directly modifies an object within an array, and this modification has a side effect on the original array.

Here's how it works:

1. **Reference Type in JavaScript**: In JavaScript, objects (including arrays) are reference types. This means when you manipulate an object, you're working with a reference to that object, not a copy of it. 

2. **Finding the Object**: The `find` method is used to search through the `videoGames` array to find the game object whose `name` property matches the `name` parameter passed to the function. If such an object is found, `find` returns a reference to that object, not a copy.

3. **Modifying the Object**: When you modify the `description` property of the `game` object (found by `find`), you're modifying the object that exists in the `videoGames` array. This is because `game` is a reference to the object within the array, not a separate, disconnected copy.

4. **No Need for Return**: Since the function's purpose is to modify an object within an external array, there is no need to return anything. The modification is carried out on the original array due to the reference nature of JavaScript objects. The array `videoGames` will reflect this change after the function is called.

In summary, the function works without a return statement because its job is to produce a side effect (modifying an object within an array) rather than to compute a value and return it. The changes made by the function are seen in the `videoGames` array itself, which is outside the function's scope but is affected due to the reference nature of JavaScript objects.
*/
/**
 * Updates the description of a specified game.
 * Use the .find() array method to locate the game.
 * @param {string} name - The name of the game to update.
 * @param {string} newDescription - The new description for the game.
 */
function updateGameDescription(name, newDescription) { // step 1: add param to fx
  const game = videoGames.find(game => game.name === name); // step 2: Use .find() on array of objects to get the value of the first element that pass the test (game.name === name) Otherwise it returns undefined
  if (game) { // if not undefined i.e. game is truthy then
  game.description = newDescription; // update the description
  }
}


/**
 * Creates a list of games with the count of consoles they are available on.
 * Use the .map() array method to create the new array.
 * @returns {Object[]} An array of objects with game name and console count.
 */
function gamesWithConsoleCount() {
  return videoGames.map(game => { // step 3a: make callback explicit
    return {
      name: game.name,
      consoleCount: game.consoles.length
    }
  }); // step 1: set up .map method to do an operation regarding game.consoles
  // step 2: add .length property to game.consoles to get number of consoles in array
  // step 3: fx is supposed to return an array of objects with game name and console count so literally type out the object structure .map should return
}
console.log (gamesWithConsoleCount());

/**
 * Finds the game with the maximum number of players.
 * Use the .reduce() method to determine the game with the most players.
 * @returns {Object} The game object with the maximum number of players.
 */
function gameWithMaxPlayers() {}

/**
 * Retrieves games available on both PC and Xbox.
 * Use the .filter() array method to filter the games.
 * @returns {Object[]} An array of game objects available on both PC and Xbox.
 */
function gamesOnPCAndXbox() {}

/**
 * Counts the number of games released each year.
 * Use the .reduce() method to count games per year.
 * @returns {Object} An object with years as keys and counts as values.
 */
function countGamesByYear() {}

module.exports = {
  findGameByName,
  gamesOnPlayStation,
  getAllGameNames,
  totalNumberOfPlayers,
  gamesReleasedAfter2019,
  updateGameDescription,
  gamesWithConsoleCount,
  gameWithMaxPlayers,
  gamesOnPCAndXbox,
  countGamesByYear,
};
