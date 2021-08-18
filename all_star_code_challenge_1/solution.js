//input data

function NBAplayer(name, team, ppg) {
  this.name = name;
  this.team = team;
  this.ppg = ppg;
}

let iverson = new NBAplayer("Iverson", "76ers", 11.2);
let jordan = new NBAplayer("Jordan", "bulls", 20.2);

//solution

function sumPPG(playerOne, playerTwo){
  return playerOne.ppg + playerTwo.ppg;
}

//control

console.log(sumPPG(iverson, jordan));
