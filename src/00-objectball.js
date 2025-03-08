function gameObject() {
  return {
      home: {
          teamName: "Brooklyn Nets",
          colors: ["Black", "White"],
          players: {
              "Alan Anderson": {
                  number: 0,
                  shoe: 16,
                  points: 22,
                  rebounds: 12,
                  assists: 12,
                  steals: 3,
                  blocks: 1,
                  slamDunks: 1
              },
              "Reggie Evans": {
                  number: 30,
                  shoe: 14,
                  points: 12,
                  rebounds: 12,
                  assists: 12,
                  steals: 12,
                  blocks: 12,
                  slamDunks: 7
              },
              "Brook Lopez": {
                  number: 11,
                  shoe: 17,
                  points: 17,
                  rebounds: 19,
                  assists: 10,
                  steals: 3,
                  blocks: 1,
                  slamDunks: 15
              },
              "Mason Plumlee": {
                  number: 1,
                  shoe: 19,
                  points: 26,
                  rebounds: 12,
                  assists: 6,
                  steals: 3,
                  blocks: 8,
                  slamDunks: 5
              },
              "Jason Terry": {
                  number: 31,
                  shoe: 15,
                  points: 19,
                  rebounds: 2,
                  assists: 2,
                  steals: 4,
                  blocks: 11,
                  slamDunks: 1
              }
          }
      },
      away: {
          teamName: "Charlotte Hornets",
          colors: ["Turquoise", "Purple"],
          players: {
              "Jeff Adrien": {
                  number: 4,
                  shoe: 18,
                  points: 10,
                  rebounds: 1,
                  assists: 1,
                  steals: 2,
                  blocks: 7,
                  slamDunks: 2
              },
              "Bismak Biyombo": {
                  number: 0,
                  shoe: 16,
                  points: 12,
                  rebounds: 4,
                  assists: 7,
                  steals: 7,
                  blocks: 15,
                  slamDunks: 10
              },
              "DeSagna Diop": {
                  number: 2,
                  shoe: 14,
                  points: 24,
                  rebounds: 12,
                  assists: 12,
                  steals: 4,
                  blocks: 5,
                  slamDunks: 5
              },
              "Ben Gordon": {
                  number: 8,
                  shoe: 15,
                  points: 33,
                  rebounds: 3,
                  assists: 2,
                  steals: 1,
                  blocks: 1,
                  slamDunks: 0
              },
              "Brendan Haywood": {
                  number: 33,
                  shoe: 15,
                  points: 6,
                  rebounds: 12,
                  assists: 12,
                  steals: 22,
                  blocks: 5,
                  slamDunks: 12
              }
          }
      }
  };
}

function numPointsScored(playerName) {
  let game = gameObject();
  for (let team in game) {
      let players = game[team].players;
      if (players[playerName]) {
          return players[playerName].points;
      }
  }
}

function shoeSize(playerName) {
  let game = gameObject();
  for (let team in game) {
      let players = game[team].players;
      if (players[playerName]) {
          return players[playerName].shoe;
      }
  }
}

function teamColors(teamName) {
  let game = gameObject();
  for (let team in game) {
      if (game[team].teamName === teamName) {
          return game[team].colors;
      }
  }
}

function teamNames() {
  let game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  let game = gameObject();
  for (let team in game) {
      if (game[team].teamName === teamName) {
          let numbers = [];
          for (let player in game[team].players) {
              numbers.push(game[team].players[player].number);
          }
          return numbers;
      }
  }
}

function playerStats(playerName) {
  let game = gameObject();
  for (let team in game) {
      let players = game[team].players;
      if (players[playerName]) {
          return players[playerName];
      }
  }
}

function bigShoeRebounds() {
  let game = gameObject();
  let biggestShoe = 0;
  let rebounds = 0;
  
  for (let team in game) {
      for (let player in game[team].players) {
          if (game[team].players[player].shoe > biggestShoe) {
              biggestShoe = game[team].players[player].shoe;
              rebounds = game[team].players[player].rebounds;
          }
      }
  }
  return rebounds;
}

// Example tests
console.log(numPointsScored("Ben Gordon")); // Logs 33
console.log(shoeSize("Jason Terry")); // Logs 15
console.log(teamColors("Brooklyn Nets")); // Logs ["Black", "White"]
console.log(teamNames()); // Logs ["Brooklyn Nets", "Charlotte Hornets"]
console.log(playerNumbers("Charlotte Hornets")); // Logs [4, 0, 2, 8, 33]
console.log(playerStats("DeSagna Diop")); // Logs his stats object
console.log(bigShoeRebounds()); // Logs rebounds of player with biggest shoe size
