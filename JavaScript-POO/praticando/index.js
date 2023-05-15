const Player = require("./player");
const Poker = require("./Poker");

const player = new Player("John", "Male");
const poker = new Poker("Bullbasauro", "venenoso", 5, 3, 5);
poker.addskill("Chicote", "normal", 13, 1);
poker.addskill("Corte", "físico", 5, 2);

const newPoker = new Poker("Evee", "Normal", 7, 5, 6);
newPoker.addskill("Corte", "físico", 5, 2);
player.addPoker(poker);
player.addPoker(newPoker);
console.log(player.battle(newPoker));
